<template>
  <div id="view-content">
    <div class="search-input">
      <a-row>
        <a-col :span="12">
          <a-input-search
            @change="onChange"
            class="input-team"
            v-model:value="teamName"
            placeholder="Введите название команды"
            style="width: 250px"
        /></a-col>
      </a-row>
    </div>
    <div class="list-teams" :class="{ 'display-center': !teams.length }">
      <a-spin v-if="!teams.length"></a-spin>
      <a-list
        :grid="{ gutter: 10, column: 7 }"
        :data-source="filteredTeams"
        v-else
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-tooltip placement="top" :mouseEnterDelay="0.3">
              <template #title>
                <span>{{ item.shortName }}</span>
              </template>
              <div><a-image :width="80" :src="item.crestUrl" /></div>
            </a-tooltip>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script>
import apiKey from "@/token";

export default {
  data() {
    return {
      teamName: this.$route.query.teamName ?? "",
      teams: [],
    };
  },
  mounted() {
    fetch("https://api.football-data.org/v2/teams", {
      headers: {
        "X-Auth-Token": apiKey,
      },
    })
      .then((x) => x.json())
      .then((x) => (this.teams = x.teams));
  },
  methods: {
    onChange() {
      this.$router.push({ ...this.$route, query: { teamName: this.teamName } });
    },
  },
  computed: {
    filteredTeams() {
      return this.teams.filter((x) =>
        x.shortName.toLowerCase().includes(this.teamName.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.list-teams {
  overflow-y: auto;
  margin-top: 2em;
  height: 60vh;
}
.display-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
#view-content {
  height: 75vh;
}
.logo {
  width: 7%;
}
</style>

<style>
.ant-row {
  max-width: 100% !important;
}
.ant-card-body {
  padding: 0;
}
.input-league,
.input-team,
.input-year {
  margin: 1rem 0 0 3rem;
}
.search-input {
  text-align: left;
}
</style>