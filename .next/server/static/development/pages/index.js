module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/alert.js":
/*!*****************************!*\
  !*** ./components/alert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/alert.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Alert({
  preview
}) {
  if (preview) {
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx(_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "py-2 text-center text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "This is page is a preview.", " ", __jsx("a", {
      href: "/api/exit-preview",
      className: "underline hover:text-cyan duration-200 transition-colors",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, "Click here"), " ", "to exit preview mode."))));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  } // return (
  //   <div
  //     className={cn('border-b', {
  //       'bg-accent-7 border-accent-7 text-white': preview,
  //       'bg-accent-1 border-accent-2': !preview,
  //     })}
  //   >
  //     <Container>
  //       <div className="py-2 text-center text-sm">
  //         {preview ? (
  //           <>
  //             This is page is a preview.{' '}
  //             <a
  //               href="/api/exit-preview"
  //               className="underline hover:text-cyan duration-200 transition-colors"
  //             >
  //               Click here
  //             </a>{' '}
  //             to exit preview mode.
  //           </>
  //         ) : (
  //           <>
  //             The source code for this blog is{' '}
  //             <a
  //               href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
  //               className="underline hover:text-success duration-200 transition-colors"
  //             >
  //               available on GitHub
  //             </a>
  //             .
  //           </>
  //         )}
  //       </div>
  //     </Container>
  //   </div>
  // )

}

/***/ }),

/***/ "./components/avatar.js":
/*!******************************!*\
  !*** ./components/avatar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/avatar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Avatar({
  name,
  picture
}) {
  return __jsx("div", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: picture.url,
    className: "w-12 h-12 rounded-full mr-4",
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "text-xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, name));
}

/***/ }),

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Container({
  children
}) {
  return __jsx("div", {
    className: "container mx-auto px-5 relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 10
    }
  }, children);
}

/***/ }),

/***/ "./components/cover-image.js":
/*!***********************************!*\
  !*** ./components/cover-image.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datocms */ "react-datocms");
/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datocms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/cover-image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function CoverImage({
  title,
  responsiveImage,
  slug
}) {
  const image = __jsx(react_datocms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    data: _objectSpread(_objectSpread({}, responsiveImage), {}, {
      alt: `Cover Image for ${title}`
    }),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('shadow-small', {
      'hover:shadow-medium transition-shadow duration-200': slug
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });

  return __jsx("div", {
    className: "-mx-5 sm:mx-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, slug ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: `/posts/${slug}`,
    href: "/posts/[slug]",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("a", {
    "aria-label": title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, image)) : image);
}

/***/ }),

/***/ "./components/date.js":
/*!****************************!*\
  !*** ./components/date.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Date; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/date.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Date({
  dateString
}) {
  const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["parseISO"])(dateString);
  return __jsx("time", {
    dateTime: dateString,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, 'LLLL	d, yyyy'));
}

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Footer() {
  return __jsx("footer", {
    className: "bg-accent-1 border-t border-accent-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "py-28 flex flex-col lg:flex-row items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "Statically Generated with Next.js."), __jsx("div", {
    className: "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://nextjs.org/docs/basic-features/pages",
    className: "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Read Documentation"), __jsx("a", {
    href: `https://github.com/zeit/next.js/tree/canary/examples/${_lib_constants__WEBPACK_IMPORTED_MODULE_2__["EXAMPLE_PATH"]}`,
    className: "mx-3 font-bold hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "View on GitHub")))));
}

/***/ }),

/***/ "./components/hero-intro.js":
/*!**********************************!*\
  !*** ./components/hero-intro.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroIntro; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/hero-intro.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class HeroIntro extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    new Slideshow(document.querySelector('.content'));
  }

  render() {
    return __jsx("section", {
      className: "jsx-1853126630" + " " + "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-1853126630" + " " + "content__slide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1853126630" + " " + "content__img first",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-1853126630" + " " + "content__img-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "jsx-1853126630" + " " + "content__text-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 19
      }
    }, "Design")))), __jsx("div", {
      className: "jsx-1853126630" + " " + "content__slide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1853126630" + " " + "content__img second",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-1853126630" + " " + "content__img-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "jsx-1853126630" + " " + "content__text-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }, "Optimize")))), __jsx("div", {
      className: "jsx-1853126630" + " " + "content__slide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1853126630" + " " + "content__img third",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-1853126630" + " " + "content__img-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "jsx-1853126630" + " " + "content__text-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner content__text-inner--stroke content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1853126630" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 19
      }
    }, "Imagine")))), __jsx("nav", {
      className: "jsx-1853126630" + " " + "content__nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: "jsx-1853126630" + " " + "content__nav-button content__nav-button--prev",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    }, "Prev"), __jsx("button", {
      className: "jsx-1853126630" + " " + "content__nav-button content__nav-button--next",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 15
      }
    }, "Next")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1853126630",
      __self: this
    }, ".content.jsx-1853126630{display:grid;grid-template-rows:100%;grid-template-columns:100%;grid-template-areas:\"main\";height:calc(100vh - 19rem);width:100%;margin:0 auto;position:relative;}.content__slide.jsx-1853126630{grid-area:main;width:100%;height:100%;overflow:hidden;display:grid;grid-template-rows:100%;grid-template-columns:100%;grid-template-areas:\"inner\";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none;}.content__slide--current.jsx-1853126630{opacity:1;}.content__img.jsx-1853126630,.content__text-wrap.jsx-1853126630{grid-area:inner;width:100%;}.content__img.jsx-1853126630{height:calc(100vh - 25rem);width:90%;max-width:calc(1000px - 11rem);max-height:600px;justify-self:center;overflow:hidden;z-index:-1;position:relative;}.content__img--full.jsx-1853126630::after{content:\"\";position:absolute;top:0;left:0;background:rgba(0,0,0,0.3);width:100%;height:100%;}.content__img.first.jsx-1853126630 .content__img-inner.jsx-1853126630{background-image:url(\"/16.jpeg\");}.content__img.second.jsx-1853126630 .content__img-inner.jsx-1853126630{background-image:url(\"/14.jpeg\");}.content__img.third.jsx-1853126630 .content__img-inner.jsx-1853126630{background-image:url(\"/15.jpeg\");}.content__img-inner.jsx-1853126630{width:100%;height:100%;background-position:50% 50%;background-size:cover;}.content__text-wrap.jsx-1853126630{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.content__text.jsx-1853126630{overflow:hidden;-webkit-flex:1;-ms-flex:1;flex:1;opacity:0;pointer-events:none;}.content__text.jsx-1853126630:nth-child(6){opacity:1;}.content__text--full.jsx-1853126630{-webkit-flex:none;-ms-flex:none;flex:none;}.content__text-inner.jsx-1853126630{display:block;color:var(--color-slide-text);text-transform:uppercase;font-size:3.5rem;font-weight:var(--font-trail-weight);line-height:var(--font-trail-lheight);font-family:var(--font-trail-family);}.content__text-inner--bottom.jsx-1853126630{-webkit-transform:translate3d(0,-40%,0);-ms-transform:translate3d(0,-40%,0);transform:translate3d(0,-40%,0);}.content__text-inner--stroke.jsx-1853126630{-webkit-text-stroke:2px var(--color-slide-text);text-stroke:2px var(--color-slide-text);-webkit-text-fill-color:transparent;text-fill-color:transparent;color:transparent;}.content__nav.jsx-1853126630{grid-area:main;justify-self:center;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;width:calc(90% - 1rem);max-width:1000px;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.25rem;position:relative;}.content__nav-button.jsx-1853126630{border:0;cursor:pointer;background:none;margin:0.25rem 0;padding:0;text-transform:lowercase;color:var(--color-nav);font-weight:900;line-height:1;}.content__nav-button.jsx-1853126630:focus{outline:none;}@media screen and (min-width:53em){.jsx-1853126630:root{font-size:16px;}.content.jsx-1853126630{height:100vh;}.content__img.jsx-1853126630{width:calc(90% - 11rem);height:60vh;}.content__img--full.jsx-1853126630{height:calc(100vh + 20px);width:calc(100vw + 20px);max-width:none;max-height:none;}.content__text-inner.jsx-1853126630{font-size:var(--font-trail-size);}.content__nav.jsx-1853126630{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;font-size:1.75rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZHVudGFrL1Byb2plY3RzL2Ntcy1kYXRvY21zLWFwcC9jb21wb25lbnRzL2hlcm8taW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEt3QixBQUc4QixBQVdFLEFBY0wsQUFLTSxBQUtXLEFBV2hCLEFBVXNCLEFBSUEsQUFJQSxBQUl0QixBQU9DLEFBUUksQUFPTixBQUlBLEFBSUksQUFVb0IsQUFJYyxBQVFqQyxBQWNOLEFBWUksQUFLSSxBQUdGLEFBR1csQUFJRSxBQU1PLEFBR2YsU0FuQ0wsQ0E3R2pCLEFBaUVBLENBNUNvQixBQXNCTixDQU9DLENBM0VXLEFBa0oxQixBQVFFLENBeEQ4QixDQXZGbkIsQUE2R1MsQUErQnBCLENBekhXLEFBcURKLE9BZHFCLENBa0VaLEFBc0JGLEVBakpGLEFBcUplLENBbEk3QixBQUlZLEVBWUosSUFTUixBQUlBLEFBSUEsQUF1R0UsRUF2SE8sQUF5RVEsQ0FxQ2YsQ0E3SjJCLEFBbUNJLENBdkJmLEVBMkhDLEVBdkZhLEFBNkNoQyxFQUsyQixJQWFlLENBNUI5QixFQWRZLEFBNEZMLEdBcEpKLEdBMkhILEVBcERVLEtBbkZPLEVBaUtULENBcEpNLEFBMkhDLENBckdSLENBYU4sQUFrRE0sRUFzRU8sRUFuRzFCLE1BZUEsQ0FuQ2MsRUFpSFosR0E5SG9CLENBc0NFLEFBeUJlLEVBWUQsR0E5R1QsQUFhQSxDQW9DN0IsQUF1RnlCLEtBakJBLFFBbkZQLEdBcUVsQixPQWdDa0IsR0F4SUwsQUFhaUIsRUEwR1gsQ0FuRk4sRUE4RDJCLENBWVYsS0E3R2QsRUF3SUEsQ0FwR0ksS0FtRk4sTUF0SE0sRUF3SXBCLENBNUhxQixHQTJHTixBQThDZ0IsQ0FqSS9CLEVBeUVvQixTQTVHcEIsQUFnR3VDLEdBMUJsQixNQXVDckIsNEJBWkEseUJBc0J1QixnQkEzR1gsVUFDVSxLQXdKQSxHQTlGRyxZQXpEekIsR0F3SkUsb0RBOUN1QixnQ0FoRHpCLG1FQWlEb0Isa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy93ZHVudGFrL1Byb2plY3RzL2Ntcy1kYXRvY21zLWFwcC9jb21wb25lbnRzL2hlcm8taW50cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRpbWVsaW5lTGl0ZSwgUXVpbnQgfSBmcm9tICdnc2FwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvSW50cm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBuZXcgU2xpZGVzaG93KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zbGlkZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2ltZyBmaXJzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW1nLWlubmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2lnblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+RGVzaWduPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0IGNvbnRlbnRfX3RleHQtLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2lnblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+RGVzaWduPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2UgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2lnblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+RGVzaWduPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWcgc2Vjb25kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWctaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgT3B0aW1pemVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPk9wdGltaXplPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0IGNvbnRlbnRfX3RleHQtLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5PcHRpbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+T3B0aW1pemU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5PcHRpbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZSBjb250ZW50X190ZXh0LWlubmVyLS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgT3B0aW1pemVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPk9wdGltaXplPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWcgdGhpcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2ltZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnaW5lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5JbWFnaW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0IGNvbnRlbnRfX3RleHQtLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2luZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+SW1hZ2luZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsIFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkltYWdpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkltYWdpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2luZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZSBjb250ZW50X190ZXh0LWlubmVyLS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2luZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+SW1hZ2luZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRlbnRfX25hdlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX25hdi1idXR0b24gY29udGVudF9fbmF2LWJ1dHRvbi0tcHJldlwiPlxuICAgICAgICAgICAgICAgIFByZXZcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udGVudF9fbmF2LWJ1dHRvbiBjb250ZW50X19uYXYtYnV0dG9uLS1uZXh0XCI+XG4gICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibWFpblwiO1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE5cmVtKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fc2xpZGUge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbm5lclwiO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19zbGlkZS0tY3VycmVudCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19pbWcsXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LXdyYXAge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogaW5uZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9faW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNXJlbSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwMHB4IC0gMTFyZW0pO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy0tZnVsbDo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9faW1nLmZpcnN0IC5jb250ZW50X19pbWctaW5uZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8xNi5qcGVnXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy5zZWNvbmQgLmNvbnRlbnRfX2ltZy1pbm5lciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLzE0LmpwZWdcIik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9faW1nLnRoaXJkIC5jb250ZW50X19pbWctaW5uZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8xNS5qcGVnXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy1pbm5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LXdyYXAge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0Om50aC1jaGlsZCg2KSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LS1mdWxsIHtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX3RleHQtaW5uZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zbGlkZS10ZXh0KTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXRyYWlsLXdlaWdodCk7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtdHJhaWwtbGhlaWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdHJhaWwtZmFtaWx5KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LWlubmVyLS1ib3R0b20ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTQwJSwgMCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggdmFyKC0tY29sb3Itc2xpZGUtdGV4dCk7XG4gICAgICAgICAgICAgICAgdGV4dC1zdHJva2U6IDJweCB2YXIoLS1jb2xvci1zbGlkZS10ZXh0KTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fbmF2IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG1haW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDkwJSAtIDFyZW0pO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX25hdi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW5hdik7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19uYXYtYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTNlbSkge1xuICAgICAgICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg5MCUgLSAxMXJlbSk7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50X19pbWctLWZ1bGwge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnRfX3RleHQtaW5uZXIge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXRyYWlsLXNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudF9fbmF2IHtcbiAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNsYXNzIFRleHRGWCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5ET00gPSB7IGVsOiBlbCB9O1xuICAgICAgICAvLyBUaGUgdGV4dHMgKHJlcGVhdGVkKVxuICAgICAgICB0aGlzLkRPTS50ZXh0cyA9IFsuLi50aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudF9fdGV4dCcpXTtcbiAgICAgICAgdGhpcy5ET00udGV4dHNUb3RhbCA9IHRoaXMuRE9NLnRleHRzLmxlbmd0aDtcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBtYWluIHRleHQgZWxlbWVudFxuICAgICAgICB0aGlzLm1pZGRsZUlkeCA9IE1hdGguZmxvb3IodGhpcy5ET00udGV4dHNUb3RhbCAvIDIpO1xuICAgICAgICAvLyBUaW1lIGJldHdlZW4gZWFjaCBzaG93aW5nL2hpZGluZyBvZiBlYWNoIHRleHQgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5sb29wSW50ZXJ2YWwgPSB7IHNob3c6IDgwLCBoaWRlOiA4MCB9O1xuICAgICAgICAvLyBvcHRpb25hbDogRXh0cmEgdGltZSB0byB0aGUgd2hvbGUgc2hvdy9oaWRlIGFuaW1hdGlvbi4gXG4gICAgICAgIHRoaXMubG9vcEVuZElkZGxlVGltZSA9IHRoaXMubG9vcEludGVydmFsLnNob3c7XG4gICAgfVxuICAgIHNob3coeyBkaXIgPSAnYm90aCcsIGhhbGZ3YXlDYWxsYmFjayA9IG51bGwgfSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb29wSGlkZSA9IChwb3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taWRkbGVJZHggLSBwb3MgPT09IHRoaXMubWlkZGxlSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGhpcy5sb29wRW5kSWRkbGVUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUZXh0KHBvcywgZGlyKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb3BIaWRlKHBvcyAtIDEpLCB0aGlzLmxvb3BJbnRlcnZhbC5oaWRlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBsb29wU2hvdyA9IChwb3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taWRkbGVJZHggLSBwb3MgPiB0aGlzLm1pZGRsZUlkeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFsZndheUNhbGxiYWNrICYmIHR5cGVvZiBoYWxmd2F5Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZ3YXlDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvb3BIaWRlKHRoaXMubWlkZGxlSWR4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUZXh0KHBvcywgZGlyKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb3BTaG93KHBvcyAtIDEpLCB0aGlzLmxvb3BJbnRlcnZhbC5zaG93KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsb29wU2hvdyh0aGlzLm1pZGRsZUlkeCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoaWRlKHsgZGlyID0gJ2JvdGgnLCBoYWxmd2F5Q2FsbGJhY2sgPSBudWxsIH0gPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9vcEhpZGUgPSAocG9zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWlkZGxlSWR4IC0gcG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRoaXMubG9vcEVuZElkZGxlVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVGV4dChwb3MsIGRpcik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29wSGlkZShwb3MgKyAxKSwgdGhpcy5sb29wSW50ZXJ2YWwuaGlkZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbG9vcFNob3cgPSAocG9zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWlkZGxlSWR4IC0gcG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFsZndheUNhbGxiYWNrICYmIHR5cGVvZiBoYWxmd2F5Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZ3YXlDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvb3BIaWRlKDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RleHQocG9zLCBkaXIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9vcFNob3cocG9zICsgMSksIHRoaXMubG9vcEludGVydmFsLnNob3cpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvb3BTaG93KDEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gSGlkZXMgb25lIChkaXIgPSAndXAnIG9yIGRpciA9ICdkb3duJykgb3IgbW9yZSB0ZXh0cywgc3BlY2lmaWNhbGx5IHRoZSBlcXVhbGx5IGRpc3RhbnQgdGV4dHMgZnJvbSBtYWluIHRleHQgKGRpciA9ICdib3RoJylcbiAgICBoaWRlVGV4dChwb3MsIGRpcikge1xuICAgICAgICB0aGlzLnRvZ2dsZVRleHQoJ2hpZGUnLCBwb3MsIGRpcik7XG4gICAgfVxuICAgIHNob3dUZXh0KHBvcywgZGlyKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlVGV4dCgnc2hvdycsIHBvcywgZGlyKTtcbiAgICB9XG4gICAgdG9nZ2xlVGV4dChhY3Rpb24sIHBvcywgZGlyKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZVN0eWxlID0ge1xuICAgICAgICAgICAgdXA6IF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuRE9NLnRleHRzW3RoaXMubWlkZGxlSWR4IC0gcG9zXS5zdHlsZS5vcGFjaXR5ID0gYWN0aW9uID09PSAnc2hvdycgPyAxIDogMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiBfID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkRPTS50ZXh0c1t0aGlzLm1pZGRsZUlkeCArIHBvc10uc3R5bGUub3BhY2l0eSA9IGFjdGlvbiA9PT0gJ3Nob3cnID8gMSA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdib3RoJykge1xuICAgICAgICAgICAgY2hhbmdlU3R5bGVbJ3VwJ10oKTtcbiAgICAgICAgICAgIGNoYW5nZVN0eWxlWydkb3duJ10oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZVN0eWxlW2Rpcl0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU2xpZGUge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuRE9NID0geyBlbDogZWwgfTtcbiAgICAgICAgdGhpcy5ET00uaW1nID0ge1xuICAgICAgICAgICAgd3JhcDogdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX2ltZycpLFxuICAgICAgICAgICAgaW5uZXI6IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19pbWctaW5uZXInKVxuICAgICAgICB9O1xuICAgICAgICAvLyBUaGUgdGV4dCBlZmZlY3QgY2xhc3MuXG4gICAgICAgIHRoaXMudGV4dEZYID0gbmV3IFRleHRGWCh0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGV4dC13cmFwJykpO1xuICAgIH1cbiAgICAvLyBIaWRlIHRoZSBTbGlkZSdzIGltYWdlXG4gICAgaGlkZUltYWdlKGRpcikge1xuICAgICAgICB0aGlzLnRvZ2dsZUltYWdlKCdoaWRlJywgZGlyKTtcbiAgICB9XG4gICAgLy8gU2hvdyB0aGUgU2xpZGUncyBpbWFnZVxuICAgIHNob3dJbWFnZShkaXIpIHtcbiAgICAgICAgdGhpcy50b2dnbGVJbWFnZSgnc2hvdycsIGRpcik7XG4gICAgfVxuICAgIHRvZ2dsZUltYWdlKGFjdGlvbiwgZGlyKSB7XG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKS5hZGQoJ2JlZ2luJylcbiAgICAgICAgICAgIC50byh0aGlzLkRPTS5pbWcud3JhcCwgYWN0aW9uID09PSAnaGlkZScgPyAwLjMgOiAwLjcsIHtcbiAgICAgICAgICAgICAgICBlYXNlOiBhY3Rpb24gPT09ICdoaWRlJyA/IFF1aW50LmVhc2VPdXQgOiBRdWludC5lYXNlT3V0LFxuICAgICAgICAgICAgICAgIHN0YXJ0QXQ6IGFjdGlvbiA9PT0gJ2hpZGUnID8ge30gOiB7IHg6IGRpciA9PT0gJ25leHQnID8gJzExMCUnIDogJy0xMTAlJywgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICAgICAgIHg6IGFjdGlvbiA9PT0gJ2hpZGUnID8gZGlyID09PSAnbmV4dCcgPyAnLTExMCUnIDogJzExMCUnIDogJzAlJ1xuICAgICAgICAgICAgfSwgJ2JlZ2luJylcbiAgICAgICAgICAgIC50byh0aGlzLkRPTS5pbWcuaW5uZXIsIGFjdGlvbiA9PT0gJ2hpZGUnID8gMC4zIDogMC43LCB7XG4gICAgICAgICAgICAgICAgZWFzZTogYWN0aW9uID09PSAnaGlkZScgPyBRdWludC5lYXNlT3V0IDogUXVpbnQuZWFzZU91dCxcbiAgICAgICAgICAgICAgICBzdGFydEF0OiBhY3Rpb24gPT09ICdoaWRlJyA/IHt9IDogeyB4OiBkaXIgPT09ICduZXh0JyA/ICctMTAwJScgOiAnMTAwJScgfSxcbiAgICAgICAgICAgICAgICB4OiBhY3Rpb24gPT09ICdoaWRlJyA/IGRpciA9PT0gJ25leHQnID8gJzEwMCUnIDogJy0xMDAlJyA6ICcwJSdcbiAgICAgICAgICAgIH0sICdiZWdpbicpO1xuICAgIH1cbn1cblxuY2xhc3MgU2xpZGVzaG93IHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICB0aGlzLkRPTSA9IHsgZWw6IGVsIH07XG4gICAgICAgIC8vIE5hdmlnYXRpb24gY29udHJvbHNcbiAgICAgICAgdGhpcy5ET00ubmF2ID0ge1xuICAgICAgICAgICAgcHJldjogdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX25hdi1idXR0b24tLXByZXYnKSxcbiAgICAgICAgICAgIG5leHQ6IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19uYXYtYnV0dG9uLS1uZXh0JylcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQWxsIHNsaWRlc1xuICAgICAgICB0aGlzLnNsaWRlcyA9IFtdO1xuICAgICAgICBbLi4udGhpcy5ET00uZWwucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX3NsaWRlJyldLmZvckVhY2goc2xpZGUgPT4gdGhpcy5zbGlkZXMucHVzaChuZXcgU2xpZGUoc2xpZGUpKSk7XG4gICAgICAgIC8vIFRvdGFsIG51bWJlciBvZiBzbGlkZXNcbiAgICAgICAgdGhpcy5zbGlkZXNUb3RhbCA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgLy8gQ3VycmVudCBzbGlkZSBwb3NpdGlvblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgICAvLyBTaG93IHRoZSBmaXJzdCBvbmVcbiAgICAgICAgdGhpcy5zbGlkZXNbdGhpcy5jdXJyZW50XS5ET00uZWwuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fc2xpZGUtLWN1cnJlbnQnKTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzb21lIGV2ZW50c1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG4gICAgaW5pdEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xpY2tpbmcgbmV4dCBhbmQgcHJldmlvdXMgY29udHJvbHMuXG4gICAgICAgIHRoaXMub25DbGlja1ByZXZGbiA9IF8gPT4gdGhpcy5uYXZpZ2F0ZSgncHJldicpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tOZXh0Rm4gPSBfID0+IHRoaXMubmF2aWdhdGUoJ25leHQnKTtcbiAgICAgICAgdGhpcy5ET00ubmF2LnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tQcmV2Rm4pO1xuICAgICAgICB0aGlzLkRPTS5uYXYubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja05leHRGbik7XG4gICAgfVxuICAgIG5hdmlnYXRlKGRpcikge1xuICAgICAgICBpZiAodGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAvLyBDdXJyZW50IHNsaWRlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRoaXMuc2xpZGVzW3RoaXMuY3VycmVudF07XG5cbiAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnRcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZGlyID09PSAnbmV4dCcgP1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50IDwgdGhpcy5zbGlkZXNUb3RhbCAtIDEgPyB0aGlzLmN1cnJlbnQgKyAxIDogMCA6XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPiAwID8gdGhpcy5jdXJyZW50IC0gMSA6IHRoaXMuc2xpZGVzVG90YWwgLSAxO1xuXG4gICAgICAgIC8vIFVwY29taW5nIHNsaWRlXG4gICAgICAgIGNvbnN0IHVwY29taW5nU2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLmN1cnJlbnRdO1xuXG4gICAgICAgIGNvbnN0IG9uQ3VycmVudEhhbGZ3YXlDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIEhpZGUgdGhlIGN1cnJlbnQgc2xpZGUncyBpbWFnZVxuICAgICAgICAgICAgY3VycmVudFNsaWRlLmhpZGVJbWFnZShkaXIpO1xuICAgICAgICAgICAgLy8gU2V0IHRoZSB1cGNvbWluZyBzbGlkZSdzIG1haW4gdGV4dCBvcGFjaXR5IHRvIDEuXG4gICAgICAgICAgICB1cGNvbWluZ1NsaWRlLnRleHRGWC5ET00udGV4dHNbdXBjb21pbmdTbGlkZS50ZXh0RlgubWlkZGxlSWR4XS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIC8vIEFkZCBjdXJyZW50IGNsYXNzIHRvIHRoZSB1cGNvbWluZyBzbGlkZSAob3BhY2l0eSA9IDEpXG4gICAgICAgICAgICB1cGNvbWluZ1NsaWRlLkRPTS5lbC5jbGFzc0xpc3QuYWRkKCdjb250ZW50X19zbGlkZS0tY3VycmVudCcpO1xuICAgICAgICAgICAgLy8gU2hvdyB0aGUgdXBjb21pbmcgc2xpZGUncyBpbWFnZVxuICAgICAgICAgICAgdXBjb21pbmdTbGlkZS5zaG93SW1hZ2UoZGlyKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25DdXJyZW50RW5kQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGN1cnJlbnQgY2xhc3MgZnJvbSB0aGUgY3VycmVudCBzbGlkZS5cbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5ET00uZWwuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF9fc2xpZGUtLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIHVwY29taW5nU2xpZGUudGV4dEZYLnNob3coKS50aGVuKCgpID0+IHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEhpZGUgdGhlIGN1cnJlbnQgc2xpZGUncyB0ZXh0LCBcbiAgICAgICAgLy8gYW5kIGNhbGwgb25DdXJyZW50SGFsZndheUNhbGxiYWNrIGF0IGhhbGYgb2YgdGhlIGFuaW1hdGlvblxuICAgICAgICAvLyBJbiB0aGUgZW5kIGNhbGwgb25DdXJyZW50RW5kQ2FsbGJhY2tcbiAgICAgICAgY3VycmVudFNsaWRlLnRleHRGWC5oaWRlKHsgaGFsZndheUNhbGxiYWNrOiBvbkN1cnJlbnRIYWxmd2F5Q2FsbGJhY2sgfSkudGhlbihvbkN1cnJlbnRFbmRDYWxsYmFjayk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/wduntak/Projects/cms-datocms-app/components/hero-intro.js */"));
  }

}
;

class TextFX {
  constructor(el) {
    this.DOM = {
      el: el
    }; // The texts (repeated)

    this.DOM.texts = [...this.DOM.el.querySelectorAll('.content__text')];
    this.DOM.textsTotal = this.DOM.texts.length; // The index of the main text element

    this.middleIdx = Math.floor(this.DOM.textsTotal / 2); // Time between each showing/hiding of each text instance

    this.loopInterval = {
      show: 80,
      hide: 80
    }; // optional: Extra time to the whole show/hide animation. 

    this.loopEndIddleTime = this.loopInterval.show;
  }

  show({
    dir = 'both',
    halfwayCallback = null
  } = {}) {
    return new Promise((resolve, reject) => {
      const loopHide = pos => {
        if (this.middleIdx - pos === this.middleIdx) {
          setTimeout(resolve, this.loopEndIddleTime);
          return;
        }

        this.hideText(pos, dir);
        setTimeout(() => loopHide(pos - 1), this.loopInterval.hide);
      };

      const loopShow = pos => {
        if (this.middleIdx - pos > this.middleIdx) {
          if (halfwayCallback && typeof halfwayCallback === 'function') {
            halfwayCallback();
          }

          loopHide(this.middleIdx);
          return;
        }

        this.showText(pos, dir);
        setTimeout(() => loopShow(pos - 1), this.loopInterval.show);
      };

      loopShow(this.middleIdx);
    });
  }

  hide({
    dir = 'both',
    halfwayCallback = null
  } = {}) {
    return new Promise((resolve, reject) => {
      const loopHide = pos => {
        if (this.middleIdx - pos < 0) {
          setTimeout(resolve, this.loopEndIddleTime);
          return;
        }

        this.hideText(pos, dir);
        setTimeout(() => loopHide(pos + 1), this.loopInterval.hide);
      };

      const loopShow = pos => {
        if (this.middleIdx - pos < 0) {
          if (halfwayCallback && typeof halfwayCallback === 'function') {
            halfwayCallback();
          }

          loopHide(0);
          return;
        }

        this.showText(pos, dir);
        setTimeout(() => loopShow(pos + 1), this.loopInterval.show);
      };

      loopShow(1);
    });
  } // Hides one (dir = 'up' or dir = 'down') or more texts, specifically the equally distant texts from main text (dir = 'both')


  hideText(pos, dir) {
    this.toggleText('hide', pos, dir);
  }

  showText(pos, dir) {
    this.toggleText('show', pos, dir);
  }

  toggleText(action, pos, dir) {
    const changeStyle = {
      up: _ => {
        this.DOM.texts[this.middleIdx - pos].style.opacity = action === 'show' ? 1 : 0;
      },
      down: _ => {
        this.DOM.texts[this.middleIdx + pos].style.opacity = action === 'show' ? 1 : 0;
      }
    };

    if (dir === 'both') {
      changeStyle['up']();
      changeStyle['down']();
    } else {
      changeStyle[dir]();
    }
  }

}

class Slide {
  constructor(el) {
    this.DOM = {
      el: el
    };
    this.DOM.img = {
      wrap: this.DOM.el.querySelector('.content__img'),
      inner: this.DOM.el.querySelector('.content__img-inner')
    }; // The text effect class.

    this.textFX = new TextFX(this.DOM.el.querySelector('.content__text-wrap'));
  } // Hide the Slide's image


  hideImage(dir) {
    this.toggleImage('hide', dir);
  } // Show the Slide's image


  showImage(dir) {
    this.toggleImage('show', dir);
  }

  toggleImage(action, dir) {
    new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]().add('begin').to(this.DOM.img.wrap, action === 'hide' ? 0.3 : 0.7, {
      ease: action === 'hide' ? gsap__WEBPACK_IMPORTED_MODULE_2__["Quint"].easeOut : gsap__WEBPACK_IMPORTED_MODULE_2__["Quint"].easeOut,
      startAt: action === 'hide' ? {} : {
        x: dir === 'next' ? '110%' : '-110%',
        opacity: 1
      },
      x: action === 'hide' ? dir === 'next' ? '-110%' : '110%' : '0%'
    }, 'begin').to(this.DOM.img.inner, action === 'hide' ? 0.3 : 0.7, {
      ease: action === 'hide' ? gsap__WEBPACK_IMPORTED_MODULE_2__["Quint"].easeOut : gsap__WEBPACK_IMPORTED_MODULE_2__["Quint"].easeOut,
      startAt: action === 'hide' ? {} : {
        x: dir === 'next' ? '-100%' : '100%'
      },
      x: action === 'hide' ? dir === 'next' ? '100%' : '-100%' : '0%'
    }, 'begin');
  }

}

class Slideshow {
  constructor(el) {
    this.DOM = {
      el: el
    }; // Navigation controls

    this.DOM.nav = {
      prev: this.DOM.el.querySelector('.content__nav-button--prev'),
      next: this.DOM.el.querySelector('.content__nav-button--next')
    }; // All slides

    this.slides = [];
    [...this.DOM.el.querySelectorAll('.content__slide')].forEach(slide => this.slides.push(new Slide(slide))); // Total number of slides

    this.slidesTotal = this.slides.length; // Current slide position

    this.current = 0; // Show the first one

    this.slides[this.current].DOM.el.classList.add('content__slide--current'); // Initialize some events

    this.initEvents();
  }

  initEvents() {
    // Clicking next and previous controls.
    this.onClickPrevFn = _ => this.navigate('prev');

    this.onClickNextFn = _ => this.navigate('next');

    this.DOM.nav.prev.addEventListener('click', this.onClickPrevFn);
    this.DOM.nav.next.addEventListener('click', this.onClickNextFn);
  }

