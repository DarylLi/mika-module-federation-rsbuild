import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "mika_vue_app",
  exposes: {
    "./testcomponent": "./src/testcmpt.vue",
    "./component": "./src/component.vue",
  },
  shared: {
    vue: { singleton: true },
  },
  dts: {
    generateTypes: {
      compilerInstance: "vue-tsc",
    },
  },
});
