"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/RecipeCard.js":
/*!**********************************!*\
  !*** ./components/RecipeCard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecipeCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction RecipeCard(param) {\n    let { recipes } = param;\n    const { title, slug, thumbnail, cookingTime } = recipes.fields;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-ab153d3ff5ffc3b0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ab153d3ff5ffc3b0\" + \" \" + \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-ab153d3ff5ffc3b0\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"https:\" + thumbnail.fields.file.url,\n                        width: thumbnail.fields.file.details.image.width,\n                        height: thumbnail.fields.file.details.image.height\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"jsx-ab153d3ff5ffc3b0\",\n                        children: [\n                            \"Takes approx \",\n                            cookingTime,\n                            \"mins\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/recipes/\" + slug,\n                        children: \"Cook this\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ab153d3ff5ffc3b0\",\n                children: \".card.jsx-ab153d3ff5ffc3b0{border:2px solid red;width:50%;height:50%}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = RecipeCard;\nvar _c;\n$RefreshReg$(_c, \"RecipeCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY2lwZUNhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQztBQUNmLFNBQVNFLFdBQVcsS0FBUztRQUFULEVBQUNDLE9BQU8sRUFBQyxHQUFUO0lBRS9CLE1BQU0sRUFBQ0MsS0FBSyxFQUFDQyxJQUFJLEVBQUNDLFNBQVMsRUFBQ0MsV0FBVyxFQUFDLEdBQUNKLFFBQVFLLE1BQU07SUFDdkQscUJBQ0ksOERBQUNDOzs7MEJBQ0csOERBQUNBOzBEQUFjOztrQ0FDZiw4REFBQ0M7O2tDQUFJTjs7Ozs7O2tDQUNMLDhEQUFDSCxtREFBS0E7d0JBQUNVLEtBQUssV0FBVUwsVUFBVUUsTUFBTSxDQUFDSSxJQUFJLENBQUNDLEdBQUc7d0JBQy9DQyxPQUFPUixVQUFVRSxNQUFNLENBQUNJLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNGLEtBQUs7d0JBQ2hERyxRQUFRWCxVQUFVRSxNQUFNLENBQUNJLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU07Ozs7OztrQ0FDbEQsOERBQUNDOzs7NEJBQUc7NEJBQWNYOzRCQUFZOzs7Ozs7O2tDQUM5Qiw4REFBQ1Asa0RBQUlBO3dCQUFDbUIsTUFBTSxjQUFZZDtrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWMxQztLQXpCd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVjaXBlQ2FyZC5qcz81NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVDYXJkKHtyZWNpcGVzfSlcclxue1xyXG4gICAgY29uc3Qge3RpdGxlLHNsdWcsdGh1bWJuYWlsLGNvb2tpbmdUaW1lfT1yZWNpcGVzLmZpZWxkcztcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XHJcbiAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17J2h0dHBzOicrIHRodW1ibmFpbC5maWVsZHMuZmlsZS51cmx9IFxyXG4gICAgICAgICAgICB3aWR0aD17dGh1bWJuYWlsLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2Uud2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17dGh1bWJuYWlsLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2UuaGVpZ2h0fS8+XHJcbiAgICAgICAgICAgIDxoNT5UYWtlcyBhcHByb3gge2Nvb2tpbmdUaW1lfW1pbnM8L2g1PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL3JlY2lwZXMvJytzbHVnfT5Db29rIHRoaXM8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJSZWNpcGVDYXJkIiwicmVjaXBlcyIsInRpdGxlIiwic2x1ZyIsInRodW1ibmFpbCIsImNvb2tpbmdUaW1lIiwiZmllbGRzIiwiZGl2IiwiaDMiLCJzcmMiLCJmaWxlIiwidXJsIiwid2lkdGgiLCJkZXRhaWxzIiwiaW1hZ2UiLCJoZWlnaHQiLCJoNSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RecipeCard.js\n"));

/***/ })

});