import { createApp } from "vue";
import {
  Button,
  Layout,
  Calendar,
  Input,
  InputNumber,
  Select,
  Image,
  List,
  Card,
  Tooltip,
  Spin,
  Table,
  Dropdown,
} from "ant-design-vue";
import App from "./App.vue";
import "./assets/style.css";
import router from "./router";

const app = createApp(App);
app.config.productionTip = false;

app.use(Layout);
app.use(Button);
app.use(Calendar);
app.use(Input);
app.use(InputNumber);
app.use(Select);
app.use(Image);
app.use(List);
app.use(Card);
app.use(Tooltip);
app.use(Spin);
app.use(Table);
app.use(Dropdown);

app.use(router);
app.mount("#app");
