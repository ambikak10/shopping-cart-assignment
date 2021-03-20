import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from "./screens/LoginScreen.js";
import ProductsScreen from "./screens/ProductsScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import SignupScreen from "./screens/SignupScreen.js";
import {parseRequestUrl} from './supportingJSFiles/utils.js';

const routes = {
  "/": LoginScreen,
  "/home": HomeScreen,
  "/products": ProductsScreen,
  "/signup": SignupScreen,
  "/login": LoginScreen,
  "/products/:id": ProductsScreen,
};
const router = async() => {
 const request = parseRequestUrl();
 var parseUrl =
   (request.resource ? `/${request.resource}` : "/") 
   +
   (request.id ? "/:id" : "") +
   (request.verb ? `/${request.verb}` : "");
  // const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  if (window.isValidUser) {
    if (
      (parseUrl == "/home" ||
      parseUrl == "/products" ||
      parseUrl == "/products/:id")
    ) {
      screen = routes[parseUrl];
    } else if (parseUrl == "/" || parseUrl == "/signup") {
      screen = routes["/home"];
    } else if (parseUrl == "/login") {
      screen = routes[parseUrl];
    } else {
      screen = Error404Screen;
    }
  } else {
    if (
      parseUrl == "/home" ||
      parseUrl == "/products" ||
      parseUrl == "/" ||
      parseUrl == "/login" ||
      parseUrl == "/products/:id"
    ) {
      screen = routes["/"];
    } else if (parseUrl == "/signup") {
      screen = routes["/signup"];
    } else {
      screen = Error404Screen;
    }
  }

  const main = document.getElementById('middle');
  main.innerHTML = await screen.render();
  if (screen.after_render) screen.after_render();

}
window.addEventListener("load", router);
window.addEventListener("hashchange", router);






  // if(screen.slick) screen.slickcarousel();

    // const numberOfItemsInCart = await fetch(
    //   "http://localhost:5000/api/cart/numberOfItems",
    //   {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   }
    // );
    // console.log("cart items fetch");
    // const items = numberOfItemsInCart.length;
    // document.getElementById("item").innerText = items;