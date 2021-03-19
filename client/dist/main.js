/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_HomeScreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/HomeScreen.js */ \"./src/screens/HomeScreen.js\");\n/* harmony import */ var _screens_LoginScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/LoginScreen.js */ \"./src/screens/LoginScreen.js\");\n/* harmony import */ var _screens_ProductsScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/ProductsScreen.js */ \"./src/screens/ProductsScreen.js\");\n/* harmony import */ var _screens_Error404Screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/Error404Screen.js */ \"./src/screens/Error404Screen.js\");\n/* harmony import */ var _screens_SignupScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/SignupScreen.js */ \"./src/screens/SignupScreen.js\");\n/* harmony import */ var _screens_CartScreen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/CartScreen.js */ \"./src/screens/CartScreen.js\");\n/* harmony import */ var _supportingJSFiles_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supportingJSFiles/utils.js */ \"./src/supportingJSFiles/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst routes = {\r\n  \"/\": _screens_LoginScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  \"/home\": _screens_HomeScreen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n  \"/products\": _screens_ProductsScreen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  \"/signup\": _screens_SignupScreen_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n  \"/cart\": _screens_CartScreen_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n  \"/login\": _screens_LoginScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  \"/products/:id\": _screens_ProductsScreen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n};\r\nconst router = async() => {\r\n const request = Object(_supportingJSFiles_utils_js__WEBPACK_IMPORTED_MODULE_6__[\"parseRequestUrl\"])();\r\n const parseUrl =\r\n   (request.resource ? `/${request.resource}` : \"/\") \r\n   +\r\n   (request.id ? \"/:id\" : \"\") +\r\n   (request.verb ? `/${request.verb}` : \"\");\r\n  const screen = routes[parseUrl] ? routes[parseUrl] : _screens_Error404Screen_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n  const main = document.getElementById('middle');\r\n  main.innerHTML = await screen.render();\r\n  if (screen.after_render) screen.after_render();\r\n  if (screen.increment) screen.increment();\r\n\r\n}\r\nwindow.addEventListener(\"load\", router);\r\nwindow.addEventListener(\"hashchange\", router);\r\n\r\n\r\n\r\n\r\n\r\n\r\n  // if(screen.slick) screen.slickcarousel();\r\n\r\n    // const numberOfItemsInCart = await fetch(\r\n    //   \"http://localhost:5000/api/cart/numberOfItems\",\r\n    //   {\r\n    //     headers: {\r\n    //       \"Content-type\": \"application/json\",\r\n    //     },\r\n    //   }\r\n    // );\r\n    // console.log(\"cart items fetch\");\r\n    // const items = numberOfItemsInCart.length;\r\n    // document.getElementById(\"item\").innerText = items;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/screens/CartScreen.js":
/*!***********************************!*\
  !*** ./src/screens/CartScreen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CartScreen = {\r\n  render: async () => {\r\n    const res = await fetch(\"http://localhost:5000/api/cart/items\", {\r\n      headers: {\r\n        \"Content-type\": \"application/json\",\r\n      },\r\n    });\r\n\r\n    if (!res || !res.ok) {\r\n      return \"<div>Error in getting products</div>\";\r\n    }\r\n    const cartItems = await res.json();\r\n    const totalItems = cartItems.allItems ? cartItems.allItems.length : 0;\r\n    if (cartItems.allItems) {\r\n      var map = cartItems.allItems.reduce(function (obj, b) {\r\n        obj[b] = ++obj[b] || 1;\r\n        return obj;\r\n      }, {});\r\n    }\r\n    var cartTotal = 0;\r\n    if (cartItems.filteredItems) var itemInCart = cartItems.filteredItems;\r\n    for(let i = 0; i < itemInCart.length; i++){\r\n      if(itemInCart[i].id in map){\r\n        cartTotal = cartTotal + itemInCart[i].price * map[itemInCart[i].id];\r\n      }\r\n    }\r\n    if (totalItems !== 0) {\r\n      return `\r\n    <div class='center'>\r\n      <div class='cartcard'>\r\n        <div class='flex-box'>\r\n          <div class='cart-flex-nav'>\r\n            <p>\r\n              My Cart <span id=\"nav-total\">( ${totalItems}  items )</span>\r\n              <button class='close-x'onclick=\"return clearAll()\">X</button>\r\n            </p>\r\n          </div>\r\n          <div class=\"wrapping\">\r\n          ${itemInCart\r\n            .map((item, index) => {\r\n              return `\r\n          \r\n             <div class='cart-items ${item.id}'>\r\n            <div class='lg-3'>\r\n              <img class='apple' src=${item.imageURL} alt=${item.name}/>\r\n            </div>\r\n            <div class='lg-7 '>\r\n              <p>${item.name}</p>\r\n              <button class='decrement' onclick=\"return removeFromCart('${\r\n                item.id\r\n              }', ${item.price}, '${item.sku}')\">\r\n                  <span class=\"plusOrMinus\">-</span>\r\n                </button>\r\n                <span class='qt' id=${item.id}>${map[item.id]}</span>\r\n                <button class='increment'onclick=\"return addToCart('${\r\n                  item.id\r\n                }', ${item.price}, '${item.sku}')\">\r\n                  <span class=\"plusOrMinus\">+</span>\r\n                </button>\r\n                <span class=\"price\"> X&nbsp;&nbsp;&nbsp; Rs.<span class=\" ${\r\n                  item.sku\r\n                }\r\n                }\">${item.price} \r\n                </span><span>\r\n              \r\n            </div>\r\n            <span class='lg-2 rupees'>Rs. <span class=\"item-cost\"id=${\r\n              item.sku\r\n            }>${item.price * map[item.id]}</span></span>\r\n          </div>`;\r\n            })\r\n            .join(\"\\n\")}\r\n             </div>\r\n\r\n          <div class='wont-find-cheaper'>\r\n            <img src=\"http://127.0.0.1:5500/static/images/lowest-price.png\"/>\r\n          \r\n            <span>You won't find it cheaper anywhere</span>\r\n          </div>\r\n\r\n          <div class='cart-footer'>\r\n            <p>Promo code can be applied on payment change</p>\r\n            <button onclick=\"window.history.back()\" type='submit'>\r\n              <span>Proceed to checkout</span>\r\n              <span class=\"rs\">Rs.</span>\r\n              <span id=\"cart-price\">${cartTotal}</span>\r\n              <p class=\"gt\">&gt<p>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>`;\r\n    } else {\r\n      return `\r\n           <div class='center'>\r\n      <div class='cartcard'>\r\n        <div class='flex-box-empty'>\r\n          <div class='cart-flex-nav'>\r\n            <p>\r\n              My Cart\r\n              <button onclick=\"window.history.back()\" class='close-x'>X</button>\r\n            </p>\r\n          </div>\r\n          <div\r\n            style=\"\r\n              display: flex;\r\n              justify-content: center;\r\n              align-items: center;\r\n              height: 500px;\r\n              text-align: center;\r\n            \"\r\n          >\r\n            <section>\r\n              \r\n              <p style=\"marginBottom: -4px; font-size:1.2rem\">No items in your cart</p>\r\n              <p\r\n                style=\"display: \"inline-block\";\r\n                  font-weight: 100;font-size:1rem;\"\r\n              \r\n              >\r\n                Your favourite items are just a click away.\r\n              </p>\r\n            </section>\r\n\r\n            <div class='cart-footer' style=\" border-top: transparent\">\r\n              <button onclick=\"window.location.href='/#/products'\"  style='margin-top:40px'type='submit'>\r\n                Start Shopping        \r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      `;\r\n    }\r\n  },\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartScreen);\r\n\n\n//# sourceURL=webpack:///./src/screens/CartScreen.js?");

/***/ }),

