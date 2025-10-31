import { createApp } from "vue";
import App from "./App.vue";
import Child from "./component.vue";

createApp(App).mount("#root");

createApp(Child).mount("#child");
