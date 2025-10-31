import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "mika_app1",
  exposes: {
    ".": "./src/components/ProviderComponent.tsx",
  },
  // remotes: {
  //   mika_editor: "mika_editor@http://localhost:8080/remoteEntry.js",
  // },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
