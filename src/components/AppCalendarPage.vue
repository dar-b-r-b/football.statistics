<template>
  <div>
    <div class="search-input">
      <a-row>
        <a-col :span="8">
          <a-input-search
            @change="onChange"
            class="input-team"
            v-model:value="teamName"
            placeholder="Введите название команды"
            style="width: 250px"
        /></a-col>
        <a-col :span="8">
          <a-input-search
            @change="onChange"
            class="input-league"
            v-model:value="leagueName"
            placeholder="Введите название лиги"
            style="width: 200px"
        /></a-col>
      </a-row>
    </div>
    <a-calendar v-model:value="calendarValue" @change="dateChange">
      <template #dateCellRender="{ current: value }">
        <ul class="events">
          <li v-for="item in matchesOn(value)" :key="item.id">
            {{ item.homeTeam.name }}:{{ item.awayTeam.name }} ({{
              new Date(item.utcDate).toLocaleTimeString()
            }})
            <hr />
          </li>
        </ul>
      </template>
    </a-calendar>
  </div>
</template>

<script>
import moment from "moment";
import apiKey from "@/token";

export default {
  data() {
    return {
      calendarValue: moment(),
      matches: [],
      teamName: this.$route.query.teamName ?? "",
      teams: [],
      leagueName: this.$route.query.leagueName ?? "",
      leagues: [],
    };
  },
  async mounted() {
    await this.dateChange();
  },
  computed: {
    matchesOn() {
      const vm = this;
      return function (moment) {
        if (moment.month() !== vm.calendarValue.month()) return [];
        return vm.matches.filter(
          (_) =>
            new Date(_.utcDate).getUTCDate() == moment.date() &&
            (!vm.teamName ||
              _.awayTeam.name
                .toLowerCase()
                .includes(vm.teamName.toLowerCase()) ||
              _.homeTeam.name
                .toLowerCase()
                .includes(vm.teamName.toLowerCase())) &&
            (!vm.leagueName ||
              _.competition.name
                .toLowerCase()
                .includes(vm.leagueName.toLowerCase()))
        );
      };
    },
  },
  methods: {
    onChange() {
      this.$router.push({
        ...this.$route,
        query: { leagueName: this.leagueName, teamName: this.teamName },
      });
    },
    async dateChange() {
      const year = this.calendarValue.year();
      let month = this.calendarValue.month().toString();
      if (month.length === 1) month = "0" + month;

      const sendRequest = (start, end) => {
        return fetch(
          `https://api.football-data.org/v2/matches?dateFrom=${year}-${month}-${start}&dateTo=${year}-${month}-${end}`,
          {
            headers: {
              "X-Auth-Token": apiKey,
            },
          }
        ).then((x) => x.json());
      };

      const res1 = await sendRequest("01", "11");
      const res2 = await sendRequest("12", "22");
      const res3 = await sendRequest("23", "31");

      this.matches = res1.matches.concat(res2.matches).concat(res3.matches);

      console.log(this.matches);
    },
  },
};
</script>

<style scoped>
.ant-fullcalendar-fullscreen {
  padding: 0 5rem 0 5rem;
}
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>