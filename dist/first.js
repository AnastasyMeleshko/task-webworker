/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/first.js":
/*!**************************!*\
  !*** ./src/app/first.js ***!
  \**************************/
/***/ (() => {

eval("const element = document.querySelector('.project__container__animation__item-elem-request');\r\nlet position = 0;\r\nlet isAnimating = true;\r\n\r\nfunction animate() {\r\n    if (isAnimating) {\r\n        position += 1;\r\n\r\n        if (position === 450) {\r\n            position = 0;\r\n            element.style.transform = `translateX(${position}px)`;\r\n        }\r\n\r\n        element.style.transform = `translateX(${position}px)`;\r\n\r\n        requestAnimationFrame(animate);\r\n    }\r\n}\r\n\r\nanimate();\r\n\n\n//# sourceURL=webpack://style/./src/app/first.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/first.js"]();
/******/ 	
/******/ })()
;