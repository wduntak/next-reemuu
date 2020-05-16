webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigation; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/wduntak/Projects/cms-datocms-app/components/navigation.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Navigation = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navigation, _Component);\n\n  var _super = _createSuper(Navigation);\n\n  function Navigation() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navigation);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"animateOverlay\", function () {\n      var elmHamburger = document.querySelector(\".hamburger\");\n      var gNavItems = document.querySelectorAll(\".global-menu__item\");\n      var elmOverlay = document.querySelector(\".shape-overlays\");\n      var overlay = new ShapeOverlays(elmOverlay);\n\n      if (overlay.isAnimating) {\n        return false;\n      }\n\n      overlay.toggle();\n\n      if (overlay.isOpened === true) {\n        elmHamburger.classList.add(\"is-opened-navi\");\n\n        for (var i = 0; i < gNavItems.length; i++) {\n          gNavItems[i].classList.add(\"is-opened\");\n        }\n      } else {\n        elmHamburger.classList.remove(\"is-opened-navi\");\n\n        for (var i = 0; i < gNavItems.length; i++) {\n          gNavItems[i].classList.remove(\"is-opened\");\n        }\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navigation, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(\"div\", {\n        \"class\": \"hamburger hamburger--demo-6 js-hover\",\n        onClick: this.animateOverlay,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--01\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--01 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--02\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--02 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--03\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--03 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--cross01\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--cross02\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 19\n        }\n      }))), __jsx(\"div\", {\n        \"class\": \"global-menu\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"global-menu__wrap\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      }, __jsx(\"a\", {\n        \"class\": \"global-menu__item global-menu__item--demo-6\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 19\n        }\n      }, \"Data Science\"), __jsx(\"a\", {\n        \"class\": \"global-menu__item global-menu__item--demo-6\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 19\n        }\n      }, \"Research\"), __jsx(\"a\", {\n        \"class\": \"global-menu__item global-menu__item--demo-6\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 19\n        }\n      }, \"Case Studies\"), __jsx(\"a\", {\n        \"class\": \"global-menu__item global-menu__item--demo-6\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 19\n        }\n      }, \"Contact\"))), __jsx(\"svg\", {\n        \"class\": \"shape-overlays\",\n        viewBox: \"0 0 100 100\",\n        preserveAspectRatio: \"none\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 15\n        }\n      }, __jsx(\"defs\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 17\n        }\n      }, __jsx(\"linearGradient\", {\n        id: \"gradient1\",\n        x1: \"0%\",\n        y1: \"0%\",\n        x2: \"0%\",\n        y2: \"100%\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 19\n        }\n      }, __jsx(\"stop\", {\n        offset: \"0%\",\n        stopColor: \"#00c99b\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }\n      }), __jsx(\"stop\", {\n        offset: \"100%\",\n        stopColor: \"#ff0ea1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }\n      })), __jsx(\"linearGradient\", {\n        id: \"gradient2\",\n        x1: \"0%\",\n        y1: \"0%\",\n        x2: \"0%\",\n        y2: \"100%\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 19\n        }\n      }, __jsx(\"stop\", {\n        offset: \"0%\",\n        stopColor: \"#ffd392\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 21\n        }\n      }), __jsx(\"stop\", {\n        offset: \"100%\",\n        stopColor: \"#ff3898\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }\n      })), __jsx(\"linearGradient\", {\n        id: \"gradient3\",\n        x1: \"0%\",\n        y1: \"0%\",\n        x2: \"0%\",\n        y2: \"100%\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 19\n        }\n      }, __jsx(\"stop\", {\n        offset: \"0%\",\n        stopColor: \"#110046\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 21\n        }\n      }), __jsx(\"stop\", {\n        offset: \"100%\",\n        stopColor: \"#32004a\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }\n      }))), __jsx(\"path\", {\n        \"class\": \"shape-overlays__path\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 17\n        }\n      }), __jsx(\"path\", {\n        \"class\": \"shape-overlays__path\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 17\n        }\n      }), __jsx(\"path\", {\n        \"class\": \"shape-overlays__path\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 17\n        }\n      })));\n    }\n  }]);\n\n  return Navigation;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\nvar ShapeOverlays = /*#__PURE__*/function () {\n  function ShapeOverlays(elm) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ShapeOverlays);\n\n    this.elm = elm;\n    this.path = elm.querySelectorAll(\"path\");\n    this.numPoints = 10;\n    this.duration = 900;\n    this.delayPointsArray = [];\n    this.delayPointsMax = 300;\n    this.delayPerPath = 250;\n    this.timeStart = Date.now();\n    this.isOpened = false;\n    this.isAnimating = false;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ShapeOverlays, [{\n    key: \"toggle\",\n    value: function toggle() {\n      this.isAnimating = true;\n\n      for (var i = 0; i < this.numPoints; i++) {\n        this.delayPointsArray[i] = Math.random() * this.delayPointsMax;\n      }\n\n      if (this.isOpened === false) {\n        this.open();\n      } else {\n        this.close();\n      }\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.isOpened = true;\n      this.elm.classList.add(\"is-opened\");\n      this.timeStart = Date.now();\n      this.renderLoop();\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.isOpened = false;\n      this.elm.classList.remove(\"is-opened\");\n      this.timeStart = Date.now();\n      this.renderLoop();\n    }\n  }, {\n    key: \"updatePath\",\n    value: function updatePath(time) {\n      var points = [];\n\n      for (var i = 0; i < this.numPoints; i++) {\n        points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100;\n      }\n\n      var str = \"\";\n      str += this.isOpened ? \"M 0 0 V \".concat(points[0]) : \"M 0 \".concat(points[0]);\n\n      for (var i = 0; i < this.numPoints - 1; i++) {\n        var p = (i + 1) / (this.numPoints - 1) * 100;\n        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;\n        str += \"C \".concat(cp, \" \").concat(points[i], \" \").concat(cp, \" \").concat(points[i + 1], \" \").concat(p, \" \").concat(points[i + 1], \" \");\n      }\n\n      str += this.isOpened ? \"V 100 H 0\" : \"V 0 H 0\";\n      return str;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.isOpened) {\n        for (var i = 0; i < this.path.length; i++) {\n          this.path[i].setAttribute(\"d\", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));\n        }\n      } else {\n        for (var i = 0; i < this.path.length; i++) {\n          this.path[i].setAttribute(\"d\", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));\n        }\n      }\n    }\n  }, {\n    key: \"renderLoop\",\n    value: function renderLoop() {\n      var _this2 = this;\n\n      this.render();\n\n      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {\n        requestAnimationFrame(function () {\n          _this2.renderLoop();\n        });\n      } else {\n        this.isAnimating = false;\n      }\n    }\n  }]);\n\n  return ShapeOverlays;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanM/OTMwOCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiZWxtSGFtYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ05hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImVsbU92ZXJsYXkiLCJvdmVybGF5IiwiU2hhcGVPdmVybGF5cyIsImlzQW5pbWF0aW5nIiwidG9nZ2xlIiwiaXNPcGVuZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpIiwibGVuZ3RoIiwicmVtb3ZlIiwiYW5pbWF0ZU92ZXJsYXkiLCJDb21wb25lbnQiLCJlbG0iLCJwYXRoIiwibnVtUG9pbnRzIiwiZHVyYXRpb24iLCJkZWxheVBvaW50c0FycmF5IiwiZGVsYXlQb2ludHNNYXgiLCJkZWxheVBlclBhdGgiLCJ0aW1lU3RhcnQiLCJEYXRlIiwibm93IiwiTWF0aCIsInJhbmRvbSIsIm9wZW4iLCJjbG9zZSIsInJlbmRlckxvb3AiLCJ0aW1lIiwicG9pbnRzIiwiZWFzZSIsImN1YmljSW5PdXQiLCJtaW4iLCJtYXgiLCJzdHIiLCJwIiwiY3AiLCJzZXRBdHRyaWJ1dGUiLCJ1cGRhdGVQYXRoIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7Ozt5TkFDQSxZQUFNO0FBQ25CLFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXJCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGdCQUFULENBQTBCLG9CQUExQixDQUFsQjtBQUNBLFVBQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFuQjtBQUNBLFVBQU1JLE9BQU8sR0FBRyxJQUFJQyxhQUFKLENBQWtCRixVQUFsQixDQUFoQjs7QUFDQSxVQUFJ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Q0FBVUwsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMsZUFBS00sSUFBTCxDQUFVTixDQUFWLEVBQWE2QixZQUFiLENBQ0UsR0FERixFQUVFLEtBQUtDLFVBQUwsQ0FDRWpCLElBQUksQ0FBQ0MsR0FBTCxNQUNHLEtBQUtGLFNBQUwsR0FBaUIsS0FBS0QsWUFBTCxJQUFxQixLQUFLTCxJQUFMLENBQVVMLE1BQVYsR0FBbUJELENBQW5CLEdBQXVCLENBQTVDLENBRHBCLENBREYsQ0FGRjtBQU9EO0FBQ0Y7QUFDRjs7O2lDQUNZO0FBQUE7O0FBQ1gsV0FBSytCLE1BQUw7O0FBQ0EsVUFDRWxCLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQUtGLFNBQWxCLEdBQ0EsS0FBS0osUUFBTCxHQUNFLEtBQUtHLFlBQUwsSUFBcUIsS0FBS0wsSUFBTCxDQUFVTCxNQUFWLEdBQW1CLENBQXhDLENBREYsR0FFRSxLQUFLUyxjQUpULEVBS0U7QUFDQXNCLDZCQUFxQixDQUFDLFlBQU07QUFDMUIsZ0JBQUksQ0FBQ2IsVUFBTDtBQUNELFNBRm9CLENBQXJCO0FBR0QsT0FURCxNQVNPO0FBQ0wsYUFBS3hCLFdBQUwsR0FBbUIsS0FBbkI7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHsgICAgXG4gICAgYW5pbWF0ZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsbUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuICAgICAgICBjb25zdCBnTmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdsb2JhbC1tZW51X19pdGVtXCIpO1xuICAgICAgICBjb25zdCBlbG1PdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGFwZS1vdmVybGF5c1wiKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBTaGFwZU92ZXJsYXlzKGVsbU92ZXJsYXkpO1xuICAgICAgICBpZiAob3ZlcmxheS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG92ZXJsYXkudG9nZ2xlKCk7XG4gICAgICAgIGlmIChvdmVybGF5LmlzT3BlbmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBlbG1IYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcImlzLW9wZW5lZC1uYXZpXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbUhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkLW5hdmlcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdOYXZJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdOYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlciBoYW1idXJnZXItLWRlbW8tNiBqcy1ob3ZlclwiIG9uQ2xpY2s9e3RoaXMuYW5pbWF0ZU92ZXJsYXl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXJfX2xpbmUgaGFtYnVyZ2VyX19saW5lLS0wMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlcl9fbGluZS1pbiBoYW1idXJnZXJfX2xpbmUtaW4tLTAxIGhhbWJ1cmdlcl9fbGluZS1pbi0tZGVtby01XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlcl9fbGluZSBoYW1idXJnZXJfX2xpbmUtLTAyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyX19saW5lLWluIGhhbWJ1cmdlcl9fbGluZS1pbi0tMDIgaGFtYnVyZ2VyX19saW5lLWluLS1kZW1vLTVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyX19saW5lIGhhbWJ1cmdlcl9fbGluZS0tMDNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXJfX2xpbmUtaW4gaGFtYnVyZ2VyX19saW5lLWluLS0wMyBoYW1idXJnZXJfX2xpbmUtaW4tLWRlbW8tNVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXJfX2xpbmUgaGFtYnVyZ2VyX19saW5lLS1jcm9zczAxXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyX19saW5lLWluIGhhbWJ1cmdlcl9fbGluZS1pbi0tY3Jvc3MwMSBoYW1idXJnZXJfX2xpbmUtaW4tLWRlbW8tNVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXJfX2xpbmUgaGFtYnVyZ2VyX19saW5lLS1jcm9zczAyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyX19saW5lLWluIGhhbWJ1cmdlcl9fbGluZS1pbi0tY3Jvc3MwMiBoYW1idXJnZXJfX2xpbmUtaW4tLWRlbW8tNVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdsb2JhbC1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdsb2JhbC1tZW51X193cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdsb2JhbC1tZW51X19pdGVtIGdsb2JhbC1tZW51X19pdGVtLS1kZW1vLTZcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERhdGEgU2NpZW5jZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbG9iYWwtbWVudV9faXRlbSBnbG9iYWwtbWVudV9faXRlbS0tZGVtby02XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZXNlYXJjaFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbG9iYWwtbWVudV9faXRlbSBnbG9iYWwtbWVudV9faXRlbS0tZGVtby02XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDYXNlIFN0dWRpZXNcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2xvYmFsLW1lbnVfX2l0ZW0gZ2xvYmFsLW1lbnVfX2l0ZW0tLWRlbW8tNlwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzPVwic2hhcGUtb3ZlcmxheXNcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJncmFkaWVudDFcIlxuICAgICAgICAgICAgICAgICAgICB4MT1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMwMGM5OWJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiI2ZmMGVhMVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ3JhZGllbnQyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjZmZkMzkyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiNmZjM4OThcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImdyYWRpZW50M1wiXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiIzExMDA0NlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjMzIwMDRhXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic2hhcGUtb3ZlcmxheXNfX3BhdGhcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJzaGFwZS1vdmVybGF5c19fcGF0aFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cInNoYXBlLW92ZXJsYXlzX19wYXRoXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgU2hhcGVPdmVybGF5cyB7XG4gIGNvbnN0cnVjdG9yKGVsbSkge1xuICAgIHRoaXMuZWxtID0gZWxtO1xuICAgIHRoaXMucGF0aCA9IGVsbS5xdWVyeVNlbGVjdG9yQWxsKFwicGF0aFwiKTtcbiAgICB0aGlzLm51bVBvaW50cyA9IDEwO1xuICAgIHRoaXMuZHVyYXRpb24gPSA5MDA7XG4gICAgdGhpcy5kZWxheVBvaW50c0FycmF5ID0gW107XG4gICAgdGhpcy5kZWxheVBvaW50c01heCA9IDMwMDtcbiAgICB0aGlzLmRlbGF5UGVyUGF0aCA9IDI1MDtcbiAgICB0aGlzLnRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgfVxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICB0aGlzLmRlbGF5UG9pbnRzQXJyYXlbaV0gPSBNYXRoLnJhbmRvbSgpICogdGhpcy5kZWxheVBvaW50c01heDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNPcGVuZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuZWxtLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuZWRcIik7XG4gICAgdGhpcy50aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucmVuZGVyTG9vcCgpO1xuICB9XG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVsbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkXCIpO1xuICAgIHRoaXMudGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnJlbmRlckxvb3AoKTtcbiAgfVxuICB1cGRhdGVQYXRoKHRpbWUpIHtcbiAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIHBvaW50c1tpXSA9XG4gICAgICAgICgxIC1cbiAgICAgICAgICBlYXNlLmN1YmljSW5PdXQoXG4gICAgICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgICAgTWF0aC5tYXgodGltZSAtIHRoaXMuZGVsYXlQb2ludHNBcnJheVtpXSwgMCkgLyB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSkgKlxuICAgICAgICAxMDA7XG4gICAgfVxuXG4gICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgc3RyICs9IHRoaXMuaXNPcGVuZWQgPyBgTSAwIDAgViAke3BvaW50c1swXX1gIDogYE0gMCAke3BvaW50c1swXX1gO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHMgLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IHAgPSAoKGkgKyAxKSAvICh0aGlzLm51bVBvaW50cyAtIDEpKSAqIDEwMDtcbiAgICAgIGNvbnN0IGNwID0gcCAtICgoMSAvICh0aGlzLm51bVBvaW50cyAtIDEpKSAqIDEwMCkgLyAyO1xuICAgICAgc3RyICs9IGBDICR7Y3B9ICR7cG9pbnRzW2ldfSAke2NwfSAke3BvaW50c1tpICsgMV19ICR7cH0gJHtcbiAgICAgICAgcG9pbnRzW2kgKyAxXVxuICAgICAgfSBgO1xuICAgIH1cbiAgICBzdHIgKz0gdGhpcy5pc09wZW5lZCA/IGBWIDEwMCBIIDBgIDogYFYgMCBIIDBgO1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnBhdGhbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIHRoaXMudXBkYXRlUGF0aChEYXRlLm5vdygpIC0gKHRoaXMudGltZVN0YXJ0ICsgdGhpcy5kZWxheVBlclBhdGggKiBpKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYXRoW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhdGgoXG4gICAgICAgICAgICBEYXRlLm5vdygpIC1cbiAgICAgICAgICAgICAgKHRoaXMudGltZVN0YXJ0ICsgdGhpcy5kZWxheVBlclBhdGggKiAodGhpcy5wYXRoLmxlbmd0aCAtIGkgLSAxKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbmRlckxvb3AoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICBpZiAoXG4gICAgICBEYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhcnQgPFxuICAgICAgdGhpcy5kdXJhdGlvbiArXG4gICAgICAgIHRoaXMuZGVsYXlQZXJQYXRoICogKHRoaXMucGF0aC5sZW5ndGggLSAxKSArXG4gICAgICAgIHRoaXMuZGVsYXlQb2ludHNNYXhcbiAgICApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyTG9vcCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

})