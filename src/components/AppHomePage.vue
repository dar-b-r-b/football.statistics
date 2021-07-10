<template>
  <div id="background-image">
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
  </div>
</template>

<script>
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
};
</script>


<style scoped>
#background-image {
  background-image: url("/image/football.jpg");
  background-size: 100%;
  height: 75vh;
  padding-top: 3rem;
}
.calendar {
  width: 25rem;
  border-color: #ffffff00;
  border-radius: 3px;
}
.image {
  width: 100%;
}

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