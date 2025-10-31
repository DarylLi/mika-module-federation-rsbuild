import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defaultAllowedOrigins } from "@rsbuild/core";

export default {
  plugins: [pluginReact(), pluginVue()],
  server: {
    cors: true,
  },
};
