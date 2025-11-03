import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import moduleFederationConfig from "./module-federation.config";
import { pluginUmd } from "@rsbuild/plugin-umd";

export default defineConfig({
  html: {
    template: "./index.html",
  },
  output: {
    assetPrefix: "./",
  },
  plugins: [
    // pluginUmd({ name: "mikaEsbuild", export: "default" }),
    pluginVue(),
    pluginModuleFederation(moduleFederationConfig),
  ],
  server: {
    port: 3002,
  },
});
