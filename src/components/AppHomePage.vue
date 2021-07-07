<template>
  <app-layout>
    <div>
      <img src="image/football.jpg" alt="фоновое изображение" class="image" />
    </div>
    <div class="calendar">
      <a-calendar
        v-model:value="value"
        :fullscreen="false"
        @select="onSelect"
      />
    </div>
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

<style scoped>
.calendar {
  width: 25rem;
  border-inline: 1px solid #888888;
  border-radius: 4px;
  margin-top: 2rem;
  margin-left: 5rem;
  z-index: 2;
  top: 9rem;
  position: absolute;
}
.image {
  width: 100%;
}
</style>

<style>
.ant-fullcalendar-header,
.ant-fullcalendar-calendar-body {
  background: #ffffff85;
}
.ant-fullcalendar-selected-day .ant-fullcalendar-value,
.ant-fullcalendar-month-panel-selected-cell
  .ant-fullcalendar-value
  .ant-fullcalendar-month-panel-current-cell {
  background: rgb(124, 124, 124);
  box-shadow: none;
}
.ant-fullcalendar-value:active {
  background: rgb(146, 145, 145);
}
.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
  .ant-select-selector,
.ant-select.ant-select-sm.ant-fullcalendar-year-select.ant-select-single.ant-select-show-arrow:hover {
  border: none;
  box-shadow: none;
}
</style>