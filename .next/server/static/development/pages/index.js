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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    id: "contact",
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
      className: "jsx-1923341956" + " " + "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-1923341956" + " " + "content__slide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1923341956" + " " + "content__img first",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-1923341956" + " " + "content__img-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "jsx-1923341956" + " " + "content__text-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, "Design")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 19
      }
    }, "Design")))), __jsx("div", {
      className: "jsx-1923341956" + " " + "content__slide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1923341956" + " " + "content__img second",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-1923341956" + " " + "content__img-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "jsx-1923341956" + " " + "content__text-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 19
      }
    }, "Optimize")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }, "Optimize")))), __jsx("div", {
      className: "jsx-1923341956" + " " + "content__slide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1923341956" + " " + "content__img third",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-1923341956" + " " + "content__img-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "jsx-1923341956" + " " + "content__text-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text content__text--full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner content__text-inner--stroke content__text-inner--bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 19
      }
    }, "Imagine")), __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "jsx-1923341956" + " " + "content__text-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 19
      }
    }, "Imagine")))), __jsx("nav", {
      className: "jsx-1923341956" + " " + "content__nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: "jsx-1923341956" + " " + "content__nav-button content__nav-button--prev",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    }, "Prev"), __jsx("button", {
      className: "jsx-1923341956" + " " + "content__nav-button content__nav-button--next",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 15
      }
    }, "Next")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1923341956",
      __self: this
    }, ".content.jsx-1923341956{display:grid;grid-template-rows:100%;grid-template-columns:100%;grid-template-areas:\"main\";height:calc(100vh - 19rem);width:100%;margin:0 auto;position:relative;}.content__slide.jsx-1923341956{grid-area:main;width:100%;height:100%;overflow:hidden;display:grid;grid-template-rows:100%;grid-template-columns:100%;grid-template-areas:\"inner\";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none;}.content__slide--current.jsx-1923341956{opacity:1;}.content__img.jsx-1923341956,.content__text-wrap.jsx-1923341956{grid-area:inner;width:100%;}.content__img.jsx-1923341956{height:calc(100vh - 40rem);width:90%;max-width:calc(1000px - 11rem);max-height:600px;justify-self:center;overflow:hidden;z-index:-1;position:relative;}.content__img--full.jsx-1923341956::after{content:\"\";position:absolute;top:0;left:0;background:rgba(0,0,0,0.3);width:100%;height:100%;}.content__img.first.jsx-1923341956 .content__img-inner.jsx-1923341956{background-image:url(\"/16.jpeg\");}.content__img.second.jsx-1923341956 .content__img-inner.jsx-1923341956{background-image:url(\"/14.jpeg\");}.content__img.third.jsx-1923341956 .content__img-inner.jsx-1923341956{background-image:url(\"/15.jpeg\");}.content__img-inner.jsx-1923341956{width:100%;height:100%;background-position:50% 50%;background-size:cover;}.content__text-wrap.jsx-1923341956{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.content__text.jsx-1923341956{overflow:hidden;-webkit-flex:1;-ms-flex:1;flex:1;opacity:0;pointer-events:none;}.content__text.jsx-1923341956:nth-child(6){opacity:1;}.content__text--full.jsx-1923341956{-webkit-flex:none;-ms-flex:none;flex:none;}.content__text-inner.jsx-1923341956{display:block;color:var(--color-slide-text);text-transform:uppercase;font-size:3.5rem;font-weight:var(--font-trail-weight);line-height:var(--font-trail-lheight);font-family:var(--font-trail-family);}.content__text-inner--bottom.jsx-1923341956{-webkit-transform:translate3d(0,-40%,0);-ms-transform:translate3d(0,-40%,0);transform:translate3d(0,-40%,0);}.content__text-inner--stroke.jsx-1923341956{-webkit-text-stroke:2px var(--color-slide-text);text-stroke:2px var(--color-slide-text);-webkit-text-fill-color:transparent;text-fill-color:transparent;color:transparent;}.content__nav.jsx-1923341956{grid-area:main;justify-self:center;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;width:calc(90% - 1rem);max-width:1000px;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.25rem;position:relative;}.content__nav-button.jsx-1923341956{border:0;cursor:pointer;background:none;margin:0.25rem 0;padding:0;text-transform:lowercase;color:var(--color-nav);font-weight:900;line-height:1;}.content__nav-button.jsx-1923341956:focus{outline:none;}@media screen and (min-width:1024px){.jsx-1923341956:root{font-size:16px;}.content.jsx-1923341956{height:100vh;}.content__img.jsx-1923341956{width:calc(90% - 11rem);height:60vh;}.content__img--full.jsx-1923341956{height:calc(100vh + 20px);width:calc(100vw + 20px);max-width:none;max-height:none;}.content__text-inner.jsx-1923341956{font-size:var(--font-trail-size);}.content__nav.jsx-1923341956{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;font-size:1.75rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZHVudGFrL1Byb2plY3RzL2Ntcy1kYXRvY21zLWFwcC9jb21wb25lbnRzL2hlcm8taW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEt3QixBQUc4QixBQVdFLEFBY0wsQUFLTSxBQUtXLEFBV2hCLEFBVXNCLEFBSUEsQUFJQSxBQUl0QixBQU9DLEFBUUksQUFPTixBQUlBLEFBSUksQUFVb0IsQUFJYyxBQVFqQyxBQWNOLEFBWUksQUFLSSxBQUdGLEFBR1csQUFJRSxBQU1PLEFBR2YsU0FuQ0wsQ0E3R2pCLEFBaUVBLENBNUNvQixBQXNCTixDQU9DLENBM0VXLEFBa0oxQixBQVFFLENBeEQ4QixDQXZGbkIsQUE2R1MsQUErQnBCLENBekhXLEFBcURKLE9BZHFCLENBa0VaLEFBc0JGLEVBakpGLEFBcUplLENBbEk3QixBQUlZLEVBWUosSUFTUixBQUlBLEFBSUEsQUF1R0UsRUF2SE8sQUF5RVEsQ0FxQ2YsQ0E3SjJCLEFBbUNJLENBdkJmLEVBMkhDLEVBdkZhLEFBNkNoQyxFQUsyQixJQWFlLENBNUI5QixFQWRZLEFBNEZMLEdBcEpKLEdBMkhILEVBcERVLEtBbkZPLEVBaUtULENBcEpNLEFBMkhDLENBckdSLENBYU4sQUFrRE0sRUFzRU8sRUFuRzFCLE1BZUEsQ0FuQ2MsRUFpSFosR0E5SG9CLENBc0NFLEFBeUJlLEVBWUQsR0E5R1QsQUFhQSxDQW9DN0IsQUF1RnlCLEtBakJBLFFBbkZQLEdBcUVsQixPQWdDa0IsR0F4SUwsQUFhaUIsRUEwR1gsQ0FuRk4sRUE4RDJCLENBWVYsS0E3R2QsRUF3SUEsQ0FwR0ksS0FtRk4sTUF0SE0sRUF3SXBCLENBNUhxQixHQTJHTixBQThDZ0IsQ0FqSS9CLEVBeUVvQixTQTVHcEIsQUFnR3VDLEdBMUJsQixNQXVDckIsNEJBWkEseUJBc0J1QixnQkEzR1gsVUFDVSxLQXdKQSxHQTlGRyxZQXpEekIsR0F3SkUsb0RBOUN1QixnQ0FoRHpCLG1FQWlEb0Isa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy93ZHVudGFrL1Byb2plY3RzL2Ntcy1kYXRvY21zLWFwcC9jb21wb25lbnRzL2hlcm8taW50cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRpbWVsaW5lTGl0ZSwgUXVpbnQgfSBmcm9tICdnc2FwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvSW50cm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBuZXcgU2xpZGVzaG93KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zbGlkZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2ltZyBmaXJzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW1nLWlubmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2lnblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+RGVzaWduPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0IGNvbnRlbnRfX3RleHQtLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2lnblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+RGVzaWduPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2UgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2lnblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+RGVzaWduPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWcgc2Vjb25kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWctaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgT3B0aW1pemVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPk9wdGltaXplPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0IGNvbnRlbnRfX3RleHQtLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5PcHRpbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+T3B0aW1pemU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5PcHRpbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZSBjb250ZW50X190ZXh0LWlubmVyLS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgT3B0aW1pemVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPk9wdGltaXplPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWcgdGhpcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2ltZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnaW5lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5JbWFnaW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0IGNvbnRlbnRfX3RleHQtLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2luZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+SW1hZ2luZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsIFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkltYWdpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkltYWdpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2luZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZSBjb250ZW50X190ZXh0LWlubmVyLS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2luZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+SW1hZ2luZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRlbnRfX25hdlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX25hdi1idXR0b24gY29udGVudF9fbmF2LWJ1dHRvbi0tcHJldlwiPlxuICAgICAgICAgICAgICAgIFByZXZcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udGVudF9fbmF2LWJ1dHRvbiBjb250ZW50X19uYXYtYnV0dG9uLS1uZXh0XCI+XG4gICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibWFpblwiO1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE5cmVtKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fc2xpZGUge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbm5lclwiO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19zbGlkZS0tY3VycmVudCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19pbWcsXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LXdyYXAge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogaW5uZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9faW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHJlbSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwMHB4IC0gMTFyZW0pO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy0tZnVsbDo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9faW1nLmZpcnN0IC5jb250ZW50X19pbWctaW5uZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8xNi5qcGVnXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy5zZWNvbmQgLmNvbnRlbnRfX2ltZy1pbm5lciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLzE0LmpwZWdcIik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9faW1nLnRoaXJkIC5jb250ZW50X19pbWctaW5uZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8xNS5qcGVnXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy1pbm5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LXdyYXAge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0Om50aC1jaGlsZCg2KSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LS1mdWxsIHtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX3RleHQtaW5uZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zbGlkZS10ZXh0KTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXRyYWlsLXdlaWdodCk7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtdHJhaWwtbGhlaWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdHJhaWwtZmFtaWx5KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LWlubmVyLS1ib3R0b20ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTQwJSwgMCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggdmFyKC0tY29sb3Itc2xpZGUtdGV4dCk7XG4gICAgICAgICAgICAgICAgdGV4dC1zdHJva2U6IDJweCB2YXIoLS1jb2xvci1zbGlkZS10ZXh0KTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fbmF2IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG1haW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDkwJSAtIDFyZW0pO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX25hdi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW5hdik7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19uYXYtYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgOnJvb3Qge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudF9faW1nIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDkwJSAtIDExcmVtKTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy0tZnVsbCB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggKyAyMHB4KTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3ICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC1pbm5lciB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtdHJhaWwtc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50X19uYXYge1xuICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY2xhc3MgVGV4dEZYIHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICB0aGlzLkRPTSA9IHsgZWw6IGVsIH07XG4gICAgICAgIC8vIFRoZSB0ZXh0cyAocmVwZWF0ZWQpXG4gICAgICAgIHRoaXMuRE9NLnRleHRzID0gWy4uLnRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50X190ZXh0JyldO1xuICAgICAgICB0aGlzLkRPTS50ZXh0c1RvdGFsID0gdGhpcy5ET00udGV4dHMubGVuZ3RoO1xuICAgICAgICAvLyBUaGUgaW5kZXggb2YgdGhlIG1haW4gdGV4dCBlbGVtZW50XG4gICAgICAgIHRoaXMubWlkZGxlSWR4ID0gTWF0aC5mbG9vcih0aGlzLkRPTS50ZXh0c1RvdGFsIC8gMik7XG4gICAgICAgIC8vIFRpbWUgYmV0d2VlbiBlYWNoIHNob3dpbmcvaGlkaW5nIG9mIGVhY2ggdGV4dCBpbnN0YW5jZVxuICAgICAgICB0aGlzLmxvb3BJbnRlcnZhbCA9IHsgc2hvdzogODAsIGhpZGU6IDgwIH07XG4gICAgICAgIC8vIG9wdGlvbmFsOiBFeHRyYSB0aW1lIHRvIHRoZSB3aG9sZSBzaG93L2hpZGUgYW5pbWF0aW9uLiBcbiAgICAgICAgdGhpcy5sb29wRW5kSWRkbGVUaW1lID0gdGhpcy5sb29wSW50ZXJ2YWwuc2hvdztcbiAgICB9XG4gICAgc2hvdyh7IGRpciA9ICdib3RoJywgaGFsZndheUNhbGxiYWNrID0gbnVsbCB9ID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvb3BIaWRlID0gKHBvcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pZGRsZUlkeCAtIHBvcyA9PT0gdGhpcy5taWRkbGVJZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aGlzLmxvb3BFbmRJZGRsZVRpbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRleHQocG9zLCBkaXIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9vcEhpZGUocG9zIC0gMSksIHRoaXMubG9vcEludGVydmFsLmhpZGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGxvb3BTaG93ID0gKHBvcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pZGRsZUlkeCAtIHBvcyA+IHRoaXMubWlkZGxlSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYWxmd2F5Q2FsbGJhY2sgJiYgdHlwZW9mIGhhbGZ3YXlDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFsZndheUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9vcEhpZGUodGhpcy5taWRkbGVJZHgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RleHQocG9zLCBkaXIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9vcFNob3cocG9zIC0gMSksIHRoaXMubG9vcEludGVydmFsLnNob3cpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvb3BTaG93KHRoaXMubWlkZGxlSWR4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhpZGUoeyBkaXIgPSAnYm90aCcsIGhhbGZ3YXlDYWxsYmFjayA9IG51bGwgfSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb29wSGlkZSA9IChwb3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taWRkbGVJZHggLSBwb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGhpcy5sb29wRW5kSWRkbGVUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUZXh0KHBvcywgZGlyKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb3BIaWRlKHBvcyArIDEpLCB0aGlzLmxvb3BJbnRlcnZhbC5oaWRlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBsb29wU2hvdyA9IChwb3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taWRkbGVJZHggLSBwb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYWxmd2F5Q2FsbGJhY2sgJiYgdHlwZW9mIGhhbGZ3YXlDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFsZndheUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9vcEhpZGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGV4dChwb3MsIGRpcik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29wU2hvdyhwb3MgKyAxKSwgdGhpcy5sb29wSW50ZXJ2YWwuc2hvdyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbG9vcFNob3coMSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBIaWRlcyBvbmUgKGRpciA9ICd1cCcgb3IgZGlyID0gJ2Rvd24nKSBvciBtb3JlIHRleHRzLCBzcGVjaWZpY2FsbHkgdGhlIGVxdWFsbHkgZGlzdGFudCB0ZXh0cyBmcm9tIG1haW4gdGV4dCAoZGlyID0gJ2JvdGgnKVxuICAgIGhpZGVUZXh0KHBvcywgZGlyKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlVGV4dCgnaGlkZScsIHBvcywgZGlyKTtcbiAgICB9XG4gICAgc2hvd1RleHQocG9zLCBkaXIpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUZXh0KCdzaG93JywgcG9zLCBkaXIpO1xuICAgIH1cbiAgICB0b2dnbGVUZXh0KGFjdGlvbiwgcG9zLCBkaXIpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlU3R5bGUgPSB7XG4gICAgICAgICAgICB1cDogXyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ET00udGV4dHNbdGhpcy5taWRkbGVJZHggLSBwb3NdLnN0eWxlLm9wYWNpdHkgPSBhY3Rpb24gPT09ICdzaG93JyA/IDEgOiAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd246IF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuRE9NLnRleHRzW3RoaXMubWlkZGxlSWR4ICsgcG9zXS5zdHlsZS5vcGFjaXR5ID0gYWN0aW9uID09PSAnc2hvdycgPyAxIDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICAgICBjaGFuZ2VTdHlsZVsndXAnXSgpO1xuICAgICAgICAgICAgY2hhbmdlU3R5bGVbJ2Rvd24nXSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlU3R5bGVbZGlyXSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTbGlkZSB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5ET00gPSB7IGVsOiBlbCB9O1xuICAgICAgICB0aGlzLkRPTS5pbWcgPSB7XG4gICAgICAgICAgICB3cmFwOiB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9faW1nJyksXG4gICAgICAgICAgICBpbm5lcjogdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX2ltZy1pbm5lcicpXG4gICAgICAgIH07XG4gICAgICAgIC8vIFRoZSB0ZXh0IGVmZmVjdCBjbGFzcy5cbiAgICAgICAgdGhpcy50ZXh0RlggPSBuZXcgVGV4dEZYKHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X190ZXh0LXdyYXAnKSk7XG4gICAgfVxuICAgIC8vIEhpZGUgdGhlIFNsaWRlJ3MgaW1hZ2VcbiAgICBoaWRlSW1hZ2UoZGlyKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlSW1hZ2UoJ2hpZGUnLCBkaXIpO1xuICAgIH1cbiAgICAvLyBTaG93IHRoZSBTbGlkZSdzIGltYWdlXG4gICAgc2hvd0ltYWdlKGRpcikge1xuICAgICAgICB0aGlzLnRvZ2dsZUltYWdlKCdzaG93JywgZGlyKTtcbiAgICB9XG4gICAgdG9nZ2xlSW1hZ2UoYWN0aW9uLCBkaXIpIHtcbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpLmFkZCgnYmVnaW4nKVxuICAgICAgICAgICAgLnRvKHRoaXMuRE9NLmltZy53cmFwLCBhY3Rpb24gPT09ICdoaWRlJyA/IDAuMyA6IDAuNywge1xuICAgICAgICAgICAgICAgIGVhc2U6IGFjdGlvbiA9PT0gJ2hpZGUnID8gUXVpbnQuZWFzZU91dCA6IFF1aW50LmVhc2VPdXQsXG4gICAgICAgICAgICAgICAgc3RhcnRBdDogYWN0aW9uID09PSAnaGlkZScgPyB7fSA6IHsgeDogZGlyID09PSAnbmV4dCcgPyAnMTEwJScgOiAnLTExMCUnLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICAgICAgeDogYWN0aW9uID09PSAnaGlkZScgPyBkaXIgPT09ICduZXh0JyA/ICctMTEwJScgOiAnMTEwJScgOiAnMCUnXG4gICAgICAgICAgICB9LCAnYmVnaW4nKVxuICAgICAgICAgICAgLnRvKHRoaXMuRE9NLmltZy5pbm5lciwgYWN0aW9uID09PSAnaGlkZScgPyAwLjMgOiAwLjcsIHtcbiAgICAgICAgICAgICAgICBlYXNlOiBhY3Rpb24gPT09ICdoaWRlJyA/IFF1aW50LmVhc2VPdXQgOiBRdWludC5lYXNlT3V0LFxuICAgICAgICAgICAgICAgIHN0YXJ0QXQ6IGFjdGlvbiA9PT0gJ2hpZGUnID8ge30gOiB7IHg6IGRpciA9PT0gJ25leHQnID8gJy0xMDAlJyA6ICcxMDAlJyB9LFxuICAgICAgICAgICAgICAgIHg6IGFjdGlvbiA9PT0gJ2hpZGUnID8gZGlyID09PSAnbmV4dCcgPyAnMTAwJScgOiAnLTEwMCUnIDogJzAlJ1xuICAgICAgICAgICAgfSwgJ2JlZ2luJyk7XG4gICAgfVxufVxuXG5jbGFzcyBTbGlkZXNob3cge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuRE9NID0geyBlbDogZWwgfTtcbiAgICAgICAgLy8gTmF2aWdhdGlvbiBjb250cm9sc1xuICAgICAgICB0aGlzLkRPTS5uYXYgPSB7XG4gICAgICAgICAgICBwcmV2OiB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fbmF2LWJ1dHRvbi0tcHJldicpLFxuICAgICAgICAgICAgbmV4dDogdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX25hdi1idXR0b24tLW5leHQnKVxuICAgICAgICB9O1xuICAgICAgICAvLyBBbGwgc2xpZGVzXG4gICAgICAgIHRoaXMuc2xpZGVzID0gW107XG4gICAgICAgIFsuLi50aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudF9fc2xpZGUnKV0uZm9yRWFjaChzbGlkZSA9PiB0aGlzLnNsaWRlcy5wdXNoKG5ldyBTbGlkZShzbGlkZSkpKTtcbiAgICAgICAgLy8gVG90YWwgbnVtYmVyIG9mIHNsaWRlc1xuICAgICAgICB0aGlzLnNsaWRlc1RvdGFsID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgICAgICAvLyBDdXJyZW50IHNsaWRlIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIC8vIFNob3cgdGhlIGZpcnN0IG9uZVxuICAgICAgICB0aGlzLnNsaWRlc1t0aGlzLmN1cnJlbnRdLkRPTS5lbC5jbGFzc0xpc3QuYWRkKCdjb250ZW50X19zbGlkZS0tY3VycmVudCcpO1xuICAgICAgICAvLyBJbml0aWFsaXplIHNvbWUgZXZlbnRzXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cbiAgICBpbml0RXZlbnRzKCkge1xuICAgICAgICAvLyBDbGlja2luZyBuZXh0IGFuZCBwcmV2aW91cyBjb250cm9scy5cbiAgICAgICAgdGhpcy5vbkNsaWNrUHJldkZuID0gXyA9PiB0aGlzLm5hdmlnYXRlKCdwcmV2Jyk7XG4gICAgICAgIHRoaXMub25DbGlja05leHRGbiA9IF8gPT4gdGhpcy5uYXZpZ2F0ZSgnbmV4dCcpO1xuICAgICAgICB0aGlzLkRPTS5uYXYucHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja1ByZXZGbik7XG4gICAgICAgIHRoaXMuRE9NLm5hdi5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrTmV4dEZuKTtcbiAgICB9XG4gICAgbmF2aWdhdGUoZGlyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIC8vIEN1cnJlbnQgc2xpZGVcbiAgICAgICAgY29uc3QgY3VycmVudFNsaWRlID0gdGhpcy5zbGlkZXNbdGhpcy5jdXJyZW50XTtcblxuICAgICAgICAvLyBVcGRhdGUgY3VycmVudFxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBkaXIgPT09ICduZXh0JyA/XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPCB0aGlzLnNsaWRlc1RvdGFsIC0gMSA/IHRoaXMuY3VycmVudCArIDEgOiAwIDpcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA+IDAgPyB0aGlzLmN1cnJlbnQgLSAxIDogdGhpcy5zbGlkZXNUb3RhbCAtIDE7XG5cbiAgICAgICAgLy8gVXBjb21pbmcgc2xpZGVcbiAgICAgICAgY29uc3QgdXBjb21pbmdTbGlkZSA9IHRoaXMuc2xpZGVzW3RoaXMuY3VycmVudF07XG5cbiAgICAgICAgY29uc3Qgb25DdXJyZW50SGFsZndheUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gSGlkZSB0aGUgY3VycmVudCBzbGlkZSdzIGltYWdlXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUuaGlkZUltYWdlKGRpcik7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIHVwY29taW5nIHNsaWRlJ3MgbWFpbiB0ZXh0IG9wYWNpdHkgdG8gMS5cbiAgICAgICAgICAgIHVwY29taW5nU2xpZGUudGV4dEZYLkRPTS50ZXh0c1t1cGNvbWluZ1NsaWRlLnRleHRGWC5taWRkbGVJZHhdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgLy8gQWRkIGN1cnJlbnQgY2xhc3MgdG8gdGhlIHVwY29taW5nIHNsaWRlIChvcGFjaXR5ID0gMSlcbiAgICAgICAgICAgIHVwY29taW5nU2xpZGUuRE9NLmVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX3NsaWRlLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSB1cGNvbWluZyBzbGlkZSdzIGltYWdlXG4gICAgICAgICAgICB1cGNvbWluZ1NsaWRlLnNob3dJbWFnZShkaXIpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvbkN1cnJlbnRFbmRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgY3VycmVudCBjbGFzcyBmcm9tIHRoZSBjdXJyZW50IHNsaWRlLlxuICAgICAgICAgICAgY3VycmVudFNsaWRlLkRPTS5lbC5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X19zbGlkZS0tY3VycmVudCcpO1xuICAgICAgICAgICAgdXBjb21pbmdTbGlkZS50ZXh0Rlguc2hvdygpLnRoZW4oKCkgPT4gdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSGlkZSB0aGUgY3VycmVudCBzbGlkZSdzIHRleHQsIFxuICAgICAgICAvLyBhbmQgY2FsbCBvbkN1cnJlbnRIYWxmd2F5Q2FsbGJhY2sgYXQgaGFsZiBvZiB0aGUgYW5pbWF0aW9uXG4gICAgICAgIC8vIEluIHRoZSBlbmQgY2FsbCBvbkN1cnJlbnRFbmRDYWxsYmFja1xuICAgICAgICBjdXJyZW50U2xpZGUudGV4dEZYLmhpZGUoeyBoYWxmd2F5Q2FsbGJhY2s6IG9uQ3VycmVudEhhbGZ3YXlDYWxsYmFjayB9KS50aGVuKG9uQ3VycmVudEVuZENhbGxiYWNrKTtcbiAgICB9XG59Il19 */\n/*@ sourceURL=/Users/wduntak/Projects/cms-datocms-app/components/hero-intro.js */"));
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

