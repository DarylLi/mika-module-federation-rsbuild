/*! For license information please see 2~__federation_expose_default_export.js.LICENSE.txt */
"use strict";(globalThis["chunk_mika_federation_lib"]=globalThis["chunk_mika_federation_lib"]||[]).push([["525"],{698:function(__unused_webpack_module,exports){/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element");Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;void 0!==maybeKey&&(key=""+maybeKey);void 0!==config.key&&(key=""+config.key);if("key"in config){maybeKey={};for(var propName in config)"key"!==propName&&(maybeKey[propName]=config[propName])}else maybeKey=config;config=maybeKey.ref;return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key,ref:void 0!==config?config:null,props:maybeKey}}exports.jsx=jsxProd;exports.jsxs=jsxProd},848:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(698)},828:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>src});var jsx_runtime=__webpack_require__(848);__webpack_require__(754);const Provider=()=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"icon-container",children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"https://module-federation.io/svg.svg",alt:"logo",className:"logo-image"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"title",children:"Hello Module Federation 2.0"})]});const src=Provider}}]);