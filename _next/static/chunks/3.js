(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./components/System/Taskbar/TaskbarEntry.tsx":
/*!****************************************************!*\
  !*** ./components/System/Taskbar/TaskbarEntry.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/Taskbar/TaskbarEntry.module.scss */ "./styles/System/Taskbar/TaskbarEntry.module.scss");
/* harmony import */ var _styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_System_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/Icon */ "./components/System/Icon.tsx");
/* harmony import */ var _utils_taskbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/taskbar */ "./utils/taskbar.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _contexts_ProcessProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/ProcessProvider */ "./contexts/ProcessProvider.tsx");
/* harmony import */ var _contexts_SessionProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/SessionProvider */ "./contexts/SessionProvider.tsx");
/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/motions */ "./utils/motions.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\Rafael\\workspace\\nextjs-site\\components\\System\\Taskbar\\TaskbarEntry.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var TaskbarEntry = function TaskbarEntry(_ref) {
  _s();

  var icon = _ref.icon,
      id = _ref.id,
      minimized = _ref.minimized,
      name = _ref.name;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__["useContext"])(_contexts_SessionProvider__WEBPACK_IMPORTED_MODULE_7__["SessionContext"]),
      foreground = _useContext.foreground,
      foregroundId = _useContext.session.foregroundId;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useContext"])(_contexts_ProcessProvider__WEBPACK_IMPORTED_MODULE_6__["ProcessContext"]),
      minimize = _useContext2.minimize,
      restore = _useContext2.restore,
      taskbarElement = _useContext2.taskbarElement;

  var refCallback = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (element) {
    return taskbarElement(id, element);
  }, [id]);

  var onBlur = function onBlur() {
    return foreground('');
  };

  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function () {
    return Object(_utils_taskbar__WEBPACK_IMPORTED_MODULE_4__["cycleWindowState"])({
      foregroundId: foregroundId,
      id: id,
      minimized: minimized,
      foreground: foreground,
      minimize: minimize,
      restore: restore
    });
  }, [foregroundId, id, minimized]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].li, _objectSpread(_objectSpread({}, _utils_motions__WEBPACK_IMPORTED_MODULE_8__["taskbarEntriesMotionSettings"]), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "".concat(_styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.taskbarEntry, " ").concat(foregroundId === id && _styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.foreground),
      type: "button",
      ref: refCallback,
      onBlur: onBlur,
      onClick: onClick,
      tabIndex: -1,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("figure", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_System_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          src: icon,
          height: 16,
          width: 16
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("figcaption", {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(TaskbarEntry, "6apKGMKLe5GrZycKGhUxL/MQqz4=");

_c = TaskbarEntry;
/* harmony default export */ __webpack_exports__["default"] = (TaskbarEntry);

var _c;

$RefreshReg$(_c, "TaskbarEntry");

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/TaskbarEntry.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".TaskbarEntry_taskbarEntry__GRm1o {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-width: 0;\n  height: 30px;\n  margin: 0 4px;\n  text-align: left;\n  border-width: 0 0 2px 0;\n  border-bottom-style: solid;\n  border-bottom-color: #76b9ed;\n  background-color: transparent;\n}\n.TaskbarEntry_taskbarEntry__GRm1o:hover {\n  margin: 0;\n  padding: 0 4px;\n  background-color: rgba(64, 64, 64, 0.6);\n}\n.TaskbarEntry_taskbarEntry__GRm1o figure {\n  font-family: \"Segoe UI\", \"SegoeUI\", \"Helvetica\", sans-serif;\n  font-size: 12px;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  height: 28px;\n  color: #e1e1e1;\n}\n.TaskbarEntry_taskbarEntry__GRm1o figure img {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  width: 16px;\n  margin: 0 5px;\n}\n.TaskbarEntry_taskbarEntry__GRm1o figure figcaption {\n  overflow: hidden;\n  width: 125px;\n  padding-right: 5px;\n  letter-spacing: 0;\n  text-overflow: ellipsis;\n}\n\n.TaskbarEntry_foreground__3NELy {\n  margin: 0;\n  padding: 0 4px;\n  background-color: rgba(89, 89, 89, 0.6);\n}\n.TaskbarEntry_foreground__3NELy:hover {\n  background-color: rgba(115, 115, 115, 0.6);\n}", "",{"version":3,"sources":["webpack://TaskbarEntry.module.scss","webpack://../../mixins.scss","webpack://../../variables.scss"],"names":[],"mappings":"AAIA;ECiBE,mBAAA;EACA,uBAAA;EDfA,YAAA;EACA,YAAA;EACA,aAAA;EAEA,gBAAA;EAEA,uBAAA;EACA,0BAAA;EACA,4BEfe;EFgBf,6BAAA;AALF;AAOE;EACE,SAAA;EACA,cAAA;EAEA,uCAAA;AANJ;AAcE;EACE,2DAAA;EACA,eAAA;EAEA,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,2BAAA;KAAA,sBAAA;UAAA,mBAAA;EAEA,YAAA;EAEA,cAAA;AAfJ;AAiBI;EACE,qBAAA;EAAA,iBAAA;EAAA,aAAA;EAEA,WAAA;EACA,aAAA;AAhBN;AAmBI;EACE,gBAAA;EAEA,YAAA;EACA,kBAAA;EAEA,iBAAA;EACA,uBAAA;AAnBN;;AAwBA;EACE,SAAA;EACA,cAAA;EAEA,uCAAA;AAtBF;AA6BE;EACE,0CAAA;AA3BJ","sourcesContent":["@import '@/styles/maps';\n@import '@/styles/mixins';\n@import '@/styles/variables';\n\n.taskbarEntry {\n  @include textOverflowEllipsis;\n\n  min-width: 0;\n  height: map-get($taskbar, height);\n  margin: 0 4px;\n\n  text-align: left;\n\n  border-width: 0 0 $thickLine 0;\n  border-bottom-style: solid;\n  border-bottom-color: $highlightColor;\n  background-color: transparent;\n\n  &:hover {\n    margin: 0;\n    padding: 0 4px;\n\n    background-color: hsla(\n      0,\n      0%,\n      map-get($taskbar, hover-lightness),\n      map-get($taskbar, opacity)\n    );\n  }\n\n  figure {\n    font-family: 'Segoe UI', 'SegoeUI', 'Helvetica', sans-serif;\n    font-size: map-get($taskbarEntry, font-size);\n\n    display: flex;\n    align-items: center;\n\n    height: map-get($taskbar, height) - $thickLine;\n\n    color: map-get($taskbarEntry, text-color);\n\n    img {\n      display: flex;\n\n      width: map-get($taskbarEntry, icon-width);\n      margin: 0 map-get($taskbarEntry, icon-margin);\n    }\n\n    figcaption {\n      overflow: hidden;\n\n      width: map-get($taskbarEntry, text-width);\n      padding-right: 5px;\n\n      letter-spacing: 0;\n      text-overflow: ellipsis;\n    }\n  }\n}\n\n.foreground {\n  margin: 0;\n  padding: 0 4px;\n\n  background-color: hsla(\n    0,\n    0%,\n    map-get($taskbar, foreground-lightness),\n    map-get($taskbar, opacity)\n  );\n\n  &:hover {\n    background-color: hsla(\n      0,\n      0%,\n      map-get($taskbar, hover-foreground-lightness),\n      map-get($taskbar, opacity)\n    );\n  }\n}\n","@import '@/styles/maps';\n\n@mixin bottomLeft {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n}\n\n@mixin bottomRight {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n}\n\n@mixin topLeft {\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n@mixin textOverflowEllipsis {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\n  &::-webkit-scrollbar {\n    width: $size;\n    height: $size;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-left: 1px solid lighten($foreground-color, 10%);\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid transparent;\n    border-radius: $border-radius;\n    background-color: $foreground-color;\n    background-clip: padding-box;\n\n    &:hover {\n      background-color: darken($foreground-color, 20%);\n    }\n  }\n}\n","$highlightColor: #76b9ed;\n$highlightColor2: rgb(200, 200, 200);\n\n$uiColor1: rgb(55, 55, 55);\n$uiColor2: black;\n\n$offWhite: rgb(225, 225, 225);\n\n$minimize: rgb(255, 190, 47);\n$minimize_active: rgb(191, 142, 35);\n$minimize_text: rgb(153, 87, 0);\n$maximize: rgb(40, 202, 65);\n$maximize_active: rgb(31, 153, 49);\n$maximize_text: rgb(0, 99, 0);\n$close: rgb(255, 85, 78);\n$close_active: rgb(191, 64, 59);\n$close_text: rgb(153, 0, 0);\n\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\n\n$thickLine: 2px;\n\n$fontSize: 12.5px;\n\n$baseZindex: 1000;\n$zindexLevelSize: 100;\n$iconsZindexLevel: 1;\n$windowsZindexLevel: 2;\n$taskbarZindexLevel: 3;\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\n  ($zindexLevelSize / 2);\n\n$taskbarEntryWidth: 160px;\n$titlebarHeight: 22px;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"taskbarEntry": "TaskbarEntry_taskbarEntry__GRm1o",
	"foreground": "TaskbarEntry_foreground__3NELy"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./styles/System/Taskbar/TaskbarEntry.module.scss":
/*!********************************************************!*\
  !*** ./styles/System/Taskbar/TaskbarEntry.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TaskbarEntry.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TaskbarEntry.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TaskbarEntry.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./utils/taskbar.ts":
/*!**************************!*\
  !*** ./utils/taskbar.ts ***!
  \**************************/
/*! exports provided: cycleWindowState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cycleWindowState", function() { return cycleWindowState; });
var cycleWindowState = function cycleWindowState(_ref) {
  var foregroundId = _ref.foregroundId,
      id = _ref.id,
      minimized = _ref.minimized,
      foreground = _ref.foreground,
      minimize = _ref.minimize,
      restore = _ref.restore;

  if (minimized) {
    restore(id, 'minimized');
    foreground(id);
  } else if (foregroundId && foregroundId === id) {
    minimize(id);
    foreground('');
  } else {
    foreground(id);
  }
};
" 1";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyRW50cnkudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzPzU4NTUiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3Rhc2tiYXIudHMiXSwibmFtZXMiOlsiVGFza2JhckVudHJ5IiwiaWNvbiIsImlkIiwibWluaW1pemVkIiwibmFtZSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJmb3JlZ3JvdW5kSWQiLCJzZXNzaW9uIiwiUHJvY2Vzc0NvbnRleHQiLCJtaW5pbWl6ZSIsInJlc3RvcmUiLCJ0YXNrYmFyRWxlbWVudCIsInJlZkNhbGxiYWNrIiwidXNlQ2FsbGJhY2siLCJlbGVtZW50Iiwib25CbHVyIiwib25DbGljayIsImN5Y2xlV2luZG93U3RhdGUiLCJ0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzIiwic3R5bGUiLCJ0YXNrYmFyRW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUF5QyxHQUFHLFNBQTVDQSxZQUE0QyxPQUs1QztBQUFBOztBQUFBLE1BSkZDLElBSUUsUUFKRkEsSUFJRTtBQUFBLE1BSEZDLEVBR0UsUUFIRkEsRUFHRTtBQUFBLE1BRkZDLFNBRUUsUUFGRkEsU0FFRTtBQUFBLE1BREZDLElBQ0UsUUFERkEsSUFDRTs7QUFBQSxvQkFJRUMsd0RBQVUsQ0FBQ0Msd0VBQUQsQ0FKWjtBQUFBLE1BRUVDLFVBRkYsZUFFRUEsVUFGRjtBQUFBLE1BR2FDLFlBSGIsZUFHRUMsT0FIRixDQUdhRCxZQUhiOztBQUFBLHFCQUs0Q0gsd0RBQVUsQ0FBQ0ssd0VBQUQsQ0FMdEQ7QUFBQSxNQUtNQyxRQUxOLGdCQUtNQSxRQUxOO0FBQUEsTUFLZ0JDLE9BTGhCLGdCQUtnQkEsT0FMaEI7QUFBQSxNQUt5QkMsY0FMekIsZ0JBS3lCQSxjQUx6Qjs7QUFNRixNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsT0FBRDtBQUFBLFdBQWFILGNBQWMsQ0FBQ1gsRUFBRCxFQUFLYyxPQUFMLENBQTNCO0FBQUEsR0FBRCxFQUEyQyxDQUFDZCxFQUFELENBQTNDLENBQS9COztBQUNBLE1BQU1lLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTVYsVUFBVSxDQUFDLEVBQUQsQ0FBaEI7QUFBQSxHQUFmOztBQUNBLE1BQU1XLE9BQU8sR0FBR0gseURBQVcsQ0FDdkI7QUFBQSxXQUNJSSx1RUFBZ0IsQ0FBQztBQUNiWCxrQkFBWSxFQUFaQSxZQURhO0FBRWJOLFFBQUUsRUFBRkEsRUFGYTtBQUdiQyxlQUFTLEVBQVRBLFNBSGE7QUFJYkksZ0JBQVUsRUFBVkEsVUFKYTtBQUtiSSxjQUFRLEVBQVJBLFFBTGE7QUFNYkMsYUFBTyxFQUFQQTtBQU5hLEtBQUQsQ0FEcEI7QUFBQSxHQUR1QixFQVNmLENBQUNKLFlBQUQsRUFBZU4sRUFBZixFQUFtQkMsU0FBbkIsQ0FUZSxDQUEzQjtBQVlBLHNCQUNJLHFFQUFDLG9EQUFELENBQVEsRUFBUixrQ0FBZWlCLDJFQUFmO0FBQUEsMkJBQ0k7QUFDSSxlQUFTLFlBQUtDLHNGQUFLLENBQUNDLFlBQVgsY0FBMkJkLFlBQVksS0FBS04sRUFBakIsSUFBdUJtQixzRkFBSyxDQUFDZCxVQUF4RCxDQURiO0FBRUksVUFBSSxFQUFDLFFBRlQ7QUFHSSxTQUFHLEVBQUVPLFdBSFQ7QUFJSSxZQUFNLEVBQUVHLE1BSlo7QUFLSSxhQUFPLEVBQUVDLE9BTGI7QUFNSSxjQUFRLEVBQUUsQ0FBQyxDQU5mO0FBQUEsNkJBUUk7QUFBQSxnQ0FDSSxxRUFBQywrREFBRDtBQUFNLGFBQUcsRUFBRWpCLElBQVg7QUFBaUIsZ0JBQU0sRUFBRSxFQUF6QjtBQUE2QixlQUFLLEVBQUU7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQWFHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBMUNEOztHQUFNSixZOztLQUFBQSxZO0FBNENTQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxzQ0FBc0Msd0JBQXdCLDRCQUE0QixpQkFBaUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsNEJBQTRCLCtCQUErQixpQ0FBaUMsa0NBQWtDLEdBQUcsMkNBQTJDLGNBQWMsbUJBQW1CLDRDQUE0QyxHQUFHLDRDQUE0QyxzRUFBc0Usb0JBQW9CLDBCQUEwQixzQkFBc0Isa0JBQWtCLGdDQUFnQyw4QkFBOEIsZ0NBQWdDLGlCQUFpQixtQkFBbUIsR0FBRyxnREFBZ0QsMEJBQTBCLHNCQUFzQixrQkFBa0IsZ0JBQWdCLGtCQUFrQixHQUFHLHVEQUF1RCxxQkFBcUIsaUJBQWlCLHVCQUF1QixzQkFBc0IsNEJBQTRCLEdBQUcscUNBQXFDLGNBQWMsbUJBQW1CLDRDQUE0QyxHQUFHLHlDQUF5QywrQ0FBK0MsR0FBRyxPQUFPLHdKQUF3SixZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLGtEQUFrRCw0QkFBNEIsK0JBQStCLG1CQUFtQixrQ0FBa0MsbUJBQW1CLHNDQUFzQyxrQkFBa0IsdUJBQXVCLHFDQUFxQywrQkFBK0IseUNBQXlDLGtDQUFrQyxlQUFlLGdCQUFnQixxQkFBcUIseUlBQXlJLEtBQUssY0FBYyxrRUFBa0UsbURBQW1ELHNCQUFzQiwwQkFBMEIsdURBQXVELGtEQUFrRCxhQUFhLHNCQUFzQixvREFBb0Qsc0RBQXNELE9BQU8sb0JBQW9CLHlCQUF5QixvREFBb0QsMkJBQTJCLDRCQUE0QixnQ0FBZ0MsT0FBTyxLQUFLLEdBQUcsaUJBQWlCLGNBQWMsbUJBQW1CLGtJQUFrSSxlQUFlLGtKQUFrSixLQUFLLEdBQUcsNkJBQTZCLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLGlDQUFpQyx3QkFBd0IsNEJBQTRCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyw4QkFBOEIsdUNBQXVDLCtCQUErQixtQkFBbUIsa0NBQWtDLGlDQUFpQyxzQ0FBc0Msa0NBQWtDLDhCQUE4QixxQ0FBcUMsZ0NBQWdDLDJCQUEyQixrQ0FBa0MsOEJBQThCLGdNQUFnTSxvQkFBb0Isc0JBQXNCLHNCQUFzQix3QkFBd0IsdUJBQXVCLHlCQUF5Qix5QkFBeUIsd0dBQXdHLDhCQUE4Qix3QkFBd0IscUJBQXFCO0FBQ3B1SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsb2hCQUFrVDs7QUFFcFY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sb2hCQUFrVDtBQUN4VDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLG9oQkFBa1Q7O0FBRTVVOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQU8sSUFBTW1CLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FPRDtBQUFBLE1BTjNCWCxZQU0yQixRQU4zQkEsWUFNMkI7QUFBQSxNQUwzQk4sRUFLMkIsUUFMM0JBLEVBSzJCO0FBQUEsTUFKM0JDLFNBSTJCLFFBSjNCQSxTQUkyQjtBQUFBLE1BSDNCSSxVQUcyQixRQUgzQkEsVUFHMkI7QUFBQSxNQUYzQkksUUFFMkIsUUFGM0JBLFFBRTJCO0FBQUEsTUFEM0JDLE9BQzJCLFFBRDNCQSxPQUMyQjs7QUFDM0IsTUFBSVQsU0FBSixFQUFlO0FBQ1hTLFdBQU8sQ0FBQ1YsRUFBRCxFQUFLLFdBQUwsQ0FBUDtBQUNBSyxjQUFVLENBQUNMLEVBQUQsQ0FBVjtBQUNILEdBSEQsTUFHTyxJQUFJTSxZQUFZLElBQUlBLFlBQVksS0FBS04sRUFBckMsRUFBeUM7QUFDNUNTLFlBQVEsQ0FBQ1QsRUFBRCxDQUFSO0FBQ0FLLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDSCxHQUhNLE1BR0E7QUFDSEEsY0FBVSxDQUFDTCxFQUFELENBQVY7QUFDSDtBQUNKLENBakJNO0FBaUJMIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyRW50cnkubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBUYXNrYmFyRW50cnlQcm9wcyB9IGZyb20gJ0AvdHlwZXMvY29tcG9uZW50cy9TeXN0ZW0vVGFza2JhckVudHJ5JztcclxuXHJcbmltcG9ydCBJY29uIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vSWNvbic7XHJcbmltcG9ydCB7IGN5Y2xlV2luZG93U3RhdGUgfSBmcm9tICdAL3V0aWxzL3Rhc2tiYXInO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NQcm92aWRlcic7XHJcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyB0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUYXNrYmFyRW50cnk6IFJlYWN0LkZDPFRhc2tiYXJFbnRyeVByb3BzPiA9ICh7XHJcbiAgICBpY29uLFxyXG4gICAgaWQsXHJcbiAgICBtaW5pbWl6ZWQsXHJcbiAgICBuYW1lXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBmb3JlZ3JvdW5kLFxyXG4gICAgICAgIHNlc3Npb246IHsgZm9yZWdyb3VuZElkIH1cclxuICAgIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcclxuICAgIGNvbnN0IHsgbWluaW1pemUsIHJlc3RvcmUsIHRhc2tiYXJFbGVtZW50IH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcclxuICAgIGNvbnN0IHJlZkNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHRhc2tiYXJFbGVtZW50KGlkLCBlbGVtZW50KSwgW2lkXSk7XHJcbiAgICBjb25zdCBvbkJsdXIgPSAoKSA9PiBmb3JlZ3JvdW5kKCcnKTtcclxuICAgIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICBjeWNsZVdpbmRvd1N0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZvcmVncm91bmRJZCxcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgbWluaW1pemVkLFxyXG4gICAgICAgICAgICAgICAgZm9yZWdyb3VuZCxcclxuICAgICAgICAgICAgICAgIG1pbmltaXplLFxyXG4gICAgICAgICAgICAgICAgcmVzdG9yZVxyXG4gICAgICAgICAgICB9KSwgW2ZvcmVncm91bmRJZCwgaWQsIG1pbmltaXplZF1cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmxpIHsuLi50YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzfT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS50YXNrYmFyRW50cnl9ICR7Zm9yZWdyb3VuZElkID09PSBpZCAmJiBzdHlsZS5mb3JlZ3JvdW5kfWB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHJlZj17cmVmQ2FsbGJhY2t9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gc3JjPXtpY29ufSBoZWlnaHQ9ezE2fSB3aWR0aD17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+e25hbWV9PC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tiYXJFbnRyeTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVGFza2JhckVudHJ5X3Rhc2tiYXJFbnRyeV9fR1JtMW8ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luOiAwIDRweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItd2lkdGg6IDAgMCAycHggMDtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzc2YjllZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uVGFza2JhckVudHJ5X3Rhc2tiYXJFbnRyeV9fR1JtMW86aG92ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjQsIDAuNik7XFxufVxcbi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xbyBmaWd1cmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJTZWdvZVVJXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgY29sb3I6ICNlMWUxZTE7XFxufVxcbi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xbyBmaWd1cmUgaW1nIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfX0dSbTFvIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTI1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uVGFza2JhckVudHJ5X2ZvcmVncm91bmRfXzNORUx5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OSwgODksIDg5LCAwLjYpO1xcbn1cXG4uVGFza2JhckVudHJ5X2ZvcmVncm91bmRfXzNORUx5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMTUsIDExNSwgMC42KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUNpQkUsbUJBQUE7RUFDQSx1QkFBQTtFRGZBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBRUEsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCRWZlO0VGZ0JmLDZCQUFBO0FBTEY7QUFPRTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBRUEsdUNBQUE7QUFOSjtBQWNFO0VBQ0UsMkRBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtLQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFFQSxZQUFBO0VBRUEsY0FBQTtBQWZKO0FBaUJJO0VBQ0UscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtBQWhCTjtBQW1CSTtFQUNFLGdCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSx1QkFBQTtBQW5CTjs7QUF3QkE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUVBLHVDQUFBO0FBdEJGO0FBNkJFO0VBQ0UsMENBQUE7QUEzQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvbWl4aW5zJztcXG5AaW1wb3J0ICdAL3N0eWxlcy92YXJpYWJsZXMnO1xcblxcbi50YXNrYmFyRW50cnkge1xcbiAgQGluY2x1ZGUgdGV4dE92ZXJmbG93RWxsaXBzaXM7XFxuXFxuICBtaW4td2lkdGg6IDA7XFxuICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCk7XFxuICBtYXJnaW46IDAgNHB4O1xcblxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gIGJvcmRlci13aWR0aDogMCAwICR0aGlja0xpbmUgMDtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGhpZ2hsaWdodENvbG9yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYShcXG4gICAgICAwLFxcbiAgICAgIDAlLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIGhvdmVyLWxpZ2h0bmVzcyksXFxuICAgICAgbWFwLWdldCgkdGFza2Jhciwgb3BhY2l0eSlcXG4gICAgKTtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCAnU2Vnb2VVSScsICdIZWx2ZXRpY2EnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgZm9udC1zaXplKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpIC0gJHRoaWNrTGluZTtcXG5cXG4gICAgY29sb3I6IG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgdGV4dC1jb2xvcik7XFxuXFxuICAgIGltZyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICB3aWR0aDogbWFwLWdldCgkdGFza2JhckVudHJ5LCBpY29uLXdpZHRoKTtcXG4gICAgICBtYXJnaW46IDAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBpY29uLW1hcmdpbik7XFxuICAgIH1cXG5cXG4gICAgZmlnY2FwdGlvbiB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICB3aWR0aDogbWFwLWdldCgkdGFza2JhckVudHJ5LCB0ZXh0LXdpZHRoKTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvcmVncm91bmQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCA0cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAwLFxcbiAgICAwJSxcXG4gICAgbWFwLWdldCgkdGFza2JhciwgZm9yZWdyb3VuZC1saWdodG5lc3MpLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyLCBvcGFjaXR5KVxcbiAgKTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgIDAsXFxuICAgICAgMCUsXFxuICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItZm9yZWdyb3VuZC1saWdodG5lc3MpLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuXFxuQG1peGluIGJvdHRvbUxlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbVJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5AbWl4aW4gdG9wTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGhpZ2hsaWdodENvbG9yOiAjNzZiOWVkO1xcbiRoaWdobGlnaHRDb2xvcjI6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG5cXG4kdWlDb2xvcjE6IHJnYig1NSwgNTUsIDU1KTtcXG4kdWlDb2xvcjI6IGJsYWNrO1xcblxcbiRvZmZXaGl0ZTogcmdiKDIyNSwgMjI1LCAyMjUpO1xcblxcbiRtaW5pbWl6ZTogcmdiKDI1NSwgMTkwLCA0Nyk7XFxuJG1pbmltaXplX2FjdGl2ZTogcmdiKDE5MSwgMTQyLCAzNSk7XFxuJG1pbmltaXplX3RleHQ6IHJnYigxNTMsIDg3LCAwKTtcXG4kbWF4aW1pemU6IHJnYig0MCwgMjAyLCA2NSk7XFxuJG1heGltaXplX2FjdGl2ZTogcmdiKDMxLCAxNTMsIDQ5KTtcXG4kbWF4aW1pemVfdGV4dDogcmdiKDAsIDk5LCAwKTtcXG4kY2xvc2U6IHJnYigyNTUsIDg1LCA3OCk7XFxuJGNsb3NlX2FjdGl2ZTogcmdiKDE5MSwgNjQsIDU5KTtcXG4kY2xvc2VfdGV4dDogcmdiKDE1MywgMCwgMCk7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cXG4kZm9udFNpemU6IDEyLjVweDtcXG5cXG4kYmFzZVppbmRleDogMTAwMDtcXG4kemluZGV4TGV2ZWxTaXplOiAxMDA7XFxuJGljb25zWmluZGV4TGV2ZWw6IDE7XFxuJHdpbmRvd3NaaW5kZXhMZXZlbDogMjtcXG4kdGFza2JhclppbmRleExldmVsOiAzO1xcbiRmb3JlZ3JvdW5kWmluZGV4OiAoJGJhc2VaaW5kZXggKyAkd2luZG93c1ppbmRleExldmVsICogJHppbmRleExldmVsU2l6ZSkgK1xcbiAgKCR6aW5kZXhMZXZlbFNpemUgLyAyKTtcXG5cXG4kdGFza2JhckVudHJ5V2lkdGg6IDE2MHB4O1xcbiR0aXRsZWJhckhlaWdodDogMjJweDtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0YXNrYmFyRW50cnlcIjogXCJUYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xb1wiLFxuXHRcImZvcmVncm91bmRcIjogXCJUYXNrYmFyRW50cnlfZm9yZWdyb3VuZF9fM05FTHlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9UYXNrYmFyRW50cnkubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHR5cGUgeyBXaW5kb3dTdGF0ZUN5Y2xlciB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvdGFza2Jhcic7XHJcblxyXG5leHBvcnQgY29uc3QgY3ljbGVXaW5kb3dTdGF0ZSA9ICh7XHJcbiAgICBmb3JlZ3JvdW5kSWQsXHJcbiAgICBpZCxcclxuICAgIG1pbmltaXplZCxcclxuICAgIGZvcmVncm91bmQsXHJcbiAgICBtaW5pbWl6ZSxcclxuICAgIHJlc3RvcmVcclxufTogV2luZG93U3RhdGVDeWNsZXIpOiB2b2lkID0+IHtcclxuICAgIGlmIChtaW5pbWl6ZWQpIHtcclxuICAgICAgICByZXN0b3JlKGlkLCAnbWluaW1pemVkJyk7XHJcbiAgICAgICAgZm9yZWdyb3VuZChpZCk7XHJcbiAgICB9IGVsc2UgaWYgKGZvcmVncm91bmRJZCAmJiBmb3JlZ3JvdW5kSWQgPT09IGlkKSB7XHJcbiAgICAgICAgbWluaW1pemUoaWQpO1xyXG4gICAgICAgIGZvcmVncm91bmQoJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JlZ3JvdW5kKGlkKTtcclxuICAgIH1cclxufTtgIDFgIl0sInNvdXJjZVJvb3QiOiIifQ==