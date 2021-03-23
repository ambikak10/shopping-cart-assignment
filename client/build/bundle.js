/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_HomeScreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/HomeScreen.js */ \"./src/screens/HomeScreen.js\");\n/* harmony import */ var _screens_LoginScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/LoginScreen.js */ \"./src/screens/LoginScreen.js\");\n/* harmony import */ var _screens_ProductsScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/ProductsScreen.js */ \"./src/screens/ProductsScreen.js\");\n/* harmony import */ var _screens_Error404Screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/Error404Screen.js */ \"./src/screens/Error404Screen.js\");\n/* harmony import */ var _screens_SignupScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/SignupScreen.js */ \"./src/screens/SignupScreen.js\");\n/* harmony import */ var _supportingJSFiles_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supportingJSFiles/utils.js */ \"./src/supportingJSFiles/utils.js\");\n\n\n\n\n\n\nconst routes = {\n  \"/\": _screens_LoginScreen_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  \"/home\": _screens_HomeScreen_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  \"/products\": _screens_ProductsScreen_js__WEBPACK_IMPORTED_MODULE_2__.default,\n  \"/signup\": _screens_SignupScreen_js__WEBPACK_IMPORTED_MODULE_4__.default,\n  \"/login\": _screens_LoginScreen_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  \"/products/:id\": _screens_ProductsScreen_js__WEBPACK_IMPORTED_MODULE_2__.default\n};\n\nconst router = async () => {\n  const request = (0,_supportingJSFiles_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseRequestUrl)();\n  var parseUrl = (request.resource ? `/${request.resource}` : \"/\") + (request.id ? \"/:id\" : \"\") + (request.verb ? `/${request.verb}` : \"\");\n  const screen = routes[parseUrl] ? routes[parseUrl] : _screens_Error404Screen_js__WEBPACK_IMPORTED_MODULE_3__.default; // console.log(window.isValidUser);\n  // let screen;\n  // if (window.isValidUser) {\n  //   console.log(window.isValidUser)\n  //   console.log(parseUrl)\n  //   if (\n  //     (parseUrl == \"/home\" ||\n  //     parseUrl == \"/products\" ||\n  //     parseUrl == \"/products/:id\")\n  //   ) {\n  //     screen = routes[parseUrl];\n  //   } else if (parseUrl == \"/\" || parseUrl == \"/signup\") {\n  //     console.log(window.isValidUser)\n  //     screen = routes[\"/home\"];\n  //   } else if (parseUrl == \"/login\") {\n  //     screen = routes[parseUrl];\n  //   } else {\n  //     screen = Error404Screen;\n  //   }\n  // } else {\n  //   if (\n  //     parseUrl == \"/home\" ||\n  //     parseUrl == \"/products\" ||\n  //     parseUrl == \"/\" ||\n  //     parseUrl == \"/login\" ||\n  //     parseUrl == \"/products/:id\"\n  //   ) {\n  //     screen = routes[\"/login\"];\n  //   } else if (parseUrl == \"/signup\") {\n  //     screen = routes[\"/signup\"];\n  //   } else {\n  //     screen = Error404Screen;\n  //   }\n  // }\n\n  const res = await fetch(\"http://localhost:5000/api/cart/items\", {\n    headers: {\n      \"Content-type\": \"application/json\"\n    }\n  });\n  const cartItems = await res.json();\n  const totalItems = cartItems.allItems ? cartItems.allItems.length : 0;\n\n  if (totalItems) {\n    document.getElementById(\"items\").innerHTML = `${totalItems}  items`;\n  }\n\n  ;\n  const main = document.getElementById(\"middle\");\n  main.innerHTML = await screen.render();\n  if (screen.after_render) screen.after_render(window);\n};\n\nwindow.addEventListener(\"load\", router);\nwindow.addEventListener(\"hashchange\", router);\n\n//# sourceURL=webpack://client/./src/index.js?");

/***/ }),

/***/ "./src/screens/Error404Screen.js":
/*!***************************************!*\
  !*** ./src/screens/Error404Screen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error404Screen = {\n  render: () => {\n    return `\n    <div>Page Not Found</div>`;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404Screen);\n\n//# sourceURL=webpack://client/./src/screens/Error404Screen.js?");

/***/ }),

