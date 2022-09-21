/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["circle"],{

/***/ "./core/static/scripts/circle.js":
/*!***************************************!*\
  !*** ./core/static/scripts/circle.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// Calculate Area of Circle\nconst btnCalculateArea = document.getElementById('btn-area-of-circle')\nbtnCalculateArea.addEventListener('click', () => {\n  const circle = __webpack_require__(/*! ../examples/circle.ts */ \"./core/static/examples/circle.ts\")\n  const radiusEl = document.getElementById('radius-of-circle')\n  const radius = parseInt(radiusEl.value)\n  const area = circle.area(radius)\n  const result = `The area of a circle with a radius of ${radius} is ${area}`\n  console.log(result)\n  const areaOfCircle = document.getElementById('area-of-circle')\n  areaOfCircle.textContent = result\n})\n\n\n//# sourceURL=webpack://src/./core/static/scripts/circle.js?");

/***/ }),

/***/ "./core/static/examples/circle.ts":
/*!****************************************!*\
  !*** ./core/static/examples/circle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nvar PI = 3.141592654;\nexports.area = function (r) {\n    return PI * r * r;\n};\n\n\n//# sourceURL=webpack://src/./core/static/examples/circle.ts?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./core/static/scripts/circle.js"));
/******/ }
]);