/***/ "./components/intro-section.js":
/*!*************************************!*\
  !*** ./components/intro-section.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntroSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/intro-section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class IntroSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "flex flex-col justify-center text-center mb-24",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("h5", {
      className: "text-sm font-bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 15
      }
    }, "HI, WE'RE REEMUU. \uD83D\uDC4B")), __jsx("div", {
      className: "max-w-3xl text-3xl",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }
    }, "We're a design and tech company that speaks all the jargon. But luckily, we speak human too.", " ", __jsx("em", {
      className: "font-serif",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, "We design, we write code, and we love the business side of it all."), " ", "We are hired to ", __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 33
      }
    }, "work on new problems together"), ", instead of telling people what they want to hear.")));
  }

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
    className: "absolute flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 md:mt-8 z-50 w-full",
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_easings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/easings */ "./lib/easings.js");
var _jsxFileName = "/Users/wduntak/Projects/cms-datocms-app/components/navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "animateOverlay", () => {
      if (this.overlay.isAnimating) {
        return false;
      }

      this.overlay.toggle();

      if (this.overlay.isOpened === true) {
        this.elmHamburger.classList.add("is-opened-navi");

        for (var i = 0; i < this.gNavItems.length; i++) {
          this.gNavItems[i].classList.add("is-opened");
        }
      } else {
        this.elmHamburger.classList.remove("is-opened-navi");

        for (var i = 0; i < this.gNavItems.length; i++) {
          this.gNavItems[i].classList.remove("is-opened");
        }
      }
    });

    this.elmHamburger = [];
    this.gNavItems = [];
    this.elmOverlay = [];
    this.overlay = {};
  }

  componentDidMount() {
    this.elmHamburger = document.querySelector(".hamburger");
    this.gNavItems = document.querySelectorAll(".global-menu__item");
    this.elmOverlay = document.querySelector(".shape-overlays");
    this.overlay = new ShapeOverlays(this.elmOverlay);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "hamburger hamburger--demo-6 js-hover",
      onClick: this.animateOverlay,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "hamburger__line hamburger__line--01",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--01 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "hamburger__line hamburger__line--02",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--02 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "hamburger__line hamburger__line--03",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--03 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "hamburger__line hamburger__line--cross01",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "hamburger__line hamburger__line--cross02",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: "global-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "global-menu__wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, "Home")), __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, "Projects"), __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, "Working Together"), __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "About"), __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, "Blog"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "global-menu__item global-menu__item--demo-6",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, "Contact")))), __jsx("svg", {
      className: "shape-overlays",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("defs", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
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
        lineNumber: 103,
        columnNumber: 17
      }
    }, __jsx("stop", {
      offset: "0%",
      stopColor: "#00c99b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 19
      }
    }), __jsx("stop", {
      offset: "100%",
      stopColor: "#ff0ea1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
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
        lineNumber: 113,
        columnNumber: 17
      }
    }, __jsx("stop", {
      offset: "0%",
      stopColor: "#ffd392",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }), __jsx("stop", {
      offset: "100%",
      stopColor: "#ff3898",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
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
        lineNumber: 123,
        columnNumber: 17
      }
    }, __jsx("stop", {
      offset: "0%",
      stopColor: "#110046",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }), __jsx("stop", {
      offset: "100%",
      stopColor: "#32004a",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 19
      }
    }))), __jsx("path", {
      className: "shape-overlays__path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }), __jsx("path", {
      className: "shape-overlays__path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }), __jsx("path", {
      className: "shape-overlays__path",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 15
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
      points[i] = (1 - _lib_easings__WEBPACK_IMPORTED_MODULE_2__["ease"].cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100;
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
/* harmony import */ var _components_intro_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/intro-section */ "./components/intro-section.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
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
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Reemuu Designs by ", _lib_constants__WEBPACK_IMPORTED_MODULE_10__["CMS_NAME"])), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_components_intro__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(_components_hero_intro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_components_intro_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 26,
      columnNumber: 13
    }
  }), morePosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: morePosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 36
    }
  }))));
}
async function getStaticProps({
  preview = false
}) {
  const allPosts = (await Object(_lib_api__WEBPACK_IMPORTED_MODULE_9__["getAllPostsForHome"])(preview)) || [];
  return {
    props: {
      allPosts
    }
  };
}

