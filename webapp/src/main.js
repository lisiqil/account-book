import { createApp } from "vue";
import App from "./App.vue";
import "lib-flexible/flexible";
import {
  Button,
  Icon,
  NavBar,
  Tabbar,
  TabbarItem,
  Form,
  Field,
  Tab,
  Tabs,
  Popup,
  Grid,
  GridItem,
  Divider,
  Cell,
  CellGroup,
  Tag,
  List,
  PullRefresh,
  NumberKeyboard,
  Toast,
  Empty,
  SwipeCell,
  Progress,
  Image as VanImage,
  Loading,
  Dialog,
  Notify,
  ActionSheet,
  Uploader,
  Lazyload,
  Slider,
  DatePicker,
} from "vant";
import "vant/lib/index.css";
import router from "./router";

const app = createApp(App);
app
  .use(Button)
  .use(Slider)
  .use(DatePicker)
  .use(Icon)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Form)
  .use(Field)
  .use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Grid)
  .use(GridItem)
  .use(Divider)
  .use(Cell)
  .use(CellGroup)
  .use(Tag)
  .use(List)
  .use(PullRefresh)
  .use(NumberKeyboard)
  .use(Toast)
  .use(Empty)
  .use(SwipeCell)
  .use(Progress)
  .use(VanImage)
  .use(Loading)
  .use(Dialog)
  .use(Notify)
  .use(ActionSheet)
  .use(Uploader)
  .use(Lazyload, {
    lazyComponent: true,
  });

app.use(router);
app.mount("#app");
