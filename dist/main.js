/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nerko+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #15202b;\r\n}\r\n\r\nbutton {\r\n  background: orange;\r\n}\r\n\r\n.main-heading {\r\n  font-size: 70px;\r\n  font-family: 'Rubik Vinyl', cursive;\r\n  text-align: center;\r\n  color: orange;\r\n}\r\n\r\n.main {\r\n  width: 80%;\r\n  font-family: 'Nerko One', cursive;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin: auto;\r\n  gap: 12%;\r\n}\r\n\r\n.sub-heading {\r\n  width: 100%;\r\n  font-size: 35px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.sub-heading button {\r\n  height: 25px;\r\n  display: flex;\r\n  align-self: center;\r\n  font-size: 12px;\r\n  padding-top: 3px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px, rgb(51, 51, 51) 0 0 0 3px;\r\n}\r\n\r\n.sub-heading-2 {\r\n  width: 100%;\r\n  font-size: 35px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.container1-child {\r\n  display: flex;\r\n}\r\n\r\n.list-block {\r\n  border: 2px solid black;\r\n  padding-left: 3px;\r\n  margin-bottom: 12%;\r\n  height: 250px;\r\n  color: red;\r\n  box-sizing: border-box;\r\n  overflow: auto;\r\n}\r\n\r\n.container-2 .form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.inp-name {\r\n  padding-top: 3%;\r\n  padding-bottom: 3%;\r\n  padding-left: 2%;\r\n  border: 2px solid black;\r\n}\r\n\r\n.inp-score {\r\n  padding-top: 3%;\r\n  padding-bottom: 3%;\r\n  padding-left: 2%;\r\n  margin-top: 8%;\r\n  border: 2px solid black;\r\n}\r\n\r\n.add-btn {\r\n  margin-top: 32%;\r\n  display: flex;\r\n  position: fixed;\r\n  align-self: center;\r\n  padding: 2% 6%;\r\n  font-size: 15px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px, rgb(51, 51, 51) 0 0 0 3px;\r\n}\r\n\r\n.container-1,\r\n.container-2 {\r\n  background-color: rgba(255, 255, 255, 0.096);\r\n  backdrop-filter: blur(10px);\r\n  color: orange;\r\n  position: relative;\r\n}\r\n\r\n.block {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.data {\r\n  background: #15202b;\r\n  font-size: 20px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.animated-box::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border-radius: 4px;\r\n  background: linear-gradient(120deg, #00f260, #0575e6, #00f260);\r\n  background-size: 300% 300%;\r\n  clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);\r\n}\r\n\r\n.animated-box.in::after {\r\n  animation: frame-enter 1s forwards ease-in-out reverse, gradient-animation 4s ease-in-out infinite;\r\n}\r\n\r\n@keyframes gradient-animation {\r\n  0% {\r\n    background-position: 15% 0%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 85% 100%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 15% 0%;\r\n  }\r\n}\r\n\r\n@keyframes frame-enter {\r\n  0% {\r\n    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);\r\n  }\r\n\r\n  25% {\r\n    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 100% 100%, 100% 0%, 0% 0%);\r\n  }\r\n\r\n  50% {\r\n    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, 100% 0%, 0% 0%);\r\n  }\r\n\r\n  75% {\r\n    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 0%, 0% 0%);\r\n  }\r\n\r\n  100% {\r\n    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 0% 100%);\r\n  }\r\n}\r\n\r\n.alert {\r\n  color: red;\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n\r\n.alert-2 {\r\n  text-align: center;\r\n  animation-name: moveInleft;\r\n  color: #00f260;\r\n  animation-duration: 3s;\r\n}\r\n\r\n@keyframes moveInleft {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-100px);\r\n  }\r\n\r\n  80% {\r\n    transform: translateX(10px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n/* @media screen and (max-width: 768px) {\r\n  body {\r\n    width: 100%;\r\n  }\r\n\r\n  main {\r\n    width: 80%;\r\n  }\r\n} */\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mCAAmC;EACnC,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,iCAAiC;EACjC,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,oEAAoE;AACtE;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,oEAAoE;AACtE;;AAEA;;EAEE,4CAA4C;EAC5C,2BAA2B;EAC3B,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,8DAA8D;EAC9D,0BAA0B;EAC1B,kKAAkK;AACpK;;AAEA;EACE,kGAAkG;AACpG;;AAEA;EACE;IACE,2BAA2B;EAC7B;;EAEA;IACE,6BAA6B;EAC/B;;EAEA;IACE,2BAA2B;EAC7B;AACF;;AAEA;EACE;IACE,kKAAkK;EACpK;;EAEA;IACE,4LAA4L;EAC9L;;EAEA;IACE,4KAA4K;EAC9K;;EAEA;IACE,kHAAkH;EACpH;;EAEA;IACE,4HAA4H;EAC9H;AACF;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;IACV,6BAA6B;EAC/B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,uBAAuB;EACzB;AACF;;AAEA;;;;;;;;GAQG","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');\r\n\r\nbody {\r\n  background-color: #15202b;\r\n}\r\n\r\nbutton {\r\n  background: orange;\r\n}\r\n\r\n.main-heading {\r\n  font-size: 70px;\r\n  font-family: 'Rubik Vinyl', cursive;\r\n  text-align: center;\r\n  color: orange;\r\n}\r\n\r\n.main {\r\n  width: 80%;\r\n  font-family: 'Nerko One', cursive;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin: auto;\r\n  gap: 12%;\r\n}\r\n\r\n.sub-heading {\r\n  width: 100%;\r\n  font-size: 35px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.sub-heading button {\r\n  height: 25px;\r\n  display: flex;\r\n  align-self: center;\r\n  font-size: 12px;\r\n  padding-top: 3px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px, rgb(51, 51, 51) 0 0 0 3px;\r\n}\r\n\r\n.sub-heading-2 {\r\n  width: 100%;\r\n  font-size: 35px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.container1-child {\r\n  display: flex;\r\n}\r\n\r\n.list-block {\r\n  border: 2px solid black;\r\n  padding-left: 3px;\r\n  margin-bottom: 12%;\r\n  height: 250px;\r\n  color: red;\r\n  box-sizing: border-box;\r\n  overflow: auto;\r\n}\r\n\r\n.container-2 .form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.inp-name {\r\n  padding-top: 3%;\r\n  padding-bottom: 3%;\r\n  padding-left: 2%;\r\n  border: 2px solid black;\r\n}\r\n\r\n.inp-score {\r\n  padding-top: 3%;\r\n  padding-bottom: 3%;\r\n  padding-left: 2%;\r\n  margin-top: 8%;\r\n  border: 2px solid black;\r\n}\r\n\r\n.add-btn {\r\n  margin-top: 32%;\r\n  display: flex;\r\n  position: fixed;\r\n  align-self: center;\r\n  padding: 2% 6%;\r\n  font-size: 15px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px, rgb(51, 51, 51) 0 0 0 3px;\r\n}\r\n\r\n.container-1,\r\n.container-2 {\r\n  background-color: rgba(255, 255, 255, 0.096);\r\n  backdrop-filter: blur(10px);\r\n  color: orange;\r\n  position: relative;\r\n}\r\n\r\n.block {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.data {\r\n  background: #15202b;\r\n  font-size: 20px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.animated-box::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border-radius: 4px;\r\n  background: linear-gradient(120deg, #00f260, #0575e6, #00f260);\r\n  background-size: 300% 300%;\r\n  clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);\r\n}\r\n\r\n.animated-box.in::after {\r\n  animation: frame-enter 1s forwards ease-in-out reverse, gradient-animation 4s ease-in-out infinite;\r\n}\r\n\r\n@keyframes gradient-animation {\r\n  0% {\r\n    background-position: 15% 0%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 85% 100%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 15% 0%;\r\n  }\r\n}\r\n\r\n@keyframes frame-enter {\r\n  0% {\r\n    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);\r\n  }\r\n\r\n  25% {\r\n    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 100% 100%, 100% 0%, 0% 0%);\r\n  }\r\n\r\n  50% {\r\n    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, 100% 0%, 0% 0%);\r\n  }\r\n\r\n  75% {\r\n    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 0%, 0% 0%);\r\n  }\r\n\r\n  100% {\r\n    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 0% 100%);\r\n  }\r\n}\r\n\r\n.alert {\r\n  color: red;\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n\r\n.alert-2 {\r\n  text-align: center;\r\n  animation-name: moveInleft;\r\n  color: #00f260;\r\n  animation-duration: 3s;\r\n}\r\n\r\n@keyframes moveInleft {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-100px);\r\n  }\r\n\r\n  80% {\r\n    transform: translateX(10px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n/* @media screen and (max-width: 768px) {\r\n  body {\r\n    width: 100%;\r\n  }\r\n\r\n  main {\r\n    width: 80%;\r\n  }\r\n} */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showData.js */ "./src/modules/showData.js");


