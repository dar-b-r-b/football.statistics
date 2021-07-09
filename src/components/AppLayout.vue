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
      <a-layout-footer>
        <a-row>
          <a-col :span="12"
            ><p>
              © All Right Reserved. Football Statistic Corporation. Пинаем не
              только мячи c 2001 года
            </p></a-col
          >
          <a-col :span="12" class="source"
            ><img src="image/instagram.png" alt="Инстаграм" class="icon" /><img
              src="image/vk.png"
              alt="ВКонтакте"
              class="icon" /><img
              src="image/marker.png"
              alt="Город"
              class="icon"
          /></a-col>
        </a-row>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
</script>

<style>
p {
  float: left;
}
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
  color: rgb(54, 54, 54);
}
a-menu {
  line-height: 64px;
}

.calendar {
  border: 1px solid #303030;
}
.icon {
  width: 2em;
  height: 2em;
  margin-left: 2rem;
}
.source {
  float: right;
  padding-right: 4rem;
}
</style>
