/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/animation.js":
/*!***********************************!*\
  !*** ./resources/js/animation.js ***!
  \***********************************/
/***/ (function() {

eval("var animItems = document.querySelectorAll('.anim-items');\n\nif (animItems.length > 0) {\n  var animOnScroll = function animOnScroll() {\n    for (var i = 0; i < animItems.length; i++) {\n      var animItem = animItems[i];\n      var animItemHeight = animItem.offsetHeight;\n      var animItemOffset = offset(animItem).top;\n      var animStart = 5;\n      var animItemPoint = window.innerHeight - animItemHeight / animStart;\n\n      if (animItemHeight > window.innerHeight) {\n        animItemPoint = window.innerHeight - window.innerHeight / animStart;\n      }\n\n      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {\n        animItem.classList.add('active');\n      } else {\n        if (!animItem.classList.contains('no-anim')) {\n          animItem.classList.remove('active');\n        }\n      }\n    }\n  };\n\n  var offset = function offset(el) {\n    var rect = el.getBoundingClientRect(),\n        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\n        scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n    return {\n      top: rect.top + scrollTop,\n      left: rect.left + scrollLeft\n    };\n  };\n\n  window.addEventListener('scroll', animOnScroll);\n  setTimeout(function () {\n    animOnScroll();\n  }, 300);\n} // COUNTER\n\n\nif (document.body.classList.contains('page-template-page-about')) {\n  var a = 0;\n  $(window).scroll(function () {\n    var oTop = $('#counter').offset().top - window.innerHeight;\n\n    if (a == 0 && $(window).scrollTop() > oTop) {\n      $('.about-nums__number').each(function () {\n        var $this = $(this),\n            countTo = $this.attr('data-count');\n        $({\n          countNum: $this.text()\n        }).animate({\n          countNum: countTo\n        }, {\n          duration: 2000,\n          easing: 'swing',\n          step: function step() {\n            $this.text(Math.floor(this.countNum));\n          },\n          complete: function complete() {\n            $this.text(this.countNum); //alert('finished');\n          }\n        });\n      });\n      a = 1;\n    }\n  });\n} // ARROW UP\n\n\nvar scrollTop = function scrollTop() {\n  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {\n    arrowUp.style.cssText = \"opacity: 1; visibility: visible;\";\n  } else {\n    arrowUp.style.cssText = \"opacity: 0; visibility: hidden;\";\n  }\n};\n\nvar arrowUp = document.querySelector('.arrow__up');\narrowUp.addEventListener('click', function () {\n  document.body.scrollTop = 0;\n  document.documentElement.scrollTop = 0;\n});\nwindow.addEventListener('scroll', scrollTop); // FRONT PAGE MAIN TITLE\n\nvar headerTitle = document.querySelector('.hero__title');\n\nif (document.body.contains(headerTitle)) {\n  document.addEventListener('DOMContentLoaded', function () {\n    headerTitle.classList.add('active');\n  });\n}\n\n//# sourceURL=webpack://webpack-starter/./resources/js/animation.js?");

/***/ }),

