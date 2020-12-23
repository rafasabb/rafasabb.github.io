(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ "./styles/System/WindowManager/WindowManager.module.scss");
/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks_useWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useWindow */ "./hooks/useWindow.ts");




var _jsxFileName = "C:\\Users\\Rafael\\workspace\\nextjs-site\\components\\System\\WindowManager\\ProcessWindow.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Window = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ "./components/System/WindowManager/Window.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ "./components/System/WindowManager/Window.tsx")];
    },
    modules: ['@/components/System/WindowManager/Window']
  }
});
_c2 = Window;

var ProcessWindow = function ProcessWindow(_ref) {
  _s();

  var _ref$loader = _ref.loader,
      App = _ref$loader.loader,
      loadedAppOptions = _ref$loader.loadedAppOptions,
      loaderOptions = _ref$loader.loaderOptions,
      bgColor = _ref.bgColor,
      icon = _ref.icon,
      name = _ref.name,
      url = _ref.url,
      windowed = _ref.windowed,
      processProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loader", "bgColor", "icon", "name", "url", "windowed"]);

  var _useWindow = Object(_hooks_useWindow__WEBPACK_IMPORTED_MODULE_6__["default"])({
    processProps: processProps,
    loaderOptions: loaderOptions
  }),
      motions = _useWindow.motions,
      settings = _useWindow.settings;

  var height = settings.height,
      width = settings.width,
      zIndex = settings.zIndex;

  var AppComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(App, _objectSpread(_objectSpread({
    url: url
  }, loadedAppOptions), settings), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 26
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].article, _objectSpread(_objectSpread({
    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.animatedWindows,
    style: {
      height: height,
      width: width,
      zIndex: zIndex
    }
  }, motions), {}, {
    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Window, _objectSpread(_objectSpread({
      icon: icon,
      name: name,
      bgColor: bgColor
    }, settings), {}, {
      children: AppComponent
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }, _this) : AppComponent
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};

_s(ProcessWindow, "wucoJLMciC/PgMi9KO0DClN1xIE=", false, function () {
  return [_hooks_useWindow__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c3 = ProcessWindow;
/* harmony default export */ __webpack_exports__["default"] = (ProcessWindow);

var _c, _c2, _c3;

$RefreshReg$(_c, "Window$dynamic");
$RefreshReg$(_c2, "Window");
$RefreshReg$(_c3, "ProcessWindow");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./hooks/useWindow.ts":
/*!****************************!*\
  !*** ./hooks/useWindow.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ "./utils/constants.ts");
/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/windowmanager */ "./utils/windowmanager.ts");
/* harmony import */ var _contexts_ProcessProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/ProcessProvider */ "./contexts/ProcessProvider.tsx");
/* harmony import */ var _contexts_SessionProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/SessionProvider */ "./contexts/SessionProvider.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/motions */ "./utils/motions.ts");
var _s = $RefreshSig$();







var windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["baseZindex"] + _utils_constants__WEBPACK_IMPORTED_MODULE_0__["windowsZindexLevel"] * _utils_constants__WEBPACK_IMPORTED_MODULE_0__["zindexLevelSize"];

var useWindow = function useWindow(_ref) {
  _s();

  var _ref$loaderOptions = _ref.loaderOptions,
      defaultWidth = _ref$loaderOptions.width,
      defaultHeight = _ref$loaderOptions.height,
      _ref$processProps = _ref.processProps,
      initialHeight = _ref$processProps.height,
      id = _ref$processProps.id,
      launchElement = _ref$processProps.launchElement,
      lockAspectRatio = _ref$processProps.lockAspectRatio,
      maximized = _ref$processProps.maximized,
      minimized = _ref$processProps.minimized,
      taskbarElement = _ref$processProps.taskbarElement,
      initialWidth = _ref$processProps.width,
      x = _ref$processProps.x,
      y = _ref$processProps.y;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_SessionProvider__WEBPACK_IMPORTED_MODULE_3__["SessionContext"]),
      foreground = _useContext.foreground,
      getState = _useContext.getState,
      saveState = _useContext.saveState,
      _useContext$session = _useContext.session,
      foregroundId = _useContext$session.foregroundId,
      stackOrder = _useContext$session.stackOrder;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_ProcessProvider__WEBPACK_IMPORTED_MODULE_2__["ProcessContext"]),
      processes = _useContext2.processes,
      close = _useContext2.close,
      maximize = _useContext2.maximize,
      minimize = _useContext2.minimize,
      position = _useContext2.position,
      restore = _useContext2.restore,
      size = _useContext2.size;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      maximizeWindow = _useState[0],
      setMaximizeWindow = _useState[1];

  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_1__["getMaxDimensions"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),
      height = _getMaxDimensions.height,
      width = _getMaxDimensions.width;

  var _getState = getState({
    id: id
  }),
      previousX = _getState.x,
      previousY = _getState.y;

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return {
      x: Math.floor((window.innerWidth - width) / 2),
      y: Math.floor((window.innerHeight - height - _utils_constants__WEBPACK_IMPORTED_MODULE_0__["TASKBAR_HEIGHT"]) / 2)
    };
  }, []),
      defaultX = _useMemo.x,
      defaultY = _useMemo.y;

  var zIndex = windowZindex + stackOrder.slice().reverse().indexOf(id);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (foregroundId === id && minimized) {
      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_1__["getNextVisibleWindow"])(processes, stackOrder.filter(function (stackId) {
        return stackId !== id;
      })));
    } else if (!stackOrder.includes(id)) {
      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_1__["getNextVisibleWindow"])(processes, stackOrder));
    }
  }, [foregroundId, id, minimized, processes, stackOrder]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (maximized) {
      setMaximizeWindow(true);
    } else if (maximizeWindow) {
      setTimeout(function () {
        return setMaximizeWindow(false);
      }, _utils_constants__WEBPACK_IMPORTED_MODULE_0__["MAXIMIZE_ANIMATION_SPEED_IN_SECONDS"] * _utils_constants__WEBPACK_IMPORTED_MODULE_0__["MILLISECONDS_IN_SECOND"]);
    }
  }, [maximized, maximizeWindow]);
  return {
    height: height,
    width: width,
    zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_0__["foregroundZindex"] : zIndex,
    motions: Object(_utils_motions__WEBPACK_IMPORTED_MODULE_5__["windowMotionSettings"])({
      animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',
      initialX: previousX || defaultX,
      initialY: previousY || defaultY,
      x: x,
      y: y,
      taskbarElement: taskbarElement,
      launchElement: launchElement,
      height: height,
      width: width,
      zIndex: zIndex
    }),
    settings: {
      onBlur: function onBlur(event) {
        if (event.relatedTarget !== taskbarElement) {
          foreground('');
        }
      },
      onClose: function onClose() {
        saveState({
          id: id,
          height: height,
          width: width,
          x: !previousX ? defaultX + x : x,
          y: !previousY ? defaultY + y : y
        });
        close(id);
      },
      onDrag: position(id),
      onFocus: function onFocus() {
        return foreground(id);
      },
      onMaximize: function onMaximize() {
        return maximized ? restore(id, 'maximized') : maximize(id);
      },
      onMinimize: function onMinimize() {
        return minimize(id);
      },
      onResize: size(id),
      height: height,
      id: id,
      lockAspectRatio: lockAspectRatio,
      maximized: maximizeWindow,
      minimized: minimized,
      width: width,
      zIndex: zIndex
    }
  };
};