/***/ "./src/screens/Error404Screen.js":
/*!***************************************!*\
  !*** ./src/screens/Error404Screen.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Error404Screen = {\r\n  render: () => {\r\n    return `\r\n    <div>Page Not Found</div>`;\r\n  },\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error404Screen);\r\n\n\n//# sourceURL=webpack:///./src/screens/Error404Screen.js?");

/***/ }),

/***/ "./src/screens/HomeScreen.js":
/*!***********************************!*\
  !*** ./src/screens/HomeScreen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HomeScreen = {\r\n  after_render: () => {\r\n            $(document).ready(function () {\r\n              $(\".carousel\").slick({\r\n                slidesToShow: 1,\r\n                slidesToScroll: 1,\r\n                dots: true,\r\n                // infinite: true,\r\n                // cssEase: \"linear\",\r\n                arrow: true,\r\n              });\r\n            });\r\n  },\r\n  render: async () => {\r\n     const resCategories = await fetch(\"http://localhost:5000/api/categories\", {\r\n       headers: {\r\n         \"Content-type\": \"application/json\",\r\n       },\r\n     });\r\n     if (!resCategories || !resCategories.ok) {\r\n       return \"<div>Error in getting products</div>\";\r\n     }\r\n     const resBanners = await fetch(\"http://localhost:5000/api/banners\", {\r\n       headers: {\r\n         \"Content-type\": \"application/json\",\r\n       },\r\n     });\r\n     if (!resBanners || !resBanners.ok) {\r\n       return \"<div>Error </div>\";\r\n     }\r\n     const categories = await resCategories.json();\r\n     if (categories && categories.length > 0) {\r\n       categories.sort(function (a, b) {\r\n         return a.order - b.order;\r\n       });\r\n     }\r\n    const banners = await resBanners.json();\r\n    return `\r\n      <div class='container container-slick'>\r\n       <div class=\"carousel\">\r\n      ${banners\r\n        .map((item, index) => {\r\n          return `\r\n              <img\r\n                src=${item.bannerImageUrl}\r\n                alt=${item.bannerImageAlt}\r\n              />`;\r\n        })\r\n        .join(\"\\n\")}\r\n         </div>\r\n          <div class='fancy-line'></div>\r\n        \r\n        ${\r\n          categories &&\r\n          categories.length > 0 &&\r\n          categories\r\n            .map((item, index) => {\r\n              if (index % 2 === 0) {\r\n                return `\r\n                <div class='row'>\r\n                  <div class='home-categories' aria-label=\"category section in home page\">\r\n                    <img class='category-image' src='${item.imageUrl}'/>\r\n                    <div style='text-align: center'>\r\n                      <p id=\"homepage-itemname\">${item.name}</p>\r\n                      <div style='word-wrap: break-word; width: 390px;font-size: 1.1rem'>\r\n                        ${item.description}\r\n                      </div>\r\n\r\n                   <button role=\"navigation to category products\"onclick=\"window.location.href='/#/products/${item.id}'\" class='homeCategoriesButton' type='submit'>\r\n                        Explore ${item.key}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <div class='fancy-line'></div>\r\n                </div>`;\r\n              } else {\r\n                return `\r\n                <div class='row'>\r\n                  <div class='home-categories'aria-label=\"category section in home page\">\r\n                    <div style='text-align:center'>\r\n                      <p id=\"homepage-itemname\">${item.name}</p>\r\n                      <div style='word-break: break-word; width: 380px; font-size: 1.1rem'>\r\n                        ${item.description}\r\n                      </div>\r\n                      <button role=\"navigation to category products\" onclick=\"window.location.href='/#/products/${item.id}'\" class='homeCategoriesButton' type='submit'>\r\n                        Explore ${item.key}\r\n                      </button>\r\n                    </div>\r\n                    <img class='category-image'\r\n                      src=${item.imageUrl}\r\n                    />\r\n                  </div>\r\n                  <div class='fancy-line'></div>\r\n                </div>`;\r\n              }\r\n            })\r\n            .join(\"\\n\")\r\n        }\r\n      </div>`;\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeScreen);\r\n\r\n    \r\n\n\n//# sourceURL=webpack:///./src/screens/HomeScreen.js?");

/***/ }),