/***/ }),

/***/ 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY292ZXItaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVyby1pbnRyby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlcm8tcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ludHJvLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnRyby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb3JlLXN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC1wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZWFzaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdzYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0b2Ntc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkFsZXJ0IiwicHJldmlldyIsImNuIiwiQXZhdGFyIiwibmFtZSIsInBpY3R1cmUiLCJ1cmwiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsIkNvdmVySW1hZ2UiLCJ0aXRsZSIsInJlc3BvbnNpdmVJbWFnZSIsInNsdWciLCJpbWFnZSIsImFsdCIsIkRhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInBhcnNlSVNPIiwiZm9ybWF0IiwiRm9vdGVyIiwiRVhBTVBMRV9QQVRIIiwiSGVyb0ludHJvIiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJTbGlkZXNob3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiLCJUZXh0RlgiLCJjb25zdHJ1Y3RvciIsImVsIiwiRE9NIiwidGV4dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGV4dHNUb3RhbCIsImxlbmd0aCIsIm1pZGRsZUlkeCIsIk1hdGgiLCJmbG9vciIsImxvb3BJbnRlcnZhbCIsInNob3ciLCJoaWRlIiwibG9vcEVuZElkZGxlVGltZSIsImRpciIsImhhbGZ3YXlDYWxsYmFjayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9vcEhpZGUiLCJwb3MiLCJzZXRUaW1lb3V0IiwiaGlkZVRleHQiLCJsb29wU2hvdyIsInNob3dUZXh0IiwidG9nZ2xlVGV4dCIsImFjdGlvbiIsImNoYW5nZVN0eWxlIiwidXAiLCJfIiwic3R5bGUiLCJvcGFjaXR5IiwiZG93biIsIlNsaWRlIiwiaW1nIiwid3JhcCIsImlubmVyIiwidGV4dEZYIiwiaGlkZUltYWdlIiwidG9nZ2xlSW1hZ2UiLCJzaG93SW1hZ2UiLCJUaW1lbGluZUxpdGUiLCJhZGQiLCJ0byIsImVhc2UiLCJRdWludCIsImVhc2VPdXQiLCJzdGFydEF0IiwieCIsIm5hdiIsInByZXYiLCJuZXh0Iiwic2xpZGVzIiwiZm9yRWFjaCIsInNsaWRlIiwicHVzaCIsInNsaWRlc1RvdGFsIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImluaXRFdmVudHMiLCJvbkNsaWNrUHJldkZuIiwibmF2aWdhdGUiLCJvbkNsaWNrTmV4dEZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzQW5pbWF0aW5nIiwiY3VycmVudFNsaWRlIiwidXBjb21pbmdTbGlkZSIsIm9uQ3VycmVudEhhbGZ3YXlDYWxsYmFjayIsIm9uQ3VycmVudEVuZENhbGxiYWNrIiwicmVtb3ZlIiwidGhlbiIsIkhlcm9Qb3N0IiwiY292ZXJJbWFnZSIsImV4Y2VycHQiLCJhdXRob3IiLCJJbnRyb1NlY3Rpb24iLCJJbnRybyIsIkxheW91dCIsIk1ldGEiLCJDTVNfTkFNRSIsIkhPTUVfT0dfSU1BR0VfVVJMIiwiTW9yZVN0b3JpZXMiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJOYXZpZ2F0aW9uIiwicHJvcHMiLCJvdmVybGF5IiwidG9nZ2xlIiwiaXNPcGVuZWQiLCJlbG1IYW1idXJnZXIiLCJpIiwiZ05hdkl0ZW1zIiwiZWxtT3ZlcmxheSIsIlNoYXBlT3ZlcmxheXMiLCJhbmltYXRlT3ZlcmxheSIsImVsbSIsInBhdGgiLCJudW1Qb2ludHMiLCJkdXJhdGlvbiIsImRlbGF5UG9pbnRzQXJyYXkiLCJkZWxheVBvaW50c01heCIsImRlbGF5UGVyUGF0aCIsInRpbWVTdGFydCIsIm5vdyIsInJhbmRvbSIsIm9wZW4iLCJjbG9zZSIsInJlbmRlckxvb3AiLCJ1cGRhdGVQYXRoIiwidGltZSIsInBvaW50cyIsImN1YmljSW5PdXQiLCJtaW4iLCJtYXgiLCJzdHIiLCJwIiwiY3AiLCJzZXRBdHRyaWJ1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJQb3N0UHJldmlldyIsIkFQSV9VUkwiLCJBUElfVE9LRU4iLCJwcm9jZXNzIiwicmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQiLCJmZXRjaEFQSSIsInF1ZXJ5IiwidmFyaWFibGVzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImVycm9ycyIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZGF0YSIsImdldFByZXZpZXdQb3N0QnlTbHVnIiwiZ2V0QWxsUG9zdHNXaXRoU2x1ZyIsImFsbFBvc3RzIiwiZ2V0QWxsUG9zdHNGb3JIb21lIiwiZ2V0UG9zdEFuZE1vcmVQb3N0cyIsIkNNU19VUkwiLCJleHBvbmVudGlhbEluIiwidCIsInBvdyIsImV4cG9uZW50aWFsT3V0IiwiZXhwb25lbnRpYWxJbk91dCIsInNpbmVPdXQiLCJIQUxGX1BJIiwic2luIiwiY2lyY3VsYXJJbk91dCIsInNxcnQiLCJjdWJpY0luIiwiY3ViaWNPdXQiLCJmIiwicXVhZHJhdGljT3V0IiwicXVhcnRpY091dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZSIsInNldCIsImVyciIsIkxpbmsiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJvayIsInN0YXR1cyIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwiX2FzIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiSW5kZXgiLCJoZXJvUG9zdCIsIm1vcmVQb3N0cyIsImdldFN0YXRpY1Byb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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RSxTQUFLLEVBQUVBLFFBQVEsQ0FBQzdlLEtBRGxCO0FBRUUsY0FBVSxFQUFFNmUsUUFBUSxDQUFDalosVUFGdkI7QUFHRSxRQUFJLEVBQUVpWixRQUFRLENBQUN0ZSxJQUhqQjtBQUlFLFVBQU0sRUFBRXNlLFFBQVEsQ0FBQy9ZLE1BSm5CO0FBS0UsUUFBSSxFQUFFK1ksUUFBUSxDQUFDM2UsSUFMakI7QUFNRSxXQUFPLEVBQUUyZSxRQUFRLENBQUNoWixPQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFjR2laLFNBQVMsQ0FBQ3BkLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsTUFBQyxnRUFBRDtBQUFhLFNBQUssRUFBRW9kLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkM0IsQ0FKRixDQURGLENBREY7QUF5QkQ7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUV4ZixTQUFPLEdBQUc7QUFBWixDQUE5QixFQUFtRDtBQUN4RCxRQUFNNkssUUFBUSxHQUFHLENBQUMsTUFBTUMsbUVBQWtCLENBQUM5SyxPQUFELENBQXpCLEtBQXVDLEVBQXhEO0FBQ0EsU0FBTztBQUNMbUgsU0FBSyxFQUFFO0FBQUUwRDtBQUFGO0FBREYsR0FBUDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNELHVDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBFWEFNUExFX1BBVEggfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCh7IHByZXZpZXcgfSkge1xuICBpZiAocHJldmlldykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXCJib3JkZXItYlwiLCB7XG4gICAgICAgICAgXCJiZy1hY2NlbnQtNyBib3JkZXItYWNjZW50LTcgdGV4dC13aGl0ZVwiOiBwcmV2aWV3LFxuICAgICAgICAgIFwiYmctYWNjZW50LTEgYm9yZGVyLWFjY2VudC0yXCI6ICFwcmV2aWV3XG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgVGhpcyBpcyBwYWdlIGlzIGEgcHJldmlldy57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXBpL2V4aXQtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1jeWFuIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xpY2sgaGVyZVxuICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgdG8gZXhpdCBwcmV2aWV3IG1vZGUuXG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDw+PC8+XG4gIH1cbiAgLy8gcmV0dXJuIChcbiAgLy8gICA8ZGl2XG4gIC8vICAgICBjbGFzc05hbWU9e2NuKCdib3JkZXItYicsIHtcbiAgLy8gICAgICAgJ2JnLWFjY2VudC03IGJvcmRlci1hY2NlbnQtNyB0ZXh0LXdoaXRlJzogcHJldmlldyxcbiAgLy8gICAgICAgJ2JnLWFjY2VudC0xIGJvcmRlci1hY2NlbnQtMic6ICFwcmV2aWV3LFxuICAvLyAgICAgfSl9XG4gIC8vICAgPlxuICAvLyAgICAgPENvbnRhaW5lcj5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHRleHQtY2VudGVyIHRleHQtc21cIj5cbiAgLy8gICAgICAgICB7cHJldmlldyA/IChcbiAgLy8gICAgICAgICAgIDw+XG4gIC8vICAgICAgICAgICAgIFRoaXMgaXMgcGFnZSBpcyBhIHByZXZpZXcueycgJ31cbiAgLy8gICAgICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgICAgICBocmVmPVwiL2FwaS9leGl0LXByZXZpZXdcIlxuICAvLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSBob3Zlcjp0ZXh0LWN5YW4gZHVyYXRpb24tMjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgLy8gICAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICAgIENsaWNrIGhlcmVcbiAgLy8gICAgICAgICAgICAgPC9hPnsnICd9XG4gIC8vICAgICAgICAgICAgIHRvIGV4aXQgcHJldmlldyBtb2RlLlxuICAvLyAgICAgICAgICAgPC8+XG4gIC8vICAgICAgICAgKSA6IChcbiAgLy8gICAgICAgICAgIDw+XG4gIC8vICAgICAgICAgICAgIFRoZSBzb3VyY2UgY29kZSBmb3IgdGhpcyBibG9nIGlzeycgJ31cbiAgLy8gICAgICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy8ke0VYQU1QTEVfUEFUSH1gfVxuICAvLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSBob3Zlcjp0ZXh0LXN1Y2Nlc3MgZHVyYXRpb24tMjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgLy8gICAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICAgIGF2YWlsYWJsZSBvbiBHaXRIdWJcbiAgLy8gICAgICAgICAgICAgPC9hPlxuICAvLyAgICAgICAgICAgICAuXG4gIC8vICAgICAgICAgICA8Lz5cbiAgLy8gICAgICAgICApfVxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIDwvQ29udGFpbmVyPlxuICAvLyAgIDwvZGl2PlxuICAvLyApXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdmF0YXIoeyBuYW1lLCBwaWN0dXJlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17cGljdHVyZS51cmx9XG4gICAgICAgIGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgbXItNFwiXG4gICAgICAgIGFsdD17bmFtZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e25hbWV9PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNSByZWxhdGl2ZVwiPntjaGlsZHJlbn08L2Rpdj5cbn1cbiIsImltcG9ydCB7IEltYWdlIH0gZnJvbSAncmVhY3QtZGF0b2NtcydcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3ZlckltYWdlKHsgdGl0bGUsIHJlc3BvbnNpdmVJbWFnZSwgc2x1ZyB9KSB7XG4gIGNvbnN0IGltYWdlID0gKFxuICAgIDxJbWFnZVxuICAgICAgZGF0YT17e1xuICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2UsXG4gICAgICAgIGFsdDogYENvdmVyIEltYWdlIGZvciAke3RpdGxlfWAsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtjbignc2hhZG93LXNtYWxsJywge1xuICAgICAgICAnaG92ZXI6c2hhZG93LW1lZGl1bSB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0yMDAnOiBzbHVnLFxuICAgICAgfSl9XG4gICAgLz5cbiAgKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiLW14LTUgc206bXgtMFwiPlxuICAgICAge3NsdWcgPyAoXG4gICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgIDxhIGFyaWEtbGFiZWw9e3RpdGxlfT57aW1hZ2V9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogKFxuICAgICAgICBpbWFnZVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9KSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ0xMTExcdGQsIHl5eXknKX08L3RpbWU+XG59XG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJ1xuaW1wb3J0IHsgRVhBTVBMRV9QQVRIIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwiYmctYWNjZW50LTEgYm9yZGVyLXQgYm9yZGVyLWFjY2VudC0yXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTI4IGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHQgdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0IG1iLTEwIGxnOm1iLTAgbGc6cHItNCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgU3RhdGljYWxseSBHZW5lcmF0ZWQgd2l0aCBOZXh0LmpzLlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsZzpwbC00IGxnOnctMS8yXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvcGFnZXNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0zIGJnLWJsYWNrIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgYm9yZGVyIGJvcmRlci1ibGFjayB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0zIHB4LTEyIGxnOnB4LTggZHVyYXRpb24tMjAwIHRyYW5zaXRpb24tY29sb3JzIG1iLTYgbGc6bWItMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlYWQgRG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvJHtFWEFNUExFX1BBVEh9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMyBmb250LWJvbGQgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBvbiBHaXRIdWJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaW1lbGluZUxpdGUsIFF1aW50IH0gZnJvbSAnZ3NhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb0ludHJvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbmV3IFNsaWRlc2hvdyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWcgZmlyc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2ltZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzaWduXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5EZXNpZ248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzaWduXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5EZXNpZ248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzaWduXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlIGNvbnRlbnRfX3RleHQtaW5uZXItLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkRlc2lnbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NsaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW1nIHNlY29uZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW1nLWlubmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5PcHRpbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+T3B0aW1pemU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPk9wdGltaXplPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6ZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+T3B0aW1pemU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgT3B0aW1pemVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2UgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXplXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5PcHRpbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NsaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW1nIHRoaXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbWctaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2luZVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyXCI+SW1hZ2luZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dCBjb250ZW50X190ZXh0LS1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnaW5lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkltYWdpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQgY29udGVudF9fdGV4dC0tZnVsbCBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5JbWFnaW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0LWlubmVyIGNvbnRlbnRfX3RleHQtaW5uZXItLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnaW5lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXJcIj5JbWFnaW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50X190ZXh0IGNvbnRlbnRfX3RleHQtLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRfX3RleHQtaW5uZXIgY29udGVudF9fdGV4dC1pbm5lci0tc3Ryb2tlXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lciBjb250ZW50X190ZXh0LWlubmVyLS1zdHJva2UgY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdpbmVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudF9fdGV4dC1pbm5lclwiPkltYWdpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250ZW50X19uYXZcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250ZW50X19uYXYtYnV0dG9uIGNvbnRlbnRfX25hdi1idXR0b24tLXByZXZcIj5cbiAgICAgICAgICAgICAgICBQcmV2XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX25hdi1idXR0b24gY29udGVudF9fbmF2LWJ1dHRvbi0tbmV4dFwiPlxuICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1haW5cIjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOXJlbSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX3NsaWRlIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG1haW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW5uZXJcIjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fc2xpZGUtLWN1cnJlbnQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9faW1nLFxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC13cmFwIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGlubmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDByZW0pO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMDBweCAtIDExcmVtKTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19pbWctLWZ1bGw6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy5maXJzdCAuY29udGVudF9faW1nLWlubmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvMTYuanBlZ1wiKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19pbWcuc2Vjb25kIC5jb250ZW50X19pbWctaW5uZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8xNC5qcGVnXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZy50aGlyZCAuY29udGVudF9faW1nLWlubmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvMTUuanBlZ1wiKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19pbWctaW5uZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC13cmFwIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dCB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dDpudGgtY2hpbGQoNikge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC0tZnVsbCB7XG4gICAgICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X190ZXh0LWlubmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2xpZGUtdGV4dCk7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC10cmFpbC13ZWlnaHQpO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LXRyYWlsLWxoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRyYWlsLWZhbWlseSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fdGV4dC1pbm5lci0tYm90dG9tIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC00MCUsIDApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX3RleHQtaW5uZXItLXN0cm9rZSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IHZhcigtLWNvbG9yLXNsaWRlLXRleHQpO1xuICAgICAgICAgICAgICAgIHRleHQtc3Ryb2tlOiAycHggdmFyKC0tY29sb3Itc2xpZGUtdGV4dCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNvbnRlbnRfX25hdiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg5MCUgLSAxcmVtKTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250ZW50X19uYXYtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1uYXYpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudF9fbmF2LWJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnRfX2ltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg5MCUgLSAxMXJlbSk7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50X19pbWctLWZ1bGwge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnRfX3RleHQtaW5uZXIge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXRyYWlsLXNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudF9fbmF2IHtcbiAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNsYXNzIFRleHRGWCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5ET00gPSB7IGVsOiBlbCB9O1xuICAgICAgICAvLyBUaGUgdGV4dHMgKHJlcGVhdGVkKVxuICAgICAgICB0aGlzLkRPTS50ZXh0cyA9IFsuLi50aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudF9fdGV4dCcpXTtcbiAgICAgICAgdGhpcy5ET00udGV4dHNUb3RhbCA9IHRoaXMuRE9NLnRleHRzLmxlbmd0aDtcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBtYWluIHRleHQgZWxlbWVudFxuICAgICAgICB0aGlzLm1pZGRsZUlkeCA9IE1hdGguZmxvb3IodGhpcy5ET00udGV4dHNUb3RhbCAvIDIpO1xuICAgICAgICAvLyBUaW1lIGJldHdlZW4gZWFjaCBzaG93aW5nL2hpZGluZyBvZiBlYWNoIHRleHQgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5sb29wSW50ZXJ2YWwgPSB7IHNob3c6IDgwLCBoaWRlOiA4MCB9O1xuICAgICAgICAvLyBvcHRpb25hbDogRXh0cmEgdGltZSB0byB0aGUgd2hvbGUgc2hvdy9oaWRlIGFuaW1hdGlvbi4gXG4gICAgICAgIHRoaXMubG9vcEVuZElkZGxlVGltZSA9IHRoaXMubG9vcEludGVydmFsLnNob3c7XG4gICAgfVxuICAgIHNob3coeyBkaXIgPSAnYm90aCcsIGhhbGZ3YXlDYWxsYmFjayA9IG51bGwgfSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb29wSGlkZSA9IChwb3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taWRkbGVJZHggLSBwb3MgPT09IHRoaXMubWlkZGxlSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGhpcy5sb29wRW5kSWRkbGVUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVUZXh0KHBvcywgZGlyKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb3BIaWRlKHBvcyAtIDEpLCB0aGlzLmxvb3BJbnRlcnZhbC5oaWRlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBsb29wU2hvdyA9IChwb3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taWRkbGVJZHggLSBwb3MgPiB0aGlzLm1pZGRsZUlkeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFsZndheUNhbGxiYWNrICYmIHR5cGVvZiBoYWxmd2F5Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZ3YXlDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvb3BIaWRlKHRoaXMubWlkZGxlSWR4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUZXh0KHBvcywgZGlyKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb3BTaG93KHBvcyAtIDEpLCB0aGlzLmxvb3BJbnRlcnZhbC5zaG93KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsb29wU2hvdyh0aGlzLm1pZGRsZUlkeCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoaWRlKHsgZGlyID0gJ2JvdGgnLCBoYWxmd2F5Q2FsbGJhY2sgPSBudWxsIH0gPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9vcEhpZGUgPSAocG9zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWlkZGxlSWR4IC0gcG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRoaXMubG9vcEVuZElkZGxlVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVGV4dChwb3MsIGRpcik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29wSGlkZShwb3MgKyAxKSwgdGhpcy5sb29wSW50ZXJ2YWwuaGlkZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbG9vcFNob3cgPSAocG9zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWlkZGxlSWR4IC0gcG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFsZndheUNhbGxiYWNrICYmIHR5cGVvZiBoYWxmd2F5Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZ3YXlDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvb3BIaWRlKDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RleHQocG9zLCBkaXIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9vcFNob3cocG9zICsgMSksIHRoaXMubG9vcEludGVydmFsLnNob3cpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvb3BTaG93KDEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gSGlkZXMgb25lIChkaXIgPSAndXAnIG9yIGRpciA9ICdkb3duJykgb3IgbW9yZSB0ZXh0cywgc3BlY2lmaWNhbGx5IHRoZSBlcXVhbGx5IGRpc3RhbnQgdGV4dHMgZnJvbSBtYWluIHRleHQgKGRpciA9ICdib3RoJylcbiAgICBoaWRlVGV4dChwb3MsIGRpcikge1xuICAgICAgICB0aGlzLnRvZ2dsZVRleHQoJ2hpZGUnLCBwb3MsIGRpcik7XG4gICAgfVxuICAgIHNob3dUZXh0KHBvcywgZGlyKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlVGV4dCgnc2hvdycsIHBvcywgZGlyKTtcbiAgICB9XG4gICAgdG9nZ2xlVGV4dChhY3Rpb24sIHBvcywgZGlyKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZVN0eWxlID0ge1xuICAgICAgICAgICAgdXA6IF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuRE9NLnRleHRzW3RoaXMubWlkZGxlSWR4IC0gcG9zXS5zdHlsZS5vcGFjaXR5ID0gYWN0aW9uID09PSAnc2hvdycgPyAxIDogMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiBfID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkRPTS50ZXh0c1t0aGlzLm1pZGRsZUlkeCArIHBvc10uc3R5bGUub3BhY2l0eSA9IGFjdGlvbiA9PT0gJ3Nob3cnID8gMSA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdib3RoJykge1xuICAgICAgICAgICAgY2hhbmdlU3R5bGVbJ3VwJ10oKTtcbiAgICAgICAgICAgIGNoYW5nZVN0eWxlWydkb3duJ10oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZVN0eWxlW2Rpcl0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU2xpZGUge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuRE9NID0geyBlbDogZWwgfTtcbiAgICAgICAgdGhpcy5ET00uaW1nID0ge1xuICAgICAgICAgICAgd3JhcDogdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX2ltZycpLFxuICAgICAgICAgICAgaW5uZXI6IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19pbWctaW5uZXInKVxuICAgICAgICB9O1xuICAgICAgICAvLyBUaGUgdGV4dCBlZmZlY3QgY2xhc3MuXG4gICAgICAgIHRoaXMudGV4dEZYID0gbmV3IFRleHRGWCh0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fdGV4dC13cmFwJykpO1xuICAgIH1cbiAgICAvLyBIaWRlIHRoZSBTbGlkZSdzIGltYWdlXG4gICAgaGlkZUltYWdlKGRpcikge1xuICAgICAgICB0aGlzLnRvZ2dsZUltYWdlKCdoaWRlJywgZGlyKTtcbiAgICB9XG4gICAgLy8gU2hvdyB0aGUgU2xpZGUncyBpbWFnZVxuICAgIHNob3dJbWFnZShkaXIpIHtcbiAgICAgICAgdGhpcy50b2dnbGVJbWFnZSgnc2hvdycsIGRpcik7XG4gICAgfVxuICAgIHRvZ2dsZUltYWdlKGFjdGlvbiwgZGlyKSB7XG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKS5hZGQoJ2JlZ2luJylcbiAgICAgICAgICAgIC50byh0aGlzLkRPTS5pbWcud3JhcCwgYWN0aW9uID09PSAnaGlkZScgPyAwLjMgOiAwLjcsIHtcbiAgICAgICAgICAgICAgICBlYXNlOiBhY3Rpb24gPT09ICdoaWRlJyA/IFF1aW50LmVhc2VPdXQgOiBRdWludC5lYXNlT3V0LFxuICAgICAgICAgICAgICAgIHN0YXJ0QXQ6IGFjdGlvbiA9PT0gJ2hpZGUnID8ge30gOiB7IHg6IGRpciA9PT0gJ25leHQnID8gJzExMCUnIDogJy0xMTAlJywgb3BhY2l0eTogMSB9LFxuICAgICAgICAgICAgICAgIHg6IGFjdGlvbiA9PT0gJ2hpZGUnID8gZGlyID09PSAnbmV4dCcgPyAnLTExMCUnIDogJzExMCUnIDogJzAlJ1xuICAgICAgICAgICAgfSwgJ2JlZ2luJylcbiAgICAgICAgICAgIC50byh0aGlzLkRPTS5pbWcuaW5uZXIsIGFjdGlvbiA9PT0gJ2hpZGUnID8gMC4zIDogMC43LCB7XG4gICAgICAgICAgICAgICAgZWFzZTogYWN0aW9uID09PSAnaGlkZScgPyBRdWludC5lYXNlT3V0IDogUXVpbnQuZWFzZU91dCxcbiAgICAgICAgICAgICAgICBzdGFydEF0OiBhY3Rpb24gPT09ICdoaWRlJyA/IHt9IDogeyB4OiBkaXIgPT09ICduZXh0JyA/ICctMTAwJScgOiAnMTAwJScgfSxcbiAgICAgICAgICAgICAgICB4OiBhY3Rpb24gPT09ICdoaWRlJyA/IGRpciA9PT0gJ25leHQnID8gJzEwMCUnIDogJy0xMDAlJyA6ICcwJSdcbiAgICAgICAgICAgIH0sICdiZWdpbicpO1xuICAgIH1cbn1cblxuY2xhc3MgU2xpZGVzaG93IHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICB0aGlzLkRPTSA9IHsgZWw6IGVsIH07XG4gICAgICAgIC8vIE5hdmlnYXRpb24gY29udHJvbHNcbiAgICAgICAgdGhpcy5ET00ubmF2ID0ge1xuICAgICAgICAgICAgcHJldjogdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX25hdi1idXR0b24tLXByZXYnKSxcbiAgICAgICAgICAgIG5leHQ6IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19uYXYtYnV0dG9uLS1uZXh0JylcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQWxsIHNsaWRlc1xuICAgICAgICB0aGlzLnNsaWRlcyA9IFtdO1xuICAgICAgICBbLi4udGhpcy5ET00uZWwucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnRfX3NsaWRlJyldLmZvckVhY2goc2xpZGUgPT4gdGhpcy5zbGlkZXMucHVzaChuZXcgU2xpZGUoc2xpZGUpKSk7XG4gICAgICAgIC8vIFRvdGFsIG51bWJlciBvZiBzbGlkZXNcbiAgICAgICAgdGhpcy5zbGlkZXNUb3RhbCA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgLy8gQ3VycmVudCBzbGlkZSBwb3NpdGlvblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgICAvLyBTaG93IHRoZSBmaXJzdCBvbmVcbiAgICAgICAgdGhpcy5zbGlkZXNbdGhpcy5jdXJyZW50XS5ET00uZWwuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fc2xpZGUtLWN1cnJlbnQnKTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzb21lIGV2ZW50c1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG4gICAgaW5pdEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xpY2tpbmcgbmV4dCBhbmQgcHJldmlvdXMgY29udHJvbHMuXG4gICAgICAgIHRoaXMub25DbGlja1ByZXZGbiA9IF8gPT4gdGhpcy5uYXZpZ2F0ZSgncHJldicpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tOZXh0Rm4gPSBfID0+IHRoaXMubmF2aWdhdGUoJ25leHQnKTtcbiAgICAgICAgdGhpcy5ET00ubmF2LnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tQcmV2Rm4pO1xuICAgICAgICB0aGlzLkRPTS5uYXYubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja05leHRGbik7XG4gICAgfVxuICAgIG5hdmlnYXRlKGRpcikge1xuICAgICAgICBpZiAodGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAvLyBDdXJyZW50IHNsaWRlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRoaXMuc2xpZGVzW3RoaXMuY3VycmVudF07XG5cbiAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnRcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZGlyID09PSAnbmV4dCcgP1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50IDwgdGhpcy5zbGlkZXNUb3RhbCAtIDEgPyB0aGlzLmN1cnJlbnQgKyAxIDogMCA6XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPiAwID8gdGhpcy5jdXJyZW50IC0gMSA6IHRoaXMuc2xpZGVzVG90YWwgLSAxO1xuXG4gICAgICAgIC8vIFVwY29taW5nIHNsaWRlXG4gICAgICAgIGNvbnN0IHVwY29taW5nU2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLmN1cnJlbnRdO1xuXG4gICAgICAgIGNvbnN0IG9uQ3VycmVudEhhbGZ3YXlDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIEhpZGUgdGhlIGN1cnJlbnQgc2xpZGUncyBpbWFnZVxuICAgICAgICAgICAgY3VycmVudFNsaWRlLmhpZGVJbWFnZShkaXIpO1xuICAgICAgICAgICAgLy8gU2V0IHRoZSB1cGNvbWluZyBzbGlkZSdzIG1haW4gdGV4dCBvcGFjaXR5IHRvIDEuXG4gICAgICAgICAgICB1cGNvbWluZ1NsaWRlLnRleHRGWC5ET00udGV4dHNbdXBjb21pbmdTbGlkZS50ZXh0RlgubWlkZGxlSWR4XS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIC8vIEFkZCBjdXJyZW50IGNsYXNzIHRvIHRoZSB1cGNvbWluZyBzbGlkZSAob3BhY2l0eSA9IDEpXG4gICAgICAgICAgICB1cGNvbWluZ1NsaWRlLkRPTS5lbC5jbGFzc0xpc3QuYWRkKCdjb250ZW50X19zbGlkZS0tY3VycmVudCcpO1xuICAgICAgICAgICAgLy8gU2hvdyB0aGUgdXBjb21pbmcgc2xpZGUncyBpbWFnZVxuICAgICAgICAgICAgdXBjb21pbmdTbGlkZS5zaG93SW1hZ2UoZGlyKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25DdXJyZW50RW5kQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGN1cnJlbnQgY2xhc3MgZnJvbSB0aGUgY3VycmVudCBzbGlkZS5cbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5ET00uZWwuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF9fc2xpZGUtLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIHVwY29taW5nU2xpZGUudGV4dEZYLnNob3coKS50aGVuKCgpID0+IHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEhpZGUgdGhlIGN1cnJlbnQgc2xpZGUncyB0ZXh0LCBcbiAgICAgICAgLy8gYW5kIGNhbGwgb25DdXJyZW50SGFsZndheUNhbGxiYWNrIGF0IGhhbGYgb2YgdGhlIGFuaW1hdGlvblxuICAgICAgICAvLyBJbiB0aGUgZW5kIGNhbGwgb25DdXJyZW50RW5kQ2FsbGJhY2tcbiAgICAgICAgY3VycmVudFNsaWRlLnRleHRGWC5oaWRlKHsgaGFsZndheUNhbGxiYWNrOiBvbkN1cnJlbnRIYWxmd2F5Q2FsbGJhY2sgfSkudGhlbihvbkN1cnJlbnRFbmRDYWxsYmFjayk7XG4gICAgfVxufSIsImltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9hdmF0YXInXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL2NvdmVyLWltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvUG9zdCh7XG4gIHRpdGxlLFxuICBjb3ZlckltYWdlLFxuICBkYXRlLFxuICBleGNlcnB0LFxuICBhdXRob3IsXG4gIHNsdWcsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggbWQ6bWItMTZcIj5cbiAgICAgICAgPENvdmVySW1hZ2VcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgcmVzcG9uc2l2ZUltYWdlPXtjb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Y29sLWdhcC0xNiBsZzpjb2wtZ2FwLTggbWItMjAgbWQ6bWItMjhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICA8TGluayBhcz17YC9wb3N0cy8ke3NsdWd9YH0gaHJlZj1cIi9wb3N0cy9bc2x1Z11cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBtZDptYi0wIHRleHQtbGdcIj5cbiAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTRcIj57ZXhjZXJwdH08L3A+XG4gICAgICAgICAgPEF2YXRhciBuYW1lPXthdXRob3IubmFtZX0gcGljdHVyZT17YXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50cm9TZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgbWItMjRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZFwiPkhJLCBXRSdSRSBSRUVNVVUuIPCfkYs8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCB0ZXh0LTN4bFwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBXZSdyZSBhIGRlc2lnbiBhbmQgdGVjaCBjb21wYW55IHRoYXQgc3BlYWtzIGFsbCB0aGUgamFyZ29uLiBCdXRcbiAgICAgICAgICAgICAgICBsdWNraWx5LCB3ZSBzcGVhayBodW1hbiB0b28ue1wiIFwifVxuICAgICAgICAgICAgICAgIDxlbSBjbGFzc05hbWU9XCJmb250LXNlcmlmXCI+XG4gICAgICAgICAgICAgICAgICBXZSBkZXNpZ24sIHdlIHdyaXRlIGNvZGUsIGFuZCB3ZSBsb3ZlIHRoZSBidXNpbmVzcyBzaWRlIG9mIGl0XG4gICAgICAgICAgICAgICAgICBhbGwuXG4gICAgICAgICAgICAgICAgPC9lbT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgV2UgYXJlIGhpcmVkIHRvIDxzdHJvbmc+d29yayBvbiBuZXcgcHJvYmxlbXMgdG9nZXRoZXI8L3N0cm9uZz4sXG4gICAgICAgICAgICAgICAgaW5zdGVhZCBvZiB0ZWxsaW5nIHBlb3BsZSB3aGF0IHRoZXkgd2FudCB0byBoZWFyLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IENNU19OQU1FLCBDTVNfVVJMIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vbmF2aWdhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm8oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgbWQ6ZmxleC1yb3cgZmxleCBpdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIG10LTE2IG1iLTE2IG1kOm1iLTEyIG1kOm10LTggei01MCB3LWZ1bGxcIj5cbiAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbWQ6dGV4dC04eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodCBtZDpwci04XCI+XG4gICAgICAgIEJsb2cuXG4gICAgICA8L2gxPiAqL31cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwic206dy00MCB3LTQwXCIgc3JjPVwiLi9yZWVtdXUtdGV4dC1sb2dvLnN2Z1wiIC8+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgey8qIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzZWxmLXN0YXJ0IG1kOnRleHQtbGVmdCB0ZXh0LWxnIG10LTUgbWQ6cGwtOCBcIj5cbiAgICAgICAgQSBzdGF0aWNhbGx5IGdlbmVyYXRlZCBibG9nIGV4YW1wbGUgdXNpbmd7JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1zdWNjZXNzIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgID5cbiAgICAgICAgICBOZXh0LmpzXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBhbmR7JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e0NNU19VUkx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGhvdmVyOnRleHQtc3VjY2VzcyBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICA+XG4gICAgICAgICAge0NNU19OQU1FfVxuICAgICAgICA8L2E+XG4gICAgICAgIC5cbiAgICAgIDwvaDQ+ICovfVxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9tZXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBwcmV2aWV3LCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZXRhIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8QWxlcnQgcHJldmlldz17cHJldmlld30gLz5cbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDTVNfTkFNRSwgSE9NRV9PR19JTUFHRV9VUkwgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhKCkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwibWFzay1pY29uXCJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiXG4gICAgICAgIGNvbG9yPVwiIzAwMDAwMFwiXG4gICAgICAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PVwiL2Zhdmljb24vYnJvd3NlcmNvbmZpZy54bWxcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDBcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiBocmVmPVwiL2ZlZWQueG1sXCIgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIGNvbnRlbnQ9e2BBIHN0YXRpY2FsbHkgZ2VuZXJhdGVkIGJsb2cgZXhhbXBsZSB1c2luZyBOZXh0LmpzIGFuZCAke0NNU19OQU1FfS5gfVxuICAgICAgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtIT01FX09HX0lNQUdFX1VSTH0gLz5cbiAgICA8L0hlYWQ+XG4gIClcbn1cbiIsImltcG9ydCBQb3N0UHJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QtcHJldmlldydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9yZVN0b3JpZXMoeyBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgIE1vcmUgU3Rvcmllc1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBtZDpjb2wtZ2FwLTE2IGxnOmNvbC1nYXAtMzIgcm93LWdhcC0yMCBtZDpyb3ctZ2FwLTMyIG1iLTMyXCI+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RQcmV2aWV3XG4gICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgY292ZXJJbWFnZT17cG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlfVxuICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cbiAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIGV4Y2VycHQ9e3Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZWFzZSB9IGZyb20gXCIuLi9saWIvZWFzaW5nc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZWxtSGFtYnVyZ2VyID0gW107XG4gICAgICAgIHRoaXMuZ05hdkl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZWxtT3ZlcmxheSA9IFtdO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSB7fTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5lbG1IYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcbiAgICAgICAgdGhpcy5nTmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdsb2JhbC1tZW51X19pdGVtXCIpO1xuICAgICAgICB0aGlzLmVsbU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoYXBlLW92ZXJsYXlzXCIpO1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSBuZXcgU2hhcGVPdmVybGF5cyh0aGlzLmVsbU92ZXJsYXkpO1xuICAgIH1cblxuICAgIGFuaW1hdGVPdmVybGF5ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5LmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdmVybGF5LnRvZ2dsZSgpO1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5LmlzT3BlbmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsbUhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlbmVkLW5hdmlcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ05hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxtSGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuZWQtbmF2aVwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdOYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhbWJ1cmdlciBoYW1idXJnZXItLWRlbW8tNiBqcy1ob3ZlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYW5pbWF0ZU92ZXJsYXl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyX19saW5lIGhhbWJ1cmdlcl9fbGluZS0tMDFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlcl9fbGluZS1pbiBoYW1idXJnZXJfX2xpbmUtaW4tLTAxIGhhbWJ1cmdlcl9fbGluZS1pbi0tZGVtby01XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlcl9fbGluZSBoYW1idXJnZXJfX2xpbmUtLTAyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJfX2xpbmUtaW4gaGFtYnVyZ2VyX19saW5lLWluLS0wMiBoYW1idXJnZXJfX2xpbmUtaW4tLWRlbW8tNVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJfX2xpbmUgaGFtYnVyZ2VyX19saW5lLS0wM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyX19saW5lLWluIGhhbWJ1cmdlcl9fbGluZS1pbi0tMDMgaGFtYnVyZ2VyX19saW5lLWluLS1kZW1vLTVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyX19saW5lIGhhbWJ1cmdlcl9fbGluZS0tY3Jvc3MwMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyX19saW5lLWluIGhhbWJ1cmdlcl9fbGluZS1pbi0tY3Jvc3MwMSBoYW1idXJnZXJfX2xpbmUtaW4tLWRlbW8tNVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJfX2xpbmUgaGFtYnVyZ2VyX19saW5lLS1jcm9zczAyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJfX2xpbmUtaW4gaGFtYnVyZ2VyX19saW5lLWluLS1jcm9zczAyIGhhbWJ1cmdlcl9fbGluZS1pbi0tZGVtby01XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbC1tZW51XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xvYmFsLW1lbnVfX3dyYXBcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnbG9iYWwtbWVudV9faXRlbSBnbG9iYWwtbWVudV9faXRlbS0tZGVtby02XCIgaHJlZj1cIiNcIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xvYmFsLW1lbnVfX2l0ZW0gZ2xvYmFsLW1lbnVfX2l0ZW0tLWRlbW8tNlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdsb2JhbC1tZW51X19pdGVtIGdsb2JhbC1tZW51X19pdGVtLS1kZW1vLTZcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFdvcmtpbmcgVG9nZXRoZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdsb2JhbC1tZW51X19pdGVtIGdsb2JhbC1tZW51X19pdGVtLS1kZW1vLTZcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbG9iYWwtbWVudV9faXRlbSBnbG9iYWwtbWVudV9faXRlbS0tZGVtby02XCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnbG9iYWwtbWVudV9faXRlbSBnbG9iYWwtbWVudV9faXRlbS0tZGVtby02XCIgaHJlZj1cIiNcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcGUtb3ZlcmxheXNcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgaWQ9XCJncmFkaWVudDFcIlxuICAgICAgICAgICAgICAgICAgeDE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICB5MT1cIjAlXCJcbiAgICAgICAgICAgICAgICAgIHgyPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgeTI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMwMGM5OWJcIiAvPlxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiNmZjBlYTFcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICBpZD1cImdyYWRpZW50MlwiXG4gICAgICAgICAgICAgICAgICB4MT1cIjAlXCJcbiAgICAgICAgICAgICAgICAgIHkxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgeDI9XCIwJVwiXG4gICAgICAgICAgICAgICAgICB5Mj1cIjEwMCVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiI2ZmZDM5MlwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcENvbG9yPVwiI2ZmMzg5OFwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgIGlkPVwiZ3JhZGllbnQzXCJcbiAgICAgICAgICAgICAgICAgIHgxPVwiMCVcIlxuICAgICAgICAgICAgICAgICAgeTE9XCIwJVwiXG4gICAgICAgICAgICAgICAgICB4Mj1cIjAlXCJcbiAgICAgICAgICAgICAgICAgIHkyPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjMTEwMDQ2XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjMzIwMDRhXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInNoYXBlLW92ZXJsYXlzX19wYXRoXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzaGFwZS1vdmVybGF5c19fcGF0aFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwic2hhcGUtb3ZlcmxheXNfX3BhdGhcIj48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFNoYXBlT3ZlcmxheXMge1xuICBjb25zdHJ1Y3RvcihlbG0pIHtcbiAgICB0aGlzLmVsbSA9IGVsbTtcbiAgICB0aGlzLnBhdGggPSBlbG0ucXVlcnlTZWxlY3RvckFsbChcInBhdGhcIik7XG4gICAgdGhpcy5udW1Qb2ludHMgPSAxMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gOTAwO1xuICAgIHRoaXMuZGVsYXlQb2ludHNBcnJheSA9IFtdO1xuICAgIHRoaXMuZGVsYXlQb2ludHNNYXggPSAzMDA7XG4gICAgdGhpcy5kZWxheVBlclBhdGggPSAyNTA7XG4gICAgdGhpcy50aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xuICAgICAgdGhpcy5kZWxheVBvaW50c0FycmF5W2ldID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuZGVsYXlQb2ludHNNYXg7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzT3BlbmVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgb3BlbigpIHtcbiAgICB0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlbmVkXCIpO1xuICAgIHRoaXMudGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnJlbmRlckxvb3AoKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5lbG0uY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5lZFwiKTtcbiAgICB0aGlzLnRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5yZW5kZXJMb29wKCk7XG4gIH1cbiAgdXBkYXRlUGF0aCh0aW1lKSB7XG4gICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICBwb2ludHNbaV0gPVxuICAgICAgICAoMSAtXG4gICAgICAgICAgZWFzZS5jdWJpY0luT3V0KFxuICAgICAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgICAgIE1hdGgubWF4KHRpbWUgLSB0aGlzLmRlbGF5UG9pbnRzQXJyYXlbaV0sIDApIC8gdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkpICpcbiAgICAgICAgMTAwO1xuICAgIH1cblxuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIHN0ciArPSB0aGlzLmlzT3BlbmVkID8gYE0gMCAwIFYgJHtwb2ludHNbMF19YCA6IGBNIDAgJHtwb2ludHNbMF19YDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBwID0gKChpICsgMSkgLyAodGhpcy5udW1Qb2ludHMgLSAxKSkgKiAxMDA7XG4gICAgICBjb25zdCBjcCA9IHAgLSAoKDEgLyAodGhpcy5udW1Qb2ludHMgLSAxKSkgKiAxMDApIC8gMjtcbiAgICAgIHN0ciArPSBgQyAke2NwfSAke3BvaW50c1tpXX0gJHtjcH0gJHtwb2ludHNbaSArIDFdfSAke3B9ICR7XG4gICAgICAgIHBvaW50c1tpICsgMV1cbiAgICAgIH0gYDtcbiAgICB9XG4gICAgc3RyICs9IHRoaXMuaXNPcGVuZWQgPyBgViAxMDAgSCAwYCA6IGBWIDAgSCAwYDtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5pc09wZW5lZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYXRoW2ldLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhdGgoRGF0ZS5ub3coKSAtICh0aGlzLnRpbWVTdGFydCArIHRoaXMuZGVsYXlQZXJQYXRoICogaSkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucGF0aFtpXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgdGhpcy51cGRhdGVQYXRoKFxuICAgICAgICAgICAgRGF0ZS5ub3coKSAtXG4gICAgICAgICAgICAgICh0aGlzLnRpbWVTdGFydCArIHRoaXMuZGVsYXlQZXJQYXRoICogKHRoaXMucGF0aC5sZW5ndGggLSBpIC0gMSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW5kZXJMb29wKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgaWYgKFxuICAgICAgRGF0ZS5ub3coKSAtIHRoaXMudGltZVN0YXJ0IDxcbiAgICAgIHRoaXMuZHVyYXRpb24gK1xuICAgICAgICB0aGlzLmRlbGF5UGVyUGF0aCAqICh0aGlzLnBhdGgubGVuZ3RoIC0gMSkgK1xuICAgICAgICB0aGlzLmRlbGF5UG9pbnRzTWF4XG4gICAgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlckxvb3AoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEF2YXRhciBmcm9tICcuLi9jb21wb25lbnRzL2F2YXRhcidcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSdcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gJy4vY292ZXItaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQcmV2aWV3KHtcbiAgdGl0bGUsXG4gIGNvdmVySW1hZ2UsXG4gIGRhdGUsXG4gIGV4Y2VycHQsXG4gIGF1dGhvcixcbiAgc2x1Zyxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgIDxDb3ZlckltYWdlXG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgcmVzcG9uc2l2ZUltYWdlPXtjb3ZlckltYWdlLnJlc3BvbnNpdmVJbWFnZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTMgbGVhZGluZy1zbnVnXCI+XG4gICAgICAgIDxMaW5rIGFzPXtgL3Bvc3RzLyR7c2x1Z31gfSBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPlxuICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+e2V4Y2VycHR9PC9wPlxuICAgICAgPEF2YXRhciBuYW1lPXthdXRob3IubmFtZX0gcGljdHVyZT17YXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vZ3JhcGhxbC5kYXRvY21zLmNvbSdcbmNvbnN0IEFQSV9UT0tFTiA9IHByb2Nlc3MuZW52Lk5FWFRfRVhBTVBMRV9DTVNfREFUT0NNU19BUElfVE9LRU5cblxuLy8gU2VlOiBodHRwczovL3d3dy5kYXRvY21zLmNvbS9ibG9nL29mZmVyLXJlc3BvbnNpdmUtcHJvZ3Jlc3NpdmUtbHFpcC1pbWFnZXMtaW4tMjAyMFxuY29uc3QgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgPSBgXG4gIGZyYWdtZW50IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IG9uIFJlc3BvbnNpdmVJbWFnZSB7XG4gIHNyY1NldFxuICAgIHdlYnBTcmNTZXRcbiAgICBzaXplc1xuICAgIHNyY1xuICAgIHdpZHRoXG4gICAgaGVpZ2h0XG4gICAgYXNwZWN0UmF0aW9cbiAgICBhbHRcbiAgICB0aXRsZVxuICAgIGJnQ29sb3JcbiAgICBiYXNlNjRcbiAgfVxuYFxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFQSShxdWVyeSwgeyB2YXJpYWJsZXMsIHByZXZpZXcgfSA9IHt9KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwgKyAocHJldmlldyA/ICcvcHJldmlldycgOiAnJyksIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FQSV9UT0tFTn1gLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnksXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gIH0pXG5cbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgY29uc29sZS5lcnJvcihqc29uLmVycm9ycylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBBUEknKVxuICB9XG4gIHJldHVybiBqc29uLmRhdGFcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByZXZpZXdQb3N0QnlTbHVnKHNsdWcpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQVBJKFxuICAgIGBcbiAgICBxdWVyeSBQb3N0QnlTbHVnKCRzbHVnOiBTdHJpbmcpIHtcbiAgICAgIHBvc3QoZmlsdGVyOiB7c2x1Zzoge2VxOiAkc2x1Z319KSB7XG4gICAgICAgIHNsdWdcbiAgICAgIH1cbiAgICB9YCxcbiAgICB7XG4gICAgICBwcmV2aWV3OiB0cnVlLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHNsdWcsXG4gICAgICB9LFxuICAgIH1cbiAgKVxuICByZXR1cm4gZGF0YT8ucG9zdFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNXaXRoU2x1ZygpIHtcbiAgY29uc3QgZGF0YSA9IGZldGNoQVBJKGBcbiAgICB7XG4gICAgICBhbGxQb3N0cyB7XG4gICAgICAgIHNsdWdcbiAgICAgIH1cbiAgICB9XG4gIGApXG4gIHJldHVybiBkYXRhPy5hbGxQb3N0c1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNGb3JIb21lKHByZXZpZXcpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQVBJKFxuICAgIGBcbiAgICB7XG4gICAgICBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiAyMCkge1xuICAgICAgICB0aXRsZVxuICAgICAgICBzbHVnXG4gICAgICAgIGV4Y2VycHRcbiAgICAgICAgZGF0ZVxuICAgICAgICBjb3ZlckltYWdlIHtcbiAgICAgICAgICByZXNwb25zaXZlSW1hZ2UoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDIwMDAsIGg6IDEwMDAgfSkge1xuICAgICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICR7cmVzcG9uc2l2ZUltYWdlRnJhZ21lbnR9XG4gIGAsXG4gICAgeyBwcmV2aWV3IH1cbiAgKVxuICByZXR1cm4gZGF0YT8uYWxsUG9zdHNcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RBbmRNb3JlUG9zdHMoc2x1ZywgcHJldmlldykge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoXG4gICAgYFxuICBxdWVyeSBQb3N0QnlTbHVnKCRzbHVnOiBTdHJpbmcpIHtcbiAgICBwb3N0KGZpbHRlcjoge3NsdWc6IHtlcTogJHNsdWd9fSkge1xuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGNvbnRlbnRcbiAgICAgIGRhdGVcbiAgICAgIG9nSW1hZ2U6IGNvdmVySW1hZ2V7XG4gICAgICAgIHVybChpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KVxuICAgICAgfVxuICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXV0aG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbW9yZVBvc3RzOiBhbGxQb3N0cyhvcmRlckJ5OiBkYXRlX0RFU0MsIGZpcnN0OiAyLCBmaWx0ZXI6IHtzbHVnOiB7bmVxOiAkc2x1Z319KSB7XG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgZXhjZXJwdFxuICAgICAgZGF0ZVxuICAgICAgY292ZXJJbWFnZSB7XG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAwMCwgaDogMTAwMCB9KSB7XG4gICAgICAgICAgLi4ucmVzcG9uc2l2ZUltYWdlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXV0aG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICB1cmwoaW1naXhQYXJhbXM6IHtmbToganBnLCBmaXQ6IGNyb3AsIHc6IDEwMCwgaDogMTAwLCBzYXQ6IC0xMDB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cbiAgYCxcbiAgICB7XG4gICAgICBwcmV2aWV3LFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHNsdWcsXG4gICAgICB9LFxuICAgIH1cbiAgKVxuICByZXR1cm4gZGF0YVxufVxuIiwiZXhwb3J0IGNvbnN0IEVYQU1QTEVfUEFUSCA9ICdjbXMtZGF0b2NtcydcbmV4cG9ydCBjb25zdCBDTVNfTkFNRSA9ICdEYXRvQ01TJ1xuZXhwb3J0IGNvbnN0IENNU19VUkwgPSAnaHR0cHM6Ly93d3cuZGF0b2Ntcy5jb20vJ1xuZXhwb3J0IGNvbnN0IEhPTUVfT0dfSU1BR0VfVVJMID1cbiAgJ2h0dHBzOi8vb2ctaW1hZ2Uubm93LnNoL05leHQuanMlMjBCbG9nJTIwRXhhbXBsZSUyMHdpdGglMjAqKkRhdG9DTVMqKi5wbmc/dGhlbWU9bGlnaHQmbWQ9MSZmb250U2l6ZT03NXB4JmltYWdlcz1odHRwcyUzQSUyRiUyRmFzc2V0cy52ZXJjZWwuY29tJTJGaW1hZ2UlMkZ1cGxvYWQlMkZmcm9udCUyRmFzc2V0cyUyRmRlc2lnbiUyRm5leHRqcy1ibGFjay1sb2dvLnN2ZyZpbWFnZXM9ZGF0YSUzQWltYWdlJTJGc3ZnJTJCeG1sJTNCYmFzZTY0JTJDUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCMmFXVjNRbTk0UFNJd0lEQWdNall4TGpJM05DQTRNQzQxTmpJaVBqeGtaV1p6UGp4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaVlTSWdlVEU5SWpRd0xqUTBJaUI0TWowaU56Z3VOamczSWlCNU1qMGlOREF1TkRRaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajQ4YzNSdmNDQnZabVp6WlhROUlqQWlJSE4wYjNBdFkyOXNiM0k5SWlObVpqVTVNMlFpTHo0OGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTm1aamMzTlRFaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqd3ZaR1ZtY3o0OGRHbDBiR1UlMkJablZzYkY5emJXRnNiR1Z5UEM5MGFYUnNaVDQ4Y0dGMGFDQmtQU0pOTXprdU16UTBMamcwTkVnd1ZqZ3dMakF6TjBnek9TNHpORFJqTVRrdU5qYzNMREFzTXprdU16UXpMVEUzTGpjeU9Td3pPUzR6TkRNdE16a3VOVGt4VXpVNUxqQXlNUzQ0TkRRc016a3VNelEwTGpnME5GcHRNQ3cxTnk0MU9EbGhNVGN1T1RrekxERTNMams1TXl3d0xERXNNU3d4T0MweE55NDVPRGRCTVRjdU9UZzJMREUzTGprNE5pd3dMREFzTVN3ek9TNHpORFFzTlRndU5ETXpXaUlnWm1sc2JEMGlkWEpzS0NOaEtTSXZQanh3WVhSb0lHUTlJazB4TVRrdU1EVTBMamcxT0dNeE1TNDRORElzTUN3eE55NDVNVFlzTnk0eE56a3NNVGN1T1RFMkxERTNMakExT0hZNExqZ3pOV013TERrdU9EYzRMVFl1TURjMExERTNMakExTnkweE55NDVNVFlzTVRjdU1EVTNTREV3TUM0eU56bFdMamcxT0ZwdE55NHpOak1zTVRkak1DMDFMalEyTFRJdU9EZzBMVGd1TXpRMExUa3VNalkxTFRndU16UTBhQzAyTGpNNE1WWXpOUzR4TlRab05pNHpPREZqTmk0ek9ERXNNQ3c1TGpJMk5TMHlMamc0TkN3NUxqSTJOUzA0TGpNME5GcHRORE11TWpReExERTNMamszTjBneE5UUXVNVE0xYkMweUxqTTVNeXczTGprM04wZ3hOREV1TVRnNVRERTFOaTQxTWpjdU9EVTRhREV3TGpoc01UVXVNek01TERReUxqazFTREUzTWk0eE1USmFiUzB4TWk0NU5EWXRPQzQwTmpkb01UQXVNelk1YkMwMUxqRTFOQzB4Tmk0NU9UVmFUVEl4Tmk0d016TXVPRFU0ZGpndU9XZ3RNVEV1TmxZME15NDRNRGhJTVRrekxqZzRNMVk1TGpjMU5XZ3RNVEV1TmxZdU9EVTRXbTB5TlM0MU5EVXNORE11T0RBNVl5MHhNeTR3TURjc01DMHhPUzQyT1RVdE9DNHpORFV0TVRrdU5qazFMVEU1TGpVM00xWXhPUzQxTnpKRE1qSXhMamc0TXl3NExqTTBOQ3d5TWpndU5UY3hMREFzTWpReExqVTNPQ3d3Y3pFNUxqY3NPQzR6TkRRc01Ua3VOeXd4T1M0MU56SjJOUzQxTWpKRE1qWXhMakkzTkN3ek5pNHpNaklzTWpVMExqVTROaXcwTkM0Mk5qY3NNalF4TGpVM09DdzBOQzQyTmpkYWJUQXRNelV1T0RrMFl5MDJMakV6TlN3d0xUa3VNVFF5TERRdU1URXlMVGt1TVRReUxERXdMakkwTjNZMkxqWXlObU13TERZdU1UTTJMRE11TURBM0xERXdMakkwTnl3NUxqRTBNaXd4TUM0eU5EZHpPUzR4TkRJdE5DNHhNVEVzT1M0eE5ESXRNVEF1TWpRM1ZqRTVMakF5UXpJMU1DNDNNaXd4TWk0NE9EVXNNalEzTGpjeE5DdzRMamMzTXl3eU5ERXVOVGM0TERndU56Y3pXazB4TURrdU5qa3NOelV1TWpRMFlUUXVPREV6TERRdU9ERXpMREFzTUN3d0xEVXVNaTAwTGpnMk9HZzFMamsxTkdNdExqQTNOU3cxTGpVME1pMDBMakUxTml3eE1DNHhPRFl0TVRFdU1EZzBMREV3TGpFNE5pMDRMakE0T0N3d0xURXhMams0TWkwMUxqQTVNeTB4TVM0NU9ESXRNVEV1T1RBNFZqWTFMakl3T1dNd0xUWXVPREUxTERNdU9EazBMVEV4TGprd055d3hNUzQ1T0RJdE1URXVPVEEzTERZdU9USTRMREFzTVRFdU1EQTVMRFF1TmpReUxERXhMakE0TkN3eE1DNHhPRFJvTFRVdU9UVTBZVFF1T0RFekxEUXVPREV6TERBc01Dd3dMVFV1TWkwMExqZzJPR010TXk0NE9UVXNNQzAxTGpRMk9Dd3lMalU0TkMwMUxqUTJPQ3cyTGpJNU1YWTBMakEwTkVNeE1EUXVNakl5TERjeUxqWTJMREV3TlM0NExEYzFMakkwTkN3eE1Ea3VOamtzTnpVdU1qUTBXbTB6Tnk0d05UVXRNakV1TkRFNWFEVXVPVEUzVmpnd0xqQXpOMmd0Tmk0eE56aFdOall1TVRnemJDMDBMakV5TERndU1ERXlhQzAxTGpBNU1td3ROQzR3T0RFdE9DNHdNVEpXT0RBdU1ETTNhQzAyTGpFM09WWTFNeTQ0TWpWb05TNDVNVFpzTmk0NE9Td3hOQzR5TmpkYVRURTJPUzQxTVN3NE1DNDFOakpqTFRZdU1qa3hMREF0TVRBdU5USXlMVE10TVRBdU5USXlMVGd1TWpjMmRpMHVOekV5YURZdU1UYzRWamN5TGpGak1Dd3lMakl3T1N3eExqUXlNeXd6TGpVMU55dzBMak00TVN3ekxqVTFOeXd5TGpZMU9Td3dMRFF1TkRFNUxURXVNRGcyTERRdU5ERTVMVE11TVRBNFlUSXVNVFV4TERJdU1UVXhMREFzTUN3d0xURXVPQzB5TGpNeU1Xd3ROaTQxTlRNdE1TNDJORGhqTFRRdU1EZ3lMVEV1TURFeExUWXVNVGM1TFRJdU9EQTRMVFl1TVRjNUxUY3VNRGMzTERBdE5TNHlNRFVzTXk0M01EY3RPQzR5TERrdU9USXpMVGd1TWl3MUxqZzNPU3d3TERrdU5qSTBMRE11TVRneUxEa3VOakkwTERjdU9UYzFkaTQyTXpkSU1UY3pMakF6ZGkwdU5EUTVZekF0TVM0M05qRXRMamszTkMwekxqSXlNUzB6TGpZM0xUTXVNakl4TFRJdU1qUTNMREF0TXk0Mk5qa3VOemcyTFRNdU5qWTVMREl1TmpVNFlURXVPVGswTERFdU9UazBMREFzTUN3d0xERXVOamcxTERJdU1UTTFiRFl1T1RZMExERXVPRGN5WXpRdU1UazBMREV1TVRJekxEVXVPRGM1TERNdU5EUTFMRFV1T0RjNUxEY3VNRGMzUXpFNE1DNHlNVGtzTnpjdU1qSTVMREUzTlM0MU56WXNPREF1TlRZeUxERTJPUzQxTVN3NE1DNDFOakphSWlCbWFXeHNQU0lqWm1ZM056VXhJaTglMkJQQzl6ZG1jJTJCJndpZHRocz11bmRlZmluZWQmd2lkdGhzPTM1MCZoZWlnaHRzPTIwMCZoZWlnaHRzPWF1dG8nXG4iLCIvL1xuLy8gdGhlc2UgZWFzaW5nIGZ1bmN0aW9ucyBhcmUgYmFzZWQgb24gdGhlIGNvZGUgb2YgZ2xzbC1lYXNpbmcgbW9kdWxlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dsc2xpZnkvZ2xzbC1lYXNpbmdzXG4vL1xuXG5leHBvcnQgY29uc3QgZWFzZSA9IHtcbiAgZXhwb25lbnRpYWxJbjogdCA9PiB7XG4gICAgcmV0dXJuIHQgPT0gMC4wID8gdCA6IE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSk7XG4gIH0sXG4gIGV4cG9uZW50aWFsT3V0OiB0ID0+IHtcbiAgICByZXR1cm4gdCA9PSAxLjAgPyB0IDogMS4wIC0gTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpO1xuICB9LFxuICBleHBvbmVudGlhbEluT3V0OiB0ID0+IHtcbiAgICByZXR1cm4gdCA9PSAwLjAgfHwgdCA9PSAxLjBcbiAgICAgID8gdFxuICAgICAgOiB0IDwgMC41XG4gICAgICA/ICswLjUgKiBNYXRoLnBvdygyLjAsIDIwLjAgKiB0IC0gMTAuMClcbiAgICAgIDogLTAuNSAqIE1hdGgucG93KDIuMCwgMTAuMCAtIHQgKiAyMC4wKSArIDEuMDtcbiAgfSxcbiAgc2luZU91dDogdCA9PiB7XG4gICAgY29uc3QgSEFMRl9QSSA9IDEuNTcwNzk2MzI2Nzk0ODk2NjtcbiAgICByZXR1cm4gTWF0aC5zaW4odCAqIEhBTEZfUEkpO1xuICB9LFxuICBjaXJjdWxhckluT3V0OiB0ID0+IHtcbiAgICByZXR1cm4gdCA8IDAuNVxuICAgICAgPyAwLjUgKiAoMS4wIC0gTWF0aC5zcXJ0KDEuMCAtIDQuMCAqIHQgKiB0KSlcbiAgICAgIDogMC41ICogKE1hdGguc3FydCgoMy4wIC0gMi4wICogdCkgKiAoMi4wICogdCAtIDEuMCkpICsgMS4wKTtcbiAgfSxcbiAgY3ViaWNJbjogdCA9PiB7XG4gICAgcmV0dXJuIHQgKiB0ICogdDtcbiAgfSxcbiAgY3ViaWNPdXQ6IHQgPT4ge1xuICAgIGNvbnN0IGYgPSB0IC0gMS4wO1xuICAgIHJldHVybiBmICogZiAqIGYgKyAxLjA7XG4gIH0sXG4gIGN1YmljSW5PdXQ6IHQgPT4ge1xuICAgIHJldHVybiB0IDwgMC41ID8gNC4wICogdCAqIHQgKiB0IDogMC41ICogTWF0aC5wb3coMi4wICogdCAtIDIuMCwgMy4wKSArIDEuMDtcbiAgfSxcbiAgcXVhZHJhdGljT3V0OiB0ID0+IHtcbiAgICByZXR1cm4gLXQgKiAodCAtIDIuMCk7XG4gIH0sXG4gIHF1YXJ0aWNPdXQ6IHQgPT4ge1xuICAgIHJldHVybiBNYXRoLnBvdyh0IC0gMS4wLCAzLjApICogKDEuMCAtIHQpICsgMS4wO1xuICB9XG59O1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBNb3JlU3RvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL21vcmUtc3RvcmllcydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8tcG9zdCdcbmltcG9ydCBIZXJvSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvLWludHJvJ1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEludHJvU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvLXNlY3Rpb24nXG5pbXBvcnQgeyBnZXRBbGxQb3N0c0ZvckhvbWUgfSBmcm9tICcuLi9saWIvYXBpJ1xuaW1wb3J0IHsgQ01TX05BTUUgfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGFsbFBvc3RzIH0pIHtcbiAgY29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0c1swXVxuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UmVlbXV1IERlc2lnbnMgYnkge0NNU19OQU1FfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgICA8SGVyb0ludHJvIC8+XG4gICAgICAgICAgPEludHJvU2VjdGlvbiAvPlxuICAgICAgICAgIHtoZXJvUG9zdCAmJiAoXG4gICAgICAgICAgICA8SGVyb1Bvc3RcbiAgICAgICAgICAgICAgdGl0bGU9e2hlcm9Qb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBjb3ZlckltYWdlPXtoZXJvUG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgICBkYXRlPXtoZXJvUG9zdC5kYXRlfVxuICAgICAgICAgICAgICBhdXRob3I9e2hlcm9Qb3N0LmF1dGhvcn1cbiAgICAgICAgICAgICAgc2x1Zz17aGVyb1Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgZXhjZXJwdD17aGVyb1Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBhbGxQb3N0cyA9IChhd2FpdCBnZXRBbGxQb3N0c0ZvckhvbWUocHJldmlldykpIHx8IFtdXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdG9jbXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==