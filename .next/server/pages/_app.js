/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Navigation.tsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Navigation() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isActive = (path)=>router.pathname === path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto px-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center h-16 space-x-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: `transition ${isActive(\"/\") ? \"text-purple-400 font-bold\" : \"text-white hover:text-purple-400\"}`,\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/gsap\",\n                        className: `transition ${isActive(\"/gsap\") ? \"text-purple-400 font-bold\" : \"text-white hover:text-purple-400\"}`,\n                        children: \"GSAP\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/flip\",\n                        className: `transition ${isActive(\"/flip\") ? \"text-purple-400 font-bold\" : \"text-white hover:text-purple-400\"}`,\n                        children: \"Flip\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/three\",\n                        className: `transition ${isActive(\"/three\") ? \"text-purple-400 font-bold\" : \"text-white hover:text-purple-400\"}`,\n                        children: \"Three.js\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/parallax\",\n                        className: `transition ${isActive(\"/parallax\") ? \"text-purple-400 font-bold\" : \"text-white hover:text-purple-400\"}`,\n                        children: \"Parallax\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/text-effects\",\n                        className: `transition ${isActive(\"/text-effects\") ? \"text-purple-400 font-bold\" : \"text-white hover:text-purple-400\"}`,\n                        children: \"Text Effects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\components\\\\Navigation.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBRXpCLFNBQVNFO0lBQ3RCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNRyxXQUFXLENBQUNDLE9BQWlCRixPQUFPRyxRQUFRLEtBQUtEO0lBRXZELHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNSLGtEQUFJQTt3QkFDSFUsTUFBSzt3QkFDTEYsV0FBVyxDQUFDLFdBQVcsRUFBRUosU0FBUyxPQUM5Qiw4QkFDQSxtQ0FBbUMsQ0FBQztrQ0FDekM7Ozs7OztrQ0FHRCw4REFBQ0osa0RBQUlBO3dCQUNIVSxNQUFLO3dCQUNMRixXQUFXLENBQUMsV0FBVyxFQUFFSixTQUFTLFdBQzlCLDhCQUNBLG1DQUFtQyxDQUFDO2tDQUN6Qzs7Ozs7O2tDQUdELDhEQUFDSixrREFBSUE7d0JBQ0hVLE1BQUs7d0JBQ0xGLFdBQVcsQ0FBQyxXQUFXLEVBQUVKLFNBQVMsV0FDOUIsOEJBQ0EsbUNBQW1DLENBQUM7a0NBQ3pDOzs7Ozs7a0NBR0QsOERBQUNKLGtEQUFJQTt3QkFDSFUsTUFBSzt3QkFDTEYsV0FBVyxDQUFDLFdBQVcsRUFBRUosU0FBUyxZQUM5Qiw4QkFDQSxtQ0FBbUMsQ0FBQztrQ0FDekM7Ozs7OztrQ0FHRCw4REFBQ0osa0RBQUlBO3dCQUNIVSxNQUFLO3dCQUNMRixXQUFXLENBQUMsV0FBVyxFQUFFSixTQUFTLGVBQzlCLDhCQUNBLG1DQUFtQyxDQUFDO2tDQUN6Qzs7Ozs7O2tDQUdELDhEQUFDSixrREFBSUE7d0JBQ0hVLE1BQUs7d0JBQ0xGLFdBQVcsQ0FBQyxXQUFXLEVBQUVKLFNBQVMsbUJBQzlCLDhCQUNBLG1DQUFtQyxDQUFDO2tDQUN6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWF0aW9uLXNob3djYXNlLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/MDFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IGlzQWN0aXZlID0gKHBhdGg6IHN0cmluZykgPT4gcm91dGVyLnBhdGhuYW1lID09PSBwYXRoO1xuICBcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgYmctYmxhY2svNTAgYmFja2Ryb3AtYmx1ci1zbSB6LTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTE2IHNwYWNlLXgtOFwiPlxuICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgaHJlZj1cIi9cIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24gJHtpc0FjdGl2ZSgnLycpIFxuICAgICAgICAgICAgICA/ICd0ZXh0LXB1cnBsZS00MDAgZm9udC1ib2xkJyBcbiAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXB1cnBsZS00MDAnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvZ3NhcFwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbiAke2lzQWN0aXZlKCcvZ3NhcCcpIFxuICAgICAgICAgICAgICA/ICd0ZXh0LXB1cnBsZS00MDAgZm9udC1ib2xkJyBcbiAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXB1cnBsZS00MDAnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR1NBUFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvZmxpcFwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbiAke2lzQWN0aXZlKCcvZmxpcCcpIFxuICAgICAgICAgICAgICA/ICd0ZXh0LXB1cnBsZS00MDAgZm9udC1ib2xkJyBcbiAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXB1cnBsZS00MDAnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRmxpcFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvdGhyZWVcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24gJHtpc0FjdGl2ZSgnL3RocmVlJykgXG4gICAgICAgICAgICAgID8gJ3RleHQtcHVycGxlLTQwMCBmb250LWJvbGQnIFxuICAgICAgICAgICAgICA6ICd0ZXh0LXdoaXRlIGhvdmVyOnRleHQtcHVycGxlLTQwMCd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBUaHJlZS5qc1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvcGFyYWxsYXhcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24gJHtpc0FjdGl2ZSgnL3BhcmFsbGF4JykgXG4gICAgICAgICAgICAgID8gJ3RleHQtcHVycGxlLTQwMCBmb250LWJvbGQnIFxuICAgICAgICAgICAgICA6ICd0ZXh0LXdoaXRlIGhvdmVyOnRleHQtcHVycGxlLTQwMCd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQYXJhbGxheFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvdGV4dC1lZmZlY3RzXCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uICR7aXNBY3RpdmUoJy90ZXh0LWVmZmVjdHMnKSBcbiAgICAgICAgICAgICAgPyAndGV4dC1wdXJwbGUtNDAwIGZvbnQtYm9sZCcgXG4gICAgICAgICAgICAgIDogJ3RleHQtd2hpdGUgaG92ZXI6dGV4dC1wdXJwbGUtNDAwJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRleHQgRWZmZWN0c1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIk5hdmlnYXRpb24iLCJyb3V0ZXIiLCJpc0FjdGl2ZSIsInBhdGgiLCJwYXRobmFtZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navigation.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @studio-freight/lenis */ \"@studio-freight/lenis\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation */ \"./src/components/Navigation.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__]);\n_studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            duration: 1.6,\n            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),\n            orientation: \"vertical\",\n            smoothWheel: true,\n            wheelMultiplier: 1,\n            touchMultiplier: 2\n        });\n        function raf(time) {\n            lenis.raf(time);\n            requestAnimationFrame(raf);\n        }\n        requestAnimationFrame(raf);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Documents\\\\Code\\\\gsapExamples\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNRO0FBRVg7QUFDbUI7QUFFbEQsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQ0wsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxRQUFRLElBQUlMLDZEQUFLQSxDQUFDO1lBQ3RCTSxVQUFVO1lBQ1ZDLFFBQVEsQ0FBQ0MsSUFBTUMsS0FBS0MsR0FBRyxDQUFDLEdBQUcsUUFBUUQsS0FBS0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLSDtZQUNyREksYUFBYTtZQUNiQyxhQUFhO1lBQ2JDLGlCQUFpQjtZQUNqQkMsaUJBQWlCO1FBQ25CO1FBRUEsU0FBU0MsSUFBSUMsSUFBWTtZQUN2QlosTUFBTVcsR0FBRyxDQUFDQztZQUNWQyxzQkFBc0JGO1FBQ3hCO1FBRUFFLHNCQUFzQkY7SUFDeEIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ2xCLDhEQUFVQTs7Ozs7MEJBQ1gsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWF0aW9uLXNob3djYXNlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlbmlzIGZyb20gJ0BzdHVkaW8tZnJlaWdodC9sZW5pcyc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsZW5pcyA9IG5ldyBMZW5pcyh7XG4gICAgICBkdXJhdGlvbjogMS42LFxuICAgICAgZWFzaW5nOiAodCkgPT4gTWF0aC5taW4oMSwgMS4wMDEgLSBNYXRoLnBvdygyLCAtMTAgKiB0KSksXG4gICAgICBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgIHNtb290aFdoZWVsOiB0cnVlLFxuICAgICAgd2hlZWxNdWx0aXBsaWVyOiAxLFxuICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gcmFmKHRpbWU6IG51bWJlcikge1xuICAgICAgbGVuaXMucmFmKHRpbWUpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiTGVuaXMiLCJOYXZpZ2F0aW9uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsZW5pcyIsImR1cmF0aW9uIiwiZWFzaW5nIiwidCIsIk1hdGgiLCJtaW4iLCJwb3ciLCJvcmllbnRhdGlvbiIsInNtb290aFdoZWVsIiwid2hlZWxNdWx0aXBsaWVyIiwidG91Y2hNdWx0aXBsaWVyIiwicmFmIiwidGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@studio-freight/lenis":
/*!****************************************!*\
  !*** external "@studio-freight/lenis" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@studio-freight/lenis");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();