/***/ "./src/screens/LoginScreen.js":
/*!************************************!*\
  !*** ./src/screens/LoginScreen.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LoginScreen = {\r\n  after_render: () => {\r\n    const password = document.getElementById(\"password\");\r\n    const form = document.getElementById(\"loginForm\");\r\n    const errorElement = document.getElementById(\"error\");\r\n    var numbers = /[0-9]/g;\r\n    var alphabets = /[a-zA-Z]/g;\r\n    form.addEventListener(\"submit\", (e) => {\r\n      var messages = [];\r\n\r\n      if (password.value.length < 6) {\r\n        messages.push(\"Password must be atleast 6 characters\");\r\n      }\r\n\r\n      if (password.value.indexOf(\" \") >= 0) {\r\n        messages.push(\"Password must not have space\");\r\n      }\r\n\r\n      if (!password.value.match(numbers)) {\r\n        messages.push(\"Password must have atleast one number\");\r\n      }\r\n      if (!password.value.match(alphabets)) {\r\n        messages.push(\"Password must have atleast one character\");\r\n      }\r\n      if (messages.length > 0) {\r\n        e.preventDefault();\r\n        errorElement.innerText = messages.join(\", \");\r\n      }\r\n      console.log(messages);\r\n    });\r\n\r\n  },\r\n     render: () => {\r\n return `\r\n    <div class='login'>\r\n        <div style=\"color: black;  font-size: 1.4rem;  font-weight: bold\">\r\n          Login\r\n        <div style=\"color: grey; font-size: 1.1rem; font-weight: bold\">\r\n          Get access to your orders, Wishlist and Recommednations\r\n        </div>\r\n        </div>\r\n        <form id=\"loginForm\" action=\"/#/home\" onsubmit=''>\r\n    <div class='fields'>\r\n      <label class='field' >Email</label>\r\n      <input type='email' size='30' aria-required=\"true\" required>\r\n      <label class='field'> Password</label>\r\n      <input type='password' aria-required=\"true\" size='30'id=\"password\"\r\n      required>\r\n      <button class='authButton' aria-label=\"Login form submission\" type='submit'  value='Log In'>Log In</button />\r\n    </div>\r\n   \r\n    </form>\r\n  \r\n  </div>\r\n     <div tabindex=\"0\"aria-live=\"assertive\" role=\"alert\" id=\"error\"></div>\r\n</div>`; \r\n     }\r\n    }\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginScreen);\n\n//# sourceURL=webpack:///./src/screens/LoginScreen.js?");

/***/ }),

