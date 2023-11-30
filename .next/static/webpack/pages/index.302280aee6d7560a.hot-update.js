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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecipeCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction RecipeCard(param) {\n    let { recipes } = param;\n    const { title, slug, thumbnail, cookingTime } = recipes.fields;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-bda1c7cfce671b15\" + \" \" + \"cardflex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                className: \"imgsize\",\n                src: \"https:\" + thumbnail.fields.file.url,\n                width: thumbnail.fields.file.details.image.width,\n                height: thumbnail.fields.file.details.image.height\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-bda1c7cfce671b15\" + \" \" + \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-bda1c7cfce671b15\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"jsx-bda1c7cfce671b15\",\n                        children: [\n                            \"Takes approx \",\n                            cookingTime,\n                            \"mins\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-bda1c7cfce671b15\" + \" \" + \"cook\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/recipes/\" + slug,\n                            style: {\n                                color: \"red\",\n                                textDecoration: \"none\"\n                            },\n                            children: \"Cook this\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n                lineNumber: 12,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bda1c7cfce671b15\",\n                children: \".card.jsx-bda1c7cfce671b15{background:#f4f4f4;-webkit-box-shadow:1px 3px 5px rgba(0,0,0,.1);-moz-box-shadow:1px 3px 5px rgba(0,0,0,.1);box-shadow:1px 3px 5px rgba(0,0,0,.1);position:relative;margin:0;top:-40px;left:-10px}.imgsize.jsx-bda1c7cfce671b15{height:200px;width:100%}.cook.jsx-bda1c7cfce671b15{background:white;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\next\\\\recipe1\\\\components\\\\RecipeCard.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = RecipeCard;\nvar _c;\n$RefreshReg$(_c, \"RecipeCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY2lwZUNhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQztBQUNmLFNBQVNFLFdBQVcsS0FBUztRQUFULEVBQUNDLE9BQU8sRUFBQyxHQUFUO0lBRS9CLE1BQU0sRUFBQ0MsS0FBSyxFQUFDQyxJQUFJLEVBQUNDLFNBQVMsRUFBQ0MsV0FBVyxFQUFDLEdBQUNKLFFBQVFLLE1BQU07SUFDdkQscUJBQ0ksOERBQUNDO2tEQUFjOzswQkFFWCw4REFBQ1IsbURBQUtBO2dCQUFDUyxXQUFVO2dCQUFVQyxLQUFLLFdBQVVMLFVBQVVFLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxHQUFHO2dCQUNuRUMsT0FBT1IsVUFBVUUsTUFBTSxDQUFDSSxJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixLQUFLO2dCQUNoREcsUUFBUVgsVUFBVUUsTUFBTSxDQUFDSSxJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNOzs7Ozs7MEJBQ2pELDhEQUFDUjswREFBYzs7a0NBQ2hCLDhEQUFDUzs7a0NBQUlkOzs7Ozs7a0NBRUwsOERBQUNlOzs7NEJBQUc7NEJBQWNaOzRCQUFZOzs7Ozs7O2tDQUM5Qiw4REFBQ0U7a0VBQWM7a0NBQ2YsNEVBQUNULGtEQUFJQTs0QkFBQ29CLE1BQU0sY0FBWWY7NEJBQU1nQixPQUFPO2dDQUFDQyxPQUFNO2dDQUFPQyxnQkFBZTs0QkFBTTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJ2RjtLQXpDd0JyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlY2lwZUNhcmQuanM/NTQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlQ2FyZCh7cmVjaXBlc30pXHJcbntcclxuICAgIGNvbnN0IHt0aXRsZSxzbHVnLHRodW1ibmFpbCxjb29raW5nVGltZX09cmVjaXBlcy5maWVsZHM7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRmbGV4Jz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImltZ3NpemVcIiBzcmM9eydodHRwczonKyB0aHVtYm5haWwuZmllbGRzLmZpbGUudXJsfSBcclxuICAgICAgICAgICAgd2lkdGg9e3RodW1ibmFpbC5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e3RodW1ibmFpbC5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH0vPlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxyXG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aDU+VGFrZXMgYXBwcm94IHtjb29raW5nVGltZX1taW5zPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb29rXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcmVjaXBlcy8nK3NsdWd9IHN0eWxlPXt7Y29sb3I6XCJyZWRcIiwgdGV4dERlY29yYXRpb246XCJub25lXCJ9fT5Db29rIHRoaXM8L0xpbms+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmNGY0ZjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MXB4IDNweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmltZ3NpemV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvb2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJSZWNpcGVDYXJkIiwicmVjaXBlcyIsInRpdGxlIiwic2x1ZyIsInRodW1ibmFpbCIsImNvb2tpbmdUaW1lIiwiZmllbGRzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiZmlsZSIsInVybCIsIndpZHRoIiwiZGV0YWlscyIsImltYWdlIiwiaGVpZ2h0IiwiaDMiLCJoNSIsImhyZWYiLCJzdHlsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RecipeCard.js\n"));

/***/ })

});