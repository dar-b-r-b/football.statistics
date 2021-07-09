<template>
  <app-layout>
    <a-row>
      <a-col :span="24"
        ><div class="search-game">
          <div class="calendar">
            <a-calendar
              v-model:value="value"
              :fullscreen="false"
              @select="onSelect"
            />
          </div>
          <a-button type="primary" class="search-button">Найти матч</a-button>
        </div></a-col
      >
    </a-row>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/AppLayout";

export default {
  data() {
    return {
      value: null,
    };
  },
  methods: {
    onSelect(value) {
      console.log(value);
    },
  },
  components: {
    AppLayout,
  },
};
</script>

<style>
.ant-layout-content {
  height: 75vh;
  background: url("/image/football.jpg") !important;
  background-size: 100% !important;
}
</style>

<style scoped>
.calendar {
  width: 25rem;
  border-color: #ffffff00;
  border-radius: 3px;
  margin-top: 3rem;
  top: 9rem;
  z-index: 10;
}
.image {
  width: 100%;
}
</style>

<style>
.search-game {
  background: #ffffff85;
  width: 26rem;
  height: 24rem;
  margin-left: 4rem;
}
.search-button {
  margin-top: 0.5rem;
}
</style>