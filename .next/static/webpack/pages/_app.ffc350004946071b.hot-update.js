"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n//layout.js\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Home Page - Recipes\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\layout.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\layout.js\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    children,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\layout.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\layout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\layout.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout); // import Link from 'next/link';\n // export default function Layout({children}) {\n //     return(\n //         <div>\n //             <h1>Layout Page</h1>\n //             <Link href=\"/\">Home</Link>\n //             <Link href=\"/about\">About</Link>\n //             <main>\n //                 {children}\n //                 </main>\n //         </div>\n //     )\n // }\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFdBQVc7O0FBQ2tCO0FBRTdCLE1BQU1DLFNBQVM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7SUFDMUIscUJBQ0UsOERBQUNDOzswQkFFSyw4REFBQ0gsa0RBQUlBO2dCQUFDSSxNQUFLOzBCQUNYLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBTVIsOERBQUNDOztvQkFDRUo7b0JBQVM7Ozs7Ozs7MEJBR1osOERBQUNLOzs7Ozs7Ozs7OztBQUtQO0tBcEJNTjtBQXNCTiwrREFBZUEsTUFBTUEsRUFBQyxDQUN0QixnQ0FBZ0M7Q0FDaEMsK0NBQStDO0NBQy9DLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsbUNBQW1DO0NBQ25DLHlDQUF5QztDQUN6QywrQ0FBK0M7Q0FDL0MscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiLy9sYXlvdXQuanNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGgxPkhvbWUgUGFnZSAtIFJlY2lwZXM8L2gxPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7LyogQWRkIG1vcmUgbmF2aWdhdGlvbiBsaW5rcyBhcyBuZWVkZWQgKi99XHJcbiAgICAgXHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Y2hpbGRyZW59IHsvKiBUaGlzIHdpbGwgcmVuZGVyIHRoZSBjb250ZW50IG9mIHRoZSBjdXJyZW50IHBhZ2UgKi99XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgey8qIEZvb3RlciBjb250ZW50IGdvZXMgaGVyZSAqL31cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xyXG4vLyAgICAgcmV0dXJuKFxyXG4vLyAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxoMT5MYXlvdXQgUGFnZTwvaDE+XHJcbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cclxuLy8gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxyXG4vLyAgICAgICAgICAgICA8bWFpbj5cclxuLy8gICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuLy8gICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwiaHJlZiIsImgxIiwibWFpbiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});