/***/ "./src/screens/HomeScreen.js":
/*!***********************************!*\
  !*** ./src/screens/HomeScreen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst HomeScreen = {\n  after_render: () => {\n    $(document).ready(function () {\n      $(\".carousel\").slick({\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        dots: true,\n        arrows: true\n      });\n    });\n  },\n  render: async () => {\n    const resCategories = await fetch(\"http://localhost:5000/api/categories\", {\n      headers: {\n        \"Content-type\": \"application/json\"\n      }\n    });\n\n    if (!resCategories || !resCategories.ok) {\n      return \"<div>Error in getting products</div>\";\n    }\n\n    const resBanners = await fetch(\"http://localhost:5000/api/banners\", {\n      headers: {\n        \"Content-type\": \"application/json\"\n      }\n    });\n\n    if (!resBanners || !resBanners.ok) {\n      return \"<div>Error </div>\";\n    }\n\n    const categories = await resCategories.json();\n\n    if (categories && categories.length > 0) {\n      categories.sort(function (a, b) {\n        return a.order - b.order;\n      });\n    }\n\n    const banners = await resBanners.json();\n    return `\n      <div class='container container-slick'>\n       <div class=\"carousel\">\n      ${banners.map((item, index) => {\n      return `\n              <img\n                src=${item.bannerImageUrl}\n                alt=${item.bannerImageAlt}\n              />`;\n    }).join(\"\\n\")}\n         </div>\n          <div class='fancy-line'></div>\n        \n        ${categories && categories.length > 0 && categories.map((item, index) => {\n      if (index % 2 === 0) {\n        return `\n                <div tabindex ='0'class='row' aria-label=\"category section in home page\">\n                  <div class='home-categories'>\n                    <img tabindex ='0'class='category-image' src='${item.imageUrl}' alt=${item.name}/>\n                    <div id=\"details-section\">\n                      <h1 tabindex ='0'>${item.name}</h1>\n                      <div tabindex ='0'>\n                        ${item.description}\n                      </div>\n\n                   <button role=\"navigation\"onclick=\"window.location.href='/client/#/products/${item.id}'\"  type='submit'>\n                        Explore ${item.key}\n                      </button>\n                    </div>\n                  </div>\n                  <div class='fancy-line'></div>\n                </div>`;\n      } else {\n        return `\n                <div class='row'tabindex ='0'>\n                  <div class='home-categories'aria-label=\"category section in home page\">\n                    <div id=\"details-section\">\n                      <h1 tabindex ='0'>${item.name}</h1>\n                      <div tabindex ='0'>\n                        ${item.description}\n                      </div>\n                      <button role=\"navigation\" onclick=\"window.location.href='/client/#/products/${item.id}'\" type='submit'>\n                        Explore ${item.key}\n                      </button>\n                    </div>\n                    <img class='category-image'tabindex ='0'\n                      src=${item.imageUrl} alt=${item.name}\n                    />\n                  </div>\n                  <div class='fancy-line'></div>\n                </div>`;\n      }\n    }).join(\"\\n\")}\n      </div>`;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\n\n//# sourceURL=webpack://client/./src/screens/HomeScreen.js?");

/***/ }),

/***/ "./src/screens/LoginScreen.js":
/*!************************************!*\
  !*** ./src/screens/LoginScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst LoginScreen = {\n  after_render: () => {\n    const password = document.getElementById(\"password\");\n    const form = document.getElementById(\"loginForm\");\n    const email = document.getElementById(\"login-email\");\n    const errorElement = document.getElementById(\"error\");\n    let numbers = /[0-9]/g;\n    let alphabets = /[a-zA-Z]/g;\n    let isAuthenticated;\n    isAuthenticated = form.addEventListener(\"submit\", async e => {\n      // let messages = [];\n      // if (password.value.length < 6) {\n      //   messages.push(\"Password must be atleast 6 characters\");\n      // }\n      // if (password.value.indexOf(\" \") >= 0) {\n      //   messages.push(\"Password must not have space\");\n      // }\n      // if (!password.value.match(numbers)) {\n      //   messages.push(\"Password must have atleast one number\");\n      // }\n      // if (!password.value.match(alphabets)) {\n      //   messages.push(\"Password must have atleast one character\");\n      // }\n      // if (messages.length > 0) {\n      //   e.preventDefault();\n      //   errorElement.innerText = messages.join(\", \");\n      // } else  {\n      e.preventDefault();\n      fetch(\"http://localhost:5000/api/login\", {\n        method: \"POST\",\n        // Adding body or contents to send\n        body: JSON.stringify({\n          email: email.value,\n          password: password.value\n        }),\n        // Adding headers to the request\n        headers: {\n          \"Content-type\": \"application/json\"\n        }\n      }).then(response => response.json()).then(body => {\n        console.log(body);\n\n        if (body.err) {\n          alert(body.err);\n        } else if (body.isAuthenticated) {\n          // window.isValidUser = body.isAuthenticated;\n          isAuthenticated = body.isAuthenticated; //console.log(isValidUser)\n\n          window.location.href = '/client/#/home';\n          return isAuthenticated;\n        }\n      }); // }\n    }); // .then((window) => {\n    //   window.isAuthenticated = true;\n    // }).catch(err => {\n    //   console.log(err);\n    // });\n\n    console.log(isAuthenticated);\n    console.log(window.isValidUser);\n    window.isValidUser = isAuthenticated;\n  },\n  render: () => {\n    return `\n    <div class='login'>\n        <div class=\"d-none d-sm-block d-sm-none d-md-block\" tabindex='0'>\n          Login\n        <div>\n          Get access to your orders, Wishlist and Recommednations\n        </div>\n        </div>\n        <form id=\"loginForm\">\n    <div class='fields'>\n      <label class='field' >Email</label>\n      <input id=\"login-email\"type='email' size='40' aria-required=\"true\" required>\n      <label class='field'> Password</label>\n      <input  aria-required=\"true\" size='40'id=\"password\"\n      required>\n      <button class='authButton' aria-label=\"Login form submission\" size='40'type='submit'  value='Log In'>Log In</button />\n    </div>\n   \n    </form>\n  \n  </div>\n     <div tabindex=\"0\"aria-live=\"assertive\" role=\"alert\" id=\"error\"></div>\n</div>`;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginScreen);\n\n//# sourceURL=webpack://client/./src/screens/LoginScreen.js?");

/***/ }),

