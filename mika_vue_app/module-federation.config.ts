import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "mika_vue_app",
  exposes: {
    "./app": "./src/App.vue",
    "./child": "./src/App.vue",
  },
  // remotes: {
  //   remote1: "remote1@http://localhost:3001/mf-manifest.json",
  // },
  shared: {
    vue: { singleton: true },
  },
  dts: {
    generateTypes: {
      extractRemoteTypes: true,
      compilerInstance: "vue-tsc",
    },
  },
});
