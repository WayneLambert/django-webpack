/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["users"],{

/***/ "./core/static/scripts/users.js":
/*!**************************************!*\
  !*** ./core/static/scripts/users.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// Invoke Users API\nconst getUserModule = () =>\n  __webpack_require__.e(/*! import() | usersAPI */ \"usersAPI\").then(__webpack_require__.bind(__webpack_require__, /*! ../examples/usersAPI */ \"./core/static/examples/usersAPI.js\"))\nconst btnUsersApi = document.getElementById('btn-users-api')\nbtnUsersApi.addEventListener('click', () => {\n  getUserModule().then(({ getUsers }) => {\n    getUsers().then((json) => console.log(json))\n  })\n})\n\n\n//# sourceURL=webpack://src/./core/static/scripts/users.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./core/static/scripts/users.js"));
/******/ }
]);