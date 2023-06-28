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

eval("const element = document.querySelector('.project__container__animation__item-elem-request');\r\nlet position = 0;\r\nlet isAnimating = true;\r\n\r\nfunction animate() {\r\n    if (isAnimating) {\r\n        position += 1;\r\n\r\n        if (position === 450) {\r\n            position = 0;\r\n            element.style.transform = `translateX(${position}px)`;\r\n        }\r\n\r\n        element.style.transform = `translateX(${position}px)`;\r\n\r\n        requestAnimationFrame(animate);\r\n    }\r\n}\r\n\r\nanimate();\r\n\r\n\r\n// Bubble sort\r\n\r\nfunction bubbleSort(array) {\r\n    const len = array.length;\r\n    for (let i = 0; i < len - 1; i++) {\r\n        for (let j = 0; j < len - 1 - i; j++) {\r\n            if (array[j] > array[j + 1]) {\r\n                let temp = array[j];\r\n                array[j] = array[j + 1];\r\n                array[j + 1] = temp;\r\n            }\r\n        }\r\n    }\r\n    return array;\r\n}\r\n\r\n// Quick sort\r\n\r\nfunction quickSort(array) {\r\n    if (array.length <= 1) {\r\n        return array;\r\n    }\r\n\r\n    const pivot = array[array.length - 1];\r\n    const left = [];\r\n    const right = [];\r\n\r\n    for (let i = 0; i < array.length - 1; i++) {\r\n        if (array[i] < pivot) {\r\n            left.push(array[i]);\r\n        } else {\r\n            right.push(array[i]);\r\n        }\r\n    }\r\n\r\n    return [...quickSort(left), pivot, ...quickSort(right)];\r\n}\r\n\r\n\r\nasync function runSortingAlgorithms() {\r\n\r\n    //array with 100000 elements filled with random numbers\r\n    let array = [];\r\n    for (let i = 0; i < 100000; i++) {\r\n        let randomNum = Math.floor(Math.random() * 100) + 1;\r\n        array.push(randomNum);\r\n    }\r\n\r\n    try {\r\n        console.log('Sorting process started');\r\n        const bubbleSortedArray = await bubbleSort(array);\r\n        console.log('Bubble Sort finished:', bubbleSortedArray);\r\n        const quickSortedArray = await quickSort(array);\r\n        console.log('Quick Sort finished:', quickSortedArray);\r\n    } catch (error) {\r\n        console.error('Error:', error);\r\n    }\r\n}\r\n\r\nlet btn = document.querySelector(\".project__btn\");\r\nbtn.addEventListener(\"click\", runSortingAlgorithms);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://style/./src/app/first.js?");

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