const showPlayerdata = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YOk4bpeeBIDml5xqab0K/scores/';
  await fetch(url).then((response) => response.json())
    .then((data) => (0,_showData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPlayerdata);

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addNew = async () => {
  const inpName = document.querySelector('.inp-name');
  const inpScore = document.querySelector('.inp-score');
  const emptyBLock = document.querySelector('.empty-data');
  const alert = document.querySelector('.alert-block2');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YOk4bpeeBIDml5xqab0K/scores/';

  const playerData = {
    user: inpName.value,
    score: inpScore.value,
  };

  const prost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerData),
  };
  await fetch(url, prost).then((response) => response.json())
    .then((data) => {
      emptyBLock.innerHTML = `<p class="alert">${data.result}</p>`;
      alert.innerHTML = '<p class="alert-2">Please click on refresh button to see the recent player data</p>';
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNew);

/***/ }),

/***/ "./src/modules/showData.js":
/*!*********************************!*\
  !*** ./src/modules/showData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showData = (arr) => {
  const { result } = arr;
  const listBlock = document.querySelector('.list-block');
  if (!result.length) {
    listBlock.innerHTML = '<div class="empty-data">Nothing to show</div>';
  } else {
    result.forEach((x) => {
      listBlock.innerHTML += `<p class="data">${x.user}: ${x.score}</p>`;
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showData);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_postData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/postData.js */ "./src/modules/postData.js");
/* harmony import */ var _modules_getData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getData.js */ "./src/modules/getData.js");