/***/ "./src/screens/ProductsScreen.js":
/*!***************************************!*\
  !*** ./src/screens/ProductsScreen.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supportingJSFiles_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supportingJSFiles/utils.js */ \"./src/supportingJSFiles/utils.js\");\n\r\n\r\nconst ProductsScreen = {\r\n  render: async () => {\r\n    const resCategories = await fetch(\"http://localhost:5000/api/categories\", {\r\n      headers: {\r\n        \"Content-type\": \"application/json\",\r\n      },\r\n    });\r\n    if (!resCategories || !resCategories.ok) {\r\n      return \"<div>Error in getting products</div>\";\r\n    }\r\n    const categories = await resCategories.json();\r\n\r\n    const resProducts = await fetch(\"http://localhost:5000/api/products\", {\r\n      headers: {\r\n        \"Content-type\": \"application/json\",\r\n      },\r\n    });\r\n    if (!resProducts || !resProducts.ok) {\r\n      return \"<div>Error in getting products</div>\";\r\n    }\r\n    var products = await resProducts.json();\r\n    const request = Object(_supportingJSFiles_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"parseRequestUrl\"])();\r\n    var _id = request.id;\r\n    if (_id) {\r\n      products = products.filter((item) => {\r\n        return item.category === _id;\r\n      });\r\n    }\r\n\r\n    return `\r\n    <div class='container'>\r\n      <div class='row'>\r\n        <div aria-label=\"category list in product page\"class='col-xxl-3 col-lg-3 col-md-3 productPage-categories'>\r\n          ${categories\r\n            .map((item) => {\r\n              return `\r\n             ${item.id === _id ?  `<div id=\"highlight\">\r\n                <a href='/#/products/${item.id}'>${item.name}</a>\r\n              </div>`: `<div>\r\n                <a href='/#/products/${item.id}'>${item.name}</a>\r\n              </div>`}`\r\n            })\r\n            .join(\"\\n\")}\r\n\r\n        </div>\r\n        <div class='col-lg-9'>\r\n          <div class='custom-row'>\r\n            ${products\r\n              .map((item) => {\r\n                return `\r\n                <div class='lg-3 products-page-card'>\r\n                  <p>${item.name}</p>\r\n                  <img src=${item.imageURL} alt=${item.name}/>\r\n                  <section>${item.description}</section>\r\n                  <div>\r\n                    <span>MRP Rs.${item.price}</span>\r\n                    <button id=\"buy-now\" onclick=\"return addToCart('${item.id}', null, null)\">\r\n                      Buy Now\r\n                    </button>\r\n                  </div>\r\n                </div>`;\r\n              })\r\n              .join(\"\\n\")}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>`;\r\n  },\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsScreen);\r\n\n\n//# sourceURL=webpack:///./src/screens/ProductsScreen.js?");

