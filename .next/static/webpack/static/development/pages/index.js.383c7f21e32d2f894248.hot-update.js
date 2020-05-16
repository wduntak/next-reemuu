webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigation; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/wduntak/Projects/cms-datocms-app/components/navigation.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Navigation = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Navigation, _Component);\n\n  var _super = _createSuper(Navigation);\n\n  function Navigation() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navigation);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navigation, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var elmHamburger = document.querySelector(\".hamburger\");\n      var gNavItems = document.querySelectorAll(\".global-menu__item\");\n      var elmOverlay = document.querySelector(\".shape-overlays\");\n      var overlay = new ShapeOverlays(elmOverlay);\n    }\n  }, {\n    key: \"animateOverlay\",\n    value: function animateOverlay() {\n      if (overlay.isAnimating) {\n        return false;\n      }\n\n      overlay.toggle();\n\n      if (overlay.isOpened === true) {\n        elmHamburger.classList.add(\"is-opened-navi\");\n\n        for (var i = 0; i < gNavItems.length; i++) {\n          gNavItems[i].classList.add(\"is-opened\");\n        }\n      } else {\n        elmHamburger.classList.remove(\"is-opened-navi\");\n\n        for (var i = 0; i < gNavItems.length; i++) {\n          gNavItems[i].classList.remove(\"is-opened\");\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(\"div\", {\n        \"class\": \"hamburger hamburger--demo-6 js-hover\",\n        onClick: animateOverlay,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--01\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--01 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--02\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--02 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--03\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--03 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--cross01\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        \"class\": \"hamburger__line hamburger__line--cross02\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 17\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-5\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 19\n        }\n      }))), __jsx(\"div\", {\n        \"class\": \"global-menu\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        \"class\": \"global-menu__wrap\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 17\n        }\n      }, __jsx(\"a\", {\n        \"class\": \"global-menu__item global-menu__item--demo-6\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 19\n        }\n      }, \"Data Science\"), __jsx(\"a\", {\n        \"class\": \"global-menu__item global-menu__item--demo-6\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 19\n        }\n      }, \"Research\"), __jsx(\"a\", {\n        \"class\": \"global-menu__item global-menu__item--demo-6\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 19\n        }\n      }, \"Case Studies\"), __jsx(\"a\", {\n        \"class\": \"global-menu__item global-menu__item--demo-6\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 19\n        }\n      }, \"Contact\"))), __jsx(\"svg\", {\n        \"class\": \"shape-overlays\",\n        viewBox: \"0 0 100 100\",\n        preserveAspectRatio: \"none\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 15\n        }\n      }, __jsx(\"defs\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }\n      }, __jsx(\"linearGradient\", {\n        id: \"gradient1\",\n        x1: \"0%\",\n        y1: \"0%\",\n        x2: \"0%\",\n        y2: \"100%\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 19\n        }\n      }, __jsx(\"stop\", {\n        offset: \"0%\",\n        \"stop-color\": \"#00c99b\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }), __jsx(\"stop\", {\n        offset: \"100%\",\n        \"stop-color\": \"#ff0ea1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }\n      })), __jsx(\"linearGradient\", {\n        id: \"gradient2\",\n        x1: \"0%\",\n        y1: \"0%\",\n        x2: \"0%\",\n        y2: \"100%\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 19\n        }\n      }, __jsx(\"stop\", {\n        offset: \"0%\",\n        \"stop-color\": \"#ffd392\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }\n      }), __jsx(\"stop\", {\n        offset: \"100%\",\n        \"stop-color\": \"#ff3898\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }\n      })), __jsx(\"linearGradient\", {\n        id: \"gradient3\",\n        x1: \"0%\",\n        y1: \"0%\",\n        x2: \"0%\",\n        y2: \"100%\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 19\n        }\n      }, __jsx(\"stop\", {\n        offset: \"0%\",\n        \"stop-color\": \"#110046\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }\n      }), __jsx(\"stop\", {\n        offset: \"100%\",\n        \"stop-color\": \"#32004a\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }\n      }))), __jsx(\"path\", {\n        \"class\": \"shape-overlays__path\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 17\n        }\n      }), __jsx(\"path\", {\n        \"class\": \"shape-overlays__path\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 17\n        }\n      }), __jsx(\"path\", {\n        \"class\": \"shape-overlays__path\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 17\n        }\n      })));\n    }\n  }]);\n\n  return Navigation;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n\nvar ShapeOverlays = /*#__PURE__*/function () {\n  function ShapeOverlays(elm) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ShapeOverlays);\n\n    this.elm = elm;\n    this.path = elm.querySelectorAll(\"path\");\n    this.numPoints = 10;\n    this.duration = 900;\n    this.delayPointsArray = [];\n    this.delayPointsMax = 300;\n    this.delayPerPath = 250;\n    this.timeStart = Date.now();\n    this.isOpened = false;\n    this.isAnimating = false;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ShapeOverlays, [{\n    key: \"toggle\",\n    value: function toggle() {\n      this.isAnimating = true;\n\n      for (var i = 0; i < this.numPoints; i++) {\n        this.delayPointsArray[i] = Math.random() * this.delayPointsMax;\n      }\n\n      if (this.isOpened === false) {\n        this.open();\n      } else {\n        this.close();\n      }\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.isOpened = true;\n      this.elm.classList.add(\"is-opened\");\n      this.timeStart = Date.now();\n      this.renderLoop();\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.isOpened = false;\n      this.elm.classList.remove(\"is-opened\");\n      this.timeStart = Date.now();\n      this.renderLoop();\n    }\n  }, {\n    key: \"updatePath\",\n    value: function updatePath(time) {\n      var points = [];\n\n      for (var i = 0; i < this.numPoints; i++) {\n        points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100;\n      }\n\n      var str = \"\";\n      str += this.isOpened ? \"M 0 0 V \".concat(points[0]) : \"M 0 \".concat(points[0]);\n\n      for (var i = 0; i < this.numPoints - 1; i++) {\n        var p = (i + 1) / (this.numPoints - 1) * 100;\n        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;\n        str += \"C \".concat(cp, \" \").concat(points[i], \" \").concat(cp, \" \").concat(points[i + 1], \" \").concat(p, \" \").concat(points[i + 1], \" \");\n      }\n\n      str += this.isOpened ? \"V 100 H 0\" : \"V 0 H 0\";\n      return str;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.isOpened) {\n        for (var i = 0; i < this.path.length; i++) {\n          this.path[i].setAttribute(\"d\", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));\n        }\n      } else {\n        for (var i = 0; i < this.path.length; i++) {\n          this.path[i].setAttribute(\"d\", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));\n        }\n      }\n    }\n  }, {\n    key: \"renderLoop\",\n    value: function renderLoop() {\n      var _this = this;\n\n      this.render();\n\n      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {\n        requestAnimationFrame(function () {\n          _this.renderLoop();\n        });\n      } else {\n        this.isAnimating = false;\n      }\n    }\n  }]);\n\n  return ShapeOverlays;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanM/OTMwOCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiZWxtSGFtYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ05hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImVsbU92ZXJsYXkiLCJvdmVybGF5IiwiU2hhcGVPdmVybGF5cyIsImlzQW5pbWF0aW5nIiwidG9nZ2xlIiwiaXNPcGVuZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpIiwibGVuZ3RoIiwicmVtb3ZlIiwiYW5pbWF0ZU92ZXJsYXkiLCJDb21wb25lbnQiLCJlbG0iLCJwYXRoIiwibnVtUG9pbnRzIiwiZHVyYXRpb24iLCJkZWxheVBvaW50c0FycmF5IiwiZGVsYXlQb2ludHNNYXgiLCJkZWxheVBlclBhdGgiLCJ0aW1lU3RhcnQiLCJEYXRlIiwibm93IiwiTWF0aCIsInJhbmRvbSIsIm9wZW4iLCJjbG9zZSIsInJlbmRlckxvb3AiLCJ0aW1lIiwicG9pbnRzIiwiZWFzZSIsImN1YmljSW5PdXQiLCJtaW4iLCJtYXgiLCJzdHIiLCJwIiwiY3AiLCJzZXRBdHRyaWJ1dGUiLCJ1cGRhdGVQYXRoIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7O3dDQUNHO0FBQ2hCLFVBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXJCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGdCQUFULENBQTBCLG9CQUExQixDQUFsQjtBQUNBLFVBQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFuQjtBQUNBLFVBQU1JLE9BQU8sR0FBRyxJQUFJQyxhQUFKLENBQWtCRixVQUFsQixDQUFoQjtBQUNIOzs7cUNBRWdCO0FBQ2IsVUFB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QyxlQUFLTSxJQUFMLENBQVVOLENBQVYsRUFBYTZCLFlBQWIsQ0FDRSxHQURGLEVBRUUsS0FBS0MsVUFBTCxDQUNFakIsSUFBSSxDQUFDQyxHQUFMLE1BQ0csS0FBS0YsU0FBTCxHQUFpQixLQUFLRCxZQUFMLElBQXFCLEtBQUtMLElBQUwsQ0FBVUwsTUFBVixHQUFtQkQsQ0FBbkIsR0FBdUIsQ0FBNUMsQ0FEcEIsQ0FERixDQUZGO0FBT0Q7QUFDRjtBQUNGOzs7aUNBQ1k7QUFBQTs7QUFDWCxXQUFLK0IsTUFBTDs7QUFDQSxVQUNFbEIsSUFBSSxDQUFDQyxHQUFMLEtBQWEsS0FBS0YsU0FBbEIsR0FDQSxLQUFLSixRQUFMLEdBQ0UsS0FBS0csWUFBTCxJQUFxQixLQUFLTCxJQUFMLENBQVVMLE1BQVYsR0FBbUIsQ0FBeEMsQ0FERixHQUVFLEtBQUtTLGNBSlQsRUFLRTtBQUNBc0IsNkJBQXFCLENBQUMsWUFBTTtBQUMxQixlQUFJLENBQUNiLFVBQUw7QUFDRCxTQUZvQixDQUFyQjtBQUdELE9BVEQsTUFTTztBQUNMLGFBQUt4QixXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGVsbUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuICAgICAgICBjb25zdCBnTmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdsb2JhbC1tZW51X19pdGVtXCIpO1xuICAgICAgICBjb25zdCBlbG1PdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGFwZS1vdmVybGF5c1wiKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBTaGFwZU92ZXJsYXlzKGVsbU92ZXJsYXkpO1xuICAgIH1cblxuICAgIGFuaW1hdGVPdmVybGF5KCkge1xuICAgICAgICBpZiAob3ZlcmxheS5pc0FuaW1hdGluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3ZlcmxheS50b2dnbGUoKTtcbiAgICAgICAgaWYgKG92ZXJsYXkuaXNPcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgZWxtSGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuZWQtbmF2aVwiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdOYXZJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsbUhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkLW5hdmlcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ05hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBnTmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlciBoYW1idXJnZXItLWRlbW8tNiBqcy1ob3ZlclwiIG9uQ2xpY2s9e2FuaW1hdGVPdmVybGF5fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyX19saW5lIGhhbWJ1cmdlcl9fbGluZS0tMDFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXJfX2xpbmUtaW4gaGFtYnVyZ2VyX19saW5lLWluLS0wMSBoYW1idXJnZXJfX2xpbmUtaW4tLWRlbW8tNVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXJfX2xpbmUgaGFtYnVyZ2VyX19saW5lLS0wMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlcl9fbGluZS1pbiBoYW1idXJnZXJfX2xpbmUtaW4tLTAyIGhhbWJ1cmdlcl9fbGluZS1pbi0tZGVtby01XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlcl9fbGluZSBoYW1idXJnZXJfX2xpbmUtLTAzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyX19saW5lLWluIGhhbWJ1cmdlcl9fbGluZS1pbi0tMDMgaGFtYnVyZ2VyX19saW5lLWluLS1kZW1vLTVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyX19saW5lIGhhbWJ1cmdlcl9fbGluZS0tY3Jvc3MwMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlcl9fbGluZS1pbiBoYW1idXJnZXJfX2xpbmUtaW4tLWNyb3NzMDEgaGFtYnVyZ2VyX19saW5lLWluLS1kZW1vLTVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyX19saW5lIGhhbWJ1cmdlcl9fbGluZS0tY3Jvc3MwMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbWJ1cmdlcl9fbGluZS1pbiBoYW1idXJnZXJfX2xpbmUtaW4tLWNyb3NzMDIgaGFtYnVyZ2VyX19saW5lLWluLS1kZW1vLTVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtbWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtbWVudV9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbG9iYWwtbWVudV9faXRlbSBnbG9iYWwtbWVudV9faXRlbS0tZGVtby02XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEYXRhIFNjaWVuY2VcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2xvYmFsLW1lbnVfX2l0ZW0gZ2xvYmFsLW1lbnVfX2l0ZW0tLWRlbW8tNlwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVzZWFyY2hcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2xvYmFsLW1lbnVfX2l0ZW0gZ2xvYmFsLW1lbnVfX2l0ZW0tLWRlbW8tNlwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FzZSBTdHVkaWVzXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdsb2JhbC1tZW51X19pdGVtIGdsb2JhbC1tZW51X19pdGVtLS1kZW1vLTZcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNoYXBlLW92ZXJsYXlzXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ3JhZGllbnQxXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPVwiIzAwYzk5YlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wLWNvbG9yPVwiI2ZmMGVhMVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ3JhZGllbnQyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPVwiI2ZmZDM5MlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wLWNvbG9yPVwiI2ZmMzg5OFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ3JhZGllbnQzXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPVwiIzExMDA0NlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wLWNvbG9yPVwiIzMyMDA0YVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cInNoYXBlLW92ZXJsYXlzX19wYXRoXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic2hhcGUtb3ZlcmxheXNfX3BhdGhcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJzaGFwZS1vdmVybGF5c19fcGF0aFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFNoYXBlT3ZlcmxheXMge1xuICBjb25zdHJ1Y3RvcihlbG0pIHtcbiAgICB0aGlzLmVsbSA9IGVsbTtcbiAgICB0aGlzLnBhdGggPSBlbG0ucXVlcnlTZWxlY3RvckFsbChcInBhdGhcIik7XG4gICAgdGhpcy5udW1Qb2ludHMgPSAxMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gOTAwO1xuICAgIHRoaXMuZGVsYXlQb2ludHNBcnJheSA9IFtdO1xuICAgIHRoaXMuZGVsYXlQb2ludHNNYXggPSAzMDA7XG4gICAgdGhpcy5kZWxheVBlclBhdGggPSAyNTA7XG4gICAgdGhpcy50aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xuICAgICAgdGhpcy5kZWxheVBvaW50c0FycmF5W2ldID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuZGVsYXlQb2ludHNNYXg7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzT3BlbmVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgb3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlbmVkXCIpO1xuICAgIHRoaXMudGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnJlbmRlckxvb3AoKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5lbG0uY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5lZFwiKTtcbiAgICB0aGlzLnRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5yZW5kZXJMb29wKCk7XG4gIH1cbiAgdXBkYXRlUGF0aCh0aW1lKSB7XG4gICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICBwb2ludHNbaV0gPVxuICAgICAgICAoMSAtXG4gICAgICAgICAgZWFzZS5jdWJpY0luT3V0KFxuICAgICAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgICAgIE1hdGgubWF4KHRpbWUgLSB0aGlzLmRlbGF5UG9pbnRzQXJyYXlbaV0sIDApIC8gdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkpICpcbiAgICAgICAgMTAwO1xuICAgIH1cblxuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIHN0ciArPSB0aGlzLmlzT3BlbmVkID8gYE0gMCAwIFYgJHtwb2ludHNbMF19YCA6IGBNIDAgJHtwb2ludHNbMF19YDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBwID0gKChpICsgMSkgLyAodGhpcy5udW1Qb2ludHMgLSAxKSkgKiAxMDA7XG4gICAgICBjb25zdCBjcCA9IHAgLSAoKDEgLyAodGhpcy5udW1Qb2ludHMgLSAxKSkgKiAxMDApIC8gMjtcbiAgICAgIHN0ciArPSBgQyAke2NwfSAke3BvaW50c1tpXX0gJHtjcH0gJHtwb2ludHNbaSArIDFdfSAke3B9ICR7XG4gICAgICAgIHBvaW50c1tpICsgMV1cbiAgICAgIH0gYDtcbiAgICB9XG4gICAgc3RyICs9IHRoaXMuaXNPcGVuZWQgPyBgViAxMDAgSCAwYCA6IGBWIDAgSCAwYDtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5pc09wZW5lZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYXRoW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhdGgoRGF0ZS5ub3coKSAtICh0aGlzLnRpbWVTdGFydCArIHRoaXMuZGVsYXlQZXJQYXRoICogaSkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucGF0aFtpXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgdGhpcy51cGRhdGVQYXRoKFxuICAgICAgICAgICAgRGF0ZS5ub3coKSAtXG4gICAgICAgICAgICAgICh0aGlzLnRpbWVTdGFydCArIHRoaXMuZGVsYXlQZXJQYXRoICogKHRoaXMucGF0aC5sZW5ndGggLSBpIC0gMSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW5kZXJMb29wKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgaWYgKFxuICAgICAgRGF0ZS5ub3coKSAtIHRoaXMudGltZVN0YXJ0IDxcbiAgICAgIHRoaXMuZHVyYXRpb24gK1xuICAgICAgICB0aGlzLmRlbGF5UGVyUGF0aCAqICh0aGlzLnBhdGgubGVuZ3RoIC0gMSkgK1xuICAgICAgICB0aGlzLmRlbGF5UG9pbnRzTWF4XG4gICAgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlckxvb3AoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

})