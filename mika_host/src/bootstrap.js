import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createApp } from "vue";
import VueApp from "./vueApp.vue";

const rootEl = document.getElementById("root");
const vueEl = document.createElement("div");
vueEl.id = "vue-root";
document.body.appendChild(vueEl);
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

createApp(VueApp).mount("#vue-root");
