"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/recipes/[slug]",{

/***/ "./pages/recipes/[slug].js":
/*!*********************************!*\
  !*** ./pages/recipes/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ RecipeDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar __N_SSG = true;\nfunction RecipeDetails(param) {\n    let { recipes } = param;\n    const { title, featuredImage, cookingTime, ingredients, method } = recipes.fields;\n    console.log(method);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" \",\n                    title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\pages\\\\recipes\\\\[slug].js\",\n                lineNumber: 36,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"https:\" + featuredImage.fields.file.url,\n                width: featuredImage.fields.file.details.image.width,\n                height: featuredImage.fields.file.details.image.height\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\pages\\\\recipes\\\\[slug].js\",\n                lineNumber: 37,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \"Cooking Time: \",\n                    cookingTime,\n                    \"mins\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\pages\\\\recipes\\\\[slug].js\",\n                lineNumber: 40,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"Ingredients\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\pages\\\\recipes\\\\[slug].js\",\n                lineNumber: 41,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: ingredients.map((i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: i\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\pages\\\\recipes\\\\[slug].js\",\n                        lineNumber: 42,\n                        columnNumber: 32\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\pages\\\\recipes\\\\[slug].js\",\n                lineNumber: 42,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                children: \"Method\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\pages\\\\recipes\\\\[slug].js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\pages\\\\recipes\\\\[slug].js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n}\n_c = RecipeDetails;\nvar _c;\n$RefreshReg$(_c, \"RecipeDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNpcGVzL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhCOztBQTZCZixTQUFTQyxjQUFjLEtBQVM7UUFBVCxFQUFDQyxPQUFPLEVBQUMsR0FBVDtJQUNsQyxNQUFNLEVBQUNDLEtBQUssRUFBQ0MsYUFBYSxFQUFDQyxXQUFXLEVBQUNDLFdBQVcsRUFBQ0MsTUFBTSxFQUFDLEdBQUNMLFFBQVFNLE1BQU07SUFDekVDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixxQkFDRSw4REFBQ0k7OzBCQUNBLDhEQUFDQzs7b0JBQUc7b0JBQUVUOzs7Ozs7OzBCQUNOLDhEQUFDSCxtREFBS0E7Z0JBQUNhLEtBQUssV0FBVVQsY0FBY0ksTUFBTSxDQUFDTSxJQUFJLENBQUNDLEdBQUc7Z0JBQzdDQyxPQUFPWixjQUFjSSxNQUFNLENBQUNNLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNGLEtBQUs7Z0JBQ3BERyxRQUFRZixjQUFjSSxNQUFNLENBQUNNLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU07Ozs7OzswQkFDNUQsOERBQUNDOztvQkFBRztvQkFBZWY7b0JBQVk7Ozs7Ozs7MEJBQy9CLDhEQUFDZ0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUloQixZQUFZaUIsR0FBRyxDQUFDQyxDQUFBQSxrQkFBRyw4REFBQ0M7a0NBQUlEOzs7Ozs7Ozs7OzswQkFDNUIsOERBQUNIOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFHVjtLQWZzQnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlY2lwZXMvW3NsdWddLmpzPzRkMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gJ2NvbnRlbnRmdWwnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxyXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19LRVksXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jKCk9PlxyXG57XHJcbiAgICBjb25zdCByZXM9YXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xyXG4gICAgICAgIGNvbnRlbnRfdHlwZToncmVjaXBlcydcclxuICAgIH0pXHJcbiAgICBjb25zdCBwYXRocz1yZXMuaXRlbXMubWFwKGl0ZW09PntcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIHBhcmFtczp7c2x1ZzppdGVtLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6ZmFsc2UgXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzPWFzeW5jKHtwYXJhbXN9KT0+e1xyXG4gICAgY29uc3Qge2l0ZW1zfT1hd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XHJcbiAgICAgICAgY29udGVudF90eXBlOidyZWNpcGVzJyxcclxuICAgICAgICAnZmllbGRzLnNsdWcnOnBhcmFtcy5zbHVnIFxyXG4gICAgfSlcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7cmVjaXBlczppdGVtc1swXX1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVEZXRhaWxzKHtyZWNpcGVzfSkge1xyXG4gICAgY29uc3Qge3RpdGxlLGZlYXR1cmVkSW1hZ2UsY29va2luZ1RpbWUsaW5ncmVkaWVudHMsbWV0aG9kfT1yZWNpcGVzLmZpZWxkcztcclxuICAgIGNvbnNvbGUubG9nKG1ldGhvZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICA8aDE+IHt0aXRsZX08L2gxPlxyXG4gICAgICAgPEltYWdlIHNyYz17J2h0dHBzOicrIGZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUudXJsfSBcclxuICAgICAgICAgICAgIHdpZHRoPXtmZWF0dXJlZEltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2Uud2lkdGh9XHJcbiAgICAgICAgICAgICBoZWlnaHQ9e2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS5oZWlnaHR9Lz5cclxuICAgICAgIDxoND5Db29raW5nIFRpbWU6IHtjb29raW5nVGltZX1taW5zPC9oND5cclxuICAgICAgIDxoNT5JbmdyZWRpZW50czwvaDU+XHJcbiAgICAgICA8dWw+e2luZ3JlZGllbnRzLm1hcChpPT48bGk+e2l9PC9saT4pfTwvdWw+IFxyXG4gICAgICAgIDxoNT5NZXRob2Q8L2g1PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9Il0sIm5hbWVzIjpbIkltYWdlIiwiUmVjaXBlRGV0YWlscyIsInJlY2lwZXMiLCJ0aXRsZSIsImZlYXR1cmVkSW1hZ2UiLCJjb29raW5nVGltZSIsImluZ3JlZGllbnRzIiwibWV0aG9kIiwiZmllbGRzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwic3JjIiwiZmlsZSIsInVybCIsIndpZHRoIiwiZGV0YWlscyIsImltYWdlIiwiaGVpZ2h0IiwiaDQiLCJoNSIsInVsIiwibWFwIiwiaSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/recipes/[slug].js\n"));

/***/ })

});