_s(useWindow, "Cnrf+tFeye2+3MVpxPApJr28LVc=");

/* harmony default export */ __webpack_exports__["default"] = (useWindow);

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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, getNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxDimensions", function() { return getMaxDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextVisibleWindow", function() { return getNextVisibleWindow; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constants */ "./utils/constants.ts");

var getMaxDimensions = function getMaxDimensions(width, height) {
  var defaultWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var defaultHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var lockAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (width === defaultWidth && height === defaultHeight) {
    var PADDING = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["WINDOW_PADDING"] * 2;
    var maxWidth = window.innerWidth - PADDING;
    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_0__["TASKBAR_HEIGHT"] - PADDING;

    if (lockAspectRatio) {
      var aspectLockedHeight = height / width * Math.min(maxWidth, width);

      if (aspectLockedHeight > maxHeight) {
        maxWidth = maxHeight / (height / width);
      } else {
        maxHeight = aspectLockedHeight;
      }
    }

    return {
      height: Math.ceil(Math.min(maxHeight, height)),
      width: Math.ceil(Math.min(maxWidth, width))
    };
  }

  return {
    height: height,
    width: width
  };
};
var getNextVisibleWindow = function getNextVisibleWindow(processes, stackOrder) {
  var visibleProcessId = stackOrder.find(function (stackId) {
    return processes.find(function (process) {
      return process.id === stackId && !process.minimized;
    });
  });
  return visibleProcessId || '';
};

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2luZG93LnRzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy93aW5kb3dtYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJQcm9jZXNzV2luZG93IiwibG9hZGVyIiwiQXBwIiwibG9hZGVkQXBwT3B0aW9ucyIsImxvYWRlck9wdGlvbnMiLCJiZ0NvbG9yIiwiaWNvbiIsIm5hbWUiLCJ1cmwiLCJ3aW5kb3dlZCIsInByb2Nlc3NQcm9wcyIsInVzZVdpbmRvdyIsIm1vdGlvbnMiLCJzZXR0aW5ncyIsImhlaWdodCIsIndpZHRoIiwiekluZGV4IiwiQXBwQ29tcG9uZW50Iiwic3R5bGVzIiwiYW5pbWF0ZWRXaW5kb3dzIiwid2luZG93WmluZGV4IiwiYmFzZVppbmRleCIsIndpbmRvd3NaaW5kZXhMZXZlbCIsInppbmRleExldmVsU2l6ZSIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJpbml0aWFsSGVpZ2h0IiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwidGFza2JhckVsZW1lbnQiLCJpbml0aWFsV2lkdGgiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwiZ2V0TWF4RGltZW5zaW9ucyIsInByZXZpb3VzWCIsInByZXZpb3VzWSIsInVzZU1lbW8iLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJUQVNLQkFSX0hFSUdIVCIsImRlZmF1bHRYIiwiZGVmYXVsdFkiLCJzbGljZSIsInJldmVyc2UiLCJpbmRleE9mIiwidXNlRWZmZWN0IiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJmaWx0ZXIiLCJzdGFja0lkIiwiaW5jbHVkZXMiLCJzZXRUaW1lb3V0IiwiTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMiLCJNSUxMSVNFQ09ORFNfSU5fU0VDT05EIiwiZm9yZWdyb3VuZFppbmRleCIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiYW5pbWF0aW9uIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsIm9uQmx1ciIsImV2ZW50IiwicmVsYXRlZFRhcmdldCIsIm9uQ2xvc2UiLCJvbkRyYWciLCJvbkZvY3VzIiwib25NYXhpbWl6ZSIsIm9uTWluaW1pemUiLCJvblJlc2l6ZSIsIlBBRERJTkciLCJXSU5ET1dfUEFERElORyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwibWluIiwiY2VpbCIsInZpc2libGVQcm9jZXNzSWQiLCJmaW5kIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw2S0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFR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QixDQUFWO0FBRkosS0FBUDtBQUlIOztBQUVELFNBQU87QUFBRUQsVUFBTSxFQUFOQSxNQUFGO0FBQVVDLFNBQUssRUFBTEE7QUFBVixHQUFQO0FBQ0gsQ0E3Qk07QUErQkEsSUFBTXdELG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FDaEMxQixTQURnQyxFQUVoQ0YsVUFGZ0MsRUFHdkI7QUFDVCxNQUFNd0QsZ0JBQWdCLEdBQUd4RCxVQUFVLENBQUN5RCxJQUFYLENBQWdCLFVBQUMzQixPQUFEO0FBQUEsV0FDckM1QixTQUFTLENBQUN1RCxJQUFWLENBQWUsVUFBQ0MsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQzFFLEVBQVIsS0FBZThDLE9BQWYsSUFBMEIsQ0FBQzRCLE9BQU8sQ0FBQ3RFLFNBQWhEO0FBQUEsS0FBZixDQURxQztBQUFBLEdBQWhCLENBQXpCO0FBSUEsU0FBT29FLGdCQUFnQixJQUFJLEVBQTNCO0FBQ0gsQ0FUTSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBQcm9jZXNzIH0gZnJvbSAnQC91dGlscy9wcm9jZXNzJztcclxuXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgdXNlV2luZG93IGZyb20gJ0AvaG9va3MvdXNlV2luZG93JztcclxuXHJcbmNvbnN0IFdpbmRvdyA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93JykpO1xyXG5cclxuY29uc3QgUHJvY2Vzc1dpbmRvdzogUmVhY3QuRkM8UHJvY2Vzcz4gPSAoe1xyXG4gICAgbG9hZGVyOiB7IGxvYWRlcjogQXBwLCBsb2FkZWRBcHBPcHRpb25zLCBsb2FkZXJPcHRpb25zIH0sXHJcbiAgICBiZ0NvbG9yLFxyXG4gICAgaWNvbixcclxuICAgIG5hbWUsXHJcbiAgICB1cmwsXHJcbiAgICB3aW5kb3dlZCxcclxuICAgIC4uLnByb2Nlc3NQcm9wc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCB7IG1vdGlvbnMsIHNldHRpbmdzIH0gPSB1c2VXaW5kb3coe1xyXG4gICAgICAgIHByb2Nlc3NQcm9wcyxcclxuICAgICAgICBsb2FkZXJPcHRpb25zXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCwgekluZGV4IH0gPSBzZXR0aW5ncztcclxuICAgIGNvbnN0IEFwcENvbXBvbmVudCA9IDxBcHAgdXJsPXt1cmx9IHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4uc2V0dGluZ3N9IC8+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5hcnRpY2xlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGVkV2luZG93c31cclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0LCB3aWR0aCwgekluZGV4IH19XHJcbiAgICAgICAgICAgIHsuLi5tb3Rpb25zfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3dpbmRvd2VkID8gKFxyXG4gICAgICAgICAgICAgICAgPFdpbmRvdyBpY29uPXtpY29ufSBuYW1lPXtuYW1lfSBiZ0NvbG9yPXtiZ0NvbG9yfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtBcHBDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICA8L1dpbmRvdz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBBcHBDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9tb3Rpb24uYXJ0aWNsZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzV2luZG93O1xyXG4iLCJpbXBvcnQge1xyXG4gICAgYmFzZVppbmRleCxcclxuICAgIGZvcmVncm91bmRaaW5kZXgsXHJcbiAgICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyxcclxuICAgIE1JTExJU0VDT05EU19JTl9TRUNPTkQsXHJcbiAgICBUQVNLQkFSX0hFSUdIVCxcclxuICAgIHdpbmRvd3NaaW5kZXhMZXZlbCxcclxuICAgIHppbmRleExldmVsU2l6ZVxyXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0TWF4RGltZW5zaW9ucywgZ2V0TmV4dFZpc2libGVXaW5kb3cgfSBmcm9tICdAL3V0aWxzL3dpbmRvd21hbmFnZXInO1xyXG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc1Byb3ZpZGVyJztcclxuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Nlc3Npb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcclxuXHJcbmNvbnN0IHdpbmRvd1ppbmRleCA9IGJhc2VaaW5kZXggKyB3aW5kb3dzWmluZGV4TGV2ZWwgKiB6aW5kZXhMZXZlbFNpemU7XHJcblxyXG5jb25zdCB1c2VXaW5kb3cgPSAoe1xyXG4gICAgbG9hZGVyT3B0aW9uczogeyB3aWR0aDogZGVmYXVsdFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRIZWlnaHQgfSxcclxuICAgIHByb2Nlc3NQcm9wczoge1xyXG4gICAgICAgIGhlaWdodDogaW5pdGlhbEhlaWdodCxcclxuICAgICAgICBpZCxcclxuICAgICAgICBsYXVuY2hFbGVtZW50LFxyXG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbyxcclxuICAgICAgICBtYXhpbWl6ZWQsXHJcbiAgICAgICAgbWluaW1pemVkLFxyXG4gICAgICAgIHRhc2tiYXJFbGVtZW50LFxyXG4gICAgICAgIHdpZHRoOiBpbml0aWFsV2lkdGgsXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5XHJcbiAgICB9XHJcbn06IGFueSk6IGFueSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZm9yZWdyb3VuZCxcclxuICAgICAgICBnZXRTdGF0ZSxcclxuICAgICAgICBzYXZlU3RhdGUsXHJcbiAgICAgICAgc2Vzc2lvbjogeyBmb3JlZ3JvdW5kSWQsIHN0YWNrT3JkZXIgfVxyXG4gICAgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHByb2Nlc3NlcyxcclxuICAgICAgICBjbG9zZSxcclxuICAgICAgICBtYXhpbWl6ZSxcclxuICAgICAgICBtaW5pbWl6ZSxcclxuICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICByZXN0b3JlLFxyXG4gICAgICAgIHNpemVcclxuICAgIH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcclxuICAgIGNvbnN0IFttYXhpbWl6ZVdpbmRvdywgc2V0TWF4aW1pemVXaW5kb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRNYXhEaW1lbnNpb25zKFxyXG4gICAgICAgIGluaXRpYWxXaWR0aCxcclxuICAgICAgICBpbml0aWFsSGVpZ2h0LFxyXG4gICAgICAgIGRlZmF1bHRXaWR0aCxcclxuICAgICAgICBkZWZhdWx0SGVpZ2h0LFxyXG4gICAgICAgIGxvY2tBc3BlY3RSYXRpb1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgeDogcHJldmlvdXNYLCB5OiBwcmV2aW91c1kgfSA9IGdldFN0YXRlKHtcclxuICAgICAgICBpZFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IHg6IGRlZmF1bHRYLCB5OiBkZWZhdWx0WSB9ID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICB4OiBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIpLFxyXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBoZWlnaHQgLSBUQVNLQkFSX0hFSUdIVCkgLyAyKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFtdXHJcbiAgICApO1xyXG4gICAgY29uc3QgekluZGV4ID0gd2luZG93WmluZGV4ICsgc3RhY2tPcmRlci5zbGljZSgpLnJldmVyc2UoKS5pbmRleE9mKGlkKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb3JlZ3JvdW5kSWQgPT09IGlkICYmIG1pbmltaXplZCkge1xyXG4gICAgICAgICAgICBmb3JlZ3JvdW5kKFxyXG4gICAgICAgICAgICAgICAgZ2V0TmV4dFZpc2libGVXaW5kb3coXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrT3JkZXIuZmlsdGVyKChzdGFja0lkKSA9PiBzdGFja0lkICE9PSBpZClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFzdGFja09yZGVyLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICBmb3JlZ3JvdW5kKGdldE5leHRWaXNpYmxlV2luZG93KHByb2Nlc3Nlcywgc3RhY2tPcmRlcikpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtmb3JlZ3JvdW5kSWQsIGlkLCBtaW5pbWl6ZWQsIHByb2Nlc3Nlcywgc3RhY2tPcmRlcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1heGltaXplZCkge1xyXG4gICAgICAgICAgICBzZXRNYXhpbWl6ZVdpbmRvdyh0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1heGltaXplV2luZG93KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBzZXRNYXhpbWl6ZVdpbmRvdyhmYWxzZSksXHJcbiAgICAgICAgICAgICAgICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyAqIE1JTExJU0VDT05EU19JTl9TRUNPTkRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWF4aW1pemVkLCBtYXhpbWl6ZVdpbmRvd10pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIHpJbmRleDogZm9yZWdyb3VuZElkID09PSBpZCA/IGZvcmVncm91bmRaaW5kZXggOiB6SW5kZXgsXHJcbiAgICAgICAgbW90aW9uczogd2luZG93TW90aW9uU2V0dGluZ3Moe1xyXG4gICAgICAgICAgICBhbmltYXRpb246XHJcbiAgICAgICAgICAgICAgICAobWF4aW1pemVkICYmIG1pbmltaXplZCAmJiAnbWF4bWluJykgfHxcclxuICAgICAgICAgICAgICAgIChtYXhpbWl6ZWQgJiYgJ21heGltaXplZCcpIHx8XHJcbiAgICAgICAgICAgICAgICAobWluaW1pemVkICYmICdtaW5pbWl6ZWQnKSB8fFxyXG4gICAgICAgICAgICAgICAgJ3N0YXJ0JyxcclxuICAgICAgICAgICAgaW5pdGlhbFg6IHByZXZpb3VzWCB8fCBkZWZhdWx0WCxcclxuICAgICAgICAgICAgaW5pdGlhbFk6IHByZXZpb3VzWSB8fCBkZWZhdWx0WSxcclxuICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgdGFza2JhckVsZW1lbnQsXHJcbiAgICAgICAgICAgIGxhdW5jaEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIHpJbmRleFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIG9uQmx1cjogKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGFza2JhckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kKCcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2F2ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogIXByZXZpb3VzWCA/IGRlZmF1bHRYICsgeCA6IHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogIXByZXZpb3VzWSA/IGRlZmF1bHRZICsgeSA6IHlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2xvc2UoaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWc6IHBvc2l0aW9uKGlkKSxcclxuICAgICAgICAgICAgb25Gb2N1czogKCkgPT4gZm9yZWdyb3VuZChpZCksXHJcbiAgICAgICAgICAgIG9uTWF4aW1pemU6ICgpID0+IChtYXhpbWl6ZWQgPyByZXN0b3JlKGlkLCAnbWF4aW1pemVkJykgOiBtYXhpbWl6ZShpZCkpLFxyXG4gICAgICAgICAgICBvbk1pbmltaXplOiAoKSA9PiBtaW5pbWl6ZShpZCksXHJcbiAgICAgICAgICAgIG9uUmVzaXplOiBzaXplKGlkKSxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvLFxyXG4gICAgICAgICAgICBtYXhpbWl6ZWQ6IG1heGltaXplV2luZG93LFxyXG4gICAgICAgICAgICBtaW5pbWl6ZWQsXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICB6SW5kZXhcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93O1xyXG4iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCB0eXBlIHsgUHJvY2Vzc2VzIH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9jZXNzbWFuYWdlcic7XHJcblxyXG5pbXBvcnQgeyBUQVNLQkFSX0hFSUdIVCwgV0lORE9XX1BBRERJTkcgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWF4RGltZW5zaW9ucyA9IChcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgIGRlZmF1bHRXaWR0aCA9IDAsXHJcbiAgICBkZWZhdWx0SGVpZ2h0ID0gMCxcclxuICAgIGxvY2tBc3BlY3RSYXRpbyA9IGZhbHNlXHJcbik6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9PiB7XHJcbiAgICBpZiAod2lkdGggPT09IGRlZmF1bHRXaWR0aCAmJiBoZWlnaHQgPT09IGRlZmF1bHRIZWlnaHQpIHtcclxuICAgICAgICBjb25zdCBQQURESU5HID0gV0lORE9XX1BBRERJTkcgKiAyO1xyXG4gICAgICAgIGxldCBtYXhXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gUEFERElORztcclxuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gVEFTS0JBUl9IRUlHSFQgLSBQQURESU5HO1xyXG5cclxuICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IChoZWlnaHQgLyB3aWR0aCkgKiBNYXRoLm1pbihtYXhXaWR0aCwgd2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFzcGVjdExvY2tlZEhlaWdodCA+IG1heEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhIZWlnaHQgLyAoaGVpZ2h0IC8gd2lkdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gYXNwZWN0TG9ja2VkSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguY2VpbChNYXRoLm1pbihtYXhIZWlnaHQsIGhlaWdodCkpLFxyXG4gICAgICAgICAgICB3aWR0aDogTWF0aC5jZWlsKE1hdGgubWluKG1heFdpZHRoLCB3aWR0aCkpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBoZWlnaHQsIHdpZHRoIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TmV4dFZpc2libGVXaW5kb3cgPSAoXHJcbiAgICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcclxuICAgIHN0YWNrT3JkZXI6IHN0cmluZ1tdXHJcbik6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCB2aXNpYmxlUHJvY2Vzc0lkID0gc3RhY2tPcmRlci5maW5kKChzdGFja0lkKSA9PlxyXG4gICAgICAgIHByb2Nlc3Nlcy5maW5kKChwcm9jZXNzKSA9PiBwcm9jZXNzLmlkID09PSBzdGFja0lkICYmICFwcm9jZXNzLm1pbmltaXplZClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHZpc2libGVQcm9jZXNzSWQgfHwgJyc7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=