/***/ "./resources/js/cookies.js":
/*!*********************************!*\
  !*** ./resources/js/cookies.js ***!
  \*********************************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// COOKIES\nvar MScookies = /*#__PURE__*/function () {\n  function MScookies() {\n    _classCallCheck(this, MScookies);\n\n    this.WHCheckCookies();\n  }\n\n  _createClass(MScookies, [{\n    key: \"WHCheckCookies\",\n    value: function WHCheckCookies() {\n      if (this.WHReadCookie('cookies_accepted') != 'T') {\n        var message_container = document.createElement('div');\n        message_container.id = 'cookies-message-container';\n        var html_code = '<div id=\"cookies-message\" style=\"color: #000; padding: 10px 10px; font-size: 12px; line-height: 16px; display: flex; justify-content: space-between; align-items: center; position: fixed; bottom: 20px; right: 20px; background-color: #fff; width: 100%; max-width: 320px; font-family: sans-serif; z-index: 999; box-sizing: border-box; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\">';\n        html_code += '<svg id=\"Capa_1\" style=\"fill:#a68363\" enable-background=\"new 0 0 556.235 556.235\" height=\"30\" viewBox=\"0 0 556.235 556.235\" width=\"30\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m278.118 0c-153.6 0-278.118 124.518-278.118 278.118s124.518 278.118 278.118 278.118c8.144 0 16.158-.533 24.126-1.218-4.327-10.325-6.743-21.652-6.743-33.547 0-24.433 10.151-46.429 26.381-62.219-5.701-12.89-8.999-27.073-8.999-42.075 0-57.6 46.694-104.294 104.294-104.294 15.002 0 29.184 3.297 42.075 8.999 15.791-16.23 37.786-26.381 62.219-26.381 11.895 0 23.222 2.415 33.547 6.741.685-7.968 1.218-15.98 1.218-24.124-.001-153.6-124.519-278.118-278.118-278.118zm-191.206 278.118c-9.599 0-17.382-7.783-17.382-17.382 0-9.601 7.783-17.382 17.382-17.382s17.382 7.781 17.382 17.382c0 9.599-7.783 17.382-17.382 17.382zm86.911 139.058c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c0 19.199-15.564 34.765-34.765 34.765zm34.765-243.353c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c0 19.199-15.564 34.765-34.765 34.765zm52.147 139.059c-9.599 0-17.382-7.783-17.382-17.382 0-9.601 7.783-17.382 17.382-17.382s17.382 7.781 17.382 17.382c.001 9.599-7.782 17.382-17.382 17.382zm104.294-243.353c9.599 0 17.382 7.781 17.382 17.382 0 9.599-7.783 17.382-17.382 17.382s-17.382-7.783-17.382-17.382c0-9.601 7.783-17.382 17.382-17.382zm17.383 173.824c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c-.001 19.199-15.565 34.765-34.765 34.765z\"/></svg>';\n        html_code += '<div class=\"cookie__message\" style=\"display: inline-block; width: 60%; margin: 0 2%; text-align: justify;\">Ta strona używa ciasteczek (cookies). ';\n        html_code += '<a href=\"' + privacylink + '\" style=\"color: #303337;\">Dowiedz się więcej</a></div>';\n        html_code += '<a href=\"#\" id=\"accept-cookies-checkbox\" name=\"accept-cookies\" style=\"padding: 4% 7%; color: #FFF; display: inline-block; margin-left: 1%; text-decoration: none; font-size: 16px; cursor: pointer;\">';\n        html_code += 'OK';\n        html_code += '</a>';\n        html_code += '</div>';\n        message_container.innerHTML = html_code;\n        document.body.appendChild(message_container);\n\n        var _self = this;\n\n        document.getElementById('accept-cookies-checkbox').addEventListener('click', function (e) {\n          e.preventDefault();\n\n          _self.WHCloseCookiesWindow();\n        }, false);\n      }\n    }\n  }, {\n    key: \"WHCloseCookiesWindow\",\n    value: function WHCloseCookiesWindow() {\n      this.WHCreateCookie('cookies_accepted', 'T', 365);\n      document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));\n    }\n  }, {\n    key: \"WHReadCookie\",\n    value: function WHReadCookie(name) {\n      var nameEQ = name + \"=\";\n      var ca = document.cookie.split(';');\n\n      for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n\n        while (c.charAt(0) == ' ') {\n          c = c.substring(1, c.length);\n        }\n\n        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n      }\n\n      return null;\n    }\n  }, {\n    key: \"WHCreateCookie\",\n    value: function WHCreateCookie(name, value, days) {\n      var date = new Date();\n      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);\n      var expires = \"; expires=\" + date.toGMTString();\n      document.cookie = name + \"=\" + value + expires + \"; path=/\";\n    }\n  }]);\n\n  return MScookies;\n}();\n\nwindow.onload = function () {\n  var cookies = new MScookies();\n};\n\n//# sourceURL=webpack://webpack-starter/./resources/js/cookies.js?");

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./resources/scss/style.scss\");\n/* harmony import */ var _assets_img_contact_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/contact/map.png */ \"./assets/img/contact/map.png\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ \"./resources/js/animation.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_animation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies */ \"./resources/js/cookies.js\");\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cookies__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // LOADER\n\nvar loader = document.querySelector('.spinner__container');\nvar html = document.querySelector('html');\nwindow.addEventListener('load', function () {\n  loader.parentElement.removeChild(loader);\n  html.style.overflowY = 'auto';\n}); // Burger menu\n\nvar menuBtn = document.querySelector('.menu-btn');\nvar menuTop = document.querySelector('.header__top');\nvar menuNavs = document.querySelectorAll('.menu-item a');\nvar menuOpen = false;\nmenuBtn.addEventListener('click', function () {\n  if (!menuOpen) {\n    menuBtn.classList.add('open');\n    menuTop.classList.add('active');\n    menuOpen = true;\n\n    if (window.innerWidth < 576) {\n      html.style.overflow = 'hidden';\n    }\n  } else {\n    menuBtn.classList.remove('open');\n    menuTop.classList.remove('active');\n    menuOpen = false;\n    html.style.overflowY = \"auto\";\n  }\n});\n\nif (window.innerWidth <= 1200 && window.innerWidth >= 576) {\n  window.addEventListener('mouseup', function (event) {\n    if (event.target != menuTop && event.target.parentNode != menuTop) {\n      menuBtn.classList.remove('open');\n      menuTop.classList.remove('active');\n      menuOpen = false;\n      html.style.overflowY = \"auto\";\n    }\n  });\n  menuNavs.forEach(function (menuNav) {\n    menuNav.addEventListener('click', function () {\n      menuBtn.classList.add('open');\n      menuTop.classList.add('active');\n      menuOpen = true;\n    });\n  });\n} // 404 PAGE\n\n\nif (document.body.classList.contains('error404')) {\n  var randomNum = function randomNum() {\n    \"use strict\";\n\n    return Math.floor(Math.random() * 9) + 1;\n  };\n\n  var loop1,\n      loop2,\n      loop3,\n      time = 30,\n      i = 0,\n      number,\n      selector3 = document.querySelector('.thirdDigit'),\n      selector2 = document.querySelector('.secondDigit'),\n      selector1 = document.querySelector('.firstDigit');\n  loop3 = setInterval(function () {\n    \"use strict\";\n\n    if (i > 40) {\n      clearInterval(loop3);\n      selector3.textContent = 4;\n    } else {\n      selector3.textContent = randomNum();\n      i++;\n    }\n  }, time);\n  loop2 = setInterval(function () {\n    \"use strict\";\n\n    if (i > 80) {\n      clearInterval(loop2);\n      selector2.textContent = 0;\n    } else {\n      selector2.textContent = randomNum();\n      i++;\n    }\n  }, time);\n  loop1 = setInterval(function () {\n    \"use strict\";\n\n    if (i > 100) {\n      clearInterval(loop1);\n      selector1.textContent = 4;\n    } else {\n      selector1.textContent = randomNum();\n      i++;\n    }\n  }, time);\n  var headerTitle = document.querySelector('.header__title');\n  headerTitle.textContent = \":(\";\n} // MAP\n\n\nif (document.body.contains(document.querySelector('#map'))) {\n  var mapCenter;\n\n  if (window.innerWidth >= 992) {\n    mapCenter = [22.235915556384226, 49.54922297941143];\n  } else {\n    mapCenter = [22.18250249829024, 49.56533725862005];\n  }\n\n  mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZHpoIiwiYSI6ImNrZzBxcHpoMDB1ZmsydG9iMHE0YnJ6NDYifQ._kSahmQ3wNJverVwR7NxgA';\n  var map = new mapboxgl.Map({\n    container: 'map',\n    style: 'mapbox://styles/vladzh/ckl0mp6tf0ov317nrx246t0ux',\n    center: mapCenter,\n    zoom: 12\n  });\n  map.addControl(new mapboxgl.NavigationControl());\n  map.scrollZoom.disable(); // map.boxZoom.disable();\n\n  map.dragRotate.disable();\n  map.keyboard.disable();\n  map.doubleClickZoom.disable(); // map.touchZoomRotate.disable();\n\n  var point = document.createElement(\"div\");\n  point.className = \"marker\";\n  point.innerHTML = \"<img src=\\\"\".concat(_assets_img_contact_map_png__WEBPACK_IMPORTED_MODULE_1__.default, \"\\\" alt=\\\"Map marker\\\">\");\n  var marker = new mapboxgl.Marker(point).setLngLat([22.18250249829024, 49.56533725862005]).addTo(map);\n}\n\nif ($('.opinion__list').length > 0) {\n  $(\".opinion__list\").owlCarousel({\n    items: 3,\n    margin: 5,\n    loop: true,\n    nav: false,\n    dots: false,\n    smartSpeed: 1500,\n    autoplay: true,\n    autoplaySpeed: 1000,\n    autoplayTimeout: 8000,\n    responsive: {\n      0: {\n        items: 1\n      },\n      768: {\n        items: 2\n      },\n      1400: {\n        items: 3\n      }\n    }\n  });\n}\n\nif ($('.header__blog').length > 0) {\n  $(\".header__blog\").owlCarousel({\n    items: 3,\n    margin: 60,\n    loop: true,\n    nav: false,\n    dots: false,\n    smartSpeed: 1500,\n    autoplay: true,\n    autoplaySpeed: 1000,\n    autoplayTimeout: 4000,\n    responsive: {\n      0: {\n        items: 1,\n        margin: 0\n      },\n      576: {\n        items: 2,\n        stagePadding: 5\n      },\n      768: {\n        items: 1,\n        stagePadding: 0\n      },\n      992: {\n        items: 2\n      },\n      1550: {\n        items: 3\n      }\n    }\n  });\n  $(\".offer__items\").owlCarousel({\n    items: 4,\n    margin: 15,\n    loop: true,\n    nav: true,\n    navContainer: '#customNavOffer',\n    stagePadding: 10,\n    dots: false,\n    smartSpeed: 1500,\n    autoplay: true,\n    autoplaySpeed: 1000,\n    autoplayTimeout: 8000,\n    responsive: {\n      0: {\n        items: 1,\n        stagePadding: 0\n      },\n      768: {\n        items: 2,\n        stagePadding: 10,\n        margin: 15\n      },\n      1200: {\n        items: 3\n      },\n      1650: {\n        items: 4\n      }\n    }\n  });\n  $('.hero__list').on('initialized.owl.carousel changed.owl.carousel', function (e) {\n    if (!e.namespace) {\n      return;\n    }\n\n    var carousel = e.relatedTarget;\n    $('.slider-counter').html(\"<div class=\\\"move__num\\\">0\".concat(carousel.relative(carousel.current()) + 1, \"/</div><span>0\").concat(carousel.items().length, \"</span>\"));\n  }).owlCarousel({\n    items: 1,\n    loop: true,\n    margin: 0,\n    nav: true,\n    navContainer: '#customNav',\n    smartSpeed: 1500,\n    autoplay: true,\n    autoplaySpeed: 1000,\n    autoplayTimeout: 8000\n  });\n  lightbox.option({\n    'resizeDuration': 200,\n    'wrapAround': true,\n    'disableScrolling': true,\n    'showImageNumberLabel': false\n  });\n} // CHANGE NAME FOR SINGLE POST MAIN TITLE\n\n\nif (document.body.classList.contains('single')) {\n  var _headerTitle = document.querySelector('.header__title');\n\n  _headerTitle.textContent = \"Blog\";\n} // SHOW MORE POSTS BUTTON\n\n\nvar moreButton = document.querySelector('#more');\n\nif (document.body.contains(moreButton)) {\n  $(document).ready(function () {\n    var numToShow;\n\n    if (window.innerWidth >= 1650) {\n      numToShow = 8;\n    } else {\n      numToShow = 6;\n    }\n\n    var list = $(\".blog__item\");\n    var button = $(\"#more\");\n    var numInList = list.length;\n    list.hide();\n\n    if (numInList > numToShow) {\n      button.show();\n    }\n\n    list.slice(0, numToShow).show();\n    button.click(function (e) {\n      e.preventDefault();\n      var showing = list.filter(':visible').length;\n      list.slice(showing - 1, showing + numToShow).fadeIn();\n      var nowShowing = list.filter(':visible').length;\n\n      if (nowShowing >= numInList) {\n        button.hide();\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://webpack-starter/./resources/js/index.js?");

/***/ }),

/***/ "./assets/img/contact/map.png":
/*!************************************!*\
  !*** ./assets/img/contact/map.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"../img/map.png\");\n\n//# sourceURL=webpack://webpack-starter/./assets/img/contact/map.png?");

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./resources/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./resources/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;