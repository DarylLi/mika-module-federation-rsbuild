import { jsx, jsxs } from "react/jsx-runtime";
import "react";
var __webpack_modules__ = {
    "./src/index.css": function() {}
};
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}
__webpack_require__("./src/index.css");
const Provider = ()=>/*#__PURE__*/ jsxs("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx("div", {
                className: "icon-container",
                children: /*#__PURE__*/ jsx("img", {
                    src: "https://module-federation.io/svg.svg",
                    alt: "logo",
                    className: "logo-image"
                })
            }),
            /*#__PURE__*/ jsx("h1", {
                className: "title",
                children: "Hello Module Federation 2.0"
            })
        ]
    });
const src_0 = Provider;
export { src_0 as default };
