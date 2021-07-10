<template>
  <div id="view-content">
    <div class="search-input">
      <a-row>
        <a-col :span="12">
          <a-input-search
            @change="onChange"
            class="input-league"
            v-model:value="leagueName"
            placeholder="Введите название лиги"
            style="width: 200px"
        /></a-col>
        <a-col :span="12">
          <a-input-number
            :min="1872"
            class="input-year"
            @change="onChange"
            v-model:value="year"
            placeholder="Год"
            style="width: 100px"
        /></a-col>
      </a-row>
    </div>
    <div class="list-leagues" :class="{ 'display-center': !leagues.length }">
      <a-spin v-if="!leagues.length"></a-spin>
      <a-table
        rowKey="id"
        :columns="columns"
        :data-source="filteredleagues"
        bordered
        :pagination="{ pageSize: 5 }"
        v-else
        style="height: 100%; padding: 0 0.5rem"
      />
    </div>
  </div>
</template>

<script>
import apiKey from "@/token";
const columns = [
  {
    title: "Имя",
    dataIndex: "name",
  },
  {
    title: "Страна",
    dataIndex: "area.name",
    sorter: (a, b) => a.area.name.localeCompare(b.area.name),
    defaultSortOrder: "ascend",
  },
  {
    title: "Дата проведения",
    dataIndex: "currentSeason.startDate",
    sorter: (a, b) =>
      new Date(a.currentSeason?.startDate) -
      new Date(b.currentSeason?.startDate),
  },
];

export default {
  data() {
    return {
      leagueName: this.$route.query.leagueName ?? "",
      leagues: [],
      columns,
      year: this.$route.query.year ?? "",
    };
  },
  mounted() {
    fetch("https://api.football-data.org/v2/competitions", {
      headers: {
        "X-Auth-Token": apiKey,
      },
    })
      .then((x) => x.json())
      .then((x) => (this.leagues = x.competitions));
  },
  methods: {
    onChange() {
      this.$router.push({
        ...this.$route,
        query: { leagueName: this.leagueName, year: this.year },
      });
    },
  },
  computed: {
    filteredleagues() {
      return this.leagues.filter(
        (x) =>
          x.name.toLowerCase().includes(this.leagueName.toLowerCase()) &&
          (!this.year ||
            new Date(x.currentSeason?.startDate).getFullYear() == this.year)
      );
    },
  },
};
</script>

<style scoped>
.input-league,
.input-year {
  margin: 1rem 0 0 3rem;
}
.search-input {
  text-align: left;
}
.list-leagues {
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
</style>