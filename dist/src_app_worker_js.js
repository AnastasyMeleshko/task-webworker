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

/***/ "./src/app/worker.js":
/*!***************************!*\
  !*** ./src/app/worker.js ***!
  \***************************/
/***/ (() => {

eval("self.addEventListener(\"message\", async function(event) {\r\n  const arrToSort1 = event.data.array1;\r\n  const sortedArray1 = await bubbleSort(arrToSort1);\r\n  const sortedArray2 = await quickSort(arrToSort1);\r\n  postMessage({ sortedArray1: sortedArray1, sortedArray2: sortedArray2 });\r\n})\r\n\r\n// Bubble sort\r\n\r\nfunction bubbleSort(array) {\r\n  const len = array.length;\r\n  for (let i = 0; i < len - 1; i++) {\r\n    for (let j = 0; j < len - 1 - i; j++) {\r\n      if (array[j] > array[j + 1]) {\r\n        let temp = array[j];\r\n        array[j] = array[j + 1];\r\n        array[j + 1] = temp;\r\n      }\r\n    }\r\n  }\r\n  return array;\r\n}\r\n\r\n// Quick sort\r\n\r\nfunction quickSort(array) {\r\n  if (array.length <= 1) {\r\n    return array;\r\n  }\r\n\r\n  const pivot = array[array.length - 1];\r\n  const left = [];\r\n  const right = [];\r\n\r\n  for (let i = 0; i < array.length - 1; i++) {\r\n    if (array[i] < pivot) {\r\n      left.push(array[i]);\r\n    } else {\r\n      right.push(array[i]);\r\n    }\r\n  }\r\n\r\n  return [...quickSort(left), pivot, ...quickSort(right)];\r\n}\r\n\n\n//# sourceURL=webpack://style/./src/app/worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/worker.js"]();
/******/ 	
/******/ })()
;