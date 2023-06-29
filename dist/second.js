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

/***/ "./src/app/second.js":
/*!***************************!*\
  !*** ./src/app/second.js ***!
  \***************************/
/***/ (() => {

eval("const block = document.querySelector(\r\n  \".project__container__animation__item-elem-timeout\"\r\n);\r\nlet position = 0;\r\nlet direction = \"right\";\r\n\r\nconst animate = () => {\r\n  if (direction === \"right\") {\r\n    position += 5;\r\n    block.style.left = `${position}px`;\r\n\r\n    if (position >= 445) {\r\n      direction = \"left\";\r\n    }\r\n  } else {\r\n    position -= 5;\r\n    block.style.left = `${position}px`;\r\n\r\n    if (position <= 0) {\r\n      direction = \"right\";\r\n    }\r\n  }\r\n\r\n  setTimeout(animate, 300);\r\n};\r\n\r\nanimate();\r\n\n\n//# sourceURL=webpack://style/./src/app/second.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/second.js"]();
/******/ 	
/******/ })()
;