/***/ }),

/***/ "./src/screens/SignupScreen.js":
/*!*************************************!*\
  !*** ./src/screens/SignupScreen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SignupScreen = {\r\n  after_render: () => {\r\n  const password1 = document.getElementById(\"password1\");\r\n  const password2 = document.getElementById(\"password2\");\r\n  const form = document.getElementById(\"signupForm\");\r\n  const errorElement = document.getElementById(\"error\");\r\n  var numbers = /[0-9]/g;\r\n  var alphabets = /[a-zA-Z]/g;\r\n  form.addEventListener(\"submit\", (e) => {\r\n    var messages = [];\r\n\r\n    if (password1.value.length < 6) {\r\n      messages.push(\"Password must be atleast 6 characters\");\r\n    }\r\n\r\n    if (password1.value.indexOf(\" \") >= 0) {\r\n      messages.push(\"Password must not have space\");\r\n    }\r\n\r\n    if (!password1.value.match(numbers)) {\r\n      messages.push(\"Password must have atleast one number\");\r\n    }\r\n    if (!password1.value.match(alphabets)) {\r\n      messages.push(\"Password must have atleast one character\");\r\n    }\r\n    if (password2.value.length) {\r\n      if (password1.value !== password2.value) {\r\n        messages.push(\"Passwords must match\");\r\n      }\r\n    }\r\n    if (messages.length > 0) {\r\n      e.preventDefault();\r\n      errorElement.innerText = messages.join(\", \");\r\n    }\r\n  });\r\n  },\r\n  render: () => {\r\n    return `\r\n      <div class='container'>\r\n      <div class='login'>\r\n        <div style=\"color: black; font-size: 1.4rem; font-weight: bold\">\r\n          Signup\r\n           <div style=\"color: grey; font-size: 1.1rem; font-weight: bold\">\r\n            We do not share your personal details with anyone\r\n          </div>\r\n        </div>\r\n         <form id=\"signupForm\" action=\"/#/home\" onsubmit=''>\r\n        <div class='fields'>\r\n          <label class='field'>First Name</label>\r\n          <input type='text' aria-label=\"First name\" size='30' aria-required=\"true\"  required></input>\r\n          <label class='field'> Last name</label>\r\n          <input type='text' size='30'aria-required=\"true\"  aria-label=\"Last name\" required></input>\r\n\r\n          <label class='field'>Email</label>\r\n          <input type='email' aria-required=\"true\"  size='30' required></input>\r\n          <label class='field'>Password</label>\r\n          <input type='password' id=\"password1\" size='30'aria-required=\"true\"  required></input>\r\n          <label class='field'>Confirm Password</label>\r\n          <input type='password' id=\"password2\"  size='30'aria-required=\"true\" aria-label=\"Confirm password\"required></input>\r\n          <input\r\n            class='authButton'\r\n            type='submit'\r\n            size='30'\r\n            value='Signup'\r\n            aria-label=\"signup form submission\"\r\n          />\r\n        </div>   \r\n        </form>\r\n      </div>\r\n        <div tabindex=\"0\"aria-live=\"assertive\" role=\"alert\" id=\"error\"></div>\r\n    </div>\r\n    `;\r\n  },\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupScreen);\r\n\n\n//# sourceURL=webpack:///./src/screens/SignupScreen.js?");

/***/ }),

/***/ "./src/supportingJSFiles/utils.js":
/*!****************************************!*\
  !*** ./src/supportingJSFiles/utils.js ***!
  \****************************************/
/*! exports provided: parseRequestUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseRequestUrl\", function() { return parseRequestUrl; });\nconst parseRequestUrl = () => {\r\n  const url = document.location.hash.toLowerCase();\r\n  const request = url.split(\"/\");\r\n  return {\r\n    resource: request[1],\r\n    id: request[2],\r\n    verb: request[3],\r\n  };\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/supportingJSFiles/utils.js?");

/***/ })

/******/ });