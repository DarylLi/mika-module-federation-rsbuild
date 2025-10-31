<template>
  <div class="content">
    <button @click="increment">Count is: {{ count }}</button>
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
  <div id="react-cmpt1"></div>
  <div id="vueRootHd"><component :is="curRemoteCmpt1"></component></div>
  <div id="vueRootChild"><component :is="curRemoteCmpt2"></component></div>
</template>
<script setup>
import { createInstance } from "@module-federation/enhanced/runtime";
import ReactDOM from "react-dom/client";
import React from "react";
import { ref, onMounted } from "vue";
import * as Vue from "vue";
const count = ref(0);
const mfInstance = ref(null);
const curRemoteCmpt1 = ref(null);
const curRemoteCmpt2 = ref(null);
onMounted(async () => {
  const mf = await new Promise((res, rej) => {
    setTimeout(() => {
      let innerMf = createInstance({
        name: "mf_host",
        remotes: [
          {
            name: "remote1",
            alias: "remote-1",
            entry: "http://localhost:3002/mf-manifest.json",
          },
          {
            name: "remote2",
            alias: "remote-2",
            entry: "http://localhost:3003/mf-manifest.json",
          },
        ],
        shared: {
          vue: {
            version: "3.5.22",
            scope: "default",
            lib: () => Vue,
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.5.22",
            },
          },
          react: {
            version: "19.2.0",
            scope: "default",
            lib: () => React,
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
            },
          },
          "react-dom": {
            version: "19.2.0",
            scope: "default",
            lib: () => React,
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
            },
          },
        },
      });
      res(innerMf);
    }, 200);
  });
  mfInstance.value = mf;
  loadVueRemote(mf);
  loadReactRemote(mf);
});
// setTimeout(() => {
//   loadVueRemote(mfInstance.value);
// }, 5000);
const loadVueRemote = async (curMf) => {
  await curMf.loadRemote("remote1/testcomponent").then((cmptObj) => {
    console.log(cmptObj);
    const CurRemote1 = cmptObj.default;
    curRemoteCmpt1.value = CurRemote1;
    // Vue.createApp(CurRemote1).mount("#vueRootHd");
  });
  await curMf.loadRemote("remote1/component").then((cmptObj) => {
    console.log(cmptObj);
    const CurRemote2 = cmptObj.default;
    curRemoteCmpt2.value = CurRemote2;
    // Vue.createApp(CurRemote2).mount("#vueRootChild");
  });
};
const loadReactRemote = async (curMf) => {
  let divList = [];
  await curMf.loadRemote("remote2/child1").then((cmptObj) => {
    const CurRemote1 = cmptObj.default;
    // const target = ReactDOM.createRoot(document.getElementById("react-cmpt1"));
    divList.push(React.createElement(CurRemote1));
    // target.render(React.createElement(CurRemote1));
  });
  await curMf.loadRemote("remote2/child2").then((cmptObj) => {
    const CurRemote2 = cmptObj.default;
    // const target = ReactDOM.createRoot(document.getElementById("react-cmpt2"));
    // target.render(React.createElement(CurRemote2));
    divList.push(React.createElement(CurRemote2));
  });
  const target = ReactDOM.createRoot(document.getElementById("react-cmpt1"));
  target.render(React.createElement("div", {}, divList));
};
function increment() {
  count.value++;
}
</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>