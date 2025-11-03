import { createApp } from "vue";
import App from "./App.vue";
import Child from "./component.vue";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  components,
  directives,
});
createApp(App).use(vuetify).mount("#root");

createApp(Child).use(vuetify).mount("#child");
