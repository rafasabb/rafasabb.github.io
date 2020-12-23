webpackHotUpdate_N_E("pages/index",{

/***/ "./components/warning.tsx":
/*!********************************!*\
  !*** ./components/warning.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\Rafael\\workspace\\nextjs-site\\components\\warning.tsx",
    _this = undefined;

var Warning = function Warning() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Em constru\xE7\xE3o"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, _this);
};

_c = Warning;
/* harmony default export */ __webpack_exports__["default"] = (Warning);

var _c;

$RefreshReg$(_c, "Warning");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_System_Metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/System/Metadata */ "./components/System/Metadata.tsx");
/* harmony import */ var _contexts_SessionProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/SessionProvider */ "./contexts/SessionProvider.tsx");
/* harmony import */ var _contexts_ProcessProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/ProcessProvider */ "./contexts/ProcessProvider.tsx");
/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ "./components/System/FileManager/FileManager.tsx");
/* harmony import */ var _contexts_FileProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/FileProvider */ "./contexts/FileProvider.tsx");
/* harmony import */ var _components_System_Desktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/System/Desktop */ "./components/System/Desktop.tsx");
/* harmony import */ var _components_System_Taskbar_Taskbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/System/Taskbar/Taskbar */ "./components/System/Taskbar/Taskbar.tsx");
/* harmony import */ var _components_System_FileManager_IconsView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/System/FileManager/IconsView */ "./components/System/FileManager/IconsView.tsx");
/* harmony import */ var _components_System_WindowManager_WindowManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/System/WindowManager/WindowManager */ "./components/System/WindowManager/WindowManager.tsx");
/* harmony import */ var _components_warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/warning */ "./components/warning.tsx");


var _jsxFileName = "C:\\Users\\Rafael\\workspace\\nextjs-site\\pages\\index.tsx";










function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_System_Metadata__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_SessionProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ProcessProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_FileProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_System_Desktop__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_warning__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_4__["default"], {
              path: "/desktop",
              render: _components_System_FileManager_IconsView__WEBPACK_IMPORTED_MODULE_8__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_System_WindowManager_WindowManager__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_System_Taskbar_Taskbar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93YXJuaW5nLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIldhcm5pbmciLCJIb21lUGFnZSIsIkljb25zVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0IsR0FBTTtBQUU1QixzQkFDSTtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FURDs7S0FBTUEsTztBQVdTQSxzRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQyxRQUFULEdBQWtDO0FBQzdDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsaUVBQUQ7QUFBQSw2QkFDSSxxRUFBQyxpRUFBRDtBQUFBLCtCQUNJLHFFQUFDLDhEQUFEO0FBQUEsaUNBQ0kscUVBQUMsa0VBQUQ7QUFBQSxvQ0FDSSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUkscUVBQUMsa0ZBQUQ7QUFBYSxrQkFBSSxFQUFDLFVBQWxCO0FBQTZCLG9CQUFNLEVBQUVDLGdGQUFTQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0kscUVBQUMsc0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISixlQUlJLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQWlCSDtLQWxCdUJELFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmQxMmYzOGJjYWY1M2U4M2E3MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdhcm5pbmc6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgRW0gY29uc3RydcOnw6NvXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2FybmluZyIsImltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWV0YWRhdGEgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9NZXRhZGF0YSc7XHJcbmltcG9ydCBTZXNzaW9uUHJvdmlkZXIgZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgUHJvY2Vzc1Byb3ZpZGVyIGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc1Byb3ZpZGVyJztcclxuaW1wb3J0IEZpbGVNYW5hZ2VyIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXInO1xyXG5pbXBvcnQgRmlsZVByb3ZpZGVyIGZyb20gJ0AvY29udGV4dHMvRmlsZVByb3ZpZGVyJztcclxuaW1wb3J0IERlc2t0b3AgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9EZXNrdG9wJztcclxuaW1wb3J0IFRhc2tiYXIgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXInO1xyXG5pbXBvcnQgSWNvbnNWaWV3IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvSWNvbnNWaWV3JztcclxuaW1wb3J0IFdpbmRvd01hbmFnZXIgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXInO1xyXG5cclxuaW1wb3J0IFdhcm5pbmcgZnJvbSAnQC9jb21wb25lbnRzL3dhcm5pbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKTogUmVhY3RFbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1ldGFkYXRhIC8+XHJcbiAgICAgICAgICAgIDxTZXNzaW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8UHJvY2Vzc1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWxlUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlTWFuYWdlciBwYXRoPVwiL2Rlc2t0b3BcIiByZW5kZXI9e0ljb25zVmlld30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5kb3dNYW5hZ2VyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFza2JhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Rlc2t0b3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaWxlUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2Nlc3NQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==