  navigate(dir) {
    if (this.isAnimating) {
      return false;
    }

    this.isAnimating = true; // Current slide

    const currentSlide = this.slides[this.current]; // Update current

    this.current = dir === 'next' ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 : this.current > 0 ? this.current - 1 : this.slidesTotal - 1; // Upcoming slide

    const upcomingSlide = this.slides[this.current];

    const onCurrentHalfwayCallback = () => {
      // Hide the current slide's image
      currentSlide.hideImage(dir); // Set the upcoming slide's main text opacity to 1.

      upcomingSlide.textFX.DOM.texts[upcomingSlide.textFX.middleIdx].style.opacity = 0; // Add current class to the upcoming slide (opacity = 1)

      upcomingSlide.DOM.el.classList.add('content__slide--current'); // Show the upcoming slide's image

      upcomingSlide.showImage(dir);
    };

    const onCurrentEndCallback = () => {
      // Remove the current class from the current slide.
      currentSlide.DOM.el.classList.remove('content__slide--current');
      upcomingSlide.textFX.show().then(() => this.isAnimating = false);
    }; // Hide the current slide's text, 
    // and call onCurrentHalfwayCallback at half of the animation
    // In the end call onCurrentEndCallback


    currentSlide.textFX.hide({
      halfwayCallback: onCurrentHalfwayCallback
    }).then(onCurrentEndCallback);
  }

}

/***/ }),

/***/ "./components/hero-post.js":
/*!*********************************!*\
  !*** ./components/hero-post.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date */ "./components/date.js");