// Add palyer data
const addBtn = document.querySelector('.add-btn');
const emptyBLock = document.querySelector('.empty-data');
const inpName = document.querySelector('.inp-name');
const inpScore = document.querySelector('.inp-score');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!inpName.value || !inpScore.value) {
    emptyBLock.innerHTML = '<p class="alert">Please add name and score</p>';
  } else {
    (0,_modules_postData_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
});

// show data
(0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

// Show data
const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9wb3N0RGF0YS5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3Nob3dEYXRhLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsrVmlueWwmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TmVya28rT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taGVhZGluZyB7XFxyXFxuICBmb250LXNpemU6IDcwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1J1YmlrIFZpbnlsJywgY3Vyc2l2ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBmb250LWZhbWlseTogJ05lcmtvIE9uZScsIGN1cnNpdmU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZ2FwOiAxMiU7XFxyXFxufVxcclxcblxcclxcbi5zdWItaGVhZGluZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zdWItaGVhZGluZyBidXR0b24ge1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDAgMCAwIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1oZWFkaW5nLTIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIxLWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWJsb2NrIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMiU7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci0yIC5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wLW5hbWUge1xcclxcbiAgcGFkZGluZy10b3A6IDMlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wLXNjb3JlIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAzJTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxuICBtYXJnaW4tdG9wOiA4JTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMiU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiUgNiU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDAgMCAwIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci0xLFxcclxcbi5jb250YWluZXItMiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDk2KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGNvbG9yOiBvcmFuZ2U7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ibG9jayB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTUyMDJiO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlZC1ib3g6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzAwZjI2MCwgIzA1NzVlNiwgIzAwZjI2MCk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMzAwJTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAxMDAlLCAzcHggMTAwJSwgM3B4IDNweCwgY2FsYygxMDAlIC0gM3B4KSAzcHgsIGNhbGMoMTAwJSAtIDNweCkgY2FsYygxMDAlIC0gM3B4KSwgM3B4IGNhbGMoMTAwJSAtIDNweCksIDNweCAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMCUsIDAlIDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGVkLWJveC5pbjo6YWZ0ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBmcmFtZS1lbnRlciAxcyBmb3J3YXJkcyBlYXNlLWluLW91dCByZXZlcnNlLCBncmFkaWVudC1hbmltYXRpb24gNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZ3JhZGllbnQtYW5pbWF0aW9uIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUlIDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODUlIDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUlIDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZyYW1lLWVudGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDNweCAxMDAlLCAzcHggM3B4LCBjYWxjKDEwMCUgLSAzcHgpIDNweCwgY2FsYygxMDAlIC0gM3B4KSBjYWxjKDEwMCUgLSAzcHgpLCAzcHggY2FsYygxMDAlIC0gM3B4KSwgM3B4IDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAwJSwgMCUgMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMjUlIHtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDNweCAxMDAlLCAzcHggM3B4LCBjYWxjKDEwMCUgLSAzcHgpIDNweCwgY2FsYygxMDAlIC0gM3B4KSBjYWxjKDEwMCUgLSAzcHgpLCBjYWxjKDEwMCUgLSAzcHgpIGNhbGMoMTAwJSAtIDNweCksIGNhbGMoMTAwJSAtIDNweCkgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDAlLCAwJSAwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAwJSwgM3B4IDEwMCUsIDNweCAzcHgsIGNhbGMoMTAwJSAtIDNweCkgM3B4LCBjYWxjKDEwMCUgLSAzcHgpIDNweCwgY2FsYygxMDAlIC0gM3B4KSAzcHgsIGNhbGMoMTAwJSAtIDNweCkgM3B4LCBjYWxjKDEwMCUgLSAzcHgpIDNweCwgMTAwJSAwJSwgMCUgMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNzUlIHtcXHJcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAwJSwgM3B4IDEwMCUsIDNweCAzcHgsIDNweCAzcHgsIDNweCAzcHgsIDNweCAzcHgsIDNweCAzcHgsIDNweCAzcHgsIDNweCAwJSwgMCUgMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDNweCAxMDAlLCAzcHggMTAwJSwgM3B4IDEwMCUsIDNweCAxMDAlLCAzcHggMTAwJSwgM3B4IDEwMCUsIDNweCAxMDAlLCAzcHggMTAwJSwgMCUgMTAwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbGVydCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbmltYXRpb24tbmFtZTogbW92ZUlubGVmdDtcXHJcXG4gIGNvbG9yOiAjMDBmMjYwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb3ZlSW5sZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG59ICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvRUFBb0U7QUFDdEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixvRUFBb0U7QUFDdEU7O0FBRUE7O0VBRUUsNENBQTRDO0VBQzVDLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCwwQkFBMEI7RUFDMUIsa0tBQWtLO0FBQ3BLOztBQUVBO0VBQ0Usa0dBQWtHO0FBQ3BHOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0tBQWtLO0VBQ3BLOztFQUVBO0lBQ0UsNExBQTRMO0VBQzlMOztFQUVBO0lBQ0UsNEtBQTRLO0VBQzlLOztFQUVBO0lBQ0Usa0hBQWtIO0VBQ3BIOztFQUVBO0lBQ0UsNEhBQTRIO0VBQzlIO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7Ozs7Ozs7O0dBUUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsrVmlueWwmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TmVya28rT25lJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taGVhZGluZyB7XFxyXFxuICBmb250LXNpemU6IDcwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1J1YmlrIFZpbnlsJywgY3Vyc2l2ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBmb250LWZhbWlseTogJ05lcmtvIE9uZScsIGN1cnNpdmU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZ2FwOiAxMiU7XFxyXFxufVxcclxcblxcclxcbi5zdWItaGVhZGluZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zdWItaGVhZGluZyBidXR0b24ge1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDAgMCAwIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1oZWFkaW5nLTIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIxLWNoaWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWJsb2NrIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMiU7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci0yIC5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wLW5hbWUge1xcclxcbiAgcGFkZGluZy10b3A6IDMlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wLXNjb3JlIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAzJTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxuICBtYXJnaW4tdG9wOiA4JTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMiU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiUgNiU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgMXB4IDRweCwgcmdiKDUxLCA1MSwgNTEpIDAgMCAwIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci0xLFxcclxcbi5jb250YWluZXItMiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDk2KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGNvbG9yOiBvcmFuZ2U7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ibG9jayB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTUyMDJiO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlZC1ib3g6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzAwZjI2MCwgIzA1NzVlNiwgIzAwZjI2MCk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMzAwJTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAxMDAlLCAzcHggMTAwJSwgM3B4IDNweCwgY2FsYygxMDAlIC0gM3B4KSAzcHgsIGNhbGMoMTAwJSAtIDNweCkgY2FsYygxMDAlIC0gM3B4KSwgM3B4IGNhbGMoMTAwJSAtIDNweCksIDNweCAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgMCUsIDAlIDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGVkLWJveC5pbjo6YWZ0ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBmcmFtZS1lbnRlciAxcyBmb3J3YXJkcyBlYXNlLWluLW91dCByZXZlcnNlLCBncmFkaWVudC1hbmltYXRpb24gNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZ3JhZGllbnQtYW5pbWF0aW9uIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUlIDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODUlIDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUlIDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZyYW1lLWVudGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDNweCAxMDAlLCAzcHggM3B4LCBjYWxjKDEwMCUgLSAzcHgpIDNweCwgY2FsYygxMDAlIC0gM3B4KSBjYWxjKDEwMCUgLSAzcHgpLCAzcHggY2FsYygxMDAlIC0gM3B4KSwgM3B4IDEwMCUsIDEwMCUgMTAwJSwgMTAwJSAwJSwgMCUgMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMjUlIHtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDNweCAxMDAlLCAzcHggM3B4LCBjYWxjKDEwMCUgLSAzcHgpIDNweCwgY2FsYygxMDAlIC0gM3B4KSBjYWxjKDEwMCUgLSAzcHgpLCBjYWxjKDEwMCUgLSAzcHgpIGNhbGMoMTAwJSAtIDNweCksIGNhbGMoMTAwJSAtIDNweCkgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDAlLCAwJSAwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAwJSwgM3B4IDEwMCUsIDNweCAzcHgsIGNhbGMoMTAwJSAtIDNweCkgM3B4LCBjYWxjKDEwMCUgLSAzcHgpIDNweCwgY2FsYygxMDAlIC0gM3B4KSAzcHgsIGNhbGMoMTAwJSAtIDNweCkgM3B4LCBjYWxjKDEwMCUgLSAzcHgpIDNweCwgMTAwJSAwJSwgMCUgMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNzUlIHtcXHJcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAwJSwgM3B4IDEwMCUsIDNweCAzcHgsIDNweCAzcHgsIDNweCAzcHgsIDNweCAzcHgsIDNweCAzcHgsIDNweCAzcHgsIDNweCAwJSwgMCUgMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDNweCAxMDAlLCAzcHggMTAwJSwgM3B4IDEwMCUsIDNweCAxMDAlLCAzcHggMTAwJSwgM3B4IDEwMCUsIDNweCAxMDAlLCAzcHggMTAwJSwgMCUgMTAwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbGVydCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbmltYXRpb24tbmFtZTogbW92ZUlubGVmdDtcXHJcXG4gIGNvbG9yOiAjMDBmMjYwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb3ZlSW5sZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG59ICovXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNob3dEYXRhIGZyb20gJy4vc2hvd0RhdGEuanMnO1xuXG5jb25zdCBzaG93UGxheWVyZGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL1lPazRicGVlQklEbWw1eHFhYjBLL3Njb3Jlcy8nO1xuICBhd2FpdCBmZXRjaCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHNob3dEYXRhKGRhdGEpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQbGF5ZXJkYXRhOyIsImNvbnN0IGFkZE5ldyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaW5wTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnAtbmFtZScpO1xuICBjb25zdCBpbnBTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnAtc2NvcmUnKTtcbiAgY29uc3QgZW1wdHlCTG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eS1kYXRhJyk7XG4gIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0LWJsb2NrMicpO1xuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvWU9rNGJwZWVCSURtbDV4cWFiMEsvc2NvcmVzLyc7XG5cbiAgY29uc3QgcGxheWVyRGF0YSA9IHtcbiAgICB1c2VyOiBpbnBOYW1lLnZhbHVlLFxuICAgIHNjb3JlOiBpbnBTY29yZS52YWx1ZSxcbiAgfTtcblxuICBjb25zdCBwcm9zdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGxheWVyRGF0YSksXG4gIH07XG4gIGF3YWl0IGZldGNoKHVybCwgcHJvc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGVtcHR5QkxvY2suaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiYWxlcnRcIj4ke2RhdGEucmVzdWx0fTwvcD5gO1xuICAgICAgYWxlcnQuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwiYWxlcnQtMlwiPlBsZWFzZSBjbGljayBvbiByZWZyZXNoIGJ1dHRvbiB0byBzZWUgdGhlIHJlY2VudCBwbGF5ZXIgZGF0YTwvcD4nO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTmV3OyIsImNvbnN0IHNob3dEYXRhID0gKGFycikgPT4ge1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXJyO1xuICBjb25zdCBsaXN0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1ibG9jaycpO1xuICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICBsaXN0QmxvY2suaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlbXB0eS1kYXRhXCI+Tm90aGluZyB0byBzaG93PC9kaXY+JztcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgbGlzdEJsb2NrLmlubmVySFRNTCArPSBgPHAgY2xhc3M9XCJkYXRhXCI+JHt4LnVzZXJ9OiAke3guc2NvcmV9PC9wPmA7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dEYXRhOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGFkZE5ldyBmcm9tICcuL21vZHVsZXMvcG9zdERhdGEuanMnO1xuaW1wb3J0IHNob3dQbGF5ZXJkYXRhIGZyb20gJy4vbW9kdWxlcy9nZXREYXRhLmpzJztcblxuLy8gQWRkIHBhbHllciBkYXRhXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bicpO1xuY29uc3QgZW1wdHlCTG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eS1kYXRhJyk7XG5jb25zdCBpbnBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucC1uYW1lJyk7XG5jb25zdCBpbnBTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnAtc2NvcmUnKTtcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFpbnBOYW1lLnZhbHVlIHx8ICFpbnBTY29yZS52YWx1ZSkge1xuICAgIGVtcHR5QkxvY2suaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwiYWxlcnRcIj5QbGVhc2UgYWRkIG5hbWUgYW5kIHNjb3JlPC9wPic7XG4gIH0gZWxzZSB7XG4gICAgYWRkTmV3KCk7XG4gIH1cbn0pO1xuXG4vLyBzaG93IGRhdGFcbnNob3dQbGF5ZXJkYXRhKCk7XG5cbi8vIFNob3cgZGF0YVxuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJyk7XG5yZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=