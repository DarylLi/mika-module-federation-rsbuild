import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "mika_vue_app",
  exposes: {
    "./testcomponent": "./src/testcmpt.vue",
    "./component": "./src/component.vue",
    "./asyncComponent1": "./src/components/async1.vue",
    "./asyncComponent2": "./src/components/async2.vue",
  },
  shared: {
    vue: { singleton: true },
    vuetify: { singleton: true },
  },
  dts: {
    generateTypes: {
      compilerInstance: "vue-tsc",
    },
  },
});
