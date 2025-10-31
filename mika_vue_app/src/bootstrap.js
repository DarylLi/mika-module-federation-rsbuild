import { createApp } from "vue";
import * as Vue from "vue";

import App from "./App.vue";
import { createInstance } from "@module-federation/enhanced/runtime";

createApp(App).mount("#root");
// setTimeout(() => {
//   let innerMf = createInstance({
//     name: "mf_host",
//     remotes: [
//       {
//         name: "remote1",
//         alias: "remote-1",
//         entry: "http://localhost:3001/mf-manifest.json",
//       },
//       // {
//       //   name: "remote2",
//       //   alias: "remote-2",
//       //   entry: "http://localhost:3002/mf-manifest.json",
//       // },
//     ],
//     shared: {
//       vue: {
//         version: "3.5.22",
//         scope: "default",
//         lib: () => Vue,
//         shareConfig: {
//           singleton: true,
//           requiredVersion: "^3.5.22",
//         },
//       },
//       // react: {
//       //   version: "18.3.1",
//       //   scope: "default",
//       //   lib: () => React,
//       //   shareConfig: {
//       //     singleton: true,
//       //     requiredVersion: "^18.3.1",
//       //   },
//       // },
//       // "react-dom": {
//       //   version: "18.3.1",
//       //   scope: "default",
//       //   lib: () => React,
//       //   shareConfig: {
//       //     singleton: true,
//       //     requiredVersion: "^18.3.1",
//       //   },
//       // },
//     },
//   });
//   innerMf.loadRemote("remote1/component").then((cmptObj) => {
//     console.log(cmptObj);
//     const CurRemote = cmptObj.default;
//     Vue.createApp(CurRemote).mount("#vueRootHd");
//   });
// }, 200);
