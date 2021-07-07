import { createApp } from "vue";
import { Button, Layout, Calendar } from "ant-design-vue";
import App from "./App.vue";
import "./assets/style.css";

const app = createApp(App);
app.config.productionTip = false;
app.use(Button);
app.use(Layout);
app.use(Calendar);
app.mount("#app");