/***/ "./src/screens/ProductsScreen.js":
/*!***************************************!*\
  !*** ./src/screens/ProductsScreen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supportingJSFiles_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supportingJSFiles/utils.js */ \"./src/supportingJSFiles/utils.js\");\n\nconst ProductsScreen = {\n  after_render: () => {// if (item.id === _id) {\n    //   document.getElementById(\"option1\").value = `${item.name}`;\n    // } \n  },\n  render: async () => {\n    const resCategories = await fetch(\"http://localhost:5000/api/categories\", {\n      headers: {\n        \"Content-type\": \"application/json\"\n      }\n    });\n\n    if (!resCategories || !resCategories.ok) {\n      return \"<div>Error in getting products</div>\";\n    }\n\n    const categories = await resCategories.json();\n    const resProducts = await fetch(\"http://localhost:5000/api/products\", {\n      headers: {\n        \"Content-type\": \"application/json\"\n      }\n    });\n\n    if (!resProducts || !resProducts.ok) {\n      return \"<div>Error in getting products</div>\";\n    }\n\n    let products = await resProducts.json();\n    const request = (0,_supportingJSFiles_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseRequestUrl)();\n    let _id = request.id;\n\n    if (_id) {\n      products = products.filter(item => {\n        return item.category === _id;\n      });\n    }\n\n    return `\n    <div class='my-container'>\n      <div class='row'>\n        <div tabindex='0' role=\"navigation\" aria-label=\"category list in product page\"class='col-xxl-3 col-lg-3 col-md-3 productPage-categories'>\n          ${categories.map(item => {\n      return `\n             ${item.id === _id ? `<div id=\"highlight\">\n                <a href='/client/#/products/${item.id}'>${item.name}</a>\n              </div>` : `<div>\n                <a href='/client/#/products/${item.id}'>${item.name}</a>\n              </div>`}`;\n    }).join(\"\\n\")}\n\n        </div>\n        <div class='col-lg-9'>\n          <div class='custom-row'>\n            ${products.map(item => {\n      return `\n                <div class='lg-3 products-page-card' aria-label=\"product-details\" tabindex='0'>\n                  <p  tabindex='0'>${item.name}</p>\n                  <img src=${item.imageURL}  tabindex='0' alt=${item.name}/>\n                  <section  tabindex='0'>${item.description}</section>\n                  <div>\n                    <span  tabindex='0'>MRP Rs.${item.price}</span>\n                    <button id=\"buy-now\" onclick=\"return addToCart('${item.id}', null)\">\n                      Buy Now\n                    </button>\n                  </div>\n                </div>`;\n    }).join(\"\\n\")}\n          </div>\n        </div>\n      </div>\n    </div>\n   \n    <div class=\"mobile-view\">\n    <select id=\"mySelect\" name=\"categories\" onchange=\"return selectChangeHandler()\" >\n    <option>Categories</option>\n     ${categories.map(item => {\n      if (item.id === _id) {\n        return `<option selected=\"true\"value=${item.id}>${item.name}</option>`;\n      } else {\n        return `<option value=${item.id}>${item.name}</option>`;\n      }\n    })})\n       .join(\"\\n\")}\n    </select></div>\n      \n  <div class=\"mobile-view container-fluid\">\n      ${products.map(item => {\n      return `\n            <div class=\"row\">\n          \n     <p>${item.name}</p>\n      <div class=\"col-6\">\n   <img src=${item.imageURL}  tabindex='0' alt=${item.name}>\n     </div>\n        <div class=\"col-6 desc\">\n         <section  tabindex='0'>${item.description}</section>\n         <button id=\"buy-now\" onclick=\"return addToCart('${item.id}', null, null)\">Buy now @ MRP Rs.${item.price}</button>\n         </div>\n     </div>\n     `;\n    }).join(\"\\n\")}\n        </div>\n       \n        \n     `;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsScreen); // style = \"border-bottom: 0.09px dotted rgb(202, 199, 199)\";\n\n//# sourceURL=webpack://client/./src/screens/ProductsScreen.js?");

