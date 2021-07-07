<template>
  <div id="components-layout">
    <a-layout>
      <a-layout-header>
        <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="home">главная</a-menu-item>
          <a-menu-item key="team">команды</a-menu-item>
          <a-menu-item key="league">лиги</a-menu-item>
          <a-menu-item key="calendar">календарь</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <slot />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
</script>

<style>
#components-layout {
  text-align: center;
}
#components-layout .ant-layout-header,
#components-layout .ant-layout-footer,
#components-layout .ant-layout-content {
  background: transparent;
  color: rgb(0, 0, 0);
}
#components-layout > .ant-layout {
  margin-bottom: 48px;
  background: unset;
}
#components-layout > .ant-layout:last-child {
  margin: 0;
}
a-menu-item {
  margin: 1.5rem;
}
a-menu {
  line-height: 64px;
}

.calendar {
  border: 1px solid #000000;
}
</style>