/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-image */ "./components/cover-image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/hero-post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mb-8 md:mb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    responsiveImage: coverImage.responsiveImage,
    slug: slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "mb-4 text-4xl lg:text-6xl leading-tight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: `/posts/${slug}`,
    href: "/posts/[slug]",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, title))), __jsx("div", {
    className: "mb-4 md:mb-0 text-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateString: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "text-lg leading-relaxed mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, excerpt), __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: author.name,
    picture: author.picture,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/intro.js":
/*!*****************************!*\
  !*** ./components/intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Intro; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./components/navigation.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Intro() {
  return __jsx("section", {
    className: "absolute flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 z-50 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "sm:w-40 w-40",
    src: "./reemuu-text-logo.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/alert */ "./components/alert.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Layout({
  preview,
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "min-h-screen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_components_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    preview: preview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, children)), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/meta.js":
/*!****************************!*\
  !*** ./components/meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Meta() {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/favicon/site.webmanifest",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#000000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#000000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "msapplication-config",
    content: "/favicon/browserconfig.xml",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "alternate",
    type: "application/rss+xml",
    href: "/feed.xml",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "description",
    content: `A statically generated blog example using Next.js and ${_lib_constants__WEBPACK_IMPORTED_MODULE_2__["CMS_NAME"]}.`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    content: _lib_constants__WEBPACK_IMPORTED_MODULE_2__["HOME_OG_IMAGE_URL"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/more-stories.js":
/*!************************************!*\
  !*** ./components/more-stories.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoreStories; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/post-preview */ "./components/post-preview.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/more-stories.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function MoreStories({
  posts
}) {
  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "More Stories"), __jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, posts.map(post => __jsx(_components_post_preview__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: post.slug,
    title: post.title,
    coverImage: post.coverImage,
    date: post.date,
    author: post.author,
    slug: post.slug,
    excerpt: post.excerpt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_easings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/easings */ "./lib/easings.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {}

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "hamburger hamburger--demo-6 js-hover",
      onClick: this.animateOverlay,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "hamburger__line hamburger__line--01",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--01 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "hamburger__line hamburger__line--02",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--02 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "hamburger__line hamburger__line--03",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--03 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "hamburger__line hamburger__line--cross01",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "hamburger__line hamburger__line--cross02",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }))), __jsx("div", {
      className: "global-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "global-menu__wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }, "Data Science"), __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 19
      }
    }, "Research"), __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }
    }, "Case Studies"), __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, "Contact"))), __jsx("svg", {
      className: "shape-overlays",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, __jsx("defs", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("linearGradient", {
      id: "gradient1",
      x1: "0%",
      y1: "0%",
      x2: "0%",
      y2: "100%",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx("stop", {
      offset: "0%",
      stopColor: "#00c99b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }), __jsx("stop", {
      offset: "100%",
      stopColor: "#ff0ea1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    })), __jsx("linearGradient", {
      id: "gradient2",
      x1: "0%",
      y1: "0%",
      x2: "0%",
      y2: "100%",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }, __jsx("stop", {
      offset: "0%",
      stopColor: "#ffd392",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }), __jsx("stop", {
      offset: "100%",
      stopColor: "#ff3898",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    })), __jsx("linearGradient", {
      id: "gradient3",
      x1: "0%",
      y1: "0%",
      x2: "0%",
      y2: "100%",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, __jsx("stop", {
      offset: "0%",
      stopColor: "#110046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }), __jsx("stop", {
      offset: "100%",
      stopColor: "#32004a",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }))), __jsx("path", {
      className: "shape-overlays__path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }), __jsx("path", {
      className: "shape-overlays__path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }), __jsx("path", {
      className: "shape-overlays__path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    })));
  }

}

class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll("path");
    this.numPoints = 10;
    this.duration = 900;
    this.delayPointsArray = [];
    this.delayPointsMax = 300;
    this.delayPerPath = 250;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }

  toggle() {
    this.isAnimating = true;

    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
    }

    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.isOpened = true;
    this.elm.classList.add("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }

  close() {
    this.isOpened = false;
    this.elm.classList.remove("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }

  updatePath(time) {
    const points = [];

    for (var i = 0; i < this.numPoints; i++) {
      points[i] = (1 - _lib_easings__WEBPACK_IMPORTED_MODULE_1__["ease"].cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100;
    }

    let str = "";
    str += this.isOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;

    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - 1 / (this.numPoints - 1) * 100 / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }

    str += this.isOpened ? `V 100 H 0` : `V 0 H 0`;
    return str;
  }

  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }

  renderLoop() {
    this.render();

    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    } else {
      this.isAnimating = false;
    }
  }

}

/***/ }),

/***/ "./components/post-preview.js":
/*!************************************!*\
  !*** ./components/post-preview.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date */ "./components/date.js");
/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover-image */ "./components/cover-image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/post-preview.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slug: slug,
    title: title,
    responsiveImage: coverImage.responsiveImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("h3", {
    className: "text-3xl mb-3 leading-snug",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: `/posts/${slug}`,
    href: "/posts/[slug]",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, title))), __jsx("div", {
    className: "text-lg mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateString: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("p", {
    className: "text-lg leading-relaxed mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, excerpt), __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: author.name,
    picture: author.picture,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getPreviewPostBySlug, getAllPostsWithSlug, getAllPostsForHome, getPostAndMorePosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviewPostBySlug", function() { return getPreviewPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPostsWithSlug", function() { return getAllPostsWithSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPostsForHome", function() { return getAllPostsForHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostAndMorePosts", function() { return getPostAndMorePosts; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = "bde25e77169cb11efa1d1ff193cc3d"; // See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020

const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function fetchAPI(query, {
  variables,
  preview
} = {}) {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(`
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`, {
    preview: true,
    variables: {
      slug
    }
  });
  return data === null || data === void 0 ? void 0 : data.post;
}
async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      allPosts {
        slug
      }
    }
  `);
  return data === null || data === void 0 ? void 0 : data.allPosts;
}
async function getAllPostsForHome(preview) {
  const data = await fetchAPI(`
    {
      allPosts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
          }
        }
      }
    }

    ${responsiveImageFragment}
  `, {
    preview
  });
  return data === null || data === void 0 ? void 0 : data.allPosts;
}
async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(`
  query PostBySlug($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }

    morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }
  }

  ${responsiveImageFragment}
  `, {
    preview,
    variables: {
      slug
    }
  });
  return data;
}

/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/*! exports provided: EXAMPLE_PATH, CMS_NAME, CMS_URL, HOME_OG_IMAGE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_PATH", function() { return EXAMPLE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMS_NAME", function() { return CMS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMS_URL", function() { return CMS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_OG_IMAGE_URL", function() { return HOME_OG_IMAGE_URL; });
const EXAMPLE_PATH = 'cms-datocms';
const CMS_NAME = 'DatoCMS';
const CMS_URL = 'https://www.datocms.com/';
const HOME_OG_IMAGE_URL = 'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**DatoCMS**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjYxLjI3NCA4MC41NjIiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeTE9IjQwLjQ0IiB4Mj0iNzguNjg3IiB5Mj0iNDAuNDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjU5M2QiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjc3NTEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU%2BZnVsbF9zbWFsbGVyPC90aXRsZT48cGF0aCBkPSJNMzkuMzQ0Ljg0NEgwVjgwLjAzN0gzOS4zNDRjMTkuNjc3LDAsMzkuMzQzLTE3LjcyOSwzOS4zNDMtMzkuNTkxUzU5LjAyMS44NDQsMzkuMzQ0Ljg0NFptMCw1Ny41ODlhMTcuOTkzLDE3Ljk5MywwLDEsMSwxOC0xNy45ODdBMTcuOTg2LDE3Ljk4NiwwLDAsMSwzOS4zNDQsNTguNDMzWiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik0xMTkuMDU0Ljg1OGMxMS44NDIsMCwxNy45MTYsNy4xNzksMTcuOTE2LDE3LjA1OHY4LjgzNWMwLDkuODc4LTYuMDc0LDE3LjA1Ny0xNy45MTYsMTcuMDU3SDEwMC4yNzlWLjg1OFptNy4zNjMsMTdjMC01LjQ2LTIuODg0LTguMzQ0LTkuMjY1LTguMzQ0aC02LjM4MVYzNS4xNTZoNi4zODFjNi4zODEsMCw5LjI2NS0yLjg4NCw5LjI2NS04LjM0NFptNDMuMjQxLDE3Ljk3N0gxNTQuMTM1bC0yLjM5Myw3Ljk3N0gxNDEuMTg5TDE1Ni41MjcuODU4aDEwLjhsMTUuMzM5LDQyLjk1SDE3Mi4xMTJabS0xMi45NDYtOC40NjdoMTAuMzY5bC01LjE1NC0xNi45OTVaTTIxNi4wMzMuODU4djguOWgtMTEuNlY0My44MDhIMTkzLjg4M1Y5Ljc1NWgtMTEuNlYuODU4Wm0yNS41NDUsNDMuODA5Yy0xMy4wMDcsMC0xOS42OTUtOC4zNDUtMTkuNjk1LTE5LjU3M1YxOS41NzJDMjIxLjg4Myw4LjM0NCwyMjguNTcxLDAsMjQxLjU3OCwwczE5LjcsOC4zNDQsMTkuNywxOS41NzJ2NS41MjJDMjYxLjI3NCwzNi4zMjIsMjU0LjU4Niw0NC42NjcsMjQxLjU3OCw0NC42NjdabTAtMzUuODk0Yy02LjEzNSwwLTkuMTQyLDQuMTEyLTkuMTQyLDEwLjI0N3Y2LjYyNmMwLDYuMTM2LDMuMDA3LDEwLjI0Nyw5LjE0MiwxMC4yNDdzOS4xNDItNC4xMTEsOS4xNDItMTAuMjQ3VjE5LjAyQzI1MC43MiwxMi44ODUsMjQ3LjcxNCw4Ljc3MywyNDEuNTc4LDguNzczWk0xMDkuNjksNzUuMjQ0YTQuODEzLDQuODEzLDAsMCwwLDUuMi00Ljg2OGg1Ljk1NGMtLjA3NSw1LjU0Mi00LjE1NiwxMC4xODYtMTEuMDg0LDEwLjE4Ni04LjA4OCwwLTExLjk4Mi01LjA5My0xMS45ODItMTEuOTA4VjY1LjIwOWMwLTYuODE1LDMuODk0LTExLjkwNywxMS45ODItMTEuOTA3LDYuOTI4LDAsMTEuMDA5LDQuNjQyLDExLjA4NCwxMC4xODRoLTUuOTU0YTQuODEzLDQuODEzLDAsMCwwLTUuMi00Ljg2OGMtMy44OTUsMC01LjQ2OCwyLjU4NC01LjQ2OCw2LjI5MXY0LjA0NEMxMDQuMjIyLDcyLjY2LDEwNS44LDc1LjI0NCwxMDkuNjksNzUuMjQ0Wm0zNy4wNTUtMjEuNDE5aDUuOTE3VjgwLjAzN2gtNi4xNzhWNjYuMTgzbC00LjEyLDguMDEyaC01LjA5MmwtNC4wODEtOC4wMTJWODAuMDM3aC02LjE3OVY1My44MjVoNS45MTZsNi44OSwxNC4yNjdaTTE2OS41MSw4MC41NjJjLTYuMjkxLDAtMTAuNTIyLTMtMTAuNTIyLTguMjc2di0uNzEyaDYuMTc4VjcyLjFjMCwyLjIwOSwxLjQyMywzLjU1Nyw0LjM4MSwzLjU1NywyLjY1OSwwLDQuNDE5LTEuMDg2LDQuNDE5LTMuMTA4YTIuMTUxLDIuMTUxLDAsMCwwLTEuOC0yLjMyMWwtNi41NTMtMS42NDhjLTQuMDgyLTEuMDExLTYuMTc5LTIuODA4LTYuMTc5LTcuMDc3LDAtNS4yMDUsMy43MDctOC4yLDkuOTIzLTguMiw1Ljg3OSwwLDkuNjI0LDMuMTgyLDkuNjI0LDcuOTc1di42MzdIMTczLjAzdi0uNDQ5YzAtMS43NjEtLjk3NC0zLjIyMS0zLjY3LTMuMjIxLTIuMjQ3LDAtMy42NjkuNzg2LTMuNjY5LDIuNjU4YTEuOTk0LDEuOTk0LDAsMCwwLDEuNjg1LDIuMTM1bDYuOTY0LDEuODcyYzQuMTk0LDEuMTIzLDUuODc5LDMuNDQ1LDUuODc5LDcuMDc3QzE4MC4yMTksNzcuMjI5LDE3NS41NzYsODAuNTYyLDE2OS41MSw4MC41NjJaIiBmaWxsPSIjZmY3NzUxIi8%2BPC9zdmc%2B&widths=undefined&widths=350&heights=200&heights=auto';

/***/ }),

/***/ "./lib/easings.js":
/*!************************!*\
  !*** ./lib/easings.js ***!
  \************************/
/*! exports provided: ease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ease", function() { return ease; });
//
// these easing functions are based on the code of glsl-easing module.
// https://github.com/glslify/glsl-easings
//
const ease = {
  exponentialIn: t => {
    return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  },
  exponentialOut: t => {
    return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  exponentialInOut: t => {
    return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
  },
  sineOut: t => {
    const HALF_PI = 1.5707963267948966;
    return Math.sin(t * HALF_PI);
  },
  circularInOut: t => {
    return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  },
  cubicIn: t => {
    return t * t * t;
  },
  cubicOut: t => {
    const f = t - 1.0;
    return f * f * f + 1.0;
  },
  cubicInOut: t => {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  },
  quadraticOut: t => {
    return -t * (t - 2.0);
  },
  quarticOut: t => {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/more-stories */ "./components/more-stories.js");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.js");
/* harmony import */ var _components_hero_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hero-intro */ "./components/hero-intro.js");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/intro */ "./components/intro.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Index({
  allPosts
}) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Next.js Blog Example with ", _lib_constants__WEBPACK_IMPORTED_MODULE_9__["CMS_NAME"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_components_hero_intro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), heroPost && __jsx(_components_hero_post__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: heroPost.title,
    coverImage: heroPost.coverImage,
    date: heroPost.date,
    author: heroPost.author,
    slug: heroPost.slug,
    excerpt: heroPost.excerpt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: morePosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 36
    }
  }))));
}
async function getStaticProps({
  preview = false
}) {
  const allPosts = (await Object(_lib_api__WEBPACK_IMPORTED_MODULE_8__["getAllPostsForHome"])(preview)) || [];
  return {
    props: {
      allPosts
    }
  };
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wduntak/Projects/cms-datocms-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datocms":
/*!********************************!*\
  !*** external "react-datocms" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datocms");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY292ZXItaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVyby1pbnRyby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlcm8tcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ludHJvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vcmUtc3Rvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0LXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2xpYi9lYXNpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRvY21zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQWxlcnQiLCJwcmV2aWV3IiwiY24iLCJBdmF0YXIiLCJuYW1lIiwicGljdHVyZSIsInVybCIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiQ292ZXJJbWFnZSIsInRpdGxlIiwicmVzcG9uc2l2ZUltYWdlIiwic2x1ZyIsImltYWdlIiwiYWx0IiwiRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwicGFyc2VJU08iLCJmb3JtYXQiLCJGb290ZXIiLCJFWEFNUExFX1BBVEgiLCJIZXJvSW50cm8iLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsIlNsaWRlc2hvdyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbmRlciIsIlRleHRGWCIsImNvbnN0cnVjdG9yIiwiZWwiLCJET00iLCJ0ZXh0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZXh0c1RvdGFsIiwibGVuZ3RoIiwibWlkZGxlSWR4IiwiTWF0aCIsImZsb29yIiwibG9vcEludGVydmFsIiwic2hvdyIsImhpZGUiLCJsb29wRW5kSWRkbGVUaW1lIiwiZGlyIiwiaGFsZndheUNhbGxiYWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb29wSGlkZSIsInBvcyIsInNldFRpbWVvdXQiLCJoaWRlVGV4dCIsImxvb3BTaG93Iiwic2hvd1RleHQiLCJ0b2dnbGVUZXh0IiwiYWN0aW9uIiwiY2hhbmdlU3R5bGUiLCJ1cCIsIl8iLCJzdHlsZSIsIm9wYWNpdHkiLCJkb3duIiwiU2xpZGUiLCJpbWciLCJ3cmFwIiwiaW5uZXIiLCJ0ZXh0RlgiLCJoaWRlSW1hZ2UiLCJ0b2dnbGVJbWFnZSIsInNob3dJbWFnZSIsIlRpbWVsaW5lTGl0ZSIsImFkZCIsInRvIiwiZWFzZSIsIlF1aW50IiwiZWFzZU91dCIsInN0YXJ0QXQiLCJ4IiwibmF2IiwicHJldiIsIm5leHQiLCJzbGlkZXMiLCJmb3JFYWNoIiwic2xpZGUiLCJwdXNoIiwic2xpZGVzVG90YWwiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiaW5pdEV2ZW50cyIsIm9uQ2xpY2tQcmV2Rm4iLCJuYXZpZ2F0ZSIsIm9uQ2xpY2tOZXh0Rm4iLCJhZGRFdmVudExpc3RlbmVyIiwiaXNBbmltYXRpbmciLCJjdXJyZW50U2xpZGUiLCJ1cGNvbWluZ1NsaWRlIiwib25DdXJyZW50SGFsZndheUNhbGxiYWNrIiwib25DdXJyZW50RW5kQ2FsbGJhY2siLCJyZW1vdmUiLCJ0aGVuIiwiSGVyb1Bvc3QiLCJjb3ZlckltYWdlIiwiZXhjZXJwdCIsImF1dGhvciIsIkludHJvIiwiTGF5b3V0IiwiTWV0YSIsIkNNU19OQU1FIiwiSE9NRV9PR19JTUFHRV9VUkwiLCJNb3JlU3RvcmllcyIsInBvc3RzIiwibWFwIiwicG9zdCIsIk5hdmlnYXRpb24iLCJwcm9wcyIsImFuaW1hdGVPdmVybGF5IiwiU2hhcGVPdmVybGF5cyIsImVsbSIsInBhdGgiLCJudW1Qb2ludHMiLCJkdXJhdGlvbiIsImRlbGF5UG9pbnRzQXJyYXkiLCJkZWxheVBvaW50c01heCIsImRlbGF5UGVyUGF0aCIsInRpbWVTdGFydCIsIm5vdyIsImlzT3BlbmVkIiwidG9nZ2xlIiwiaSIsInJhbmRvbSIsIm9wZW4iLCJjbG9zZSIsInJlbmRlckxvb3AiLCJ1cGRhdGVQYXRoIiwidGltZSIsInBvaW50cyIsImN1YmljSW5PdXQiLCJtaW4iLCJtYXgiLCJzdHIiLCJwIiwiY3AiLCJzZXRBdHRyaWJ1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJQb3N0UHJldmlldyIsIkFQSV9VUkwiLCJBUElfVE9LRU4iLCJwcm9jZXNzIiwicmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQiLCJmZXRjaEFQSSIsInF1ZXJ5IiwidmFyaWFibGVzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImVycm9ycyIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZGF0YSIsImdldFByZXZpZXdQb3N0QnlTbHVnIiwiZ2V0QWxsUG9zdHNXaXRoU2x1ZyIsImFsbFBvc3RzIiwiZ2V0QWxsUG9zdHNGb3JIb21lIiwiZ2V0UG9zdEFuZE1vcmVQb3N0cyIsIkNNU19VUkwiLCJleHBvbmVudGlhbEluIiwidCIsInBvdyIsImV4cG9uZW50aWFsT3V0IiwiZXhwb25lbnRpYWxJbk91dCIsInNpbmVPdXQiLCJIQUxGX1BJIiwic2luIiwiY2lyY3VsYXJJbk91dCIsInNxcnQiLCJjdWJpY0luIiwiY3ViaWNPdXQiLCJmIiwicXVhZHJhdGljT3V0IiwicXVhcnRpY091dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZSIsInNldCIsImVyciIsIkxpbmsiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJvayIsInN0YXR1cyIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwiX2FzIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiSW5kZXgiLCJoZXJvUG9zdCIsIm1vcmVQb3N0cyIsImdldFN0YXRpY1Byb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDO0FBQUYsQ0FBZixFQUE0QjtBQUN6QyxNQUFJQSxPQUFKLEVBQWE7QUFDWCxXQUNFO0FBQ0UsZUFBUyxFQUFFQyxpREFBRSxDQUFDLFVBQUQsRUFBYTtBQUN4QixrREFBMENELE9BRGxCO0FBRXhCLHVDQUErQixDQUFDQTtBQUZSLE9BQWIsQ0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLGlHQUM2QixHQUQ3QixFQUVFO0FBQ0UsVUFBSSxFQUFDLG1CQURQO0FBRUUsZUFBUyxFQUFDLDBEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFPTyxHQVBQLDBCQURKLENBREYsQ0FORixDQURGO0FBdUJELEdBeEJELE1Bd0JPO0FBQ0wsV0FBTyxrRUFBUDtBQUNELEdBM0J3QyxDQTRCekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRWMsU0FBU0UsTUFBVCxDQUFnQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBaEIsRUFBbUM7QUFDaEQsU0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsR0FEZjtBQUVFLGFBQVMsRUFBQyw2QkFGWjtBQUdFLE9BQUcsRUFBRUYsSUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DQSxJQUFwQyxDQU5GLENBREY7QUFVRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGMsU0FBU0csU0FBVCxDQUFtQjtBQUFFQztBQUFGLENBQW5CLEVBQWlDO0FBQzlDLFNBQU87QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrREEsUUFBbEQsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkQ7QUFDQTtBQUNBO0FBRWUsU0FBU0MsVUFBVCxDQUFvQjtBQUFFQyxPQUFGO0FBQVNDLGlCQUFUO0FBQTBCQztBQUExQixDQUFwQixFQUFzRDtBQUNuRSxRQUFNQyxLQUFLLEdBQ1QsTUFBQyxtREFBRDtBQUNFLFFBQUksa0NBQ0NGLGVBREQ7QUFFRkcsU0FBRyxFQUFHLG1CQUFrQkosS0FBTTtBQUY1QixNQUROO0FBS0UsYUFBUyxFQUFFUixpREFBRSxDQUFDLGNBQUQsRUFBaUI7QUFDNUIsNERBQXNEVTtBQUQxQixLQUFqQixDQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjs7QUFXQSxTQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQUFJLEdBQ0gsTUFBQyxnREFBRDtBQUFNLE1BQUUsRUFBRyxVQUFTQSxJQUFLLEVBQXpCO0FBQTRCLFFBQUksRUFBQyxlQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxrQkFBWUYsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCRyxLQUF2QixDQURGLENBREcsR0FLSEEsS0FOSixDQURGO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JEO0FBRWUsU0FBU0UsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUE4QjtBQUMzQyxRQUFNQyxJQUFJLEdBQUdDLHlEQUFRLENBQUNGLFVBQUQsQ0FBckI7QUFDQSxTQUFPO0FBQU0sWUFBUSxFQUFFQSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCRyx1REFBTSxDQUFDRixJQUFELEVBQU8sY0FBUCxDQUFuQyxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUVlLFNBQVNHLE1BQVQsR0FBa0I7QUFDL0IsU0FDRTtBQUFRLGFBQVMsRUFBQyxzQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx1SEFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsd0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLDhDQURQO0FBRUUsYUFBUyxFQUFDLHVKQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFPRTtBQUNFLFFBQUksRUFBRyx3REFBdURDLDJEQUFhLEVBRDdFO0FBRUUsYUFBUyxFQUFDLGdDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEYsQ0FKRixDQURGLENBREYsQ0FERjtBQXlCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFDQTtBQUVlLE1BQU1DLFNBQU4sU0FBd0JDLCtDQUF4QixDQUFrQztBQUM3Q0MsbUJBQWlCLEdBQUc7QUFDaEIsUUFBSUMsU0FBSixDQUFjQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDtBQUNIOztBQUNEQyxRQUFNLEdBQUc7QUFDTCxXQUNFO0FBQUEsMENBQW1CLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBQSwwQ0FBZSxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLGlEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFNRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FORixFQVNFO0FBQUEsMENBQWdCLG1DQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsaURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FURixFQWNFO0FBQUEsMENBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixpREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQWRGLEVBbUJFO0FBQUEsMENBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQW5CRixFQXNCRTtBQUFBLDBDQUFnQixtQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBdEJGLEVBeUJFO0FBQUEsMENBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixpREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQXpCRixFQThCRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0E5QkYsRUFpQ0U7QUFBQSwwQ0FBZ0IsbUNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixpREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQWpDRixFQXNDRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsNkVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0F0Q0YsRUEyQ0U7QUFBQSwwQ0FBZ0IsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBM0NGLENBSkYsQ0FERixFQXFERTtBQUFBLDBDQUFlLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFlLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBQSwwQ0FBZSxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLGlEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBREYsRUFNRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FORixFQVNFO0FBQUEsMENBQWdCLG1DQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsaURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FURixFQWNFO0FBQUEsMENBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixpREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQWRGLEVBbUJFO0FBQUEsMENBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQW5CRixFQXNCRTtBQUFBLDBDQUFnQixtQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBdEJGLEVBeUJFO0FBQUEsMENBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixpREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQXpCRixFQThCRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0E5QkYsRUFpQ0U7QUFBQSwwQ0FBZ0IsbUNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixpREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQWpDRixFQXNDRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsNkVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0F0Q0YsRUEyQ0U7QUFBQSwwQ0FBZ0IsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBM0NGLENBSkYsQ0FyREYsRUF5R0U7QUFBQSwwQ0FBZSxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZSxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZSxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUEsMENBQWUsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixpREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLEVBTUU7QUFBQSwwQ0FBZ0IsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBTkYsRUFTRTtBQUFBLDBDQUFnQixtQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLGlEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBVEYsRUFjRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsaURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FkRixFQW1CRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FuQkYsRUFzQkU7QUFBQSwwQ0FBZ0Isb0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQXRCRixFQXlCRTtBQUFBLDBDQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsaURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0F6QkYsRUE4QkU7QUFBQSwwQ0FBZ0IsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBOUJGLEVBaUNFO0FBQUEsMENBQWdCLG1DQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBZ0IsaURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FqQ0YsRUFzQ0U7QUFBQSwwQ0FBZ0IsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUEsMENBQWdCLDZFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBdENGLEVBMkNFO0FBQUEsMENBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFnQixxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQTNDRixDQUpGLENBekdGLEVBNkpFO0FBQUEsMENBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQSwwQ0FBa0IsK0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUlFO0FBQUEsMENBQWtCLCtDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0E3SkY7QUFBQTtBQUFBO0FBQUEsazZoQ0FERjtBQTJWSDs7QUFoVzRDO0FBaVdoRDs7QUFFRCxNQUFNQyxNQUFOLENBQWE7QUFDVEMsYUFBVyxDQUFDQyxFQUFELEVBQUs7QUFDWixTQUFLQyxHQUFMLEdBQVc7QUFBRUQsUUFBRSxFQUFFQTtBQUFOLEtBQVgsQ0FEWSxDQUVaOztBQUNBLFNBQUtDLEdBQUwsQ0FBU0MsS0FBVCxHQUFpQixDQUFDLEdBQUcsS0FBS0QsR0FBTCxDQUFTRCxFQUFULENBQVlHLGdCQUFaLENBQTZCLGdCQUE3QixDQUFKLENBQWpCO0FBQ0EsU0FBS0YsR0FBTCxDQUFTRyxVQUFULEdBQXNCLEtBQUtILEdBQUwsQ0FBU0MsS0FBVCxDQUFlRyxNQUFyQyxDQUpZLENBS1o7O0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkMsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS1AsR0FBTCxDQUFTRyxVQUFULEdBQXNCLENBQWpDLENBQWpCLENBTlksQ0FPWjs7QUFDQSxTQUFLSyxZQUFMLEdBQW9CO0FBQUVDLFVBQUksRUFBRSxFQUFSO0FBQVlDLFVBQUksRUFBRTtBQUFsQixLQUFwQixDQVJZLENBU1o7O0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBS0gsWUFBTCxDQUFrQkMsSUFBMUM7QUFDSDs7QUFDREEsTUFBSSxDQUFDO0FBQUVHLE9BQUcsR0FBRyxNQUFSO0FBQWdCQyxtQkFBZSxHQUFHO0FBQWxDLE1BQTJDLEVBQTVDLEVBQWdEO0FBQ2hELFdBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNwQyxZQUFNQyxRQUFRLEdBQUlDLEdBQUQsSUFBUztBQUN0QixZQUFJLEtBQUtiLFNBQUwsR0FBaUJhLEdBQWpCLEtBQXlCLEtBQUtiLFNBQWxDLEVBQTZDO0FBQ3pDYyxvQkFBVSxDQUFDSixPQUFELEVBQVUsS0FBS0osZ0JBQWYsQ0FBVjtBQUNBO0FBQ0g7O0FBQ0QsYUFBS1MsUUFBTCxDQUFjRixHQUFkLEVBQW1CTixHQUFuQjtBQUNBTyxrQkFBVSxDQUFDLE1BQU1GLFFBQVEsQ0FBQ0MsR0FBRyxHQUFHLENBQVAsQ0FBZixFQUEwQixLQUFLVixZQUFMLENBQWtCRSxJQUE1QyxDQUFWO0FBQ0gsT0FQRDs7QUFRQSxZQUFNVyxRQUFRLEdBQUlILEdBQUQsSUFBUztBQUN0QixZQUFJLEtBQUtiLFNBQUwsR0FBaUJhLEdBQWpCLEdBQXVCLEtBQUtiLFNBQWhDLEVBQTJDO0FBQ3ZDLGNBQUlRLGVBQWUsSUFBSSxPQUFPQSxlQUFQLEtBQTJCLFVBQWxELEVBQThEO0FBQzFEQSwyQkFBZTtBQUNsQjs7QUFDREksa0JBQVEsQ0FBQyxLQUFLWixTQUFOLENBQVI7QUFDQTtBQUNIOztBQUNELGFBQUtpQixRQUFMLENBQWNKLEdBQWQsRUFBbUJOLEdBQW5CO0FBQ0FPLGtCQUFVLENBQUMsTUFBTUUsUUFBUSxDQUFDSCxHQUFHLEdBQUcsQ0FBUCxDQUFmLEVBQTBCLEtBQUtWLFlBQUwsQ0FBa0JDLElBQTVDLENBQVY7QUFDSCxPQVZEOztBQVdBWSxjQUFRLENBQUMsS0FBS2hCLFNBQU4sQ0FBUjtBQUNILEtBckJNLENBQVA7QUFzQkg7O0FBQ0RLLE1BQUksQ0FBQztBQUFFRSxPQUFHLEdBQUcsTUFBUjtBQUFnQkMsbUJBQWUsR0FBRztBQUFsQyxNQUEyQyxFQUE1QyxFQUFnRDtBQUNoRCxXQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcEMsWUFBTUMsUUFBUSxHQUFJQyxHQUFELElBQVM7QUFDdEIsWUFBSSxLQUFLYixTQUFMLEdBQWlCYSxHQUFqQixHQUF1QixDQUEzQixFQUE4QjtBQUMxQkMsb0JBQVUsQ0FBQ0osT0FBRCxFQUFVLEtBQUtKLGdCQUFmLENBQVY7QUFDQTtBQUNIOztBQUNELGFBQUtTLFFBQUwsQ0FBY0YsR0FBZCxFQUFtQk4sR0FBbkI7QUFDQU8sa0JBQVUsQ0FBQyxNQUFNRixRQUFRLENBQUNDLEdBQUcsR0FBRyxDQUFQLENBQWYsRUFBMEIsS0FBS1YsWUFBTCxDQUFrQkUsSUFBNUMsQ0FBVjtBQUNILE9BUEQ7O0FBUUEsWUFBTVcsUUFBUSxHQUFJSCxHQUFELElBQVM7QUFDdEIsWUFBSSxLQUFLYixTQUFMLEdBQWlCYSxHQUFqQixHQUF1QixDQUEzQixFQUE4QjtBQUMxQixjQUFJTCxlQUFlLElBQUksT0FBT0EsZUFBUCxLQUEyQixVQUFsRCxFQUE4RDtBQUMxREEsMkJBQWU7QUFDbEI7O0FBQ0RJLGtCQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0E7QUFDSDs7QUFDRCxhQUFLSyxRQUFMLENBQWNKLEdBQWQsRUFBbUJOLEdBQW5CO0FBQ0FPLGtCQUFVLENBQUMsTUFBTUUsUUFBUSxDQUFDSCxHQUFHLEdBQUcsQ0FBUCxDQUFmLEVBQTBCLEtBQUtWLFlBQUwsQ0FBa0JDLElBQTVDLENBQVY7QUFDSCxPQVZEOztBQVdBWSxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0gsS0FyQk0sQ0FBUDtBQXNCSCxHQTVEUSxDQTZEVDs7O0FBQ0FELFVBQVEsQ0FBQ0YsR0FBRCxFQUFNTixHQUFOLEVBQVc7QUFDZixTQUFLVyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCTCxHQUF4QixFQUE2Qk4sR0FBN0I7QUFDSDs7QUFDRFUsVUFBUSxDQUFDSixHQUFELEVBQU1OLEdBQU4sRUFBVztBQUNmLFNBQUtXLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0JMLEdBQXhCLEVBQTZCTixHQUE3QjtBQUNIOztBQUNEVyxZQUFVLENBQUNDLE1BQUQsRUFBU04sR0FBVCxFQUFjTixHQUFkLEVBQW1CO0FBQ3pCLFVBQU1hLFdBQVcsR0FBRztBQUNoQkMsUUFBRSxFQUFFQyxDQUFDLElBQUk7QUFDTCxhQUFLM0IsR0FBTCxDQUFTQyxLQUFULENBQWUsS0FBS0ksU0FBTCxHQUFpQmEsR0FBaEMsRUFBcUNVLEtBQXJDLENBQTJDQyxPQUEzQyxHQUFxREwsTUFBTSxLQUFLLE1BQVgsR0FBb0IsQ0FBcEIsR0FBd0IsQ0FBN0U7QUFDSCxPQUhlO0FBSWhCTSxVQUFJLEVBQUVILENBQUMsSUFBSTtBQUNQLGFBQUszQixHQUFMLENBQVNDLEtBQVQsQ0FBZSxLQUFLSSxTQUFMLEdBQWlCYSxHQUFoQyxFQUFxQ1UsS0FBckMsQ0FBMkNDLE9BQTNDLEdBQXFETCxNQUFNLEtBQUssTUFBWCxHQUFvQixDQUFwQixHQUF3QixDQUE3RTtBQUNIO0FBTmUsS0FBcEI7O0FBUUEsUUFBSVosR0FBRyxLQUFLLE1BQVosRUFBb0I7QUFDaEJhLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FBLGlCQUFXLENBQUMsTUFBRCxDQUFYO0FBQ0gsS0FIRCxNQUlLO0FBQ0RBLGlCQUFXLENBQUNiLEdBQUQsQ0FBWDtBQUNIO0FBQ0o7O0FBcEZROztBQXVGYixNQUFNbUIsS0FBTixDQUFZO0FBQ1JqQyxhQUFXLENBQUNDLEVBQUQsRUFBSztBQUNaLFNBQUtDLEdBQUwsR0FBVztBQUFFRCxRQUFFLEVBQUVBO0FBQU4sS0FBWDtBQUNBLFNBQUtDLEdBQUwsQ0FBU2dDLEdBQVQsR0FBZTtBQUNYQyxVQUFJLEVBQUUsS0FBS2pDLEdBQUwsQ0FBU0QsRUFBVCxDQUFZSixhQUFaLENBQTBCLGVBQTFCLENBREs7QUFFWHVDLFdBQUssRUFBRSxLQUFLbEMsR0FBTCxDQUFTRCxFQUFULENBQVlKLGFBQVosQ0FBMEIscUJBQTFCO0FBRkksS0FBZixDQUZZLENBTVo7O0FBQ0EsU0FBS3dDLE1BQUwsR0FBYyxJQUFJdEMsTUFBSixDQUFXLEtBQUtHLEdBQUwsQ0FBU0QsRUFBVCxDQUFZSixhQUFaLENBQTBCLHFCQUExQixDQUFYLENBQWQ7QUFDSCxHQVRPLENBVVI7OztBQUNBeUMsV0FBUyxDQUFDeEIsR0FBRCxFQUFNO0FBQ1gsU0FBS3lCLFdBQUwsQ0FBaUIsTUFBakIsRUFBeUJ6QixHQUF6QjtBQUNILEdBYk8sQ0FjUjs7O0FBQ0EwQixXQUFTLENBQUMxQixHQUFELEVBQU07QUFDWCxTQUFLeUIsV0FBTCxDQUFpQixNQUFqQixFQUF5QnpCLEdBQXpCO0FBQ0g7O0FBQ0R5QixhQUFXLENBQUNiLE1BQUQsRUFBU1osR0FBVCxFQUFjO0FBQ3JCLFFBQUkyQixpREFBSixHQUFtQkMsR0FBbkIsQ0FBdUIsT0FBdkIsRUFDS0MsRUFETCxDQUNRLEtBQUt6QyxHQUFMLENBQVNnQyxHQUFULENBQWFDLElBRHJCLEVBQzJCVCxNQUFNLEtBQUssTUFBWCxHQUFvQixHQUFwQixHQUEwQixHQURyRCxFQUMwRDtBQUNsRGtCLFVBQUksRUFBRWxCLE1BQU0sS0FBSyxNQUFYLEdBQW9CbUIsMENBQUssQ0FBQ0MsT0FBMUIsR0FBb0NELDBDQUFLLENBQUNDLE9BREU7QUFFbERDLGFBQU8sRUFBRXJCLE1BQU0sS0FBSyxNQUFYLEdBQW9CLEVBQXBCLEdBQXlCO0FBQUVzQixTQUFDLEVBQUVsQyxHQUFHLEtBQUssTUFBUixHQUFpQixNQUFqQixHQUEwQixPQUEvQjtBQUF3Q2lCLGVBQU8sRUFBRTtBQUFqRCxPQUZnQjtBQUdsRGlCLE9BQUMsRUFBRXRCLE1BQU0sS0FBSyxNQUFYLEdBQW9CWixHQUFHLEtBQUssTUFBUixHQUFpQixPQUFqQixHQUEyQixNQUEvQyxHQUF3RDtBQUhULEtBRDFELEVBS08sT0FMUCxFQU1LNkIsRUFOTCxDQU1RLEtBQUt6QyxHQUFMLENBQVNnQyxHQUFULENBQWFFLEtBTnJCLEVBTTRCVixNQUFNLEtBQUssTUFBWCxHQUFvQixHQUFwQixHQUEwQixHQU50RCxFQU0yRDtBQUNuRGtCLFVBQUksRUFBRWxCLE1BQU0sS0FBSyxNQUFYLEdBQW9CbUIsMENBQUssQ0FBQ0MsT0FBMUIsR0FBb0NELDBDQUFLLENBQUNDLE9BREc7QUFFbkRDLGFBQU8sRUFBRXJCLE1BQU0sS0FBSyxNQUFYLEdBQW9CLEVBQXBCLEdBQXlCO0FBQUVzQixTQUFDLEVBQUVsQyxHQUFHLEtBQUssTUFBUixHQUFpQixPQUFqQixHQUEyQjtBQUFoQyxPQUZpQjtBQUduRGtDLE9BQUMsRUFBRXRCLE1BQU0sS0FBSyxNQUFYLEdBQW9CWixHQUFHLEtBQUssTUFBUixHQUFpQixNQUFqQixHQUEwQixPQUE5QyxHQUF3RDtBQUhSLEtBTjNELEVBVU8sT0FWUDtBQVdIOztBQTlCTzs7QUFpQ1osTUFBTW5CLFNBQU4sQ0FBZ0I7QUFDWkssYUFBVyxDQUFDQyxFQUFELEVBQUs7QUFDWixTQUFLQyxHQUFMLEdBQVc7QUFBRUQsUUFBRSxFQUFFQTtBQUFOLEtBQVgsQ0FEWSxDQUVaOztBQUNBLFNBQUtDLEdBQUwsQ0FBUytDLEdBQVQsR0FBZTtBQUNYQyxVQUFJLEVBQUUsS0FBS2hELEdBQUwsQ0FBU0QsRUFBVCxDQUFZSixhQUFaLENBQTBCLDRCQUExQixDQURLO0FBRVhzRCxVQUFJLEVBQUUsS0FBS2pELEdBQUwsQ0FBU0QsRUFBVCxDQUFZSixhQUFaLENBQTBCLDRCQUExQjtBQUZLLEtBQWYsQ0FIWSxDQU9aOztBQUNBLFNBQUt1RCxNQUFMLEdBQWMsRUFBZDtBQUNBLEtBQUMsR0FBRyxLQUFLbEQsR0FBTCxDQUFTRCxFQUFULENBQVlHLGdCQUFaLENBQTZCLGlCQUE3QixDQUFKLEVBQXFEaUQsT0FBckQsQ0FBNkRDLEtBQUssSUFBSSxLQUFLRixNQUFMLENBQVlHLElBQVosQ0FBaUIsSUFBSXRCLEtBQUosQ0FBVXFCLEtBQVYsQ0FBakIsQ0FBdEUsRUFUWSxDQVVaOztBQUNBLFNBQUtFLFdBQUwsR0FBbUIsS0FBS0osTUFBTCxDQUFZOUMsTUFBL0IsQ0FYWSxDQVlaOztBQUNBLFNBQUttRCxPQUFMLEdBQWUsQ0FBZixDQWJZLENBY1o7O0FBQ0EsU0FBS0wsTUFBTCxDQUFZLEtBQUtLLE9BQWpCLEVBQTBCdkQsR0FBMUIsQ0FBOEJELEVBQTlCLENBQWlDeUQsU0FBakMsQ0FBMkNoQixHQUEzQyxDQUErQyx5QkFBL0MsRUFmWSxDQWdCWjs7QUFDQSxTQUFLaUIsVUFBTDtBQUNIOztBQUNEQSxZQUFVLEdBQUc7QUFDVDtBQUNBLFNBQUtDLGFBQUwsR0FBcUIvQixDQUFDLElBQUksS0FBS2dDLFFBQUwsQ0FBYyxNQUFkLENBQTFCOztBQUNBLFNBQUtDLGFBQUwsR0FBcUJqQyxDQUFDLElBQUksS0FBS2dDLFFBQUwsQ0FBYyxNQUFkLENBQTFCOztBQUNBLFNBQUszRCxHQUFMLENBQVMrQyxHQUFULENBQWFDLElBQWIsQ0FBa0JhLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxLQUFLSCxhQUFqRDtBQUNBLFNBQUsxRCxHQUFMLENBQVMrQyxHQUFULENBQWFFLElBQWIsQ0FBa0JZLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxLQUFLRCxhQUFqRDtBQUNIOztBQUNERCxVQUFRLENBQUMvQyxHQUFELEVBQU07QUFDVixRQUFJLEtBQUtrRCxXQUFULEVBQXNCO0FBQ2xCLGFBQU8sS0FBUDtBQUNIOztBQUNELFNBQUtBLFdBQUwsR0FBbUIsSUFBbkIsQ0FKVSxDQUtWOztBQUNBLFVBQU1DLFlBQVksR0FBRyxLQUFLYixNQUFMLENBQVksS0FBS0ssT0FBakIsQ0FBckIsQ0FOVSxDQVFWOztBQUNBLFNBQUtBLE9BQUwsR0FBZTNDLEdBQUcsS0FBSyxNQUFSLEdBQ1gsS0FBSzJDLE9BQUwsR0FBZSxLQUFLRCxXQUFMLEdBQW1CLENBQWxDLEdBQXNDLEtBQUtDLE9BQUwsR0FBZSxDQUFyRCxHQUF5RCxDQUQ5QyxHQUVYLEtBQUtBLE9BQUwsR0FBZSxDQUFmLEdBQW1CLEtBQUtBLE9BQUwsR0FBZSxDQUFsQyxHQUFzQyxLQUFLRCxXQUFMLEdBQW1CLENBRjdELENBVFUsQ0FhVjs7QUFDQSxVQUFNVSxhQUFhLEdBQUcsS0FBS2QsTUFBTCxDQUFZLEtBQUtLLE9BQWpCLENBQXRCOztBQUVBLFVBQU1VLHdCQUF3QixHQUFHLE1BQU07QUFDbkM7QUFDQUYsa0JBQVksQ0FBQzNCLFNBQWIsQ0FBdUJ4QixHQUF2QixFQUZtQyxDQUduQzs7QUFDQW9ELG1CQUFhLENBQUM3QixNQUFkLENBQXFCbkMsR0FBckIsQ0FBeUJDLEtBQXpCLENBQStCK0QsYUFBYSxDQUFDN0IsTUFBZCxDQUFxQjlCLFNBQXBELEVBQStEdUIsS0FBL0QsQ0FBcUVDLE9BQXJFLEdBQStFLENBQS9FLENBSm1DLENBS25DOztBQUNBbUMsbUJBQWEsQ0FBQ2hFLEdBQWQsQ0FBa0JELEVBQWxCLENBQXFCeUQsU0FBckIsQ0FBK0JoQixHQUEvQixDQUFtQyx5QkFBbkMsRUFObUMsQ0FPbkM7O0FBQ0F3QixtQkFBYSxDQUFDMUIsU0FBZCxDQUF3QjFCLEdBQXhCO0FBQ0gsS0FURDs7QUFVQSxVQUFNc0Qsb0JBQW9CLEdBQUcsTUFBTTtBQUMvQjtBQUNBSCxrQkFBWSxDQUFDL0QsR0FBYixDQUFpQkQsRUFBakIsQ0FBb0J5RCxTQUFwQixDQUE4QlcsTUFBOUIsQ0FBcUMseUJBQXJDO0FBQ0FILG1CQUFhLENBQUM3QixNQUFkLENBQXFCMUIsSUFBckIsR0FBNEIyRCxJQUE1QixDQUFpQyxNQUFNLEtBQUtOLFdBQUwsR0FBbUIsS0FBMUQ7QUFDSCxLQUpELENBMUJVLENBK0JWO0FBQ0E7QUFDQTs7O0FBQ0FDLGdCQUFZLENBQUM1QixNQUFiLENBQW9CekIsSUFBcEIsQ0FBeUI7QUFBRUcscUJBQWUsRUFBRW9EO0FBQW5CLEtBQXpCLEVBQXdFRyxJQUF4RSxDQUE2RUYsb0JBQTdFO0FBQ0g7O0FBOURXLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlkaEI7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTRyxRQUFULENBQWtCO0FBQy9CM0YsT0FEK0I7QUFFL0I0RixZQUYrQjtBQUcvQnJGLE1BSCtCO0FBSS9Cc0YsU0FKK0I7QUFLL0JDLFFBTCtCO0FBTS9CNUY7QUFOK0IsQ0FBbEIsRUFPWjtBQUNELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFDRSxTQUFLLEVBQUVGLEtBRFQ7QUFFRSxtQkFBZSxFQUFFNEYsVUFBVSxDQUFDM0YsZUFGOUI7QUFHRSxRQUFJLEVBQUVDLElBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxrRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sTUFBRSxFQUFHLFVBQVNBLElBQUssRUFBekI7QUFBNEIsUUFBSSxFQUFDLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDRixLQUFoQyxDQURGLENBREYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sY0FBVSxFQUFFTyxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixDQURGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNzRixPQUE3QyxDQURGLEVBRUUsTUFBQywwREFBRDtBQUFRLFFBQUksRUFBRUMsTUFBTSxDQUFDcEcsSUFBckI7QUFBMkIsV0FBTyxFQUFFb0csTUFBTSxDQUFDbkcsT0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBWEYsQ0FSRixDQURGO0FBMkJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDtBQUNBO0FBRWUsU0FBU29HLEtBQVQsR0FBaUI7QUFDOUIsU0FDRTtBQUFTLGFBQVMsRUFBQyxxR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFDLHdCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGO0FBMEJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkQ7QUFDQTtBQUNBO0FBRWUsU0FBU0MsTUFBVCxDQUFnQjtBQUFFekcsU0FBRjtBQUFXTztBQUFYLENBQWhCLEVBQXVDO0FBQ3BELFNBQ0UsbUVBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQU8sV0FBTyxFQUFFUCxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9PLFFBQVAsQ0FGRixDQUZGLEVBTUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERjtBQVVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUNBO0FBRWUsU0FBU21HLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxrQkFETjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLCtCQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQ0UsT0FBRyxFQUFDLE1BRE47QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUdFLFNBQUssRUFBQyxPQUhSO0FBSUUsUUFBSSxFQUFDLDRCQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVlFO0FBQ0UsT0FBRyxFQUFDLE1BRE47QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUdFLFNBQUssRUFBQyxPQUhSO0FBSUUsUUFBSSxFQUFDLDRCQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWtCRTtBQUFNLE9BQUcsRUFBQyxVQUFWO0FBQXFCLFFBQUksRUFBQywyQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixFQW1CRTtBQUNFLE9BQUcsRUFBQyxXQUROO0FBRUUsUUFBSSxFQUFDLGdDQUZQO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixFQXdCRTtBQUFNLE9BQUcsRUFBQyxlQUFWO0FBQTBCLFFBQUksRUFBQyxzQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRixFQXlCRTtBQUFNLFFBQUksRUFBQyx5QkFBWDtBQUFxQyxXQUFPLEVBQUMsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixFQTBCRTtBQUFNLFFBQUksRUFBQyxzQkFBWDtBQUFrQyxXQUFPLEVBQUMsNEJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsRUEyQkU7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixFQTRCRTtBQUFNLE9BQUcsRUFBQyxXQUFWO0FBQXNCLFFBQUksRUFBQyxxQkFBM0I7QUFBaUQsUUFBSSxFQUFDLFdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsRUE2QkU7QUFDRSxRQUFJLEVBQUMsYUFEUDtBQUVFLFdBQU8sRUFBRyx5REFBd0RDLHVEQUFTLEdBRjdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsRUFpQ0U7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVDLGdFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLENBREY7QUFxQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFFZSxTQUFTQyxXQUFULENBQXFCO0FBQUVDO0FBQUYsQ0FBckIsRUFBZ0M7QUFDN0MsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsb0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUlFO0FBQUssYUFBUyxFQUFDLDRGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVVDLElBQUksSUFDYixNQUFDLGdFQUFEO0FBQ0UsT0FBRyxFQUFFQSxJQUFJLENBQUNyRyxJQURaO0FBRUUsU0FBSyxFQUFFcUcsSUFBSSxDQUFDdkcsS0FGZDtBQUdFLGNBQVUsRUFBRXVHLElBQUksQ0FBQ1gsVUFIbkI7QUFJRSxRQUFJLEVBQUVXLElBQUksQ0FBQ2hHLElBSmI7QUFLRSxVQUFNLEVBQUVnRyxJQUFJLENBQUNULE1BTGY7QUFNRSxRQUFJLEVBQUVTLElBQUksQ0FBQ3JHLElBTmI7QUFPRSxXQUFPLEVBQUVxRyxJQUFJLENBQUNWLE9BUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURILENBSkYsQ0FERjtBQW9CRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUNBO0FBR2UsTUFBTVcsVUFBTixTQUF5QjNGLCtDQUF6QixDQUFtQztBQUM5Q08sYUFBVyxDQUFFcUYsS0FBRixFQUFTLENBRW5COztBQXVCRHZGLFFBQU0sR0FBRztBQUNMLFdBQ0ksbUVBQ0U7QUFBSyxlQUFTLEVBQUMsc0NBQWY7QUFBc0QsYUFBTyxFQUFFLEtBQUt3RixjQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUpGLEVBT0U7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVBGLEVBVUU7QUFBSyxlQUFTLEVBQUMsMENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVZGLEVBYUU7QUFBSyxlQUFTLEVBQUMsMENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQWJGLENBREYsRUFrQkU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsZUFBUyxFQUFDLDZDQURaO0FBRUUsVUFBSSxFQUFDLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQU9FO0FBQ0UsZUFBUyxFQUFDLDZDQURaO0FBRUUsVUFBSSxFQUFDLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixFQWFFO0FBQ0UsZUFBUyxFQUFDLDZDQURaO0FBRUUsVUFBSSxFQUFDLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFiRixFQW1CRTtBQUNFLGVBQVMsRUFBQyw2Q0FEWjtBQUVFLFVBQUksRUFBQyxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGLENBREYsQ0FsQkYsRUE4Q0U7QUFDRSxlQUFTLEVBQUMsZ0JBRFo7QUFFRSxhQUFPLEVBQUMsYUFGVjtBQUdFLHlCQUFtQixFQUFDLE1BSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxRQUFFLEVBQUMsV0FETDtBQUVFLFFBQUUsRUFBQyxJQUZMO0FBR0UsUUFBRSxFQUFDLElBSEw7QUFJRSxRQUFFLEVBQUMsSUFKTDtBQUtFLFFBQUUsRUFBQyxNQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRTtBQUFNLFlBQU0sRUFBQyxJQUFiO0FBQWtCLGVBQVMsRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsRUFRRTtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLGVBQVMsRUFBQyxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsQ0FERixFQVdFO0FBQ0UsUUFBRSxFQUFDLFdBREw7QUFFRSxRQUFFLEVBQUMsSUFGTDtBQUdFLFFBQUUsRUFBQyxJQUhMO0FBSUUsUUFBRSxFQUFDLElBSkw7QUFLRSxRQUFFLEVBQUMsTUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0U7QUFBTSxZQUFNLEVBQUMsSUFBYjtBQUFrQixlQUFTLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBGLEVBUUU7QUFBTSxZQUFNLEVBQUMsTUFBYjtBQUFvQixlQUFTLEVBQUMsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLENBWEYsRUFxQkU7QUFDRSxRQUFFLEVBQUMsV0FETDtBQUVFLFFBQUUsRUFBQyxJQUZMO0FBR0UsUUFBRSxFQUFDLElBSEw7QUFJRSxRQUFFLEVBQUMsSUFKTDtBQUtFLFFBQUUsRUFBQyxNQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRTtBQUFNLFlBQU0sRUFBQyxJQUFiO0FBQWtCLGVBQVMsRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsRUFRRTtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLGVBQVMsRUFBQyxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsQ0FyQkYsQ0FMRixFQXFDRTtBQUFNLGVBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXJDRixFQXNDRTtBQUFNLGVBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXRDRixFQXVDRTtBQUFNLGVBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXZDRixDQTlDRixDQURKO0FBMEZIOztBQXJINkM7O0FBd0hsRCxNQUFNQyxhQUFOLENBQW9CO0FBQ2xCdkYsYUFBVyxDQUFDd0YsR0FBRCxFQUFNO0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZRCxHQUFHLENBQUNwRixnQkFBSixDQUFxQixNQUFyQixDQUFaO0FBQ0EsU0FBS3NGLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEdBQXRCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixHQUFwQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUI5RyxJQUFJLENBQUMrRyxHQUFMLEVBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtqQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7O0FBQ0RrQyxRQUFNLEdBQUc7QUFDUCxTQUFLbEMsV0FBTCxHQUFtQixJQUFuQjs7QUFDQSxTQUFLLElBQUltQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtULFNBQXpCLEVBQW9DUyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFdBQUtQLGdCQUFMLENBQXNCTyxDQUF0QixJQUEyQjNGLElBQUksQ0FBQzRGLE1BQUwsS0FBZ0IsS0FBS1AsY0FBaEQ7QUFDRDs7QUFDRCxRQUFJLEtBQUtJLFFBQUwsS0FBa0IsS0FBdEIsRUFBNkI7QUFDM0IsV0FBS0ksSUFBTDtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtDLEtBQUw7QUFDRDtBQUNGOztBQUNERCxNQUFJLEdBQUc7QUFDTCxTQUFLSixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS1QsR0FBTCxDQUFTOUIsU0FBVCxDQUFtQmhCLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0EsU0FBS3FELFNBQUwsR0FBaUI5RyxJQUFJLENBQUMrRyxHQUFMLEVBQWpCO0FBQ0EsU0FBS08sVUFBTDtBQUNEOztBQUNERCxPQUFLLEdBQUc7QUFDTixTQUFLTCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS1QsR0FBTCxDQUFTOUIsU0FBVCxDQUFtQlcsTUFBbkIsQ0FBMEIsV0FBMUI7QUFDQSxTQUFLMEIsU0FBTCxHQUFpQjlHLElBQUksQ0FBQytHLEdBQUwsRUFBakI7QUFDQSxTQUFLTyxVQUFMO0FBQ0Q7O0FBQ0RDLFlBQVUsQ0FBQ0MsSUFBRCxFQUFPO0FBQ2YsVUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJUCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtULFNBQXpCLEVBQW9DUyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDTyxZQUFNLENBQUNQLENBQUQsQ0FBTixHQUNFLENBQUMsSUFDQ3ZELGlEQUFJLENBQUMrRCxVQUFMLENBQ0VuRyxJQUFJLENBQUNvRyxHQUFMLENBQ0VwRyxJQUFJLENBQUNxRyxHQUFMLENBQVNKLElBQUksR0FBRyxLQUFLYixnQkFBTCxDQUFzQk8sQ0FBdEIsQ0FBaEIsRUFBMEMsQ0FBMUMsSUFBK0MsS0FBS1IsUUFEdEQsRUFFRSxDQUZGLENBREYsQ0FERixJQU9BLEdBUkY7QUFTRDs7QUFFRCxRQUFJbUIsR0FBRyxHQUFHLEVBQVY7QUFDQUEsT0FBRyxJQUFJLEtBQUtiLFFBQUwsR0FBaUIsV0FBVVMsTUFBTSxDQUFDLENBQUQsQ0FBSSxFQUFyQyxHQUEwQyxPQUFNQSxNQUFNLENBQUMsQ0FBRCxDQUFJLEVBQWpFOztBQUNBLFNBQUssSUFBSVAsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLVCxTQUFMLEdBQWlCLENBQXJDLEVBQXdDUyxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLFlBQU1ZLENBQUMsR0FBSSxDQUFDWixDQUFDLEdBQUcsQ0FBTCxLQUFXLEtBQUtULFNBQUwsR0FBaUIsQ0FBNUIsQ0FBRCxHQUFtQyxHQUE3QztBQUNBLFlBQU1zQixFQUFFLEdBQUdELENBQUMsR0FBSyxLQUFLLEtBQUtyQixTQUFMLEdBQWlCLENBQXRCLENBQUQsR0FBNkIsR0FBOUIsR0FBcUMsQ0FBcEQ7QUFDQW9CLFNBQUcsSUFBSyxLQUFJRSxFQUFHLElBQUdOLE1BQU0sQ0FBQ1AsQ0FBRCxDQUFJLElBQUdhLEVBQUcsSUFBR04sTUFBTSxDQUFDUCxDQUFDLEdBQUcsQ0FBTCxDQUFRLElBQUdZLENBQUUsSUFDdERMLE1BQU0sQ0FBQ1AsQ0FBQyxHQUFHLENBQUwsQ0FDUCxHQUZEO0FBR0Q7O0FBQ0RXLE9BQUcsSUFBSSxLQUFLYixRQUFMLEdBQWlCLFdBQWpCLEdBQStCLFNBQXRDO0FBQ0EsV0FBT2EsR0FBUDtBQUNEOztBQUNEaEgsUUFBTSxHQUFHO0FBQ1AsUUFBSSxLQUFLbUcsUUFBVCxFQUFtQjtBQUNqQixXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1YsSUFBTCxDQUFVbkYsTUFBOUIsRUFBc0M2RixDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLGFBQUtWLElBQUwsQ0FBVVUsQ0FBVixFQUFhYyxZQUFiLENBQ0UsR0FERixFQUVFLEtBQUtULFVBQUwsQ0FBZ0J2SCxJQUFJLENBQUMrRyxHQUFMLE1BQWMsS0FBS0QsU0FBTCxHQUFpQixLQUFLRCxZQUFMLEdBQW9CSyxDQUFuRCxDQUFoQixDQUZGO0FBSUQ7QUFDRixLQVBELE1BT087QUFDTCxXQUFLLElBQUlBLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1YsSUFBTCxDQUFVbkYsTUFBOUIsRUFBc0M2RixDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDLGFBQUtWLElBQUwsQ0FBVVUsQ0FBVixFQUFhYyxZQUFiLENBQ0UsR0FERixFQUVFLEtBQUtULFVBQUwsQ0FDRXZILElBQUksQ0FBQytHLEdBQUwsTUFDRyxLQUFLRCxTQUFMLEdBQWlCLEtBQUtELFlBQUwsSUFBcUIsS0FBS0wsSUFBTCxDQUFVbkYsTUFBVixHQUFtQjZGLENBQW5CLEdBQXVCLENBQTVDLENBRHBCLENBREYsQ0FGRjtBQU9EO0FBQ0Y7QUFDRjs7QUFDREksWUFBVSxHQUFHO0FBQ1gsU0FBS3pHLE1BQUw7O0FBQ0EsUUFDRWIsSUFBSSxDQUFDK0csR0FBTCxLQUFhLEtBQUtELFNBQWxCLEdBQ0EsS0FBS0osUUFBTCxHQUNFLEtBQUtHLFlBQUwsSUFBcUIsS0FBS0wsSUFBTCxDQUFVbkYsTUFBVixHQUFtQixDQUF4QyxDQURGLEdBRUUsS0FBS3VGLGNBSlQsRUFLRTtBQUNBcUIsMkJBQXFCLENBQUMsTUFBTTtBQUMxQixhQUFLWCxVQUFMO0FBQ0QsT0FGb0IsQ0FBckI7QUFHRCxLQVRELE1BU087QUFDTCxXQUFLdkMsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0Y7O0FBaEdpQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SHBCO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU21ELFdBQVQsQ0FBcUI7QUFDbEN2SSxPQURrQztBQUVsQzRGLFlBRmtDO0FBR2xDckYsTUFIa0M7QUFJbENzRixTQUprQztBQUtsQ0MsUUFMa0M7QUFNbEM1RjtBQU5rQyxDQUFyQixFQU9aO0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBRUEsSUFEUjtBQUVFLFNBQUssRUFBRUYsS0FGVDtBQUdFLG1CQUFlLEVBQUU0RixVQUFVLENBQUMzRixlQUg5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFO0FBQUksYUFBUyxFQUFDLDRCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sTUFBRSxFQUFHLFVBQVNDLElBQUssRUFBekI7QUFBNEIsUUFBSSxFQUFDLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDRixLQUFoQyxDQURGLENBREYsQ0FSRixFQWFFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxjQUFVLEVBQUVPLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWJGLEVBZ0JFO0FBQUcsYUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNzRixPQUE3QyxDQWhCRixFQWlCRSxNQUFDLDBEQUFEO0FBQVEsUUFBSSxFQUFFQyxNQUFNLENBQUNwRyxJQUFyQjtBQUEyQixXQUFPLEVBQUVvRyxNQUFNLENBQUNuRyxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJGLENBREY7QUFxQkQsQzs7Ozs7Ozs7Ozs7O0FDbENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNNkksT0FBTyxHQUFHLDZCQUFoQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MsZ0NBQWxCLEMsQ0FFQTs7QUFDQSxNQUFNQyx1QkFBdUIsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Q0FBakM7O0FBZ0JBLGVBQWVDLFFBQWYsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUVDLFdBQUY7QUFBYXZKO0FBQWIsSUFBeUIsRUFBeEQsRUFBNEQ7QUFDMUQsUUFBTXdKLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNSLE9BQU8sSUFBSWpKLE9BQU8sR0FBRyxVQUFILEdBQWdCLEVBQTNCLENBQVIsRUFBd0M7QUFDN0QwSixVQUFNLEVBQUUsTUFEcUQ7QUFFN0RDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQixrQkFEVDtBQUVQQyxtQkFBYSxFQUFHLFVBQVNWLFNBQVU7QUFGNUIsS0FGb0Q7QUFNN0RXLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJULFdBRG1CO0FBRW5CQztBQUZtQixLQUFmO0FBTnVELEdBQXhDLENBQXZCO0FBWUEsUUFBTVMsSUFBSSxHQUFHLE1BQU1SLEdBQUcsQ0FBQ1EsSUFBSixFQUFuQjs7QUFDQSxNQUFJQSxJQUFJLENBQUNDLE1BQVQsRUFBaUI7QUFDZkMsV0FBTyxDQUFDQyxLQUFSLENBQWNILElBQUksQ0FBQ0MsTUFBbkI7QUFDQSxVQUFNLElBQUlHLEtBQUosQ0FBVSxxQkFBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0osSUFBSSxDQUFDSyxJQUFaO0FBQ0Q7O0FBRU0sZUFBZUMsb0JBQWYsQ0FBb0MzSixJQUFwQyxFQUEwQztBQUMvQyxRQUFNMEosSUFBSSxHQUFHLE1BQU1oQixRQUFRLENBQ3hCOzs7OztNQUR3QixFQU96QjtBQUNFckosV0FBTyxFQUFFLElBRFg7QUFFRXVKLGFBQVMsRUFBRTtBQUNUNUk7QUFEUztBQUZiLEdBUHlCLENBQTNCO0FBY0EsU0FBTzBKLElBQVAsYUFBT0EsSUFBUCx1QkFBT0EsSUFBSSxDQUFFckQsSUFBYjtBQUNEO0FBRU0sZUFBZXVELG1CQUFmLEdBQXFDO0FBQzFDLFFBQU1GLElBQUksR0FBR2hCLFFBQVEsQ0FBRTs7Ozs7O0dBQUYsQ0FBckI7QUFPQSxTQUFPZ0IsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVHLFFBQWI7QUFDRDtBQUVNLGVBQWVDLGtCQUFmLENBQWtDekssT0FBbEMsRUFBMkM7QUFDaEQsUUFBTXFLLElBQUksR0FBRyxNQUFNaEIsUUFBUSxDQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcUJDRCx1QkFBd0I7R0F0QkQsRUF3QnpCO0FBQUVwSjtBQUFGLEdBeEJ5QixDQUEzQjtBQTBCQSxTQUFPcUssSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVHLFFBQWI7QUFDRDtBQUVNLGVBQWVFLG1CQUFmLENBQW1DL0osSUFBbkMsRUFBeUNYLE9BQXpDLEVBQWtEO0FBQ3ZELFFBQU1xSyxJQUFJLEdBQUcsTUFBTWhCLFFBQVEsQ0FDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBDREQsdUJBQXdCO0dBM0NDLEVBNkN6QjtBQUNFcEosV0FERjtBQUVFdUosYUFBUyxFQUFFO0FBQ1Q1STtBQURTO0FBRmIsR0E3Q3lCLENBQTNCO0FBb0RBLFNBQU8wSixJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDNUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNakosWUFBWSxHQUFHLGFBQXJCO0FBQ0EsTUFBTXVGLFFBQVEsR0FBRyxTQUFqQjtBQUNBLE1BQU1nRSxPQUFPLEdBQUcsMEJBQWhCO0FBQ0EsTUFBTS9ELGlCQUFpQixHQUM1QixtbUdBREssQzs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTW5DLElBQUksR0FBRztBQUNsQm1HLGVBQWEsRUFBRUMsQ0FBQyxJQUFJO0FBQ2xCLFdBQU9BLENBQUMsSUFBSSxHQUFMLEdBQVdBLENBQVgsR0FBZXhJLElBQUksQ0FBQ3lJLEdBQUwsQ0FBUyxHQUFULEVBQWMsUUFBUUQsQ0FBQyxHQUFHLEdBQVosQ0FBZCxDQUF0QjtBQUNELEdBSGlCO0FBSWxCRSxnQkFBYyxFQUFFRixDQUFDLElBQUk7QUFDbkIsV0FBT0EsQ0FBQyxJQUFJLEdBQUwsR0FBV0EsQ0FBWCxHQUFlLE1BQU14SSxJQUFJLENBQUN5SSxHQUFMLENBQVMsR0FBVCxFQUFjLENBQUMsSUFBRCxHQUFRRCxDQUF0QixDQUE1QjtBQUNELEdBTmlCO0FBT2xCRyxrQkFBZ0IsRUFBRUgsQ0FBQyxJQUFJO0FBQ3JCLFdBQU9BLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUFqQixHQUNIQSxDQURHLEdBRUhBLENBQUMsR0FBRyxHQUFKLEdBQ0EsQ0FBQyxHQUFELEdBQU94SSxJQUFJLENBQUN5SSxHQUFMLENBQVMsR0FBVCxFQUFjLE9BQU9ELENBQVAsR0FBVyxJQUF6QixDQURQLEdBRUEsQ0FBQyxHQUFELEdBQU94SSxJQUFJLENBQUN5SSxHQUFMLENBQVMsR0FBVCxFQUFjLE9BQU9ELENBQUMsR0FBRyxJQUF6QixDQUFQLEdBQXdDLEdBSjVDO0FBS0QsR0FiaUI7QUFjbEJJLFNBQU8sRUFBRUosQ0FBQyxJQUFJO0FBQ1osVUFBTUssT0FBTyxHQUFHLGtCQUFoQjtBQUNBLFdBQU83SSxJQUFJLENBQUM4SSxHQUFMLENBQVNOLENBQUMsR0FBR0ssT0FBYixDQUFQO0FBQ0QsR0FqQmlCO0FBa0JsQkUsZUFBYSxFQUFFUCxDQUFDLElBQUk7QUFDbEIsV0FBT0EsQ0FBQyxHQUFHLEdBQUosR0FDSCxPQUFPLE1BQU14SSxJQUFJLENBQUNnSixJQUFMLENBQVUsTUFBTSxNQUFNUixDQUFOLEdBQVVBLENBQTFCLENBQWIsQ0FERyxHQUVILE9BQU94SSxJQUFJLENBQUNnSixJQUFMLENBQVUsQ0FBQyxNQUFNLE1BQU1SLENBQWIsS0FBbUIsTUFBTUEsQ0FBTixHQUFVLEdBQTdCLENBQVYsSUFBK0MsR0FBdEQsQ0FGSjtBQUdELEdBdEJpQjtBQXVCbEJTLFNBQU8sRUFBRVQsQ0FBQyxJQUFJO0FBQ1osV0FBT0EsQ0FBQyxHQUFHQSxDQUFKLEdBQVFBLENBQWY7QUFDRCxHQXpCaUI7QUEwQmxCVSxVQUFRLEVBQUVWLENBQUMsSUFBSTtBQUNiLFVBQU1XLENBQUMsR0FBR1gsQ0FBQyxHQUFHLEdBQWQ7QUFDQSxXQUFPVyxDQUFDLEdBQUdBLENBQUosR0FBUUEsQ0FBUixHQUFZLEdBQW5CO0FBQ0QsR0E3QmlCO0FBOEJsQmhELFlBQVUsRUFBRXFDLENBQUMsSUFBSTtBQUNmLFdBQU9BLENBQUMsR0FBRyxHQUFKLEdBQVUsTUFBTUEsQ0FBTixHQUFVQSxDQUFWLEdBQWNBLENBQXhCLEdBQTRCLE1BQU14SSxJQUFJLENBQUN5SSxHQUFMLENBQVMsTUFBTUQsQ0FBTixHQUFVLEdBQW5CLEVBQXdCLEdBQXhCLENBQU4sR0FBcUMsR0FBeEU7QUFDRCxHQWhDaUI7QUFpQ2xCWSxjQUFZLEVBQUVaLENBQUMsSUFBSTtBQUNqQixXQUFPLENBQUNBLENBQUQsSUFBTUEsQ0FBQyxHQUFHLEdBQVYsQ0FBUDtBQUNELEdBbkNpQjtBQW9DbEJhLFlBQVUsRUFBRWIsQ0FBQyxJQUFJO0FBQ2YsV0FBT3hJLElBQUksQ0FBQ3lJLEdBQUwsQ0FBU0QsQ0FBQyxHQUFHLEdBQWIsRUFBa0IsR0FBbEIsS0FBMEIsTUFBTUEsQ0FBaEMsSUFBcUMsR0FBNUM7QUFDRDtBQXRDaUIsQ0FBYixDOzs7Ozs7Ozs7OztBQ0xQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7O0FDaEJhOztBQUFBLElBQUljLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRixJQUFJQyx1QkFBdUIsR0FBQ0QsbUJBQU8sQ0FBQyxzSEFBRCxDQUFuQzs7QUFBcUZFLE9BQU8sQ0FBQ0MsVUFBUixHQUFtQixJQUFuQjtBQUF3QkQsT0FBTyxDQUFDRSxPQUFSLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0osdUJBQXVCLENBQUNELG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFsQzs7QUFBcUQsSUFBSU0sSUFBSSxHQUFDTixtQkFBTyxDQUFDLGdCQUFELENBQWhCOztBQUF3QixJQUFJTyxNQUFNLEdBQUNQLG1CQUFPLENBQUMsMERBQUQsQ0FBbEI7O0FBQStDLElBQUlRLE9BQU8sR0FBQ1Qsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsMkRBQUQsQ0FBUixDQUFsQzs7QUFBd0QsSUFBSVMsUUFBUSxHQUFDVCxtQkFBTyxDQUFDLG1HQUFELENBQXBCOztBQUF5RCxTQUFTVSxPQUFULENBQWlCQyxJQUFqQixFQUFzQjtBQUFDLE1BQUlsTSxHQUFHLEdBQUMsQ0FBQyxHQUFFNkwsSUFBSSxDQUFDTSxLQUFSLEVBQWVELElBQWYsRUFBb0IsS0FBcEIsRUFBMEIsSUFBMUIsQ0FBUjtBQUF3QyxNQUFJRSxNQUFNLEdBQUMsQ0FBQyxHQUFFUCxJQUFJLENBQUNNLEtBQVIsRUFBZSxDQUFDLEdBQUVMLE1BQU0sQ0FBQ08saUJBQVYsR0FBZixFQUE4QyxLQUE5QyxFQUFvRCxJQUFwRCxDQUFYO0FBQXFFLFNBQU0sQ0FBQ3JNLEdBQUcsQ0FBQ3NNLElBQUwsSUFBV3RNLEdBQUcsQ0FBQ3VNLFFBQUosS0FBZUgsTUFBTSxDQUFDRyxRQUF0QixJQUFnQ3ZNLEdBQUcsQ0FBQ3NNLElBQUosS0FBV0YsTUFBTSxDQUFDRSxJQUFuRTtBQUF5RTs7QUFBQSxTQUFTRSxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBc0M7QUFBQyxNQUFJQyxRQUFRLEdBQUMsSUFBYjtBQUFrQixNQUFJQyxNQUFNLEdBQUMsSUFBWDtBQUFnQixNQUFJQyxVQUFVLEdBQUMsSUFBZjtBQUFvQixTQUFNLENBQUNWLElBQUQsRUFBTVcsRUFBTixLQUFXO0FBQUMsUUFBR0QsVUFBVSxJQUFFVixJQUFJLEtBQUdRLFFBQW5CLElBQTZCRyxFQUFFLEtBQUdGLE1BQXJDLEVBQTRDO0FBQUMsYUFBT0MsVUFBUDtBQUFtQjs7QUFBQSxRQUFJRSxNQUFNLEdBQUNMLFVBQVUsQ0FBQ1AsSUFBRCxFQUFNVyxFQUFOLENBQXJCO0FBQStCSCxZQUFRLEdBQUNSLElBQVQ7QUFBY1MsVUFBTSxHQUFDRSxFQUFQO0FBQVVELGNBQVUsR0FBQ0UsTUFBWDtBQUFrQixXQUFPQSxNQUFQO0FBQWUsR0FBMUs7QUFBNEs7O0FBQUEsU0FBU0MsU0FBVCxDQUFtQi9NLEdBQW5CLEVBQXVCO0FBQUMsU0FBT0EsR0FBRyxJQUFFLE9BQU9BLEdBQVAsS0FBYSxRQUFsQixHQUEyQixDQUFDLEdBQUU4TCxNQUFNLENBQUNrQixvQkFBVixFQUFnQ2hOLEdBQWhDLENBQTNCLEdBQWdFQSxHQUF2RTtBQUE0RTs7QUFBQSxJQUFJaU4sUUFBSjtBQUFhLElBQUlDLFNBQVMsR0FBQyxJQUFJQyxHQUFKLEVBQWQ7QUFBd0IsSUFBSUMsb0JBQW9CLEdBQUMsUUFBNEJDLFNBQTVCLEdBQXdELElBQWpGO0FBQXNGLElBQUlDLFVBQVUsR0FBQyxFQUFmOztBQUFrQixTQUFTQyxXQUFULEdBQXNCO0FBQUM7QUFDL3FDLE1BQUdOLFFBQUgsRUFBWTtBQUFDLFdBQU9BLFFBQVA7QUFBaUIsR0FEZ3BDLENBQ2hwQzs7O0FBQzlCLE1BQUcsQ0FBQ0csb0JBQUosRUFBeUI7QUFBQyxXQUFPSSxTQUFQO0FBQWtCOztBQUFBLFNBQU9QLFFBQVEsR0FBQyxJQUFJRyxvQkFBSixDQUF5QkssT0FBTyxJQUFFO0FBQUNBLFdBQU8sQ0FBQzVJLE9BQVIsQ0FBZ0I2SSxLQUFLLElBQUU7QUFBQyxVQUFHLENBQUNSLFNBQVMsQ0FBQ1MsR0FBVixDQUFjRCxLQUFLLENBQUNFLE1BQXBCLENBQUosRUFBZ0M7QUFBQztBQUFROztBQUFBLFVBQUlDLEVBQUUsR0FBQ1gsU0FBUyxDQUFDWSxHQUFWLENBQWNKLEtBQUssQ0FBQ0UsTUFBcEIsQ0FBUDs7QUFBbUMsVUFBR0YsS0FBSyxDQUFDSyxjQUFOLElBQXNCTCxLQUFLLENBQUNNLGlCQUFOLEdBQXdCLENBQWpELEVBQW1EO0FBQUNmLGdCQUFRLENBQUNnQixTQUFULENBQW1CUCxLQUFLLENBQUNFLE1BQXpCO0FBQWlDVixpQkFBUyxDQUFDZ0IsTUFBVixDQUFpQlIsS0FBSyxDQUFDRSxNQUF2QjtBQUErQkMsVUFBRTtBQUFJO0FBQUMsS0FBL047QUFBa08sR0FBclEsRUFBc1E7QUFBQ00sY0FBVSxFQUFDO0FBQVosR0FBdFEsQ0FBaEI7QUFBNlM7O0FBQUEsSUFBSUMscUJBQXFCLEdBQUMsQ0FBQzNNLEVBQUQsRUFBSW9NLEVBQUosS0FBUztBQUFDLE1BQUlaLFFBQVEsR0FBQ00sV0FBVyxFQUF4Qjs7QUFBMkIsTUFBRyxDQUFDTixRQUFKLEVBQWE7QUFBQyxXQUFNLE1BQUksQ0FBRSxDQUFaO0FBQWM7O0FBQUFBLFVBQVEsQ0FBQ29CLE9BQVQsQ0FBaUI1TSxFQUFqQjtBQUFxQnlMLFdBQVMsQ0FBQ29CLEdBQVYsQ0FBYzdNLEVBQWQsRUFBaUJvTSxFQUFqQjtBQUFxQixTQUFNLE1BQUk7QUFBQyxRQUFHO0FBQUNaLGNBQVEsQ0FBQ2dCLFNBQVQsQ0FBbUJ4TSxFQUFuQjtBQUF3QixLQUE1QixDQUE0QixPQUFNOE0sR0FBTixFQUFVO0FBQUMxRSxhQUFPLENBQUNDLEtBQVIsQ0FBY3lFLEdBQWQ7QUFBb0I7O0FBQUFyQixhQUFTLENBQUNnQixNQUFWLENBQWlCek0sRUFBakI7QUFBc0IsR0FBNUY7QUFBOEYsQ0FBbk87O0FBQW9PLE1BQU0rTSxJQUFOLFNBQW1CNUMsTUFBTSxDQUFDM0ssU0FBMUIsQ0FBbUM7QUFBQ08sYUFBVyxDQUFDcUYsS0FBRCxFQUFPO0FBQUMsVUFBTUEsS0FBTjtBQUFhLFNBQUswQixDQUFMLEdBQU8sS0FBSyxDQUFaOztBQUFjLFNBQUtrRyxnQkFBTCxHQUFzQixNQUFJLENBQUUsQ0FBNUI7O0FBQTZCLFNBQUtDLFVBQUwsR0FBZ0JsQyxpQkFBaUIsQ0FBQyxDQUFDTixJQUFELEVBQU15QyxNQUFOLEtBQWU7QUFBQyxhQUFNO0FBQUN6QyxZQUFJLEVBQUMsQ0FBQyxHQUFFRixRQUFRLENBQUM0QyxXQUFaLEVBQXlCN0IsU0FBUyxDQUFDYixJQUFELENBQWxDLENBQU47QUFBZ0RXLFVBQUUsRUFBQzhCLE1BQU0sR0FBQyxDQUFDLEdBQUUzQyxRQUFRLENBQUM0QyxXQUFaLEVBQXlCN0IsU0FBUyxDQUFDNEIsTUFBRCxDQUFsQyxDQUFELEdBQTZDQTtBQUF0RyxPQUFOO0FBQXFILEtBQXRJLENBQWpDOztBQUF5SyxTQUFLRSxXQUFMLEdBQWlCQyxDQUFDLElBQUU7QUFBQyxVQUFHO0FBQUNDLGdCQUFEO0FBQVVuQjtBQUFWLFVBQWtCa0IsQ0FBQyxDQUFDRSxhQUF2Qjs7QUFBcUMsVUFBR0QsUUFBUSxLQUFHLEdBQVgsS0FBaUJuQixNQUFNLElBQUVBLE1BQU0sS0FBRyxPQUFqQixJQUEwQmtCLENBQUMsQ0FBQ0csT0FBNUIsSUFBcUNILENBQUMsQ0FBQ0ksT0FBdkMsSUFBZ0RKLENBQUMsQ0FBQ0ssUUFBbEQsSUFBNERMLENBQUMsQ0FBQ00sV0FBRixJQUFlTixDQUFDLENBQUNNLFdBQUYsQ0FBY0MsS0FBZCxLQUFzQixDQUFsSCxDQUFILEVBQXdIO0FBQUM7QUFDeGdDO0FBQVE7O0FBQUEsVUFBRztBQUFDbkQsWUFBRDtBQUFNVztBQUFOLFVBQVUsS0FBSzZCLFVBQUwsQ0FBZ0IsS0FBSzdILEtBQUwsQ0FBV3FGLElBQTNCLEVBQWdDLEtBQUtyRixLQUFMLENBQVdnRyxFQUEzQyxDQUFiOztBQUE0RCxVQUFHLENBQUNaLE9BQU8sQ0FBQ0MsSUFBRCxDQUFYLEVBQWtCO0FBQUM7QUFDdkY7QUFBUTs7QUFBQSxVQUFHO0FBQUNvRDtBQUFELFVBQVdqQyxNQUFNLENBQUNrQyxRQUFyQjtBQUE4QnJELFVBQUksR0FBQyxDQUFDLEdBQUVMLElBQUksQ0FBQ3BKLE9BQVIsRUFBaUI2TSxRQUFqQixFQUEwQnBELElBQTFCLENBQUw7QUFBcUNXLFFBQUUsR0FBQ0EsRUFBRSxHQUFDLENBQUMsR0FBRWhCLElBQUksQ0FBQ3BKLE9BQVIsRUFBaUI2TSxRQUFqQixFQUEwQnpDLEVBQTFCLENBQUQsR0FBK0JYLElBQXBDO0FBQXlDNEMsT0FBQyxDQUFDVSxjQUFGLEdBRnF2QixDQUVsdUI7O0FBQ3ZJLFVBQUc7QUFBQ0M7QUFBRCxVQUFTLEtBQUs1SSxLQUFqQjs7QUFBdUIsVUFBRzRJLE1BQU0sSUFBRSxJQUFYLEVBQWdCO0FBQUNBLGNBQU0sR0FBQzVDLEVBQUUsQ0FBQzZDLE9BQUgsQ0FBVyxHQUFYLElBQWdCLENBQXZCO0FBQTBCLE9BSHV5QixDQUd2eUI7OztBQUNsRTNELGFBQU8sQ0FBQ0osT0FBUixDQUFnQixLQUFLOUUsS0FBTCxDQUFXOEksT0FBWCxHQUFtQixTQUFuQixHQUE2QixNQUE3QyxFQUFxRHpELElBQXJELEVBQTBEVyxFQUExRCxFQUE2RDtBQUFDK0MsZUFBTyxFQUFDLEtBQUsvSSxLQUFMLENBQVcrSTtBQUFwQixPQUE3RCxFQUEyRjlKLElBQTNGLENBQWdHK0osT0FBTyxJQUFFO0FBQUMsWUFBRyxDQUFDQSxPQUFKLEVBQVk7O0FBQU8sWUFBR0osTUFBSCxFQUFVO0FBQUNwQyxnQkFBTSxDQUFDeUMsUUFBUCxDQUFnQixDQUFoQixFQUFrQixDQUFsQjtBQUFxQjFPLGtCQUFRLENBQUNvSSxJQUFULENBQWN1RyxLQUFkO0FBQXVCO0FBQUMsT0FBckw7QUFBd0wsS0FKNnBCOztBQUk1cEIsY0FBdUM7QUFBQyxVQUFHbEosS0FBSyxDQUFDbUosUUFBVCxFQUFrQjtBQUFDbkcsZUFBTyxDQUFDb0csSUFBUixDQUFhLGlLQUFiO0FBQWlMO0FBQUM7O0FBQUEsU0FBSzFILENBQUwsR0FBTzFCLEtBQUssQ0FBQ21KLFFBQU4sS0FBaUIsS0FBeEI7QUFBK0I7O0FBQUFFLHNCQUFvQixHQUFFO0FBQUMsU0FBS3pCLGdCQUFMO0FBQXlCOztBQUFBMEIsVUFBUSxHQUFFO0FBQUMsUUFBRztBQUFDYjtBQUFELFFBQVdqQyxNQUFNLENBQUNrQyxRQUFyQjtBQUE4QixRQUFHO0FBQUNyRCxVQUFJLEVBQUNrRSxVQUFOO0FBQWlCdkQsUUFBRSxFQUFDd0Q7QUFBcEIsUUFBOEIsS0FBSzNCLFVBQUwsQ0FBZ0IsS0FBSzdILEtBQUwsQ0FBV3FGLElBQTNCLEVBQWdDLEtBQUtyRixLQUFMLENBQVdnRyxFQUEzQyxDQUFqQztBQUFnRixRQUFJeUQsWUFBWSxHQUFDLENBQUMsR0FBRXpFLElBQUksQ0FBQ3BKLE9BQVIsRUFBaUI2TSxRQUFqQixFQUEwQmMsVUFBMUIsQ0FBakI7QUFBdUQsV0FBTSxDQUFDRSxZQUFELEVBQWNELFFBQVEsR0FBQyxDQUFDLEdBQUV4RSxJQUFJLENBQUNwSixPQUFSLEVBQWlCNk0sUUFBakIsRUFBMEJlLFFBQTFCLENBQUQsR0FBcUNDLFlBQTNELENBQU47QUFBZ0Y7O0FBQUFDLFdBQVMsQ0FBQ0MsR0FBRCxFQUFLO0FBQUMsUUFBRyxLQUFLakksQ0FBTCxJQUFRNkUsb0JBQVIsSUFBOEJvRCxHQUE5QixJQUFtQ0EsR0FBRyxDQUFDQyxPQUExQyxFQUFrRDtBQUFDLFdBQUtoQyxnQkFBTDtBQUF3QixVQUFJaUMsWUFBWSxHQUFDcEQsVUFBVSxDQUFDLEtBQUs2QyxRQUFMLEdBQWdCUSxJQUFoQixFQUFxQjtBQUNoNEIsU0FEMjJCLENBQUQsQ0FBM0I7O0FBQ3owQixVQUFHLENBQUNELFlBQUosRUFBaUI7QUFBQyxhQUFLakMsZ0JBQUwsR0FBc0JMLHFCQUFxQixDQUFDb0MsR0FBRCxFQUFLLE1BQUk7QUFBQyxlQUFLUixRQUFMO0FBQWlCLFNBQTNCLENBQTNDO0FBQXlFO0FBQUM7QUFBQyxHQUw2ZixDQUs3ZjtBQUNuRzs7O0FBQ0FBLFVBQVEsQ0FBQ1ksT0FBRCxFQUFTO0FBQUMsUUFBRyxDQUFDLEtBQUtySSxDQUFOLFFBQUgsRUFBd0MsT0FBekMsQ0FBZ0Q7O0FBQ2pFLFFBQUlzSSxLQUFLLEdBQUMsS0FBS1YsUUFBTCxFQUFWLENBRGlCLENBQ1M7QUFDMUI7QUFDQTs7QUFDQXBFLFdBQU8sQ0FBQ0osT0FBUixDQUFnQnFFLFFBQWhCLENBQXlCYSxLQUFLO0FBQUM7QUFBVSxLQUFYLENBQTlCLEVBQTRDQSxLQUFLO0FBQUM7QUFBWSxLQUFiLENBQWpELEVBQWlFRCxPQUFqRSxFQUEwRUUsS0FBMUUsQ0FBZ0Z2QyxHQUFHLElBQUU7QUFBQyxnQkFBdUM7QUFBQztBQUM5SCxjQUFNQSxHQUFOO0FBQVc7QUFBQyxLQURaOztBQUNjakIsY0FBVSxDQUFDdUQsS0FBSyxDQUFDRixJQUFOLEVBQVc7QUFDcEMsT0FEeUIsQ0FBRCxDQUFWLEdBQ1IsSUFEUTtBQUNGOztBQUFBclAsUUFBTSxHQUFFO0FBQUMsUUFBRztBQUFDcEI7QUFBRCxRQUFXLEtBQUsyRyxLQUFuQjtBQUF5QixRQUFHO0FBQUNxRixVQUFEO0FBQU1XO0FBQU4sUUFBVSxLQUFLNkIsVUFBTCxDQUFnQixLQUFLN0gsS0FBTCxDQUFXcUYsSUFBM0IsRUFBZ0MsS0FBS3JGLEtBQUwsQ0FBV2dHLEVBQTNDLENBQWIsQ0FBMUIsQ0FBc0Y7O0FBQzFHLFFBQUcsT0FBTzNNLFFBQVAsS0FBa0IsUUFBckIsRUFBOEI7QUFBQ0EsY0FBUSxHQUFDLGFBQWEwTCxNQUFNLENBQUNELE9BQVAsQ0FBZW9GLGFBQWYsQ0FBNkIsR0FBN0IsRUFBaUMsSUFBakMsRUFBc0M3USxRQUF0QyxDQUF0QjtBQUF1RSxLQURsRixDQUNrRjs7O0FBQ3RHLFFBQUk4USxLQUFLLEdBQUNwRixNQUFNLENBQUNxRixRQUFQLENBQWdCQyxJQUFoQixDQUFxQmhSLFFBQXJCLENBQVY7O0FBQXlDLFFBQUkyRyxLQUFLLEdBQUM7QUFBQzJKLFNBQUcsRUFBQy9PLEVBQUUsSUFBRTtBQUFDLGFBQUs4TyxTQUFMLENBQWU5TyxFQUFmOztBQUFtQixZQUFHdVAsS0FBSyxJQUFFLE9BQU9BLEtBQVAsS0FBZSxRQUF0QixJQUFnQ0EsS0FBSyxDQUFDUixHQUF6QyxFQUE2QztBQUFDLGNBQUcsT0FBT1EsS0FBSyxDQUFDUixHQUFiLEtBQW1CLFVBQXRCLEVBQWlDUSxLQUFLLENBQUNSLEdBQU4sQ0FBVS9PLEVBQVYsRUFBakMsS0FBb0QsSUFBRyxPQUFPdVAsS0FBSyxDQUFDUixHQUFiLEtBQW1CLFFBQXRCLEVBQStCO0FBQUNRLGlCQUFLLENBQUNSLEdBQU4sQ0FBVXZMLE9BQVYsR0FBa0J4RCxFQUFsQjtBQUFzQjtBQUFDO0FBQUMsT0FBdkw7QUFBd0wwUCxrQkFBWSxFQUFDckMsQ0FBQyxJQUFFO0FBQUMsWUFBR2tDLEtBQUssQ0FBQ25LLEtBQU4sSUFBYSxPQUFPbUssS0FBSyxDQUFDbkssS0FBTixDQUFZc0ssWUFBbkIsS0FBa0MsVUFBbEQsRUFBNkQ7QUFBQ0gsZUFBSyxDQUFDbkssS0FBTixDQUFZc0ssWUFBWixDQUF5QnJDLENBQXpCO0FBQTZCOztBQUFBLGFBQUtrQixRQUFMLENBQWM7QUFBQ29CLGtCQUFRLEVBQUM7QUFBVixTQUFkO0FBQWdDLE9BQXBVO0FBQXFVQyxhQUFPLEVBQUN2QyxDQUFDLElBQUU7QUFBQyxZQUFHa0MsS0FBSyxDQUFDbkssS0FBTixJQUFhLE9BQU9tSyxLQUFLLENBQUNuSyxLQUFOLENBQVl3SyxPQUFuQixLQUE2QixVQUE3QyxFQUF3RDtBQUFDTCxlQUFLLENBQUNuSyxLQUFOLENBQVl3SyxPQUFaLENBQW9CdkMsQ0FBcEI7QUFBd0I7O0FBQUEsWUFBRyxDQUFDQSxDQUFDLENBQUN3QyxnQkFBTixFQUF1QjtBQUFDLGVBQUt6QyxXQUFMLENBQWlCQyxDQUFqQjtBQUFxQjtBQUFDO0FBQWhkLEtBQVYsQ0FGckIsQ0FFaWY7QUFDcmdCOztBQUNBLFFBQUcsS0FBS2pJLEtBQUwsQ0FBVzBLLFFBQVgsSUFBcUJQLEtBQUssQ0FBQ1EsSUFBTixLQUFhLEdBQWIsSUFBa0IsRUFBRSxVQUFTUixLQUFLLENBQUNuSyxLQUFqQixDQUExQyxFQUFrRTtBQUFDQSxXQUFLLENBQUNxRixJQUFOLEdBQVdXLEVBQUUsSUFBRVgsSUFBZjtBQUFxQixLQUpwRSxDQUlvRTtBQUN4Rjs7O0FBQ0EsUUFBR3BELEtBQUgsRUFBNEMsZ0NBQStPOztBQUFBLFdBQU84QyxNQUFNLENBQUNELE9BQVAsQ0FBZThGLFlBQWYsQ0FBNEJULEtBQTVCLEVBQWtDbkssS0FBbEMsQ0FBUDtBQUFpRDs7QUFuQm9SOztBQW1CblIsVUFBd0M7QUFBQyxNQUFJb0osSUFBSSxHQUFDLENBQUMsR0FBRW5FLE1BQU0sQ0FBQzRGLFFBQVYsRUFBb0I3SCxPQUFPLENBQUNDLEtBQTVCLENBQVQsQ0FBRCxDQUE2Qzs7QUFDbGEsTUFBSTZILFNBQVMsR0FBQ3BHLG1CQUFPLENBQUMsOEJBQUQsQ0FBckI7O0FBQW9DLE1BQUlxRyxLQUFLLEdBQUNyRyxtQkFBTyxDQUFDLDBDQUFELENBQWpCLENBRGlWLENBQzNTOzs7QUFDMUVpRCxNQUFJLENBQUNxRCxTQUFMLEdBQWVELEtBQUssQ0FBQztBQUFDMUYsUUFBSSxFQUFDeUYsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ0ksTUFBWCxFQUFrQkosU0FBUyxDQUFDSyxNQUE1QixDQUFwQixFQUF5REMsVUFBL0Q7QUFBMEVwRixNQUFFLEVBQUM4RSxTQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsU0FBUyxDQUFDSSxNQUFYLEVBQWtCSixTQUFTLENBQUNLLE1BQTVCLENBQXBCLENBQTdFO0FBQXNJaEMsWUFBUSxFQUFDMkIsU0FBUyxDQUFDTyxJQUF6SjtBQUE4SnZDLFdBQU8sRUFBQ2dDLFNBQVMsQ0FBQ08sSUFBaEw7QUFBcUx0QyxXQUFPLEVBQUMrQixTQUFTLENBQUNPLElBQXZNO0FBQTRNWCxZQUFRLEVBQUNJLFNBQVMsQ0FBQ08sSUFBL047QUFBb096QyxVQUFNLEVBQUNrQyxTQUFTLENBQUNPLElBQXJQO0FBQTBQaFMsWUFBUSxFQUFDeVIsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ1EsT0FBWCxFQUFtQixDQUFDdEwsS0FBRCxFQUFPdUwsUUFBUCxLQUFrQjtBQUFDLFVBQUlDLEtBQUssR0FBQ3hMLEtBQUssQ0FBQ3VMLFFBQUQsQ0FBZjs7QUFBMEIsVUFBRyxPQUFPQyxLQUFQLEtBQWUsUUFBbEIsRUFBMkI7QUFBQ3BDLFlBQUksQ0FBQyxpSUFBRCxDQUFKO0FBQXlJOztBQUFBLGFBQU8sSUFBUDtBQUFhLEtBQWxQLENBQXBCLEVBQXlRZ0M7QUFBNWdCLEdBQUQsQ0FBcEI7QUFBK2lCOztBQUFBLElBQUlLLFFBQVEsR0FBQzlELElBQWI7QUFBa0IvQyxPQUFPLENBQUNFLE9BQVIsR0FBZ0IyRyxRQUFoQixDOzs7Ozs7Ozs7Ozs7QUN2QnBqQjs7QUFBQSxJQUFJOUcsdUJBQXVCLEdBQUNELG1CQUFPLENBQUMsc0hBQUQsQ0FBbkM7O0FBQXFGLElBQUlELHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRkUsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUM4RyxTQUFSLEdBQWtCQSxTQUFsQjtBQUE0QjlHLE9BQU8sQ0FBQytHLHdCQUFSLEdBQWlDQSx3QkFBakM7QUFBMEQvRyxPQUFPLENBQUNnSCxZQUFSLEdBQXFCaEgsT0FBTyxDQUFDaUgsVUFBUixHQUFtQmpILE9BQU8sQ0FBQ0UsT0FBUixHQUFnQixLQUFLLENBQTdEOztBQUErRCxJQUFJQyxNQUFNLEdBQUNOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlTLFFBQVEsR0FBQ1IsdUJBQXVCLENBQUNELG1CQUFPLENBQUMsbUdBQUQsQ0FBUixDQUFwQzs7QUFBa0ZFLE9BQU8sQ0FBQ2tILE1BQVIsR0FBZTNHLFFBQVEsQ0FBQ0wsT0FBeEI7QUFBZ0NGLE9BQU8sQ0FBQ21ILFVBQVIsR0FBbUI1RyxRQUFRLENBQUM0RyxVQUE1Qjs7QUFBdUMsSUFBSUMsY0FBYyxHQUFDdEgsbUJBQU8sQ0FBQyw0RUFBRCxDQUExQjs7QUFBZ0UsSUFBSXVILFdBQVcsR0FBQ3hILHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHFFQUFELENBQVIsQ0FBdEM7O0FBQWlFRSxPQUFPLENBQUNpSCxVQUFSLEdBQW1CSSxXQUFXLENBQUNuSCxPQUEvQjtBQUF1Qzs7QUFBbUIsSUFBSW9ILGVBQWUsR0FBQztBQUFDQyxRQUFNLEVBQUMsSUFBUjtBQUFhO0FBQzN3QkMsZ0JBQWMsRUFBQyxFQUQrdUI7O0FBQzV1QkMsT0FBSyxDQUFDckYsRUFBRCxFQUFJO0FBQUMsUUFBRyxLQUFLbUYsTUFBUixFQUFlLE9BQU9uRixFQUFFLEVBQVQ7O0FBQVksZUFBK0IsRUFBK0I7QUFBQzs7QUFEd29CLENBQXBCLEMsQ0FDbG5COztBQUN4SCxJQUFJc0YsaUJBQWlCLEdBQUMsQ0FBQyxVQUFELEVBQVksT0FBWixFQUFvQixPQUFwQixFQUE0QixRQUE1QixFQUFxQyxZQUFyQyxFQUFrRCxZQUFsRCxFQUErRCxVQUEvRCxDQUF0QjtBQUFpRyxJQUFJQyxZQUFZLEdBQUMsQ0FBQyxrQkFBRCxFQUFvQixxQkFBcEIsRUFBMEMscUJBQTFDLEVBQWdFLGtCQUFoRSxFQUFtRixpQkFBbkYsRUFBcUcsb0JBQXJHLENBQWpCO0FBQTRJLElBQUlDLGdCQUFnQixHQUFDLENBQUMsTUFBRCxFQUFRLFNBQVIsRUFBa0IsUUFBbEIsRUFBMkIsTUFBM0IsRUFBa0MsVUFBbEMsRUFBNkMsZ0JBQTdDLENBQXJCLEMsQ0FBb0Y7O0FBQ2pVQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JSLGVBQXRCLEVBQXNDLFFBQXRDLEVBQStDO0FBQUNqRixLQUFHLEdBQUU7QUFBQyxXQUFPOUIsUUFBUSxDQUFDTCxPQUFULENBQWlCNkgsTUFBeEI7QUFBZ0M7O0FBQXZDLENBQS9DO0FBQXlGTCxpQkFBaUIsQ0FBQ3RPLE9BQWxCLENBQTBCNE8sS0FBSyxJQUFFO0FBQUM7QUFDM0g7QUFDQTtBQUNBO0FBQ0FILFFBQU0sQ0FBQ0MsY0FBUCxDQUFzQlIsZUFBdEIsRUFBc0NVLEtBQXRDLEVBQTRDO0FBQUMzRixPQUFHLEdBQUU7QUFBQyxVQUFJa0YsTUFBTSxHQUFDVSxTQUFTLEVBQXBCO0FBQXVCLGFBQU9WLE1BQU0sQ0FBQ1MsS0FBRCxDQUFiO0FBQXNCOztBQUFwRCxHQUE1QztBQUFvRyxDQUpYO0FBSWFKLGdCQUFnQixDQUFDeE8sT0FBakIsQ0FBeUI0TyxLQUFLLElBQUU7QUFBQztBQUN2STs7QUFBQ1YsaUJBQWUsQ0FBQ1UsS0FBRCxDQUFmLEdBQXVCLFlBQVU7QUFBQyxRQUFJVCxNQUFNLEdBQUNVLFNBQVMsRUFBcEI7QUFBdUIsV0FBT1YsTUFBTSxDQUFDUyxLQUFELENBQU4sQ0FBYyxHQUFHRSxTQUFqQixDQUFQO0FBQW9DLEdBQTdGO0FBQStGLENBRE07QUFDSlAsWUFBWSxDQUFDdk8sT0FBYixDQUFxQitPLEtBQUssSUFBRTtBQUFDYixpQkFBZSxDQUFDRyxLQUFoQixDQUFzQixNQUFJO0FBQUNsSCxZQUFRLENBQUNMLE9BQVQsQ0FBaUI2SCxNQUFqQixDQUF3QkssRUFBeEIsQ0FBMkJELEtBQTNCLEVBQWlDLFlBQVU7QUFBQyxVQUFJRSxVQUFVLEdBQUMsT0FBS0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsRUFBTCxHQUFtQ0osS0FBSyxDQUFDSyxTQUFOLENBQWdCLENBQWhCLENBQWxEO0FBQXFFLFVBQUlDLGdCQUFnQixHQUFDbkIsZUFBckI7O0FBQXFDLFVBQUdtQixnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFuQixFQUFnQztBQUFDLFlBQUc7QUFBQ0ksMEJBQWdCLENBQUNKLFVBQUQsQ0FBaEIsQ0FBNkIsR0FBR0gsU0FBaEM7QUFBNEMsU0FBaEQsQ0FBZ0QsT0FBTXBGLEdBQU4sRUFBVTtBQUFDO0FBQzVZMUUsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjLDBDQUF3Q2dLLFVBQXRELEVBRDJZLENBQ3pVOztBQUNsRWpLLGlCQUFPLENBQUNDLEtBQVIsQ0FBY3lFLEdBQUcsQ0FBQzRGLE9BQUosR0FBWSxJQUFaLEdBQWlCNUYsR0FBRyxDQUFDNkYsS0FBbkM7QUFBMkM7QUFBQztBQUFDLEtBRjZHO0FBRTFHLEdBRitFO0FBRTVFLENBRitDOztBQUU3QyxTQUFTVixTQUFULEdBQW9CO0FBQUMsTUFBRyxDQUFDWCxlQUFlLENBQUNDLE1BQXBCLEVBQTJCO0FBQUMsUUFBSW1CLE9BQU8sR0FBQyxnQ0FBOEIseUVBQTFDO0FBQW9ILFVBQU0sSUFBSXBLLEtBQUosQ0FBVW9LLE9BQVYsQ0FBTjtBQUEwQjs7QUFBQSxTQUFPcEIsZUFBZSxDQUFDQyxNQUF2QjtBQUErQixDLENBQUE7OztBQUNuUixJQUFJVixRQUFRLEdBQUNTLGVBQWIsQyxDQUE2Qjs7QUFDN0J0SCxPQUFPLENBQUNFLE9BQVIsR0FBZ0IyRyxRQUFoQjs7QUFBeUIsU0FBU0MsU0FBVCxHQUFvQjtBQUFDLFNBQU8zRyxNQUFNLENBQUNELE9BQVAsQ0FBZTBJLFVBQWYsQ0FBMEJ4QixjQUFjLENBQUN5QixhQUF6QyxDQUFQO0FBQWdFLEMsQ0FBQTtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFJN0IsWUFBWSxHQUFDLFNBQVNBLFlBQVQsR0FBdUI7QUFBQyxPQUFJLElBQUk4QixJQUFJLEdBQUNaLFNBQVMsQ0FBQzdSLE1BQW5CLEVBQTBCMFMsSUFBSSxHQUFDLElBQUlDLEtBQUosQ0FBVUYsSUFBVixDQUEvQixFQUErQ0csSUFBSSxHQUFDLENBQXhELEVBQTBEQSxJQUFJLEdBQUNILElBQS9ELEVBQW9FRyxJQUFJLEVBQXhFLEVBQTJFO0FBQUNGLFFBQUksQ0FBQ0UsSUFBRCxDQUFKLEdBQVdmLFNBQVMsQ0FBQ2UsSUFBRCxDQUFwQjtBQUE0Qjs7QUFBQTNCLGlCQUFlLENBQUNDLE1BQWhCLEdBQXVCLElBQUloSCxRQUFRLENBQUNMLE9BQWIsQ0FBcUIsR0FBRzZJLElBQXhCLENBQXZCO0FBQXFEekIsaUJBQWUsQ0FBQ0UsY0FBaEIsQ0FBK0JwTyxPQUEvQixDQUF1Q2dKLEVBQUUsSUFBRUEsRUFBRSxFQUE3QztBQUFpRGtGLGlCQUFlLENBQUNFLGNBQWhCLEdBQStCLEVBQS9CO0FBQWtDLFNBQU9GLGVBQWUsQ0FBQ0MsTUFBdkI7QUFBK0IsQ0FBeFQsQyxDQUF5VDs7O0FBQ3pUdkgsT0FBTyxDQUFDZ0gsWUFBUixHQUFxQkEsWUFBckI7O0FBQWtDLFNBQVNELHdCQUFULENBQWtDUSxNQUFsQyxFQUF5QztBQUFDLE1BQUlqSCxPQUFPLEdBQUNpSCxNQUFaO0FBQW1CLE1BQUkyQixRQUFRLEdBQUMsRUFBYjs7QUFBZ0IsT0FBSSxJQUFJQyxRQUFSLElBQW9CekIsaUJBQXBCLEVBQXNDO0FBQUMsUUFBRyxPQUFPcEgsT0FBTyxDQUFDNkksUUFBRCxDQUFkLEtBQTJCLFFBQTlCLEVBQXVDO0FBQUNELGNBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CdEIsTUFBTSxDQUFDdUIsTUFBUCxDQUFjLEVBQWQsRUFBaUI5SSxPQUFPLENBQUM2SSxRQUFELENBQXhCLENBQW5CLENBQUQsQ0FBd0Q7O0FBQ3JQO0FBQVU7O0FBQUFELFlBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CN0ksT0FBTyxDQUFDNkksUUFBRCxDQUExQjtBQUFzQyxHQUQyQixDQUMzQjs7O0FBQ2hERCxVQUFRLENBQUNuQixNQUFULEdBQWdCeEgsUUFBUSxDQUFDTCxPQUFULENBQWlCNkgsTUFBakM7QUFBd0NILGtCQUFnQixDQUFDeE8sT0FBakIsQ0FBeUI0TyxLQUFLLElBQUU7QUFBQ2tCLFlBQVEsQ0FBQ2xCLEtBQUQsQ0FBUixHQUFnQixZQUFVO0FBQUMsYUFBTzFILE9BQU8sQ0FBQzBILEtBQUQsQ0FBUCxDQUFlLEdBQUdFLFNBQWxCLENBQVA7QUFBcUMsS0FBaEU7QUFBa0UsR0FBbkc7QUFBcUcsU0FBT2dCLFFBQVA7QUFBaUIsQzs7Ozs7Ozs7Ozs7O0FDckJqSjs7QUFBQSxJQUFJckosc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GRSxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ0UsT0FBUixHQUFnQitHLFVBQWhCOztBQUEyQixJQUFJOUcsTUFBTSxHQUFDTixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJUSxPQUFPLEdBQUNSLG1CQUFPLENBQUMsMkRBQUQsQ0FBbkI7O0FBQWdDLFNBQVNtSCxVQUFULENBQW9Cb0MsaUJBQXBCLEVBQXNDO0FBQUMsV0FBU0MsaUJBQVQsQ0FBMkJsTyxLQUEzQixFQUFpQztBQUFDLFdBQU0sYUFBYStFLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlb0YsYUFBZixDQUE2QitELGlCQUE3QixFQUErQ3hCLE1BQU0sQ0FBQ3VCLE1BQVAsQ0FBYztBQUFDN0IsWUFBTSxFQUFDLENBQUMsR0FBRWpILE9BQU8sQ0FBQ3dHLFNBQVg7QUFBUixLQUFkLEVBQStDMUwsS0FBL0MsQ0FBL0MsQ0FBbkI7QUFBMEg7O0FBQUFrTyxtQkFBaUIsQ0FBQ0MsZUFBbEIsR0FBa0NGLGlCQUFpQixDQUFDRSxlQUFwRCxDQUFtRTtBQUFuRTtBQUN6YUQsbUJBQWlCLENBQUNFLG1CQUFsQixHQUFzQ0gsaUJBQWlCLENBQUNHLG1CQUF4RDs7QUFBNEUsWUFBdUM7QUFBQyxRQUFJblYsSUFBSSxHQUFDZ1YsaUJBQWlCLENBQUNJLFdBQWxCLElBQStCSixpQkFBaUIsQ0FBQ2hWLElBQWpELElBQXVELFNBQWhFO0FBQTBFaVYscUJBQWlCLENBQUNHLFdBQWxCLEdBQThCLGdCQUFjcFYsSUFBZCxHQUFtQixHQUFqRDtBQUFzRDs7QUFBQSxTQUFPaVYsaUJBQVA7QUFBMEIsQzs7Ozs7Ozs7Ozs7O0FDRGxRO0FBQ2I7Ozs7Ozs7Ozs7OztBQVdBekIsTUFBTSxDQUFDQyxjQUFQLENBQXNCOUgsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTRHLE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLFNBQVM4QyxJQUFULEdBQWdCO0FBQ1osUUFBTUMsR0FBRyxHQUFHOUIsTUFBTSxDQUFDK0IsTUFBUCxDQUFjLElBQWQsQ0FBWjtBQUNBLFNBQU87QUFDSHhCLE1BQUUsQ0FBQ3JDLElBQUQsRUFBTzhELE9BQVAsRUFBZ0I7QUFDZDtBQUNBLE9BQUNGLEdBQUcsQ0FBQzVELElBQUQsQ0FBSCxLQUFjNEQsR0FBRyxDQUFDNUQsSUFBRCxDQUFILEdBQVksRUFBMUIsQ0FBRCxFQUFnQ3pNLElBQWhDLENBQXFDdVEsT0FBckM7QUFDSCxLQUpFOztBQUtIQyxPQUFHLENBQUMvRCxJQUFELEVBQU84RCxPQUFQLEVBQWdCO0FBQ2YsVUFBSUYsR0FBRyxDQUFDNUQsSUFBRCxDQUFQLEVBQWU7QUFDWDtBQUNBNEQsV0FBRyxDQUFDNUQsSUFBRCxDQUFILENBQVVnRSxNQUFWLENBQWlCSixHQUFHLENBQUM1RCxJQUFELENBQUgsQ0FBVTlCLE9BQVYsQ0FBa0I0RixPQUFsQixNQUErQixDQUFoRCxFQUFtRCxDQUFuRDtBQUNIO0FBQ0osS0FWRTs7QUFXSEcsUUFBSSxDQUFDakUsSUFBRCxFQUFPLEdBQUdrRSxJQUFWLEVBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxPQUFDTixHQUFHLENBQUM1RCxJQUFELENBQUgsSUFBYSxFQUFkLEVBQWtCbUUsS0FBbEIsR0FBMEJqUCxHQUExQixDQUErQjRPLE9BQUQsSUFBYTtBQUN2Q0EsZUFBTyxDQUFDLEdBQUdJLElBQUosQ0FBUDtBQUNILE9BRkQ7QUFHSDs7QUFqQkUsR0FBUDtBQW1CSDs7QUFDRGpLLE9BQU8sQ0FBQ0UsT0FBUixHQUFrQndKLElBQWxCLEM7Ozs7Ozs7Ozs7OztBQ25DYTs7QUFDYixJQUFJUyxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ25LLFVBQVosR0FBMEJtSyxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBdkMsTUFBTSxDQUFDQyxjQUFQLENBQXNCOUgsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTRHLE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLE1BQU15RCxLQUFLLEdBQUd2SyxtQkFBTyxDQUFDLGdCQUFELENBQXJCOztBQUNBLE1BQU13SyxNQUFNLEdBQUdILGVBQWUsQ0FBQ3JLLG1CQUFPLENBQUMsaUVBQUQsQ0FBUixDQUE5Qjs7QUFDQSxNQUFNeUssT0FBTyxHQUFHekssbUJBQU8sQ0FBQyxtRUFBRCxDQUF2Qjs7QUFDQSxNQUFNMEssWUFBWSxHQUFHMUssbUJBQU8sQ0FBQywrRkFBRCxDQUE1Qjs7QUFDQSxNQUFNMkssZUFBZSxHQUFHM0ssbUJBQU8sQ0FBQyxxR0FBRCxDQUEvQjs7QUFDQSxNQUFNNEssYUFBYSxHQUFHNUssbUJBQU8sQ0FBQyxpR0FBRCxDQUE3Qjs7QUFDQSxNQUFNNkssUUFBUSxHQUFHdE4sTUFBQSxJQUFzQyxFQUF2RDs7QUFDQSxTQUFTOEYsV0FBVCxDQUFxQjNILElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU9BLElBQUksQ0FBQ3lJLE9BQUwsQ0FBYTBHLFFBQWIsTUFBMkIsQ0FBM0IsR0FBK0JBLFFBQVEsR0FBR25QLElBQTFDLEdBQWlEQSxJQUF4RDtBQUNIOztBQUNEd0UsT0FBTyxDQUFDbUQsV0FBUixHQUFzQkEsV0FBdEI7O0FBQ0EsU0FBU3lILFdBQVQsQ0FBcUJwUCxJQUFyQixFQUEyQjtBQUN2QixTQUFPQSxJQUFJLENBQUN5SSxPQUFMLENBQWEwRyxRQUFiLE1BQTJCLENBQTNCLEdBQ0RuUCxJQUFJLENBQUNxUCxNQUFMLENBQVlGLFFBQVEsQ0FBQ3RVLE1BQXJCLEtBQWdDLEdBRC9CLEdBRURtRixJQUZOO0FBR0g7O0FBQ0R3RSxPQUFPLENBQUM0SyxXQUFSLEdBQXNCQSxXQUF0Qjs7QUFDQSxTQUFTRSxPQUFULENBQWlCdFAsSUFBakIsRUFBdUI7QUFDbkIsU0FBT0EsSUFBSSxDQUFDMEksT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsS0FBMkIsR0FBbEM7QUFDSDs7QUFDRCxNQUFNNkcsWUFBWSxHQUFJdlAsSUFBRCxJQUFVc1AsT0FBTyxDQUFDLENBQUN0UCxJQUFELElBQVNBLElBQUksS0FBSyxHQUFsQixHQUF3QixRQUF4QixHQUFtQ0EsSUFBcEMsQ0FBdEM7O0FBQ0EsU0FBU3dQLGFBQVQsQ0FBdUJuSCxRQUF2QixFQUFpQ3JHLEtBQWpDLEVBQXdDeU4sY0FBeEMsRUFBd0Q3SSxFQUF4RCxFQUE0RDtBQUN4RCxNQUFJOEksUUFBUSxHQUFHRCxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQXBDOztBQUNBLFdBQVNFLFdBQVQsR0FBdUI7QUFDbkIsV0FBT3hOLEtBQUssQ0FBQzRNLE9BQU8sQ0FBQ2hKLG9CQUFSLENBQTZCO0FBQ3RDc0MsY0FBUSxFQUFFVixXQUFXLEVBQ3JCO0FBQ0MscUJBQWNpSSxhQUFhLENBQUNDLE9BQVEsR0FBRVQsV0FBVyxDQUFDL0csUUFBRCxDQUFXLE9BRnhDLENBRGlCO0FBSXRDckc7QUFKc0MsS0FBN0IsQ0FBRCxFQUtSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOE4saUJBQVcsRUFBRTtBQVpiLEtBTFEsQ0FBTCxDQWtCSmpSLElBbEJJLENBa0JDcUQsR0FBRyxJQUFJO0FBQ1gsVUFBSSxDQUFDQSxHQUFHLENBQUM2TixFQUFULEVBQWE7QUFDVCxZQUFJLEVBQUVMLFFBQUYsR0FBYSxDQUFiLElBQWtCeE4sR0FBRyxDQUFDOE4sTUFBSixJQUFjLEdBQXBDLEVBQXlDO0FBQ3JDLGlCQUFPTCxXQUFXLEVBQWxCO0FBQ0g7O0FBQ0QsY0FBTSxJQUFJN00sS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSDs7QUFDRCxhQUFPWixHQUFHLENBQUNRLElBQUosRUFBUDtBQUNILEtBMUJNLENBQVA7QUEyQkg7O0FBQ0QsU0FBT2lOLFdBQVcsR0FDYjlRLElBREUsQ0FDR2tFLElBQUksSUFBSTtBQUNkLFdBQU82RCxFQUFFLEdBQUdBLEVBQUUsQ0FBQzdELElBQUQsQ0FBTCxHQUFjQSxJQUF2QjtBQUNILEdBSE0sRUFJRjhHLEtBSkUsQ0FJS3ZDLEdBQUQsSUFBUztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUNtSSxjQUFMLEVBQXFCO0FBQ2pCO0FBQ0FuSSxTQUFHLENBQUMySSxJQUFKLEdBQVcsaUJBQVg7QUFDSDs7QUFDRCxVQUFNM0ksR0FBTjtBQUNILEdBYk0sQ0FBUDtBQWNIOztBQUNELE1BQU1vRSxNQUFOLENBQWE7QUFDVG5SLGFBQVcsQ0FBQzhOLFFBQUQsRUFBV3JHLEtBQVgsRUFBa0I0RCxFQUFsQixFQUFzQjtBQUFFc0ssZ0JBQUY7QUFBZ0JDLGNBQWhCO0FBQTRCQyxPQUE1QjtBQUFpQ0MsV0FBakM7QUFBMENyVyxhQUExQztBQUFxRHNOLE9BQXJEO0FBQTBEZ0osZ0JBQTFEO0FBQXdFQztBQUF4RSxHQUF0QixFQUE2RztBQUNwSDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYOztBQUNBLFNBQUtDLFVBQUwsR0FBbUI1SSxDQUFELElBQU87QUFDckIsVUFBSSxDQUFDQSxDQUFDLENBQUM2SSxLQUFQLEVBQWM7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUVySSxrQkFBRjtBQUFZckc7QUFBWixZQUFzQixJQUE1QjtBQUNBLGFBQUsyTyxXQUFMLENBQWlCLGNBQWpCLEVBQWlDNUIsT0FBTyxDQUFDaEosb0JBQVIsQ0FBNkI7QUFBRXNDLGtCQUFGO0FBQVlyRztBQUFaLFNBQTdCLENBQWpDLEVBQW9GK00sT0FBTyxDQUFDNkIsTUFBUixFQUFwRjtBQUNBO0FBQ0gsT0Fkb0IsQ0FlckI7QUFDQTs7O0FBQ0EsVUFBSS9JLENBQUMsQ0FBQzZJLEtBQUYsSUFDQSxLQUFLRyxLQURMLElBRUFoSixDQUFDLENBQUM2SSxLQUFGLENBQVE5SyxFQUFSLEtBQWUsS0FBS2tMLE1BRnBCLElBR0FqQyxLQUFLLENBQUMzSixLQUFOLENBQVkyQyxDQUFDLENBQUM2SSxLQUFGLENBQVEzWCxHQUFwQixFQUF5QnNQLFFBQXpCLEtBQXNDLEtBQUtBLFFBSC9DLEVBR3lEO0FBQ3JEO0FBQ0gsT0F0Qm9CLENBdUJyQjtBQUNBOzs7QUFDQSxVQUFJLEtBQUswSSxJQUFMLElBQWEsQ0FBQyxLQUFLQSxJQUFMLENBQVVsSixDQUFDLENBQUM2SSxLQUFaLENBQWxCLEVBQXNDO0FBQ2xDO0FBQ0g7O0FBQ0QsWUFBTTtBQUFFM1gsV0FBRjtBQUFPNk0sVUFBUDtBQUFXK0Q7QUFBWCxVQUF1QjlCLENBQUMsQ0FBQzZJLEtBQS9COztBQUNBLGdCQUEyQztBQUN2QyxZQUFJLE9BQU8zWCxHQUFQLEtBQWUsV0FBZixJQUE4QixPQUFPNk0sRUFBUCxLQUFjLFdBQWhELEVBQTZEO0FBQ3pEaEQsaUJBQU8sQ0FBQ29HLElBQVIsQ0FBYSwwSEFBYjtBQUNIO0FBQ0o7O0FBQ0QsV0FBS04sT0FBTCxDQUFhM1AsR0FBYixFQUFrQjZNLEVBQWxCLEVBQXNCK0QsT0FBdEI7QUFDSCxLQW5DRDs7QUFvQ0EsU0FBS3FILGNBQUwsR0FBdUJGLE1BQUQsSUFBWTtBQUM5QixZQUFNekksUUFBUSxHQUFHa0gsWUFBWSxDQUFDVixLQUFLLENBQUMzSixLQUFOLENBQVk0TCxNQUFaLEVBQW9CekksUUFBckIsQ0FBN0I7QUFDQSxhQUFPLFNBQ0Q5TSxTQURDLEdBRURpVSxhQUFhLENBQUNuSCxRQUFELEVBQVcsSUFBWCxFQUFpQixLQUFLd0ksS0FBdEIsRUFBNkI5TixJQUFJLElBQUssS0FBS3lOLEdBQUwsQ0FBU25JLFFBQVQsSUFBcUJ0RixJQUEzRCxDQUZuQjtBQUdILEtBTEQ7O0FBTUEsU0FBS2tPLGNBQUwsR0FBdUJILE1BQUQsSUFBWTtBQUM5QixVQUFJO0FBQUV6SSxnQkFBRjtBQUFZckc7QUFBWixVQUFzQjZNLEtBQUssQ0FBQzNKLEtBQU4sQ0FBWTRMLE1BQVosRUFBb0IsSUFBcEIsQ0FBMUI7QUFDQXpJLGNBQVEsR0FBR2tILFlBQVksQ0FBQ2xILFFBQUQsQ0FBdkI7QUFDQSxhQUFPbUgsYUFBYSxDQUFDbkgsUUFBRCxFQUFXckcsS0FBWCxFQUFrQixLQUFLNk8sS0FBdkIsQ0FBcEI7QUFDSCxLQUpELENBN0NvSCxDQWtEcEg7OztBQUNBLFNBQUtLLEtBQUwsR0FBYTVCLE9BQU8sQ0FBQ2pILFFBQUQsQ0FBcEIsQ0FuRG9ILENBb0RwSDs7QUFDQSxTQUFLOEksVUFBTCxHQUFrQixFQUFsQixDQXJEb0gsQ0FzRHBIO0FBQ0E7QUFDQTs7QUFDQSxRQUFJOUksUUFBUSxLQUFLLFNBQWpCLEVBQTRCO0FBQ3hCLFdBQUs4SSxVQUFMLENBQWdCLEtBQUtELEtBQXJCLElBQThCO0FBQzFCbFgsaUJBRDBCO0FBRTFCNEYsYUFBSyxFQUFFc1EsWUFGbUI7QUFHMUI1SSxXQUgwQjtBQUkxQjhKLGVBQU8sRUFBRWxCLFlBQVksSUFBSUEsWUFBWSxDQUFDa0IsT0FKWjtBQUsxQkMsZUFBTyxFQUFFbkIsWUFBWSxJQUFJQSxZQUFZLENBQUNtQjtBQUxaLE9BQTlCO0FBT0g7O0FBQ0QsU0FBS0YsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUFFblgsZUFBUyxFQUFFb1c7QUFBYixLQUEzQixDQWxFb0gsQ0FtRXBIO0FBQ0E7O0FBQ0EsU0FBSzdELE1BQUwsR0FBY2IsTUFBTSxDQUFDYSxNQUFyQjtBQUNBLFNBQUs0RCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUs5SCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtyRyxLQUFMLEdBQWFBLEtBQWIsQ0F4RW9ILENBeUVwSDtBQUNBOztBQUNBLFNBQUs4TyxNQUFMLEdBQ0k7QUFDQTlCLGdCQUFZLENBQUNzQyxjQUFiLENBQTRCakosUUFBNUIsS0FBeUN1SCxhQUFhLENBQUMyQixVQUF2RCxHQUFvRWxKLFFBQXBFLEdBQStFekMsRUFGbkY7QUFHQSxTQUFLdUosUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLcUMsR0FBTCxHQUFXbEIsWUFBWDtBQUNBLFNBQUttQixHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JyQixPQUFoQixDQWpGb0gsQ0FrRnBIO0FBQ0E7O0FBQ0EsU0FBS1EsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLTixVQUFMLEdBQWtCQSxVQUFsQjs7QUFDQSxlQUFtQyxFQVNsQztBQUNKLEdBakdRLENBa0dUOzs7QUFDQSxTQUFPb0Isd0JBQVAsQ0FBZ0M1WSxHQUFoQyxFQUFxQztBQUNqQyxRQUFJOEksS0FBSixFQUE4QyxFQUE5QyxNQUtLO0FBQ0QsYUFBTzlJLEdBQVA7QUFDSDtBQUNKOztBQUNENlksUUFBTSxDQUFDVixLQUFELEVBQVF0QyxHQUFSLEVBQWE7QUFDZixVQUFNNVUsU0FBUyxHQUFHNFUsR0FBRyxDQUFDbEssT0FBSixJQUFla0ssR0FBakM7QUFDQSxVQUFNN0wsSUFBSSxHQUFHLEtBQUtvTyxVQUFMLENBQWdCRCxLQUFoQixDQUFiOztBQUNBLFFBQUksQ0FBQ25PLElBQUwsRUFBVztBQUNQLFlBQU0sSUFBSUQsS0FBSixDQUFXLG9DQUFtQ29PLEtBQU0sRUFBcEQsQ0FBTjtBQUNIOztBQUNELFVBQU1XLE9BQU8sR0FBR3hGLE1BQU0sQ0FBQ3VCLE1BQVAsQ0FBY3ZCLE1BQU0sQ0FBQ3VCLE1BQVAsQ0FBYyxFQUFkLEVBQWtCN0ssSUFBbEIsQ0FBZCxFQUF1QztBQUFFL0ksZUFBRjtBQUFhb1gsYUFBTyxFQUFFeEMsR0FBRyxDQUFDd0MsT0FBMUI7QUFBbUNDLGFBQU8sRUFBRXpDLEdBQUcsQ0FBQ3lDO0FBQWhELEtBQXZDLENBQWhCO0FBQ0EsU0FBS0YsVUFBTCxDQUFnQkQsS0FBaEIsSUFBeUJXLE9BQXpCLENBUGUsQ0FRZjs7QUFDQSxRQUFJWCxLQUFLLEtBQUssT0FBZCxFQUF1QjtBQUNuQixXQUFLWSxNQUFMLENBQVksS0FBS1gsVUFBTCxDQUFnQixLQUFLRCxLQUFyQixDQUFaO0FBQ0E7QUFDSDs7QUFDRCxRQUFJQSxLQUFLLEtBQUssS0FBS0EsS0FBbkIsRUFBMEI7QUFDdEIsV0FBS1ksTUFBTCxDQUFZRCxPQUFaO0FBQ0g7QUFDSjs7QUFDREUsUUFBTSxHQUFHO0FBQ0wzTCxVQUFNLENBQUNrQyxRQUFQLENBQWdCeUosTUFBaEI7QUFDSDtBQUNEOzs7OztBQUdBQyxNQUFJLEdBQUc7QUFDSDVMLFVBQU0sQ0FBQzZMLE9BQVAsQ0FBZUQsSUFBZjtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBTUFsVSxNQUFJLENBQUMvRSxHQUFELEVBQU02TSxFQUFFLEdBQUc3TSxHQUFYLEVBQWdCNFEsT0FBTyxHQUFHLEVBQTFCLEVBQThCO0FBQzlCLFdBQU8sS0FBS3VJLE1BQUwsQ0FBWSxXQUFaLEVBQXlCblosR0FBekIsRUFBOEI2TSxFQUE5QixFQUFrQytELE9BQWxDLENBQVA7QUFDSDtBQUNEOzs7Ozs7OztBQU1BakIsU0FBTyxDQUFDM1AsR0FBRCxFQUFNNk0sRUFBRSxHQUFHN00sR0FBWCxFQUFnQjRRLE9BQU8sR0FBRyxFQUExQixFQUE4QjtBQUNqQyxXQUFPLEtBQUt1SSxNQUFMLENBQVksY0FBWixFQUE0Qm5aLEdBQTVCLEVBQWlDNk0sRUFBakMsRUFBcUMrRCxPQUFyQyxDQUFQO0FBQ0g7O0FBQ0R1SSxRQUFNLENBQUM5UCxNQUFELEVBQVN3QyxJQUFULEVBQWV1TixHQUFmLEVBQW9CeEksT0FBcEIsRUFBNkI7QUFDL0IsV0FBTyxJQUFJcE8sT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNwQyxVQUFJLENBQUNrTyxPQUFPLENBQUN5SSxFQUFiLEVBQWlCO0FBQ2IsYUFBS3ZCLEtBQUwsR0FBYSxLQUFiO0FBQ0gsT0FIbUMsQ0FJcEM7OztBQUNBLFVBQUk5QixPQUFPLENBQUNzRCxFQUFaLEVBQWdCO0FBQ1pDLG1CQUFXLENBQUNDLElBQVosQ0FBaUIsYUFBakI7QUFDSCxPQVBtQyxDQVFwQztBQUNBOzs7QUFDQSxVQUFJeFosR0FBRyxHQUFHLE9BQU82TCxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCbUssT0FBTyxDQUFDaEosb0JBQVIsQ0FBNkJuQixJQUE3QixDQUEzQixHQUFnRUEsSUFBMUU7QUFDQSxVQUFJZ0IsRUFBRSxHQUFHLE9BQU91TSxHQUFQLEtBQWUsUUFBZixHQUEwQnBELE9BQU8sQ0FBQ2hKLG9CQUFSLENBQTZCb00sR0FBN0IsQ0FBMUIsR0FBOERBLEdBQXZFO0FBQ0FwWixTQUFHLEdBQUc0TyxXQUFXLENBQUM1TyxHQUFELENBQWpCO0FBQ0E2TSxRQUFFLEdBQUcrQixXQUFXLENBQUMvQixFQUFELENBQWhCLENBYm9DLENBY3BDO0FBQ0E7O0FBQ0EsVUFBSS9ELEtBQUosRUFBOEMsRUFPN0M7O0FBQ0QsV0FBSzJRLGtCQUFMLENBQXdCNU0sRUFBeEIsRUF4Qm9DLENBeUJwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUksQ0FBQytELE9BQU8sQ0FBQ3lJLEVBQVQsSUFBZSxLQUFLSyxlQUFMLENBQXFCN00sRUFBckIsQ0FBbkIsRUFBNkM7QUFDekMsYUFBS2tMLE1BQUwsR0FBY2xMLEVBQWQ7QUFDQThGLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjaUMsSUFBZCxDQUFtQixpQkFBbkIsRUFBc0M1SSxFQUF0QztBQUNBLGFBQUsrSyxXQUFMLENBQWlCdk8sTUFBakIsRUFBeUJySixHQUF6QixFQUE4QjZNLEVBQTlCLEVBQWtDK0QsT0FBbEM7QUFDQSxhQUFLK0ksWUFBTCxDQUFrQjlNLEVBQWxCO0FBQ0E4RixjQUFNLENBQUNhLE1BQVAsQ0FBY2lDLElBQWQsQ0FBbUIsb0JBQW5CLEVBQXlDNUksRUFBekM7QUFDQSxlQUFPcEssT0FBTyxDQUFDLElBQUQsQ0FBZDtBQUNIOztBQUNELFlBQU07QUFBRTZNLGdCQUFGO0FBQVlyRyxhQUFaO0FBQW1Cc0Q7QUFBbkIsVUFBZ0N1SixLQUFLLENBQUMzSixLQUFOLENBQVluTSxHQUFaLEVBQWlCLElBQWpCLENBQXRDOztBQUNBLFVBQUksQ0FBQ3NQLFFBQUQsSUFBYS9DLFFBQWpCLEVBQTJCO0FBQ3ZCLGtCQUEyQztBQUN2QyxnQkFBTSxJQUFJeEMsS0FBSixDQUFXLGtDQUFpQy9KLEdBQUksa0RBQWhELENBQU47QUFDSDs7QUFDRCxlQUFPeUMsT0FBTyxDQUFDLEtBQUQsQ0FBZDtBQUNILE9BNUNtQyxDQTZDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSSxDQUFDLEtBQUttWCxRQUFMLENBQWMvTSxFQUFkLENBQUwsRUFBd0I7QUFDcEJ4RCxjQUFNLEdBQUcsY0FBVDtBQUNIOztBQUNELFlBQU04TyxLQUFLLEdBQUc1QixPQUFPLENBQUNqSCxRQUFELENBQXJCO0FBQ0EsWUFBTTtBQUFFTSxlQUFPLEdBQUc7QUFBWixVQUFzQmdCLE9BQTVCOztBQUNBLFVBQUlxRixZQUFZLENBQUNzQyxjQUFiLENBQTRCSixLQUE1QixDQUFKLEVBQXdDO0FBQ3BDLGNBQU07QUFBRTdJLGtCQUFRLEVBQUV1SztBQUFaLFlBQTJCL0QsS0FBSyxDQUFDM0osS0FBTixDQUFZVSxFQUFaLENBQWpDO0FBQ0EsY0FBTWlOLFVBQVUsR0FBRzNELGFBQWEsQ0FBQzRELGFBQWQsQ0FBNEI1QixLQUE1QixDQUFuQjtBQUNBLGNBQU02QixVQUFVLEdBQUc5RCxlQUFlLENBQUMrRCxlQUFoQixDQUFnQ0gsVUFBaEMsRUFBNENELFVBQTVDLENBQW5COztBQUNBLFlBQUksQ0FBQ0csVUFBTCxFQUFpQjtBQUNiLGdCQUFNRSxhQUFhLEdBQUc1RyxNQUFNLENBQUM2RyxJQUFQLENBQVlMLFVBQVUsQ0FBQ00sTUFBdkIsRUFBK0JDLE1BQS9CLENBQXNDQyxLQUFLLElBQUksQ0FBQ3JSLEtBQUssQ0FBQ3FSLEtBQUQsQ0FBckQsQ0FBdEI7O0FBQ0EsY0FBSUosYUFBYSxDQUFDcFksTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixzQkFBMkM7QUFDdkMrSCxxQkFBTyxDQUFDb0csSUFBUixDQUFjLDZEQUFELEdBQ1IsZUFBY2lLLGFBQWEsQ0FBQ3ZKLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsOEJBRDVDO0FBRUg7O0FBQ0QsbUJBQU9qTyxNQUFNLENBQUMsSUFBSXFILEtBQUosQ0FBVyw4QkFBNkI4UCxVQUFXLDhDQUE2QzFCLEtBQU0sS0FBNUYsR0FDbkIsNkRBRFMsQ0FBRCxDQUFiO0FBRUg7QUFDSixTQVZELE1BV0s7QUFDRDtBQUNBN0UsZ0JBQU0sQ0FBQ3VCLE1BQVAsQ0FBYzVMLEtBQWQsRUFBcUIrUSxVQUFyQjtBQUNIO0FBQ0o7O0FBQ0RySCxZQUFNLENBQUNhLE1BQVAsQ0FBY2lDLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDNUksRUFBdkMsRUEzRW9DLENBNEVwQzs7QUFDQSxXQUFLME4sWUFBTCxDQUFrQnBDLEtBQWxCLEVBQXlCN0ksUUFBekIsRUFBbUNyRyxLQUFuQyxFQUEwQzRELEVBQTFDLEVBQThDK0MsT0FBOUMsRUFBdUQ5SixJQUF2RCxDQUE0RDBVLFNBQVMsSUFBSTtBQUNyRSxjQUFNO0FBQUUxUTtBQUFGLFlBQVkwUSxTQUFsQjs7QUFDQSxZQUFJMVEsS0FBSyxJQUFJQSxLQUFLLENBQUMyUSxTQUFuQixFQUE4QjtBQUMxQixpQkFBT2hZLE9BQU8sQ0FBQyxLQUFELENBQWQ7QUFDSDs7QUFDRGtRLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjaUMsSUFBZCxDQUFtQixxQkFBbkIsRUFBMEM1SSxFQUExQztBQUNBLGFBQUsrSyxXQUFMLENBQWlCdk8sTUFBakIsRUFBeUJySixHQUF6QixFQUE4QjZNLEVBQTlCLEVBQWtDK0QsT0FBbEM7O0FBQ0Esa0JBQTJDO0FBQ3ZDLGdCQUFNOEosT0FBTyxHQUFHLEtBQUt0QyxVQUFMLENBQWdCLE9BQWhCLEVBQXlCblgsU0FBekM7QUFDQW9NLGdCQUFNLENBQUMxSSxJQUFQLENBQVlnVyxhQUFaLEdBQ0lELE9BQU8sQ0FBQzFGLGVBQVIsS0FBNEIwRixPQUFPLENBQUN6RixtQkFBcEMsSUFDSSxDQUFDdUYsU0FBUyxDQUFDdlosU0FBVixDQUFvQitULGVBRjdCO0FBR0g7O0FBQ0QsYUFBSzFHLEdBQUwsQ0FBUzZKLEtBQVQsRUFBZ0I3SSxRQUFoQixFQUEwQnJHLEtBQTFCLEVBQWlDNEQsRUFBakMsRUFBcUMyTixTQUFyQzs7QUFDQSxZQUFJMVEsS0FBSixFQUFXO0FBQ1A2SSxnQkFBTSxDQUFDYSxNQUFQLENBQWNpQyxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzNMLEtBQXZDLEVBQThDK0MsRUFBOUM7QUFDQSxnQkFBTS9DLEtBQU47QUFDSDs7QUFDRDZJLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjaUMsSUFBZCxDQUFtQixxQkFBbkIsRUFBMEM1SSxFQUExQztBQUNBLGVBQU9wSyxPQUFPLENBQUMsSUFBRCxDQUFkO0FBQ0gsT0FwQkQsRUFvQkdDLE1BcEJIO0FBcUJILEtBbEdNLENBQVA7QUFtR0g7O0FBQ0RrVixhQUFXLENBQUN2TyxNQUFELEVBQVNySixHQUFULEVBQWM2TSxFQUFkLEVBQWtCK0QsT0FBTyxHQUFHLEVBQTVCLEVBQWdDO0FBQ3ZDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT3ZELE1BQU0sQ0FBQzZMLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkNyUCxlQUFPLENBQUNDLEtBQVIsQ0FBZSwyQ0FBZjtBQUNBO0FBQ0g7O0FBQ0QsVUFBSSxPQUFPdUQsTUFBTSxDQUFDNkwsT0FBUCxDQUFlN1AsTUFBZixDQUFQLEtBQWtDLFdBQXRDLEVBQW1EO0FBQy9DUSxlQUFPLENBQUNDLEtBQVIsQ0FBZSwyQkFBMEJULE1BQU8sbUJBQWhEO0FBQ0E7QUFDSDtBQUNKOztBQUNELFFBQUlBLE1BQU0sS0FBSyxXQUFYLElBQTBCMk0sT0FBTyxDQUFDNkIsTUFBUixPQUFxQmhMLEVBQW5ELEVBQXVEO0FBQ25EUSxZQUFNLENBQUM2TCxPQUFQLENBQWU3UCxNQUFmLEVBQXVCO0FBQ25CckosV0FEbUI7QUFFbkI2TSxVQUZtQjtBQUduQitEO0FBSG1CLE9BQXZCLEVBS0E7QUFDQTtBQUNBO0FBQ0EsUUFSQSxFQVFJL0QsRUFSSjtBQVNIO0FBQ0o7O0FBQ0QwTixjQUFZLENBQUNwQyxLQUFELEVBQVE3SSxRQUFSLEVBQWtCckcsS0FBbEIsRUFBeUI0RCxFQUF6QixFQUE2QitDLE9BQU8sR0FBRyxLQUF2QyxFQUE4QztBQUN0RCxVQUFNZ0wsZUFBZSxHQUFHLEtBQUt4QyxVQUFMLENBQWdCRCxLQUFoQixDQUF4QixDQURzRCxDQUV0RDtBQUNBOztBQUNBLFFBQUl2SSxPQUFPLElBQUlnTCxlQUFYLElBQThCLEtBQUt6QyxLQUFMLEtBQWVBLEtBQWpELEVBQXdEO0FBQ3BELGFBQU8zVixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JtWSxlQUFoQixDQUFQO0FBQ0g7O0FBQ0QsVUFBTUMsV0FBVyxHQUFHLENBQUN0TSxHQUFELEVBQU11TSxhQUFOLEtBQXdCO0FBQ3hDLGFBQU8sSUFBSXRZLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzFCLFlBQUk4TCxHQUFHLENBQUMySSxJQUFKLEtBQWEsaUJBQWIsSUFBa0M0RCxhQUF0QyxFQUFxRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0F6TixnQkFBTSxDQUFDa0MsUUFBUCxDQUFnQnJELElBQWhCLEdBQXVCVyxFQUF2QixDQU5pRCxDQU9qRDtBQUNBOztBQUNBMEIsYUFBRyxDQUFDa00sU0FBSixHQUFnQixJQUFoQixDQVRpRCxDQVVqRDs7QUFDQSxpQkFBT2hZLE9BQU8sQ0FBQztBQUFFcUgsaUJBQUssRUFBRXlFO0FBQVQsV0FBRCxDQUFkO0FBQ0g7O0FBQ0QsWUFBSUEsR0FBRyxDQUFDa00sU0FBUixFQUFtQjtBQUNmO0FBQ0EsaUJBQU9oWSxPQUFPLENBQUM7QUFBRXFILGlCQUFLLEVBQUV5RTtBQUFULFdBQUQsQ0FBZDtBQUNIOztBQUNEOUwsZUFBTyxDQUFDLEtBQUtzWSxjQUFMLENBQW9CLFNBQXBCLEVBQ0hqVixJQURHLENBQ0VxRCxHQUFHLElBQUk7QUFDYixnQkFBTTtBQUFFNlIsZ0JBQUksRUFBRS9aO0FBQVIsY0FBc0JrSSxHQUE1QjtBQUNBLGdCQUFNcVIsU0FBUyxHQUFHO0FBQUV2WixxQkFBRjtBQUFhc047QUFBYixXQUFsQjtBQUNBLGlCQUFPLElBQUkvTCxPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUMxQixpQkFBS3VTLGVBQUwsQ0FBcUIvVCxTQUFyQixFQUFnQztBQUM1QnNOLGlCQUQ0QjtBQUU1QmUsc0JBRjRCO0FBRzVCckc7QUFINEIsYUFBaEMsRUFJR25ELElBSkgsQ0FJUWUsS0FBSyxJQUFJO0FBQ2IyVCx1QkFBUyxDQUFDM1QsS0FBVixHQUFrQkEsS0FBbEI7QUFDQTJULHVCQUFTLENBQUMxUSxLQUFWLEdBQWtCeUUsR0FBbEI7QUFDQTlMLHFCQUFPLENBQUMrWCxTQUFELENBQVA7QUFDSCxhQVJELEVBUUdTLE1BQU0sSUFBSTtBQUNUcFIscUJBQU8sQ0FBQ0MsS0FBUixDQUFjLHlDQUFkLEVBQXlEbVIsTUFBekQ7QUFDQVQsdUJBQVMsQ0FBQzFRLEtBQVYsR0FBa0J5RSxHQUFsQjtBQUNBaU0sdUJBQVMsQ0FBQzNULEtBQVYsR0FBa0IsRUFBbEI7QUFDQXBFLHFCQUFPLENBQUMrWCxTQUFELENBQVA7QUFDSCxhQWJEO0FBY0gsV0FmTSxDQUFQO0FBZ0JILFNBcEJPLEVBcUJIMUosS0FyQkcsQ0FxQkd2QyxHQUFHLElBQUlzTSxXQUFXLENBQUN0TSxHQUFELEVBQU0sSUFBTixDQXJCckIsQ0FBRCxDQUFQO0FBc0JILE9BeENNLENBQVA7QUF5Q0gsS0ExQ0Q7O0FBMkNBLFdBQU8sSUFBSS9MLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcEMsVUFBSWtZLGVBQUosRUFBcUI7QUFDakIsZUFBT25ZLE9BQU8sQ0FBQ21ZLGVBQUQsQ0FBZDtBQUNIOztBQUNELFdBQUtHLGNBQUwsQ0FBb0I1QyxLQUFwQixFQUEyQnJTLElBQTNCLENBQWdDcUQsR0FBRyxJQUFJMUcsT0FBTyxDQUFDO0FBQzNDeEIsaUJBQVMsRUFBRWtJLEdBQUcsQ0FBQzZSLElBRDRCO0FBRTNDM0MsZUFBTyxFQUFFbFAsR0FBRyxDQUFDME0sR0FBSixDQUFRd0MsT0FGMEI7QUFHM0NDLGVBQU8sRUFBRW5QLEdBQUcsQ0FBQzBNLEdBQUosQ0FBUXlDO0FBSDBCLE9BQUQsQ0FBOUMsRUFJSTVWLE1BSko7QUFLSCxLQVRNLEVBVUZvRCxJQVZFLENBVUkwVSxTQUFELElBQWU7QUFDckIsWUFBTTtBQUFFdlosaUJBQUY7QUFBYW9YLGVBQWI7QUFBc0JDO0FBQXRCLFVBQWtDa0MsU0FBeEM7O0FBQ0EsZ0JBQTJDO0FBQ3ZDLGNBQU07QUFBRVU7QUFBRixZQUF5QjNQLG1CQUFPLENBQUMsMEJBQUQsQ0FBdEM7O0FBQ0EsWUFBSSxDQUFDMlAsa0JBQWtCLENBQUNqYSxTQUFELENBQXZCLEVBQW9DO0FBQ2hDLGdCQUFNLElBQUk4SSxLQUFKLENBQVcseURBQXdEdUYsUUFBUyxHQUE1RSxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLEtBQUs2TCxRQUFMLENBQWMsTUFBTTlDLE9BQU8sR0FDNUIsS0FBS0osY0FBTCxDQUFvQnBMLEVBQXBCLENBRDRCLEdBRTVCeUwsT0FBTyxHQUNILEtBQUtKLGNBQUwsQ0FBb0JyTCxFQUFwQixDQURHLEdBRUgsS0FBS21JLGVBQUwsQ0FBcUIvVCxTQUFyQixFQUNGO0FBQ0E7QUFDSXFPLGdCQURKO0FBRUlyRyxhQUZKO0FBR0k4TyxjQUFNLEVBQUVsTDtBQUhaLE9BRkUsQ0FKSCxFQVVLL0csSUFWTCxDQVVVZSxLQUFLLElBQUk7QUFDdEIyVCxpQkFBUyxDQUFDM1QsS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxhQUFLdVIsVUFBTCxDQUFnQkQsS0FBaEIsSUFBeUJxQyxTQUF6QjtBQUNBLGVBQU9BLFNBQVA7QUFDSCxPQWRNLENBQVA7QUFlSCxLQWpDTSxFQWtDRjFKLEtBbENFLENBa0NJK0osV0FsQ0osQ0FBUDtBQW1DSDs7QUFDRHZNLEtBQUcsQ0FBQzZKLEtBQUQsRUFBUTdJLFFBQVIsRUFBa0JyRyxLQUFsQixFQUF5QjRELEVBQXpCLEVBQTZCN0MsSUFBN0IsRUFBbUM7QUFDbEMsU0FBS3dOLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLVyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLN0ksUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLckcsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzhPLE1BQUwsR0FBY2xMLEVBQWQ7QUFDQSxTQUFLa00sTUFBTCxDQUFZL08sSUFBWjtBQUNIO0FBQ0Q7Ozs7OztBQUlBb1IsZ0JBQWMsQ0FBQ3ZOLEVBQUQsRUFBSztBQUNmLFNBQUttSyxJQUFMLEdBQVluSyxFQUFaO0FBQ0g7O0FBQ0Q2TCxpQkFBZSxDQUFDN00sRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLa0wsTUFBVixFQUNJLE9BQU8sS0FBUDtBQUNKLFVBQU0sQ0FBQ3NELFlBQUQsRUFBZUMsT0FBZixJQUEwQixLQUFLdkQsTUFBTCxDQUFZd0QsS0FBWixDQUFrQixHQUFsQixDQUFoQztBQUNBLFVBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxPQUFmLElBQTBCNU8sRUFBRSxDQUFDME8sS0FBSCxDQUFTLEdBQVQsQ0FBaEMsQ0FKZ0IsQ0FLaEI7O0FBQ0EsUUFBSUUsT0FBTyxJQUFJSixZQUFZLEtBQUtHLFlBQTVCLElBQTRDRixPQUFPLEtBQUtHLE9BQTVELEVBQXFFO0FBQ2pFLGFBQU8sSUFBUDtBQUNILEtBUmUsQ0FTaEI7OztBQUNBLFFBQUlKLFlBQVksS0FBS0csWUFBckIsRUFBbUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0gsS0FaZSxDQWFoQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0YsT0FBTyxLQUFLRyxPQUFuQjtBQUNIOztBQUNEOUIsY0FBWSxDQUFDOU0sRUFBRCxFQUFLO0FBQ2IsVUFBTSxHQUFHNk8sSUFBSCxJQUFXN08sRUFBRSxDQUFDME8sS0FBSCxDQUFTLEdBQVQsQ0FBakIsQ0FEYSxDQUViOztBQUNBLFFBQUlHLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2JyTyxZQUFNLENBQUN5QyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0E7QUFDSCxLQU5ZLENBT2I7OztBQUNBLFVBQU02TCxJQUFJLEdBQUd2YSxRQUFRLENBQUN3YSxjQUFULENBQXdCRixJQUF4QixDQUFiOztBQUNBLFFBQUlDLElBQUosRUFBVTtBQUNOQSxVQUFJLENBQUNFLGNBQUw7QUFDQTtBQUNILEtBWlksQ0FhYjtBQUNBOzs7QUFDQSxVQUFNQyxNQUFNLEdBQUcxYSxRQUFRLENBQUMyYSxpQkFBVCxDQUEyQkwsSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJSSxNQUFKLEVBQVk7QUFDUkEsWUFBTSxDQUFDRCxjQUFQO0FBQ0g7QUFDSjs7QUFDRGpDLFVBQVEsQ0FBQzdCLE1BQUQsRUFBUztBQUNiLFdBQU8sS0FBS0EsTUFBTCxLQUFnQkEsTUFBdkI7QUFDSDtBQUNEOzs7Ozs7OztBQU1BL0gsVUFBUSxDQUFDaFEsR0FBRCxFQUFNK1gsTUFBTSxHQUFHL1gsR0FBZixFQUFvQjRRLE9BQU8sR0FBRyxFQUE5QixFQUFrQztBQUN0QyxXQUFPLElBQUlwTyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDLFlBQU07QUFBRTRNLGdCQUFGO0FBQVkvQztBQUFaLFVBQXlCdUosS0FBSyxDQUFDM0osS0FBTixDQUFZbk0sR0FBWixDQUEvQjs7QUFDQSxVQUFJLENBQUNzUCxRQUFELElBQWEvQyxRQUFqQixFQUEyQjtBQUN2QixrQkFBMkM7QUFDdkMsZ0JBQU0sSUFBSXhDLEtBQUosQ0FBVyxrQ0FBaUMvSixHQUFJLGtEQUFoRCxDQUFOO0FBQ0g7O0FBQ0Q7QUFDSCxPQVBtQyxDQVFwQzs7O0FBQ0EsZ0JBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0QsWUFBTW1ZLEtBQUssR0FBRzlCLFdBQVcsQ0FBQ0UsT0FBTyxDQUFDakgsUUFBRCxDQUFSLENBQXpCO0FBQ0E5TSxhQUFPLENBQUM0UyxHQUFSLENBQVksQ0FDUixLQUFLZ0MsVUFBTCxDQUFnQjRFLFlBQWhCLENBQTZCaGMsR0FBN0IsRUFBa0NxVyxXQUFXLENBQUMwQixNQUFELENBQTdDLENBRFEsRUFFUixLQUFLWCxVQUFMLENBQWdCeEcsT0FBTyxDQUFDUSxRQUFSLEdBQW1CLFVBQW5CLEdBQWdDLFVBQWhELEVBQTREK0csS0FBNUQsQ0FGUSxDQUFaLEVBR0dyUyxJQUhILENBR1EsTUFBTXJELE9BQU8sRUFIckIsRUFHeUJDLE1BSHpCO0FBSUgsS0FqQk0sQ0FBUDtBQWtCSDs7QUFDRCxRQUFNcVksY0FBTixDQUFxQjVDLEtBQXJCLEVBQTRCO0FBQ3hCLFFBQUlzQyxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXdCLE1BQU0sR0FBSSxLQUFLdkQsR0FBTCxHQUFXLE1BQU07QUFDN0IrQixlQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0F0QyxTQUFLLEdBQUc5QixXQUFXLENBQUM4QixLQUFELENBQW5CO0FBQ0EsVUFBTStELGVBQWUsR0FBRyxNQUFNLEtBQUs5RSxVQUFMLENBQWdCK0UsUUFBaEIsQ0FBeUJoRSxLQUF6QixDQUE5Qjs7QUFDQSxRQUFJc0MsU0FBSixFQUFlO0FBQ1gsWUFBTTNRLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVcsd0NBQXVDb08sS0FBTSxHQUF4RCxDQUFkO0FBQ0FyTyxXQUFLLENBQUMyUSxTQUFOLEdBQWtCLElBQWxCO0FBQ0EsWUFBTTNRLEtBQU47QUFDSDs7QUFDRCxRQUFJbVMsTUFBTSxLQUFLLEtBQUt2RCxHQUFwQixFQUF5QjtBQUNyQixXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFdBQU93RCxlQUFQO0FBQ0g7O0FBQ0RmLFVBQVEsQ0FBQ2lCLEVBQUQsRUFBSztBQUNULFFBQUkzQixTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXdCLE1BQU0sR0FBRyxNQUFNO0FBQ2pCeEIsZUFBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFNBQUsvQixHQUFMLEdBQVd1RCxNQUFYO0FBQ0EsV0FBT0csRUFBRSxHQUFHdFcsSUFBTCxDQUFVa0UsSUFBSSxJQUFJO0FBQ3JCLFVBQUlpUyxNQUFNLEtBQUssS0FBS3ZELEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSStCLFNBQUosRUFBZTtBQUNYLGNBQU1sTSxHQUFHLEdBQUcsSUFBSXhFLEtBQUosQ0FBVSxpQ0FBVixDQUFaO0FBQ0F3RSxXQUFHLENBQUNrTSxTQUFKLEdBQWdCLElBQWhCO0FBQ0EsY0FBTWxNLEdBQU47QUFDSDs7QUFDRCxhQUFPdkUsSUFBUDtBQUNILEtBVk0sQ0FBUDtBQVdIOztBQUNEZ0wsaUJBQWUsQ0FBQy9ULFNBQUQsRUFBWW9iLEdBQVosRUFBaUI7QUFDNUIsVUFBTTtBQUFFcGIsZUFBUyxFQUFFb1c7QUFBYixRQUFxQixLQUFLZSxVQUFMLENBQWdCLE9BQWhCLENBQTNCOztBQUNBLFVBQU1rRSxPQUFPLEdBQUcsS0FBSzNELFFBQUwsQ0FBY3RCLEdBQWQsQ0FBaEI7O0FBQ0FnRixPQUFHLENBQUNDLE9BQUosR0FBY0EsT0FBZDtBQUNBLFdBQU90RyxPQUFPLENBQUN1RyxtQkFBUixDQUE0QmxGLEdBQTVCLEVBQWlDO0FBQ3BDaUYsYUFEb0M7QUFFcENyYixlQUZvQztBQUdwQytSLFlBQU0sRUFBRSxJQUg0QjtBQUlwQ3FKO0FBSm9DLEtBQWpDLENBQVA7QUFNSDs7QUFDRDVDLG9CQUFrQixDQUFDNU0sRUFBRCxFQUFLO0FBQ25CLFFBQUksS0FBSzZMLEdBQVQsRUFBYztBQUNWLFlBQU01SixDQUFDLEdBQUcsSUFBSS9FLEtBQUosQ0FBVSxpQkFBVixDQUFWO0FBQ0ErRSxPQUFDLENBQUMyTCxTQUFGLEdBQWMsSUFBZDtBQUNBOUgsWUFBTSxDQUFDYSxNQUFQLENBQWNpQyxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzNHLENBQXZDLEVBQTBDakMsRUFBMUM7QUFDQSxXQUFLNkwsR0FBTDtBQUNBLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7QUFDSjs7QUFDREssUUFBTSxDQUFDL08sSUFBRCxFQUFPO0FBQ1QsU0FBS3lPLEdBQUwsQ0FBU3pPLElBQVQsRUFBZSxLQUFLb08sVUFBTCxDQUFnQixPQUFoQixFQUF5Qm5YLFNBQXhDO0FBQ0g7O0FBdmZROztBQXlmYndLLE9BQU8sQ0FBQ0UsT0FBUixHQUFrQmdILE1BQWxCO0FBQ0FBLE1BQU0sQ0FBQ2EsTUFBUCxHQUFnQnVDLE1BQU0sQ0FBQ3BLLE9BQVAsRUFBaEIsQzs7Ozs7Ozs7Ozs7O0FDbGtCYTs7QUFDYjJILE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQjlILE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU0RyxPQUFLLEVBQUU7QUFBVCxDQUE3QyxFLENBQ0E7O0FBQ0EsTUFBTW1LLFVBQVUsR0FBRyxzQkFBbkI7O0FBQ0EsU0FBU2pFLGNBQVQsQ0FBd0JKLEtBQXhCLEVBQStCO0FBQzNCLFNBQU9xRSxVQUFVLENBQUNDLElBQVgsQ0FBZ0J0RSxLQUFoQixDQUFQO0FBQ0g7O0FBQ0QxTSxPQUFPLENBQUM4TSxjQUFSLEdBQXlCQSxjQUF6QixDOzs7Ozs7Ozs7Ozs7QUNQYTs7QUFDYmpGLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQjlILE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU0RyxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxTQUFTNEgsZUFBVCxDQUF5QkgsVUFBekIsRUFBcUM7QUFDakMsUUFBTTtBQUFFNEMsTUFBRjtBQUFNdEM7QUFBTixNQUFpQk4sVUFBdkI7QUFDQSxTQUFReEssUUFBRCxJQUFjO0FBQ2pCLFVBQU0wSyxVQUFVLEdBQUcwQyxFQUFFLENBQUNDLElBQUgsQ0FBUXJOLFFBQVIsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFDMEssVUFBTCxFQUFpQjtBQUNiLGFBQU8sS0FBUDtBQUNIOztBQUNELFVBQU00QyxNQUFNLEdBQUl0QyxLQUFELElBQVc7QUFDdEIsVUFBSTtBQUNBLGVBQU91QyxrQkFBa0IsQ0FBQ3ZDLEtBQUQsQ0FBekI7QUFDSCxPQUZELENBR0EsT0FBT2pYLENBQVAsRUFBVTtBQUNOLGNBQU1rTCxHQUFHLEdBQUcsSUFBSXhFLEtBQUosQ0FBVSx3QkFBVixDQUFaO0FBQ0F3RSxXQUFHLENBQUMySSxJQUFKLEdBQVcsZUFBWDtBQUNBLGNBQU0zSSxHQUFOO0FBQ0g7QUFDSixLQVREOztBQVVBLFVBQU11TyxNQUFNLEdBQUcsRUFBZjtBQUNBeEosVUFBTSxDQUFDNkcsSUFBUCxDQUFZQyxNQUFaLEVBQW9CdlYsT0FBcEIsQ0FBNkJrWSxRQUFELElBQWM7QUFDdEMsWUFBTUMsQ0FBQyxHQUFHNUMsTUFBTSxDQUFDMkMsUUFBRCxDQUFoQjtBQUNBLFlBQU1FLENBQUMsR0FBR2pELFVBQVUsQ0FBQ2dELENBQUMsQ0FBQ3BhLEdBQUgsQ0FBcEI7O0FBQ0EsVUFBSXFhLENBQUMsS0FBS3pQLFNBQVYsRUFBcUI7QUFDakJzUCxjQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixDQUFDRSxDQUFDLENBQUN2TixPQUFGLENBQVUsR0FBVixDQUFELEdBQ2J1TixDQUFDLENBQUMxQixLQUFGLENBQVEsR0FBUixFQUFhN1UsR0FBYixDQUFpQmdILEtBQUssSUFBSWtQLE1BQU0sQ0FBQ2xQLEtBQUQsQ0FBaEMsQ0FEYSxHQUVic1AsQ0FBQyxDQUFDRSxNQUFGLEdBQ0ksQ0FBQ04sTUFBTSxDQUFDSyxDQUFELENBQVAsQ0FESixHQUVJTCxNQUFNLENBQUNLLENBQUQsQ0FKaEI7QUFLSDtBQUNKLEtBVkQ7QUFXQSxXQUFPSCxNQUFQO0FBQ0gsR0E1QkQ7QUE2Qkg7O0FBQ0RyUixPQUFPLENBQUN3TyxlQUFSLEdBQTBCQSxlQUExQixDOzs7Ozs7Ozs7Ozs7QUNsQ2E7O0FBQ2IzRyxNQUFNLENBQUNDLGNBQVAsQ0FBc0I5SCxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFNEcsT0FBSyxFQUFFO0FBQVQsQ0FBN0MsRSxDQUNBO0FBQ0E7O0FBQ0EsU0FBUzhLLFdBQVQsQ0FBcUI3VSxHQUFyQixFQUEwQjtBQUN0QixTQUFPQSxHQUFHLENBQUNxSCxPQUFKLENBQVksc0JBQVosRUFBb0MsTUFBcEMsQ0FBUDtBQUNIOztBQUNELFNBQVNvSyxhQUFULENBQXVCcUQsZUFBdkIsRUFBd0M7QUFDcEM7QUFDQSxRQUFNQyxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0MsZUFBZSxDQUFDek4sT0FBaEIsQ0FBd0IsS0FBeEIsRUFBK0IsRUFBL0IsS0FBc0MsR0FBdkMsQ0FBaEM7QUFDQSxRQUFNeUssTUFBTSxHQUFHLEVBQWY7QUFDQSxNQUFJa0QsVUFBVSxHQUFHLENBQWpCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdGLFlBQVksQ0FBQzFOLE9BQWIsQ0FBcUIsNkJBQXJCLEVBQW9ELENBQUN0TSxDQUFELEVBQUltYSxFQUFKLEtBQVc7QUFDdEYsVUFBTUMsVUFBVSxHQUFHLGFBQWFoQixJQUFiLENBQWtCZSxFQUFsQixDQUFuQjtBQUNBcEQsVUFBTSxDQUFDb0QsRUFBRSxDQUNMO0FBREssS0FFSjdOLE9BRkUsQ0FFTSwwQkFGTixFQUVrQyxJQUZsQyxFQUdGQSxPQUhFLENBR00sUUFITixFQUdnQixFQUhoQixDQUFELENBSU47QUFKTSxLQUFOLEdBS0k7QUFBRS9NLFNBQUcsRUFBRTBhLFVBQVUsRUFBakI7QUFBcUJKLFlBQU0sRUFBRU87QUFBN0IsS0FMSjtBQU1BLFdBQU9BLFVBQVUsR0FBRyxRQUFILEdBQWMsV0FBL0I7QUFDSCxHQVQwQixDQUEzQjtBQVVBLE1BQUlDLHVCQUFKLENBZm9DLENBZ0JwQztBQUNBOztBQUNBLFlBQW1DO0FBQy9CQSwyQkFBdUIsR0FBR0wsWUFBWSxDQUFDMU4sT0FBYixDQUFxQiw2QkFBckIsRUFBb0QsQ0FBQ3RNLENBQUQsRUFBSW1hLEVBQUosS0FBVztBQUNyRixZQUFNQyxVQUFVLEdBQUcsYUFBYWhCLElBQWIsQ0FBa0JlLEVBQWxCLENBQW5CO0FBQ0EsWUFBTUcsR0FBRyxHQUFHSCxFQUFFLENBQ1Y7QUFEVSxPQUVUN04sT0FGTyxDQUVDLDBCQUZELEVBRTZCLElBRjdCLEVBR1BBLE9BSE8sQ0FHQyxRQUhELEVBR1csRUFIWCxDQUFaO0FBSUEsYUFBTzhOLFVBQVUsR0FDVixPQUFNTixXQUFXLENBQUNRLEdBQUQsQ0FBTSxPQURiLEdBRVYsT0FBTVIsV0FBVyxDQUFDUSxHQUFELENBQU0sVUFGOUI7QUFHSCxLQVR5QixDQUExQjtBQVVIOztBQUNELFNBQU9ySyxNQUFNLENBQUN1QixNQUFQLENBQWM7QUFBRTZILE1BQUUsRUFBRSxJQUFJa0IsTUFBSixDQUFXLE1BQU1MLGtCQUFOLEdBQTJCLFNBQXRDLEVBQWlELEdBQWpELENBQU47QUFBNkRuRDtBQUE3RCxHQUFkLEVBQXNGc0QsdUJBQXVCLEdBQzlHO0FBQ0VHLGNBQVUsRUFBRyxJQUFHSCx1QkFBd0I7QUFEMUMsR0FEOEcsR0FJOUcsRUFKQyxDQUFQO0FBS0g7O0FBQ0RqUyxPQUFPLENBQUNzTyxhQUFSLEdBQXdCQSxhQUF4QixDOzs7Ozs7Ozs7Ozs7QUMzQ2E7O0FBQ2J6RyxNQUFNLENBQUNDLGNBQVAsQ0FBc0I5SCxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFNEcsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsTUFBTXlELEtBQUssR0FBR3ZLLG1CQUFPLENBQUMsZ0JBQUQsQ0FBckI7QUFDQTs7Ozs7QUFHQSxTQUFTbUcsUUFBVCxDQUFrQjBLLEVBQWxCLEVBQXNCO0FBQ2xCLE1BQUkwQixJQUFJLEdBQUcsS0FBWDtBQUNBLE1BQUloUixNQUFKO0FBQ0EsU0FBUSxDQUFDLEdBQUcwSCxJQUFKLEtBQWE7QUFDakIsUUFBSSxDQUFDc0osSUFBTCxFQUFXO0FBQ1BBLFVBQUksR0FBRyxJQUFQO0FBQ0FoUixZQUFNLEdBQUdzUCxFQUFFLENBQUMsR0FBRzVILElBQUosQ0FBWDtBQUNIOztBQUNELFdBQU8xSCxNQUFQO0FBQ0gsR0FORDtBQU9IOztBQUNEckIsT0FBTyxDQUFDaUcsUUFBUixHQUFtQkEsUUFBbkI7O0FBQ0EsU0FBU3JGLGlCQUFULEdBQTZCO0FBQ3pCLFFBQU07QUFBRUUsWUFBRjtBQUFZd1IsWUFBWjtBQUFzQkM7QUFBdEIsTUFBK0IzUSxNQUFNLENBQUNrQyxRQUE1QztBQUNBLFNBQVEsR0FBRWhELFFBQVMsS0FBSXdSLFFBQVMsR0FBRUMsSUFBSSxHQUFHLE1BQU1BLElBQVQsR0FBZ0IsRUFBRyxFQUF6RDtBQUNIOztBQUNEdlMsT0FBTyxDQUFDWSxpQkFBUixHQUE0QkEsaUJBQTVCOztBQUNBLFNBQVN3TCxNQUFULEdBQWtCO0FBQ2QsUUFBTTtBQUFFM0w7QUFBRixNQUFXbUIsTUFBTSxDQUFDa0MsUUFBeEI7QUFDQSxRQUFNbkQsTUFBTSxHQUFHQyxpQkFBaUIsRUFBaEM7QUFDQSxTQUFPSCxJQUFJLENBQUMrSCxTQUFMLENBQWU3SCxNQUFNLENBQUN0SyxNQUF0QixDQUFQO0FBQ0g7O0FBQ0QySixPQUFPLENBQUNvTSxNQUFSLEdBQWlCQSxNQUFqQjs7QUFDQSxTQUFTb0csY0FBVCxDQUF3QmhkLFNBQXhCLEVBQW1DO0FBQy9CLFNBQU8sT0FBT0EsU0FBUCxLQUFxQixRQUFyQixHQUNEQSxTQURDLEdBRURBLFNBQVMsQ0FBQ2lVLFdBQVYsSUFBeUJqVSxTQUFTLENBQUNuQixJQUFuQyxJQUEyQyxTQUZqRDtBQUdIOztBQUNEMkwsT0FBTyxDQUFDd1MsY0FBUixHQUF5QkEsY0FBekI7O0FBQ0EsU0FBU0MsU0FBVCxDQUFtQi9VLEdBQW5CLEVBQXdCO0FBQ3BCLFNBQU9BLEdBQUcsQ0FBQ2dWLFFBQUosSUFBZ0JoVixHQUFHLENBQUNpVixXQUEzQjtBQUNIOztBQUNEM1MsT0FBTyxDQUFDeVMsU0FBUixHQUFvQkEsU0FBcEI7O0FBQ0EsZUFBZTNCLG1CQUFmLENBQW1DbEYsR0FBbkMsRUFBd0NnRixHQUF4QyxFQUE2QztBQUN6QyxNQUFJZ0MsRUFBSjs7QUFDQSxZQUEyQztBQUN2QyxRQUFJLENBQUNBLEVBQUUsR0FBR2hILEdBQUcsQ0FBQ2lILFNBQVYsTUFBeUIsSUFBekIsSUFBaUNELEVBQUUsS0FBSyxLQUFLLENBQTdDLEdBQWlELEtBQUssQ0FBdEQsR0FBMERBLEVBQUUsQ0FBQ3JKLGVBQWpFLEVBQWtGO0FBQzlFLFlBQU1iLE9BQU8sR0FBSSxJQUFHOEosY0FBYyxDQUFDNUcsR0FBRCxDQUFNLHdKQUF4QztBQUNBLFlBQU0sSUFBSXROLEtBQUosQ0FBVW9LLE9BQVYsQ0FBTjtBQUNIO0FBQ0osR0FQd0MsQ0FRekM7OztBQUNBLFFBQU1oTCxHQUFHLEdBQUdrVCxHQUFHLENBQUNsVCxHQUFKLElBQVlrVCxHQUFHLENBQUNBLEdBQUosSUFBV0EsR0FBRyxDQUFDQSxHQUFKLENBQVFsVCxHQUEzQzs7QUFDQSxNQUFJLENBQUNrTyxHQUFHLENBQUNyQyxlQUFULEVBQTBCO0FBQ3RCLFFBQUlxSCxHQUFHLENBQUNBLEdBQUosSUFBV0EsR0FBRyxDQUFDcGIsU0FBbkIsRUFBOEI7QUFDMUI7QUFDQSxhQUFPO0FBQ0hzZCxpQkFBUyxFQUFFLE1BQU1oQyxtQkFBbUIsQ0FBQ0YsR0FBRyxDQUFDcGIsU0FBTCxFQUFnQm9iLEdBQUcsQ0FBQ0EsR0FBcEI7QUFEakMsT0FBUDtBQUdIOztBQUNELFdBQU8sRUFBUDtBQUNIOztBQUNELFFBQU14VixLQUFLLEdBQUcsTUFBTXdRLEdBQUcsQ0FBQ3JDLGVBQUosQ0FBb0JxSCxHQUFwQixDQUFwQjs7QUFDQSxNQUFJbFQsR0FBRyxJQUFJK1UsU0FBUyxDQUFDL1UsR0FBRCxDQUFwQixFQUEyQjtBQUN2QixXQUFPdEMsS0FBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsVUFBTXNOLE9BQU8sR0FBSSxJQUFHOEosY0FBYyxDQUFDNUcsR0FBRCxDQUFNLCtEQUE4RHhRLEtBQU0sWUFBNUc7QUFDQSxVQUFNLElBQUlrRCxLQUFKLENBQVVvSyxPQUFWLENBQU47QUFDSDs7QUFDRCxZQUEyQztBQUN2QyxRQUFJYixNQUFNLENBQUM2RyxJQUFQLENBQVl0VCxLQUFaLEVBQW1CL0UsTUFBbkIsS0FBOEIsQ0FBOUIsSUFBbUMsQ0FBQ3VhLEdBQUcsQ0FBQ0EsR0FBNUMsRUFBaUQ7QUFDN0N4UyxhQUFPLENBQUNvRyxJQUFSLENBQWMsR0FBRWdPLGNBQWMsQ0FBQzVHLEdBQUQsQ0FBTSw0S0FBcEM7QUFDSDtBQUNKOztBQUNELFNBQU94USxLQUFQO0FBQ0g7O0FBQ0Q0RSxPQUFPLENBQUM4USxtQkFBUixHQUE4QkEsbUJBQTlCO0FBQ0E5USxPQUFPLENBQUMrUyxhQUFSLEdBQXdCLENBQ3BCLE1BRG9CLEVBRXBCLE1BRm9CLEVBR3BCLE1BSG9CLEVBSXBCLFVBSm9CLEVBS3BCLE1BTG9CLEVBTXBCLE1BTm9CLEVBT3BCLFVBUG9CLEVBUXBCLE1BUm9CLEVBU3BCLFVBVG9CLEVBVXBCLE9BVm9CLEVBV3BCLFFBWG9CLEVBWXBCLFNBWm9CLENBQXhCOztBQWNBLFNBQVN4UixvQkFBVCxDQUE4QmhOLEdBQTlCLEVBQW1DNFEsT0FBbkMsRUFBNEM7QUFDeEMsWUFBNEM7QUFDeEMsUUFBSTVRLEdBQUcsS0FBSyxJQUFSLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxRQUFuQyxFQUE2QztBQUN6Q3NULFlBQU0sQ0FBQzZHLElBQVAsQ0FBWW5hLEdBQVosRUFBaUI2RSxPQUFqQixDQUF5QjhZLEdBQUcsSUFBSTtBQUM1QixZQUFJbFMsT0FBTyxDQUFDK1MsYUFBUixDQUFzQjlPLE9BQXRCLENBQThCaU8sR0FBOUIsTUFBdUMsQ0FBQyxDQUE1QyxFQUErQztBQUMzQzlULGlCQUFPLENBQUNvRyxJQUFSLENBQWMscURBQW9EME4sR0FBSSxFQUF0RTtBQUNIO0FBQ0osT0FKRDtBQUtIO0FBQ0o7O0FBQ0QsU0FBTzdILEtBQUssQ0FBQ2pWLE1BQU4sQ0FBYWIsR0FBYixFQUFrQjRRLE9BQWxCLENBQVA7QUFDSDs7QUFDRG5GLE9BQU8sQ0FBQ3VCLG9CQUFSLEdBQStCQSxvQkFBL0I7QUFDQXZCLE9BQU8sQ0FBQ2dULEVBQVIsR0FBYSxPQUFPbEYsV0FBUCxLQUF1QixXQUFwQztBQUNBOU4sT0FBTyxDQUFDNk4sRUFBUixHQUFhN04sT0FBTyxDQUFDZ1QsRUFBUixJQUNULE9BQU9sRixXQUFXLENBQUNDLElBQW5CLEtBQTRCLFVBRG5CLElBRVQsT0FBT0QsV0FBVyxDQUFDbUYsT0FBbkIsS0FBK0IsVUFGbkMsQzs7Ozs7Ozs7Ozs7QUN0R0EsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLEtBQVQsQ0FBZTtBQUFFeFU7QUFBRixDQUFmLEVBQTZCO0FBQzFDLFFBQU15VSxRQUFRLEdBQUd6VSxRQUFRLENBQUMsQ0FBRCxDQUF6QjtBQUNBLFFBQU0wVSxTQUFTLEdBQUcxVSxRQUFRLENBQUN3TCxLQUFULENBQWUsQ0FBZixDQUFsQjtBQUNBLFNBQ0UsbUVBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBa0NyUCx1REFBbEMsQ0FERixDQURGLEVBSUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdHc1ksUUFBUSxJQUNQLE1BQUMsNkRBQUQ7QUFDRSxTQUFLLEVBQUVBLFFBQVEsQ0FBQ3hlLEtBRGxCO0FBRUUsY0FBVSxFQUFFd2UsUUFBUSxDQUFDNVksVUFGdkI7QUFHRSxRQUFJLEVBQUU0WSxRQUFRLENBQUNqZSxJQUhqQjtBQUlFLFVBQU0sRUFBRWllLFFBQVEsQ0FBQzFZLE1BSm5CO0FBS0UsUUFBSSxFQUFFMFksUUFBUSxDQUFDdGUsSUFMakI7QUFNRSxXQUFPLEVBQUVzZSxRQUFRLENBQUMzWSxPQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFhRzRZLFNBQVMsQ0FBQy9jLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsTUFBQyxnRUFBRDtBQUFhLFNBQUssRUFBRStjLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiM0IsQ0FKRixDQURGLENBREY7QUF3QkQ7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUVuZixTQUFPLEdBQUc7QUFBWixDQUE5QixFQUFtRDtBQUN4RCxRQUFNd0ssUUFBUSxHQUFHLENBQUMsTUFBTUMsbUVBQWtCLENBQUN6SyxPQUFELENBQXpCLEtBQXVDLEVBQXhEO0FBQ0EsU0FBTztBQUNMa0gsU0FBSyxFQUFFO0FBQUVzRDtBQUFGO0FBREYsR0FBUDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNELHVDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBFWEFNUExFX1BBVEggfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCh7IHByZXZpZXcgfSkge1xuICBpZiAocHJldmlldykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXCJib3JkZXItYlwiLCB7XG4gICAgICAgICAgXCJiZy1hY2NlbnQtNyBib3JkZXItYWNjZW50LTcgdGV4dC13aGl0ZVwiOiBwcmV2aWV3LFxuICAgICAgICAgIFwiYmctYWNjZW50LTEgYm9yZGVyLWFjY2VudC0yXCI6ICFwcmV2aWV3XG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIGEgcHJldmlldy57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXBpL2V4aXQtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1jeWFuIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xpY2sgaGVyZVxuICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgdG8gZXhpdCBwcmV2aWV3IG1vZGUuXG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDw+PC8+XG4gIH1cbiAgLy8gcmV0dXJuIChcbiAgLy8gICA8ZGl2XG4gIC8vICAgICBjbGFzc05hbWU9e2NuKCdib3JkZXItYicsIHtcbiAgLy8gICAgICAgJ2JnLWFjY2VudC03IGJvcmRlci1hY2NlbnQtNyB0ZXh0LXdoaXRlJzogcHJldmlldyxcbiAgLy8gICAgICAgJ2JnLWFjY2VudC0xIGJvcmRlci1hY2NlbnQtMic6ICFwcmV2aWV3LFxuICAvLyAgICAgfSl9XG4gIC8vICAgPlxuICAvLyAgICAgPENvbnRhaW5lcj5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHRleHQtY2VudGVyIHRleHQtc21cIj5cbiAgLy8gICAgICAgICB7cHJldmlldyA/IChcbiAgLy8gICAgICAgICAgIDw+XG4gIC8vICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBhIHByZXZpZXcueycgJ31cbiAgLy8gICAgICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgICAgICBocmVmPVwiL2FwaS9leGl0LXByZXZpZXdcIlxuICAvLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSBob3Zlcjp0ZXh0LWN5YW4gZHVyYXRpb24tMjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgLy8gICAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICAgIENsaWNrIGhlcmVcbiAgLy8gICAgICAgICAgICAgPC9hPnsnICd9XG4gIC8vICAgICAgICAgICAgIHRvIGV4aXQgcHJldmlldyBtb2RlLlxuICAvLyAgICAgICAgICAgPC8+XG4gIC8vICAgICAgICAgKSA6IChcbiAgLy8gICAgICAgICAgIDw+XG4gIC8vICAgICAgICAgICAgIFRoZSBzb3VyY2UgY29kZSBmb3IgdGhpcyBibG9nIGlzeycgJ31cbiAgLy8gICAgICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy8ke0VYQU1QTEVfUEFUSH1gfVxuICAvLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSBob3Zlcjp0ZXh0LXN1Y2Nlc3MgZHVyYXRpb24tMjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgLy8gICAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICAgIGF2YWlsYWJsZSBvbiBHaXRIdWJcbiAgLy8gICAgICAgICAgICAgPC9hPlxuICAvLyAgICAgICAgICAgICAuXG4gIC8vICAgICAgICAgICA8Lz5cbiAgLy8gICAgICAgICApfVxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIDwvQ29udGFpbmVyPlxuICAvLyAgIDwvZGl2PlxuICAvLyApXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdmF0YXIoeyBuYW1lLCBwaWN0dXJlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17cGljdHVyZS51cmx9XG4gICAgICAgIGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgbXItNFwiXG4gICAgICAgIGFsdD17bmFtZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e25hbWV9PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNSByZWxhdGl2ZVwiPntjaGlsZHJlbn08L2Rpdj5cbn1cbiIsImltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3ZlckltYWdlKHsgdGl0bGUsIHJlc3BvbnNpdmVJbWFnZSwgc2x1ZyB9KSB7XG4gIGNvbnN0IGltYWdlID0gKFxuICAgIDxJbWFnZVxuICAgICAgZGF0YT17e1xuICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2UsXG4gICAgICAgIGFsdDogYENvdmVyIEltYWdlIGZvciAke3RpdGxlfWAsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtjbignc2hhZG93LXNtYWxsJywge1xuICAgICAgICAnaG92ZXI6c2hhZG93LW1lZGl1bSB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0yMDAnOiBzbHVnLFxuICAgICAgfSl9XG4gICAgLz5cbiAgKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiLW14LTUgc206bXgtMFwiPlxuICAgICAge3NsdWcgPyAoXG4gICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgIDxhIGFyaWEtbGFiZWw9e3RpdGxlfT57aW1hZ2V9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogKFxuICAgICAgICBpbWFnZVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9KSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ0xMTExcdGQsIHl5eXknKX08L3RpbWU+XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0IHsgRVhBTVBMRV9QQVRIIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctYWNjZW50LTEgYm9yZGVyLXQgYm9yZGVyLWFjY2VudC0yXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTI4IGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHQgdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0IG1iLTEwIGxnOm1iLTAgbGc6cHItNCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgU3RhdGljYWxseSBHZW5lcmF0ZWQgd2l0aCBOZXh0LmpzLlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsZzpwbC00IGxnOnctMS8yXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvcGFnZXNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0zIGJnLWJsYWNrIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgYm9yZGVyIGJvcmRlci1ibGFjayB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0zIHB4LTEyIGxnOnB4LTggZHVyYXRpb24tMjAwIHRyYW5zaXRpb24tY29sb3JzIG1iLTYgbGc6bWItMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlYWQgRG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvJHtFWEFNUExFX1BBVEh9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMyBmb250LWJvbGQgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBvbiBHaXRIdWJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaW1lbGluZUxpdGUsIFF1aW50IH0gZnJvbSAnZ3NhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb0ludHJvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbmV3IFNsaWRlc2hvdyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWcgZmlyc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2ltZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzaWduXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5EZXNpZ248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzaWduXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5EZXNpZ248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzaWduXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlIGNvbnRlbnRfX3RleHQtaW5uZXItLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NsaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW1nIHNlY29uZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW1nLWlubmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5PcHRpbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+T3B0aW1pemU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPk9wdGltaXplPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+T3B0aW1pemU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgT3B0aW1pemVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2UgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5PcHRpbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NsaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW1nIHRoaXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWctaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2luZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+SW1hZ2luZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnaW5lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkltYWdpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbCBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5JbWFnaW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnaW5lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5JbWFnaW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0IGNvbnRlbnRfX3RleHQtLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2UgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkltYWdpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250ZW50X19uYXZcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250ZW50X19uYXYtYnV0dG9uIGNvbnRlbnRfX25hdi1idXR0b24tLXByZXZcIj5cbiAgICAgICAgICAgICAgICBQcmV2XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX25hdi1idXR0b24gY29udGVudF9fbmF2LWJ1dHRvbi0tbmV4dFwiPlxuICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1haW5cIjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOXJlbSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX3NsaWRlIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG1haW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW5uZXJcIjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fc2xpZGUtLWN1cnJlbnQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9faW1nLFxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC13cmFwIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGlubmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjVyZW0pO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMDBweCAtIDExcmVtKTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19pbWctLWZ1bGw6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy5maXJzdCAuY29udGVudF9faW1nLWlubmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvMTYuanBlZ1wiKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19pbWcuc2Vjb25kIC5jb250ZW50X19pbWctaW5uZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8xNC5qcGVnXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy50aGlyZCAuY29udGVudF9faW1nLWlubmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvMTUuanBlZ1wiKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19pbWctaW5uZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC13cmFwIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dCB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dDpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC0tZnVsbCB7XG4gICAgICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LWlubmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2xpZGUtdGV4dCk7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC10cmFpbC13ZWlnaHQpO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LXRyYWlsLWxoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRyYWlsLWZhbWlseSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC00MCUsIDApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IHZhcigtLWNvbG9yLXNsaWRlLXRleHQpO1xuICAgICAgICAgICAgICAgIHRleHQtc3Ryb2tlOiAycHggdmFyKC0tY29sb3Itc2xpZGUtdGV4dCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX25hdiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg5MCUgLSAxcmVtKTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19uYXYtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1uYXYpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fbmF2LWJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUzZW0pIHtcbiAgICAgICAgICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50X19pbWcge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoOTAlIC0gMTFyZW0pO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudF9faW1nLS1mdWxsIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgKyAyMHB4KTtcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LWlubmVyIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC10cmFpbC1zaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnRfX25hdiB7XG4gICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jbGFzcyBUZXh0Rlgge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuRE9NID0geyBlbDogZWwgfTtcbiAgICAgICAgLy8gVGhlIHRleHRzIChyZXBlYXRlZClcbiAgICAgICAgdGhpcy5ET00udGV4dHMgPSBbLi4udGhpcy5ET00uZWwucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX3RleHQnKV07XG4gICAgICAgIHRoaXMuRE9NLnRleHRzVG90YWwgPSB0aGlzLkRPTS50ZXh0cy5sZW5ndGg7XG4gICAgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgbWFpbiB0ZXh0IGVsZW1lbnRcbiAgICAgICAgdGhpcy5taWRkbGVJZHggPSBNYXRoLmZsb29yKHRoaXMuRE9NLnRleHRzVG90YWwgLyAyKTtcbiAgICAgICAgLy8gVGltZSBiZXR3ZWVuIGVhY2ggc2hvd2luZy9oaWRpbmcgb2YgZWFjaCB0ZXh0IGluc3RhbmNlXG4gICAgICAgIHRoaXMubG9vcEludGVydmFsID0geyBzaG93OiA4MCwgaGlkZTogODAgfTtcbiAgICAgICAgLy8gb3B0aW9uYWw6IEV4dHJhIHRpbWUgdG8gdGhlIHdob2xlIHNob3cvaGlkZSBhbmltYXRpb24uIFxuICAgICAgICB0aGlzLmxvb3BFbmRJZGRsZVRpbWUgPSB0aGlzLmxvb3BJbnRlcnZhbC5zaG93O1xuICAgIH1cbiAgICBzaG93KHsgZGlyID0gJ2JvdGgnLCBoYWxmd2F5Q2FsbGJhY2sgPSBudWxsIH0gPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9vcEhpZGUgPSAocG9zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWlkZGxlSWR4IC0gcG9zID09PSB0aGlzLm1pZGRsZUlkeCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRoaXMubG9vcEVuZElkZGxlVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVGV4dChwb3MsIGRpcik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29wSGlkZShwb3MgLSAxKSwgdGhpcy5sb29wSW50ZXJ2YWwuaGlkZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbG9vcFNob3cgPSAocG9zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWlkZGxlSWR4IC0gcG9zID4gdGhpcy5taWRkbGVJZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbGZ3YXlDYWxsYmFjayAmJiB0eXBlb2YgaGFsZndheUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxmd2F5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb29wSGlkZSh0aGlzLm1pZGRsZUlkeCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGV4dChwb3MsIGRpcik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29wU2hvdyhwb3MgLSAxKSwgdGhpcy5sb29wSW50ZXJ2YWwuc2hvdyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbG9vcFNob3codGhpcy5taWRkbGVJZHgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGlkZSh7IGRpciA9ICdib3RoJywgaGFsZndheUNhbGxiYWNrID0gbnVsbCB9ID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvb3BIaWRlID0gKHBvcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pZGRsZUlkeCAtIHBvcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aGlzLmxvb3BFbmRJZGRsZVRpbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRleHQocG9zLCBkaXIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9vcEhpZGUocG9zICsgMSksIHRoaXMubG9vcEludGVydmFsLmhpZGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGxvb3BTaG93ID0gKHBvcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pZGRsZUlkeCAtIHBvcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbGZ3YXlDYWxsYmFjayAmJiB0eXBlb2YgaGFsZndheUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxmd2F5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb29wSGlkZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUZXh0KHBvcywgZGlyKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb3BTaG93KHBvcyArIDEpLCB0aGlzLmxvb3BJbnRlcnZhbC5zaG93KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsb29wU2hvdygxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEhpZGVzIG9uZSAoZGlyID0gJ3VwJyBvciBkaXIgPSAnZG93bicpIG9yIG1vcmUgdGV4dHMsIHNwZWNpZmljYWxseSB0aGUgZXF1YWxseSBkaXN0YW50IHRleHRzIGZyb20gbWFpbiB0ZXh0IChkaXIgPSAnYm90aCcpXG4gICAgaGlkZVRleHQocG9zLCBkaXIpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUZXh0KCdoaWRlJywgcG9zLCBkaXIpO1xuICAgIH1cbiAgICBzaG93VGV4dChwb3MsIGRpcikge1xuICAgICAgICB0aGlzLnRvZ2dsZVRleHQoJ3Nob3cnLCBwb3MsIGRpcik7XG4gICAgfVxuICAgIHRvZ2dsZVRleHQoYWN0aW9uLCBwb3MsIGRpcikge1xuICAgICAgICBjb25zdCBjaGFuZ2VTdHlsZSA9IHtcbiAgICAgICAgICAgIHVwOiBfID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkRPTS50ZXh0c1t0aGlzLm1pZGRsZUlkeCAtIHBvc10uc3R5bGUub3BhY2l0eSA9IGFjdGlvbiA9PT0gJ3Nob3cnID8gMSA6IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjogXyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ET00udGV4dHNbdGhpcy5taWRkbGVJZHggKyBwb3NdLnN0eWxlLm9wYWNpdHkgPSBhY3Rpb24gPT09ICdzaG93JyA/IDEgOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGlyID09PSAnYm90aCcpIHtcbiAgICAgICAgICAgIGNoYW5nZVN0eWxlWyd1cCddKCk7XG4gICAgICAgICAgICBjaGFuZ2VTdHlsZVsnZG93biddKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VTdHlsZVtkaXJdKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIFNsaWRlIHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICB0aGlzLkRPTSA9IHsgZWw6IGVsIH07XG4gICAgICAgIHRoaXMuRE9NLmltZyA9IHtcbiAgICAgICAgICAgIHdyYXA6IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19pbWcnKSxcbiAgICAgICAgICAgIGlubmVyOiB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9faW1nLWlubmVyJylcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGhlIHRleHQgZWZmZWN0IGNsYXNzLlxuICAgICAgICB0aGlzLnRleHRGWCA9IG5ldyBUZXh0RlgodGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3RleHQtd3JhcCcpKTtcbiAgICB9XG4gICAgLy8gSGlkZSB0aGUgU2xpZGUncyBpbWFnZVxuICAgIGhpZGVJbWFnZShkaXIpIHtcbiAgICAgICAgdGhpcy50b2dnbGVJbWFnZSgnaGlkZScsIGRpcik7XG4gICAgfVxuICAgIC8vIFNob3cgdGhlIFNsaWRlJ3MgaW1hZ2VcbiAgICBzaG93SW1hZ2UoZGlyKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlSW1hZ2UoJ3Nob3cnLCBkaXIpO1xuICAgIH1cbiAgICB0b2dnbGVJbWFnZShhY3Rpb24sIGRpcikge1xuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKCkuYWRkKCdiZWdpbicpXG4gICAgICAgICAgICAudG8odGhpcy5ET00uaW1nLndyYXAsIGFjdGlvbiA9PT0gJ2hpZGUnID8gMC4zIDogMC43LCB7XG4gICAgICAgICAgICAgICAgZWFzZTogYWN0aW9uID09PSAnaGlkZScgPyBRdWludC5lYXNlT3V0IDogUXVpbnQuZWFzZU91dCxcbiAgICAgICAgICAgICAgICBzdGFydEF0OiBhY3Rpb24gPT09ICdoaWRlJyA/IHt9IDogeyB4OiBkaXIgPT09ICduZXh0JyA/ICcxMTAlJyA6ICctMTEwJScsIG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICAgICAgICB4OiBhY3Rpb24gPT09ICdoaWRlJyA/IGRpciA9PT0gJ25leHQnID8gJy0xMTAlJyA6ICcxMTAlJyA6ICcwJSdcbiAgICAgICAgICAgIH0sICdiZWdpbicpXG4gICAgICAgICAgICAudG8odGhpcy5ET00uaW1nLmlubmVyLCBhY3Rpb24gPT09ICdoaWRlJyA/IDAuMyA6IDAuNywge1xuICAgICAgICAgICAgICAgIGVhc2U6IGFjdGlvbiA9PT0gJ2hpZGUnID8gUXVpbnQuZWFzZU91dCA6IFF1aW50LmVhc2VPdXQsXG4gICAgICAgICAgICAgICAgc3RhcnRBdDogYWN0aW9uID09PSAnaGlkZScgPyB7fSA6IHsgeDogZGlyID09PSAnbmV4dCcgPyAnLTEwMCUnIDogJzEwMCUnIH0sXG4gICAgICAgICAgICAgICAgeDogYWN0aW9uID09PSAnaGlkZScgPyBkaXIgPT09ICduZXh0JyA/ICcxMDAlJyA6ICctMTAwJScgOiAnMCUnXG4gICAgICAgICAgICB9LCAnYmVnaW4nKTtcbiAgICB9XG59XG5cbmNsYXNzIFNsaWRlc2hvdyB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5ET00gPSB7IGVsOiBlbCB9O1xuICAgICAgICAvLyBOYXZpZ2F0aW9uIGNvbnRyb2xzXG4gICAgICAgIHRoaXMuRE9NLm5hdiA9IHtcbiAgICAgICAgICAgIHByZXY6IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19uYXYtYnV0dG9uLS1wcmV2JyksXG4gICAgICAgICAgICBuZXh0OiB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fbmF2LWJ1dHRvbi0tbmV4dCcpXG4gICAgICAgIH07XG4gICAgICAgIC8vIEFsbCBzbGlkZXNcbiAgICAgICAgdGhpcy5zbGlkZXMgPSBbXTtcbiAgICAgICAgWy4uLnRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50X19zbGlkZScpXS5mb3JFYWNoKHNsaWRlID0+IHRoaXMuc2xpZGVzLnB1c2gobmV3IFNsaWRlKHNsaWRlKSkpO1xuICAgICAgICAvLyBUb3RhbCBudW1iZXIgb2Ygc2xpZGVzXG4gICAgICAgIHRoaXMuc2xpZGVzVG90YWwgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgIC8vIEN1cnJlbnQgc2xpZGUgcG9zaXRpb25cbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgLy8gU2hvdyB0aGUgZmlyc3Qgb25lXG4gICAgICAgIHRoaXMuc2xpZGVzW3RoaXMuY3VycmVudF0uRE9NLmVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX3NsaWRlLS1jdXJyZW50Jyk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgc29tZSBldmVudHNcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsaWNraW5nIG5leHQgYW5kIHByZXZpb3VzIGNvbnRyb2xzLlxuICAgICAgICB0aGlzLm9uQ2xpY2tQcmV2Rm4gPSBfID0+IHRoaXMubmF2aWdhdGUoJ3ByZXYnKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrTmV4dEZuID0gXyA9PiB0aGlzLm5hdmlnYXRlKCduZXh0Jyk7XG4gICAgICAgIHRoaXMuRE9NLm5hdi5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrUHJldkZuKTtcbiAgICAgICAgdGhpcy5ET00ubmF2Lm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tOZXh0Rm4pO1xuICAgIH1cbiAgICBuYXZpZ2F0ZShkaXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gQ3VycmVudCBzbGlkZVxuICAgICAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLmN1cnJlbnRdO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGRpciA9PT0gJ25leHQnID9cbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA8IHRoaXMuc2xpZGVzVG90YWwgLSAxID8gdGhpcy5jdXJyZW50ICsgMSA6IDAgOlxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID4gMCA/IHRoaXMuY3VycmVudCAtIDEgOiB0aGlzLnNsaWRlc1RvdGFsIC0gMTtcblxuICAgICAgICAvLyBVcGNvbWluZyBzbGlkZVxuICAgICAgICBjb25zdCB1cGNvbWluZ1NsaWRlID0gdGhpcy5zbGlkZXNbdGhpcy5jdXJyZW50XTtcblxuICAgICAgICBjb25zdCBvbkN1cnJlbnRIYWxmd2F5Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBIaWRlIHRoZSBjdXJyZW50IHNsaWRlJ3MgaW1hZ2VcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5oaWRlSW1hZ2UoZGlyKTtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgdXBjb21pbmcgc2xpZGUncyBtYWluIHRleHQgb3BhY2l0eSB0byAxLlxuICAgICAgICAgICAgdXBjb21pbmdTbGlkZS50ZXh0RlguRE9NLnRleHRzW3VwY29taW5nU2xpZGUudGV4dEZYLm1pZGRsZUlkeF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAvLyBBZGQgY3VycmVudCBjbGFzcyB0byB0aGUgdXBjb21pbmcgc2xpZGUgKG9wYWNpdHkgPSAxKVxuICAgICAgICAgICAgdXBjb21pbmdTbGlkZS5ET00uZWwuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fc2xpZGUtLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHVwY29taW5nIHNsaWRlJ3MgaW1hZ2VcbiAgICAgICAgICAgIHVwY29taW5nU2xpZGUuc2hvd0ltYWdlKGRpcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uQ3VycmVudEVuZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBjdXJyZW50IGNsYXNzIGZyb20gdGhlIGN1cnJlbnQgc2xpZGUuXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUuRE9NLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfX3NsaWRlLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICB1cGNvbWluZ1NsaWRlLnRleHRGWC5zaG93KCkudGhlbigoKSA9PiB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBIaWRlIHRoZSBjdXJyZW50IHNsaWRlJ3MgdGV4dCwgXG4gICAgICAgIC8vIGFuZCBjYWxsIG9uQ3VycmVudEhhbGZ3YXlDYWxsYmFjayBhdCBoYWxmIG9mIHRoZSBhbmltYXRpb25cbiAgICAgICAgLy8gSW4gdGhlIGVuZCBjYWxsIG9uQ3VycmVudEVuZENhbGxiYWNrXG4gICAgICAgIGN1cnJlbnRTbGlkZS50ZXh0RlguaGlkZSh7IGhhbGZ3YXlDYWxsYmFjazogb25DdXJyZW50SGFsZndheUNhbGxiYWNrIH0pLnRoZW4ob25DdXJyZW50RW5kQ2FsbGJhY2spO1xuICAgIH1cbn0iLCJpbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvYXZhdGFyJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlJ1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9jb3Zlci1pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVyb1Bvc3Qoe1xuICB0aXRsZSxcbiAgY292ZXJJbWFnZSxcbiAgZGF0ZSxcbiAgZXhjZXJwdCxcbiAgYXV0aG9yLFxuICBzbHVnLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IG1kOm1iLTE2XCI+XG4gICAgICAgIDxDb3ZlckltYWdlXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZT17Y292ZXJJbWFnZS5yZXNwb25zaXZlSW1hZ2V9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmNvbC1nYXAtMTYgbGc6Y29sLWdhcC04IG1iLTIwIG1kOm1iLTI4XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC00eGwgbGc6dGV4dC02eGwgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgbWQ6bWItMCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+e2V4Y2VycHR9PC9wPlxuICAgICAgICAgIDxBdmF0YXIgbmFtZT17YXV0aG9yLm5hbWV9IHBpY3R1cmU9e2F1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgQ01TX05BTUUsIENNU19VUkwgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9uYXZpZ2F0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRybygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4LWNvbCBtZDpmbGV4LXJvdyBmbGV4IGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gbXQtMTYgbWItMTYgbWQ6bWItMTIgei01MCB3LWZ1bGxcIj5cbiAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodCBtZDpwci04XCI+XG4gICAgICAgIEJsb2cuXG4gICAgICA8L2gxPiAqL31cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwic206dy00MCB3LTQwXCIgc3JjPVwiLi9yZWVtdXUtdGV4dC1sb2dvLnN2Z1wiIC8+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgey8qIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzZWxmLXN0YXJ0IG1kOnRleHQtbGVmdCB0ZXh0LWxnIG10LTUgbWQ6cGwtOCBcIj5cbiAgICAgICAgQSBzdGF0aWNhbGx5IGdlbmVyYXRlZCBibG9nIGV4YW1wbGUgdXNpbmd7JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1zdWNjZXNzIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgID5cbiAgICAgICAgICBOZXh0LmpzXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBhbmR7JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e0NNU19VUkx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGhvdmVyOnRleHQtc3VjY2VzcyBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICA+XG4gICAgICAgICAge0NNU19OQU1FfVxuICAgICAgICA8L2E+XG4gICAgICAgIC5cbiAgICAgIDwvaDQ+ICovfVxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9tZXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBwcmV2aWV3LCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZXRhIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8QWxlcnQgcHJldmlldz17cHJldmlld30gLz5cbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDTVNfTkFNRSwgSE9NRV9PR19JTUFHRV9VUkwgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhKCkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwibWFzay1pY29uXCJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiXG4gICAgICAgIGNvbG9yPVwiIzAwMDAwMFwiXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PVwiL2Zhdmljb24vYnJvd3NlcmNvbmZpZy54bWxcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDBcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiBocmVmPVwiL2ZlZWQueG1sXCIgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIGNvbnRlbnQ9e2BBIHN0YXRpY2FsbHkgZ2VuZXJhdGVkIGJsb2cgZXhhbXBsZSB1c2luZyBOZXh0LmpzIGFuZCAke0NNU19OQU1FfS5gfVxuICAgICAgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtIT01FX09HX0lNQUdFX1VSTH0gLz5cbiAgICA8L0hlYWQ+XG4gIClcbn1cbiIsImltcG9ydCBQb3N0UHJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QtcHJldmlldydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9yZVN0b3JpZXMoeyBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgIE1vcmUgU3Rvcmllc1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBtZDpjb2wtZ2FwLTE2IGxnOmNvbC1nYXAtMzIgcm93LWdhcC0yMCBtZDpyb3ctZ2FwLTMyIG1iLTMyXCI+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RQcmV2aWV3XG4gICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgY292ZXJJbWFnZT17cG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlfVxuICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cbiAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIGV4Y2VycHQ9e3Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZWFzZSB9IGZyb20gXCIuLi9saWIvZWFzaW5nc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBcbiAgICB9XG4gICAgYW5pbWF0ZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsbUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuICAgICAgICBjb25zdCBnTmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdsb2JhbC1tZW51X19pdGVtXCIpO1xuICAgICAgICBjb25zdCBlbG1PdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGFwZS1vdmVybGF5c1wiKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBTaGFwZU92ZXJsYXlzKGVsbU92ZXJsYXkpO1xuICAgICAgICBpZiAob3ZlcmxheS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG92ZXJsYXkudG9nZ2xlKCk7XG4gICAgICAgIGlmIChvdmVybGF5LmlzT3BlbmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBlbG1IYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcImlzLW9wZW5lZC1uYXZpXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbUhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkLW5hdmlcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdOYXZJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdOYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXIgaGFtYnVyZ2VyLS1kZW1vLTYganMtaG92ZXJcIiBvbkNsaWNrPXt0aGlzLmFuaW1hdGVPdmVybGF5fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlcl9fbGluZSBoYW1idXJnZXJfX2xpbmUtLTAxXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlcl9fbGluZS1pbiBoYW1idXJnZXJfX2xpbmUtaW4tLTAxIGhhbWJ1cmdlcl9fbGluZS1pbi0tZGVtby01XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJfX2xpbmUgaGFtYnVyZ2VyX19saW5lLS0wMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJfX2xpbmUtaW4gaGFtYnVyZ2VyX19saW5lLWluLS0wMiBoYW1idXJnZXJfX2xpbmUtaW4tLWRlbW8tNVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyX19saW5lIGhhbWJ1cmdlcl9fbGluZS0tMDNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyX19saW5lLWluIGhhbWJ1cmdlcl9fbGluZS1pbi0tMDMgaGFtYnVyZ2VyX19saW5lLWluLS1kZW1vLTVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlcl9fbGluZSBoYW1idXJnZXJfX2xpbmUtLWNyb3NzMDFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyX19saW5lLWluIGhhbWJ1cmdlcl9fbGluZS1pbi0tY3Jvc3MwMSBoYW1idXJnZXJfX2xpbmUtaW4tLWRlbW8tNVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyX19saW5lIGhhbWJ1cmdlcl9fbGluZS0tY3Jvc3MwMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJfX2xpbmUtaW4gaGFtYnVyZ2VyX19saW5lLWluLS1jcm9zczAyIGhhbWJ1cmdlcl9fbGluZS1pbi0tZGVtby01XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbC1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbG9iYWwtbWVudV9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xvYmFsLW1lbnVfX2l0ZW0gZ2xvYmFsLW1lbnVfX2l0ZW0tLWRlbW8tNlwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGF0YSBTY2llbmNlXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbG9iYWwtbWVudV9faXRlbSBnbG9iYWwtbWVudV9faXRlbS0tZGVtby02XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZXNlYXJjaFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xvYmFsLW1lbnVfX2l0ZW0gZ2xvYmFsLW1lbnVfX2l0ZW0tLWRlbW8tNlwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FzZSBTdHVkaWVzXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbG9iYWwtbWVudV9faXRlbSBnbG9iYWwtbWVudV9faXRlbS0tZGVtby02XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcGUtb3ZlcmxheXNcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJncmFkaWVudDFcIlxuICAgICAgICAgICAgICAgICAgICB4MT1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeTE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHgyPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMwMGM5OWJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiI2ZmMGVhMVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ3JhZGllbnQyXCJcbiAgICAgICAgICAgICAgICAgICAgeDE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHkxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB4Mj1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeTI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjZmZkMzkyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiNmZjM4OThcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICBpZD1cImdyYWRpZW50M1wiXG4gICAgICAgICAgICAgICAgICAgIHgxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgICB5MT1cIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgeDI9XCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiIzExMDA0NlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjMzIwMDRhXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInNoYXBlLW92ZXJsYXlzX19wYXRoXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInNoYXBlLW92ZXJsYXlzX19wYXRoXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInNoYXBlLW92ZXJsYXlzX19wYXRoXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgU2hhcGVPdmVybGF5cyB7XG4gIGNvbnN0cnVjdG9yKGVsbSkge1xuICAgIHRoaXMuZWxtID0gZWxtO1xuICAgIHRoaXMucGF0aCA9IGVsbS5xdWVyeVNlbGVjdG9yQWxsKFwicGF0aFwiKTtcbiAgICB0aGlzLm51bVBvaW50cyA9IDEwO1xuICAgIHRoaXMuZHVyYXRpb24gPSA5MDA7XG4gICAgdGhpcy5kZWxheVBvaW50c0FycmF5ID0gW107XG4gICAgdGhpcy5kZWxheVBvaW50c01heCA9IDMwMDtcbiAgICB0aGlzLmRlbGF5UGVyUGF0aCA9IDI1MDtcbiAgICB0aGlzLnRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgfVxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICB0aGlzLmRlbGF5UG9pbnRzQXJyYXlbaV0gPSBNYXRoLnJhbmRvbSgpICogdGhpcy5kZWxheVBvaW50c01heDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNPcGVuZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuZWxtLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuZWRcIik7XG4gICAgdGhpcy50aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucmVuZGVyTG9vcCgpO1xuICB9XG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVsbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkXCIpO1xuICAgIHRoaXMudGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnJlbmRlckxvb3AoKTtcbiAgfVxuICB1cGRhdGVQYXRoKHRpbWUpIHtcbiAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIHBvaW50c1tpXSA9XG4gICAgICAgICgxIC1cbiAgICAgICAgICBlYXNlLmN1YmljSW5PdXQoXG4gICAgICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgICAgTWF0aC5tYXgodGltZSAtIHRoaXMuZGVsYXlQb2ludHNBcnJheVtpXSwgMCkgLyB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSkgKlxuICAgICAgICAxMDA7XG4gICAgfVxuXG4gICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgc3RyICs9IHRoaXMuaXNPcGVuZWQgPyBgTSAwIDAgViAke3BvaW50c1swXX1gIDogYE0gMCAke3BvaW50c1swXX1gO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHMgLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IHAgPSAoKGkgKyAxKSAvICh0aGlzLm51bVBvaW50cyAtIDEpKSAqIDEwMDtcbiAgICAgIGNvbnN0IGNwID0gcCAtICgoMSAvICh0aGlzLm51bVBvaW50cyAtIDEpKSAqIDEwMCkgLyAyO1xuICAgICAgc3RyICs9IGBDICR7Y3B9ICR7cG9pbnRzW2ldfSAke2NwfSAke3BvaW50c1tpICsgMV19ICR7cH0gJHtcbiAgICAgICAgcG9pbnRzW2kgKyAxXVxuICAgICAgfSBgO1xuICAgIH1cbiAgICBzdHIgKz0gdGhpcy5pc09wZW5lZCA/IGBWIDEwMCBIIDBgIDogYFYgMCBIIDBgO1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmlzT3BlbmVkKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnBhdGhbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIHRoaXMudXBkYXRlUGF0aChEYXRlLm5vdygpIC0gKHRoaXMudGltZVN0YXJ0ICsgdGhpcy5kZWxheVBlclBhdGggKiBpKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYXRoW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhdGgoXG4gICAgICAgICAgICBEYXRlLm5vdygpIC1cbiAgICAgICAgICAgICAgKHRoaXMudGltZVN0YXJ0ICsgdGhpcy5kZWxheVBlclBhdGggKiAodGhpcy5wYXRoLmxlbmd0aCAtIGkgLSAxKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbmRlckxvb3AoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICBpZiAoXG4gICAgICBEYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhcnQgPFxuICAgICAgdGhpcy5kdXJhdGlvbiArXG4gICAgICAgIHRoaXMuZGVsYXlQZXJQYXRoICogKHRoaXMucGF0aC5sZW5ndGggLSAxKSArXG4gICAgICAgIHRoaXMuZGVsYXlQb2ludHNNYXhcbiAgICApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyTG9vcCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvYXZhdGFyJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlJ1xuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnLi9jb3Zlci1pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFByZXZpZXcoe1xuICB0aXRsZSxcbiAgY292ZXJJbWFnZSxcbiAgZGF0ZSxcbiAgZXhjZXJwdCxcbiAgYXV0aG9yLFxuICBzbHVnLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgPENvdmVySW1hZ2VcbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICByZXNwb25zaXZlSW1hZ2U9e2NvdmVySW1hZ2UucmVzcG9uc2l2ZUltYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItMyBsZWFkaW5nLXNudWdcIj5cbiAgICAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9XCIvcG9zdHMvW3NsdWddXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+XG4gICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTRcIj57ZXhjZXJwdH08L3A+XG4gICAgICA8QXZhdGFyIG5hbWU9e2F1dGhvci5uYW1lfSBwaWN0dXJlPXthdXRob3IucGljdHVyZX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0ICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tJ1xuY29uc3QgQVBJX1RPS0VOID0gcHJvY2Vzcy5lbnYuTkVYVF9FWEFNUExFX0NNU19EQVRPQ01TX0FQSV9UT0tFTlxuXG4vLyBTZWU6IGh0dHBzOi8vd3d3LmRhdG9jbXMuY29tL2Jsb2cvb2ZmZXItcmVzcG9uc2l2ZS1wcm9ncmVzc2l2ZS1scWlwLWltYWdlcy1pbi0yMDIwXG5jb25zdCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCA9IGBcbiAgZnJhZ21lbnQgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgb24gUmVzcG9uc2l2ZUltYWdlIHtcbiAgc3JjU2V0XG4gICAgd2VicFNyY1NldFxuICAgIHNpemVzXG4gICAgc3JjXG4gICAgd2lkdGhcbiAgICBoZWlnaHRcbiAgICBhc3BlY3RSYXRpb1xuICAgIGFsdFxuICAgIHRpdGxlXG4gICAgYmdDb2xvclxuICAgIGJhc2U2NFxuICB9XG5gXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHF1ZXJ5LCB7IHZhcmlhYmxlcywgcHJldmlldyB9ID0ge30pIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX1VSTCArIChwcmV2aWV3ID8gJy9wcmV2aWV3JyA6ICcnKSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVBJX1RPS0VOfWAsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeSxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgfSlcblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICBjb25zb2xlLmVycm9yKGpzb24uZXJyb3JzKVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIEFQSScpXG4gIH1cbiAgcmV0dXJuIGpzb24uZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJldmlld1Bvc3RCeVNsdWcoc2x1Zykge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoXG4gICAgYFxuICAgIHF1ZXJ5IFBvc3RCeVNsdWcoJHNsdWc6IFN0cmluZykge1xuICAgICAgcG9zdChmaWx0ZXI6IHtzbHVnOiB7ZXE6ICRzbHVnfX0pIHtcbiAgICAgICAgc2x1Z1xuICAgICAgfVxuICAgIH1gLFxuICAgIHtcbiAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgc2x1ZyxcbiAgICAgIH0sXG4gICAgfVxuICApXG4gIHJldHVybiBkYXRhPy5wb3N0XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0c1dpdGhTbHVnKCkge1xuICBjb25zdCBkYXRhID0gZmV0Y2hBUEkoYFxuICAgIHtcbiAgICAgIGFsbFBvc3RzIHtcbiAgICAgICAgc2x1Z1xuICAgICAgfVxuICAgIH1cbiAgYClcbiAgcmV0dXJuIGRhdGE/LmFsbFBvc3RzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0c0ZvckhvbWUocHJldmlldykge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoXG4gICAgYFxuICAgIHtcbiAgICAgIGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIwKSB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIHNsdWdcbiAgICAgICAgZXhjZXJwdFxuICAgICAgICBkYXRlXG4gICAgICAgIGNvdmVySW1hZ2Uge1xuICAgICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhdXRob3Ige1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbiAgYCxcbiAgICB7IHByZXZpZXcgfVxuICApXG4gIHJldHVybiBkYXRhPy5hbGxQb3N0c1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdEFuZE1vcmVQb3N0cyhzbHVnLCBwcmV2aWV3KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShcbiAgICBgXG4gIHF1ZXJ5IFBvc3RCeVNsdWcoJHNsdWc6IFN0cmluZykge1xuICAgIHBvc3QoZmlsdGVyOiB7c2x1Zzoge2VxOiAkc2x1Z319KSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgY29udGVudFxuICAgICAgZGF0ZVxuICAgICAgb2dJbWFnZTogY292ZXJJbWFnZXtcbiAgICAgICAgdXJsKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pXG4gICAgICB9XG4gICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdXRob3Ige1xuICAgICAgICBuYW1lXG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtb3JlUG9zdHM6IGFsbFBvc3RzKG9yZGVyQnk6IGRhdGVfREVTQywgZmlyc3Q6IDIsIGZpbHRlcjoge3NsdWc6IHtuZXE6ICRzbHVnfX0pIHtcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICBleGNlcnB0XG4gICAgICBkYXRlXG4gICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDAwLCBoOiAxMDAwIH0pIHtcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdXRob3Ige1xuICAgICAgICBuYW1lXG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMTAwLCBoOiAxMDAsIHNhdDogLTEwMH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxuICBgLFxuICAgIHtcbiAgICAgIHByZXZpZXcsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgc2x1ZyxcbiAgICAgIH0sXG4gICAgfVxuICApXG4gIHJldHVybiBkYXRhXG59XG4iLCJleHBvcnQgY29uc3QgRVhBTVBMRV9QQVRIID0gJ2Ntcy1kYXRvY21zJ1xuZXhwb3J0IGNvbnN0IENNU19OQU1FID0gJ0RhdG9DTVMnXG5leHBvcnQgY29uc3QgQ01TX1VSTCA9ICdodHRwczovL3d3dy5kYXRvY21zLmNvbS8nXG5leHBvcnQgY29uc3QgSE9NRV9PR19JTUFHRV9VUkwgPVxuICAnaHR0cHM6Ly9vZy1pbWFnZS5ub3cuc2gvTmV4dC5qcyUyMEJsb2clMjBFeGFtcGxlJTIwd2l0aCUyMCoqRGF0b0NNUyoqLnBuZz90aGVtZT1saWdodCZtZD0xJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnZlcmNlbC5jb20lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnJmltYWdlcz1kYXRhJTNBaW1hZ2UlMkZzdmclMkJ4bWwlM0JiYXNlNjQlMkNQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIyYVdWM1FtOTRQU0l3SURBZ01qWXhMakkzTkNBNE1DNDFOaklpUGp4a1pXWnpQanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpWVNJZ2VURTlJalF3TGpRMElpQjRNajBpTnpndU5qZzNJaUI1TWowaU5EQXVORFFpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNDhjM1J2Y0NCdlptWnpaWFE5SWpBaUlITjBiM0F0WTI5c2IzSTlJaU5tWmpVNU0yUWlMejQ4YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlObVpqYzNOVEVpTHo0OEwyeHBibVZoY2tkeVlXUnBaVzUwUGp3dlpHVm1jejQ4ZEdsMGJHVSUyQlpuVnNiRjl6YldGc2JHVnlQQzkwYVhSc1pUNDhjR0YwYUNCa1BTSk5Nemt1TXpRMExqZzBORWd3Vmpnd0xqQXpOMGd6T1M0ek5EUmpNVGt1TmpjM0xEQXNNemt1TXpRekxURTNMamN5T1N3ek9TNHpORE10TXprdU5Ua3hVelU1TGpBeU1TNDRORFFzTXprdU16UTBMamcwTkZwdE1DdzFOeTQxT0RsaE1UY3VPVGt6TERFM0xqazVNeXd3TERFc01Td3hPQzB4Tnk0NU9EZEJNVGN1T1RnMkxERTNMams0Tml3d0xEQXNNU3d6T1M0ek5EUXNOVGd1TkRNeldpSWdabWxzYkQwaWRYSnNLQ05oS1NJdlBqeHdZWFJvSUdROUlrMHhNVGt1TURVMExqZzFPR014TVM0NE5ESXNNQ3d4Tnk0NU1UWXNOeTR4Tnprc01UY3VPVEUyTERFM0xqQTFPSFk0TGpnek5XTXdMRGt1T0RjNExUWXVNRGMwTERFM0xqQTFOeTB4Tnk0NU1UWXNNVGN1TURVM1NERXdNQzR5TnpsV0xqZzFPRnB0Tnk0ek5qTXNNVGRqTUMwMUxqUTJMVEl1T0RnMExUZ3VNelEwTFRrdU1qWTFMVGd1TXpRMGFDMDJMak00TVZZek5TNHhOVFpvTmk0ek9ERmpOaTR6T0RFc01DdzVMakkyTlMweUxqZzROQ3c1TGpJMk5TMDRMak0wTkZwdE5ETXVNalF4TERFM0xqazNOMGd4TlRRdU1UTTFiQzB5TGpNNU15dzNMamszTjBneE5ERXVNVGc1VERFMU5pNDFNamN1T0RVNGFERXdMamhzTVRVdU16TTVMRFF5TGprMVNERTNNaTR4TVRKYWJTMHhNaTQ1TkRZdE9DNDBOamRvTVRBdU16WTViQzAxTGpFMU5DMHhOaTQ1T1RWYVRUSXhOaTR3TXpNdU9EVTRkamd1T1dndE1URXVObFkwTXk0NE1EaElNVGt6TGpnNE0xWTVMamMxTldndE1URXVObFl1T0RVNFdtMHlOUzQxTkRVc05ETXVPREE1WXkweE15NHdNRGNzTUMweE9TNDJPVFV0T0M0ek5EVXRNVGt1TmprMUxURTVMalUzTTFZeE9TNDFOekpETWpJeExqZzRNeXc0TGpNME5Dd3lNamd1TlRjeExEQXNNalF4TGpVM09Dd3djekU1TGpjc09DNHpORFFzTVRrdU55d3hPUzQxTnpKMk5TNDFNakpETWpZeExqSTNOQ3d6Tmk0ek1qSXNNalUwTGpVNE5pdzBOQzQyTmpjc01qUXhMalUzT0N3ME5DNDJOamRhYlRBdE16VXVPRGswWXkwMkxqRXpOU3d3TFRrdU1UUXlMRFF1TVRFeUxUa3VNVFF5TERFd0xqSTBOM1kyTGpZeU5tTXdMRFl1TVRNMkxETXVNREEzTERFd0xqSTBOeXc1TGpFME1pd3hNQzR5TkRkek9TNHhOREl0TkM0eE1URXNPUzR4TkRJdE1UQXVNalEzVmpFNUxqQXlRekkxTUM0M01pd3hNaTQ0T0RVc01qUTNMamN4TkN3NExqYzNNeXd5TkRFdU5UYzRMRGd1TnpjeldrMHhNRGt1Tmprc056VXVNalEwWVRRdU9ERXpMRFF1T0RFekxEQXNNQ3d3TERVdU1pMDBMamcyT0dnMUxqazFOR010TGpBM05TdzFMalUwTWkwMExqRTFOaXd4TUM0eE9EWXRNVEV1TURnMExERXdMakU0TmkwNExqQTRPQ3d3TFRFeExqazRNaTAxTGpBNU15MHhNUzQ1T0RJdE1URXVPVEE0VmpZMUxqSXdPV013TFRZdU9ERTFMRE11T0RrMExURXhMamt3Tnl3eE1TNDVPREl0TVRFdU9UQTNMRFl1T1RJNExEQXNNVEV1TURBNUxEUXVOalF5TERFeExqQTROQ3d4TUM0eE9EUm9MVFV1T1RVMFlUUXVPREV6TERRdU9ERXpMREFzTUN3d0xUVXVNaTAwTGpnMk9HTXRNeTQ0T1RVc01DMDFMalEyT0N3eUxqVTROQzAxTGpRMk9DdzJMakk1TVhZMExqQTBORU14TURRdU1qSXlMRGN5TGpZMkxERXdOUzQ0TERjMUxqSTBOQ3d4TURrdU5qa3NOelV1TWpRMFdtMHpOeTR3TlRVdE1qRXVOREU1YURVdU9URTNWamd3TGpBek4yZ3ROaTR4TnpoV05qWXVNVGd6YkMwMExqRXlMRGd1TURFeWFDMDFMakE1TW13dE5DNHdPREV0T0M0d01USldPREF1TURNM2FDMDJMakUzT1ZZMU15NDRNalZvTlM0NU1UWnNOaTQ0T1N3eE5DNHlOamRhVFRFMk9TNDFNU3c0TUM0MU5qSmpMVFl1TWpreExEQXRNVEF1TlRJeUxUTXRNVEF1TlRJeUxUZ3VNamMyZGkwdU56RXlhRFl1TVRjNFZqY3lMakZqTUN3eUxqSXdPU3d4TGpReU15d3pMalUxTnl3MExqTTRNU3d6TGpVMU55d3lMalkxT1N3d0xEUXVOREU1TFRFdU1EZzJMRFF1TkRFNUxUTXVNVEE0WVRJdU1UVXhMREl1TVRVeExEQXNNQ3d3TFRFdU9DMHlMak15TVd3dE5pNDFOVE10TVM0Mk5EaGpMVFF1TURneUxURXVNREV4TFRZdU1UYzVMVEl1T0RBNExUWXVNVGM1TFRjdU1EYzNMREF0TlM0eU1EVXNNeTQzTURjdE9DNHlMRGt1T1RJekxUZ3VNaXcxTGpnM09Td3dMRGt1TmpJMExETXVNVGd5TERrdU5qSTBMRGN1T1RjMWRpNDJNemRJTVRjekxqQXpkaTB1TkRRNVl6QXRNUzQzTmpFdExqazNOQzB6TGpJeU1TMHpMalkzTFRNdU1qSXhMVEl1TWpRM0xEQXRNeTQyTmprdU56ZzJMVE11TmpZNUxESXVOalU0WVRFdU9UazBMREV1T1RrMExEQXNNQ3d3TERFdU5qZzFMREl1TVRNMWJEWXVPVFkwTERFdU9EY3lZelF1TVRrMExERXVNVEl6TERVdU9EYzVMRE11TkRRMUxEVXVPRGM1TERjdU1EYzNRekU0TUM0eU1Ua3NOemN1TWpJNUxERTNOUzQxTnpZc09EQXVOVFl5TERFMk9TNDFNU3c0TUM0MU5qSmFJaUJtYVd4c1BTSWpabVkzTnpVeElpOCUyQlBDOXpkbWMlMkImd2lkdGhzPXVuZGVmaW5lZCZ3aWR0aHM9MzUwJmhlaWdodHM9MjAwJmhlaWdodHM9YXV0bydcbiIsIi8vXG4vLyB0aGVzZSBlYXNpbmcgZnVuY3Rpb25zIGFyZSBiYXNlZCBvbiB0aGUgY29kZSBvZiBnbHNsLWVhc2luZyBtb2R1bGUuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2xzbGlmeS9nbHNsLWVhc2luZ3Ncbi8vXG5cbmV4cG9ydCBjb25zdCBlYXNlID0ge1xuICBleHBvbmVudGlhbEluOiB0ID0+IHtcbiAgICByZXR1cm4gdCA9PSAwLjAgPyB0IDogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKTtcbiAgfSxcbiAgZXhwb25lbnRpYWxPdXQ6IHQgPT4ge1xuICAgIHJldHVybiB0ID09IDEuMCA/IHQgOiAxLjAgLSBNYXRoLnBvdygyLjAsIC0xMC4wICogdCk7XG4gIH0sXG4gIGV4cG9uZW50aWFsSW5PdXQ6IHQgPT4ge1xuICAgIHJldHVybiB0ID09IDAuMCB8fCB0ID09IDEuMFxuICAgICAgPyB0XG4gICAgICA6IHQgPCAwLjVcbiAgICAgID8gKzAuNSAqIE1hdGgucG93KDIuMCwgMjAuMCAqIHQgLSAxMC4wKVxuICAgICAgOiAtMC41ICogTWF0aC5wb3coMi4wLCAxMC4wIC0gdCAqIDIwLjApICsgMS4wO1xuICB9LFxuICBzaW5lT3V0OiB0ID0+IHtcbiAgICBjb25zdCBIQUxGX1BJID0gMS41NzA3OTYzMjY3OTQ4OTY2O1xuICAgIHJldHVybiBNYXRoLnNpbih0ICogSEFMRl9QSSk7XG4gIH0sXG4gIGNpcmN1bGFySW5PdXQ6IHQgPT4ge1xuICAgIHJldHVybiB0IDwgMC41XG4gICAgICA/IDAuNSAqICgxLjAgLSBNYXRoLnNxcnQoMS4wIC0gNC4wICogdCAqIHQpKVxuICAgICAgOiAwLjUgKiAoTWF0aC5zcXJ0KCgzLjAgLSAyLjAgKiB0KSAqICgyLjAgKiB0IC0gMS4wKSkgKyAxLjApO1xuICB9LFxuICBjdWJpY0luOiB0ID0+IHtcbiAgICByZXR1cm4gdCAqIHQgKiB0O1xuICB9LFxuICBjdWJpY091dDogdCA9PiB7XG4gICAgY29uc3QgZiA9IHQgLSAxLjA7XG4gICAgcmV0dXJuIGYgKiBmICogZiArIDEuMDtcbiAgfSxcbiAgY3ViaWNJbk91dDogdCA9PiB7XG4gICAgcmV0dXJuIHQgPCAwLjUgPyA0LjAgKiB0ICogdCAqIHQgOiAwLjUgKiBNYXRoLnBvdygyLjAgKiB0IC0gMi4wLCAzLjApICsgMS4wO1xuICB9LFxuICBxdWFkcmF0aWNPdXQ6IHQgPT4ge1xuICAgIHJldHVybiAtdCAqICh0IC0gMi4wKTtcbiAgfSxcbiAgcXVhcnRpY091dDogdCA9PiB7XG4gICAgcmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjA7XG4gIH1cbn07XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IE1vcmVTdG9yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvbW9yZS1zdG9yaWVzJ1xuaW1wb3J0IEhlcm9Qb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby1wb3N0J1xuaW1wb3J0IEhlcm9JbnRybyBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8taW50cm8nXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBnZXRBbGxQb3N0c0ZvckhvbWUgfSBmcm9tICcuLi9saWIvYXBpJ1xuaW1wb3J0IHsgQ01TX05BTUUgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGFsbFBvc3RzIH0pIHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0c1swXVxuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aCB7Q01TX05BTUV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxJbnRybyAvPlxuICAgICAgICAgIDxIZXJvSW50cm8gLz5cbiAgICAgICAgICB7aGVyb1Bvc3QgJiYgKFxuICAgICAgICAgICAgPEhlcm9Qb3N0XG4gICAgICAgICAgICAgIHRpdGxlPXtoZXJvUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgY292ZXJJbWFnZT17aGVyb1Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXtoZXJvUG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgIHNsdWc9e2hlcm9Qb3N0LnNsdWd9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21vcmVQb3N0cy5sZW5ndGggPiAwICYmIDxNb3JlU3RvcmllcyBwb3N0cz17bW9yZVBvc3RzfSAvPn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBhbGxQb3N0cyA9IChhd2FpdCBnZXRBbGxQb3N0c0ZvckhvbWUocHJldmlldykpIHx8IFtdXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdG9jbXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==