/***/ }),

/***/ "./src/screens/SignupScreen.js":
/*!*************************************!*\
  !*** ./src/screens/SignupScreen.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SignupScreen = {\n  after_render: window => {\n    const password1 = document.getElementById(\"password1\");\n    const password2 = document.getElementById(\"password2\");\n    const email = document.getElementById(\"signup-email\");\n    const form = document.getElementById(\"signupForm\");\n    const errorElement = document.getElementById(\"error\");\n    let numbers = /[0-9]/g;\n    let alphabets = /[a-zA-Z]/g;\n    form.addEventListener(\"submit\", e => {\n      let messages = [];\n\n      if (password1.value.length < 6) {\n        messages.push(\"Password must be atleast 6 characters\");\n      }\n\n      if (password1.value.indexOf(\" \") >= 0) {\n        messages.push(\"Password must not have space\");\n      }\n\n      if (!password1.value.match(numbers)) {\n        messages.push(\"Password must have atleast one number\");\n      }\n\n      if (!password1.value.match(alphabets)) {\n        messages.push(\"Password must have atleast one alphabet\");\n      }\n\n      if (password2.value.length) {\n        if (password1.value !== password2.value) {\n          messages.push(\"Passwords must match\");\n        }\n      }\n\n      if (messages.length > 0) {\n        e.preventDefault();\n        errorElement.innerText = messages.join(\", \");\n      } else {\n        e.preventDefault();\n        fetch(\"http://localhost:5000/api/signup\", {\n          method: \"POST\",\n          // Adding body or contents to send\n          body: JSON.stringify({\n            email: email.value,\n            password: password1.value\n          }),\n          // Adding headers to the request\n          headers: {\n            \"Content-type\": \"application/json\"\n          }\n        }).then(response => response.json()).then(body => {\n          if (body.err) {\n            alert(body.err);\n          } else {\n            console.log(window.isValidUser);\n            window.isValidUser = true;\n            console.log(window.isValidUser);\n            window.location.href = \"/client/#/home\";\n          }\n        });\n      }\n    });\n  },\n  render: () => {\n    return `\n      <div class='container'>\n      <div class='login'>\n        <div class=\"d-none d-sm-block d-sm-none d-md-block\" tabindex='0'>\n          Signup\n           <div>\n            We do not share your personal details with anyone\n          </div>\n        </div>\n         <form id=\"signupForm\" action=\"/client/#/home\" onsubmit=''>\n        <div class='fields'>\n          <label class='field'>First Name</label>\n          <input type='text' aria-label=\"First name\" size='40' aria-required=\"true\"  required>\n          <label class='field'> Last name</label>\n          <input type='text' size='40'aria-required=\"true\"  aria-label=\"Last name\" required>\n\n          <label class='field'>Email</label>\n          <input type='email' aria-required=\"true\" id=\"signup-email\" size='40' required>\n          <label class='field' >Password</label>\n          <input  id=\"password1\"aria-required=\"true\" size='40'required>\n          <label class='field'>Confirm Password</label>\n          <input type='text' id=\"password2\" size='40'aria-required=\"true\" aria-label=\"Confirm password\"required>\n          <input \n            class='authButton'\n            type='submit'\n            size='40'\n            value='Signup'\n            aria-label=\"signup form submission\"\n          />\n        </div>   \n        </form>\n      </div>\n        <div aria-live=\"assertive\" role=\"alert\" id=\"error\"></div>\n    </div>\n    `;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupScreen);\n\n//# sourceURL=webpack://client/./src/screens/SignupScreen.js?");

/***/ }),

/***/ "./src/supportingJSFiles/utils.js":
/*!****************************************!*\
  !*** ./src/supportingJSFiles/utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseRequestUrl\": () => (/* binding */ parseRequestUrl)\n/* harmony export */ });\nconst parseRequestUrl = () => {\n  const url = document.location.hash.toLowerCase();\n  const request = url.split(\"/\");\n  return {\n    resource: request[1],\n    id: request[2],\n    verb: request[3]\n  };\n};\n\n//# sourceURL=webpack://client/./src/supportingJSFiles/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;