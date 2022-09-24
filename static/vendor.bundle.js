/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["vendor"],{

/***/ "./core/assets/scripts/vendor.js":
/*!***************************************!*\
  !*** ./core/assets/scripts/vendor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ \"./node_modules/alpinejs/dist/module.esm.js\");\n/* harmony import */ var flatpickr_dist_flatpickr_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min */ \"./node_modules/flatpickr/dist/flatpickr.min.js\");\n/* harmony import */ var flatpickr_dist_flatpickr_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vendor_flatpickr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/flatpickr.js */ \"./core/assets/vendor/flatpickr.js\");\n\n\n// Adds Alpine object to the window scope\nwindow.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n// Initialises Alpine\nalpinejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start()\n\n// Flatpickr\n;\n\n\n\n//# sourceURL=webpack://src/./core/assets/scripts/vendor.js?");

/***/ }),

/***/ "./core/assets/vendor/flatpickr.js":
/*!*****************************************!*\
  !*** ./core/assets/vendor/flatpickr.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// Initialise Flatpickr widget for date handling\nwindow.htmx = __webpack_require__(/*! htmx.org */ \"./node_modules/htmx.org/dist/htmx.min.js\")\nhtmx.onLoad(\n  (exports.initFlatpickr = function () {\n    fpOptions = {\n      altInput: true,\n      altFormat: 'd-M-y',\n    }\n    console.log('initFlatpickr invoked')\n    return flatpickr('input[tag=fp-date]', fpOptions)\n  })\n)\n\n\n//# sourceURL=webpack://src/./core/assets/vendor/flatpickr.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./core/assets/scripts/vendor.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);