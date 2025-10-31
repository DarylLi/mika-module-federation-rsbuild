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
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
(()=>{
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
        default: ()=>src_0
    });
    const jsx_runtime_namespaceObject = require("react/jsx-runtime");
    require("react");
    __webpack_require__("./src/index.css");
    const Provider = ()=>/*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("div", {
                    className: "icon-container",
                    children: /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("img", {
                        src: "https://module-federation.io/svg.svg",
                        alt: "logo",
                        className: "logo-image"
                    })
                }),
                /*#__PURE__*/ (0, jsx_runtime_namespaceObject.jsx)("h1", {
                    className: "title",
                    children: "Hello Module Federation 2.0"
                })
            ]
        });
    const src_0 = Provider;
})();
exports["default"] = __webpack_exports__["default"];
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
