import HomeScreen from "./screens/HomeScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import ProductsScreen from "./screens/ProductsScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import SignupScreen from "./screens/SignupScreen.js";
import { parseRequestUrl } from "./supportingJSFiles/utils.js";

const home = new HomeScreen();
const login = new LoginScreen();
const error = new Error404Screen();
const signup = new SignupScreen();
const products = new ProductsScreen();

const routes = {
  "/": login,
  "/home": home,
  "/products": products,
  "/signup": signup,
  "/login": login,
  "/products/:id": products,
};
const router = async () => {
  const request = parseRequestUrl();
  var parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : error;
  // console.log(window.isValidUser);
  // let screen;
  // if (window.isValidUser) {
  //   console.log(window.isValidUser)
  //   console.log(parseUrl)
  //   if (
  //     (parseUrl == "/home" ||
  //     parseUrl == "/products" ||
  //     parseUrl == "/products/:id")
  //   ) {
  //     screen = routes[parseUrl];
  //   } else if (parseUrl == "/" || parseUrl == "/signup") {
  //     console.log(window.isValidUser)
  //     screen = routes["/home"];
  //   } else if (parseUrl == "/login") {
  //     screen = routes[parseUrl];
  //   } else {
  //     screen = Error404Screen;
  //   }
  // } else {
  //   if (
  //     parseUrl == "/home" ||
  //     parseUrl == "/products" ||
  //     parseUrl == "/" ||
  //     parseUrl == "/login" ||
  //     parseUrl == "/products/:id"
  //   ) {
  //     screen = routes["/login"];
  //   } else if (parseUrl == "/signup") {
  //     screen = routes["/signup"];
  //   } else {
  //     screen = Error404Screen;
  //   }
  // }
  // const res = await fetch("http://localhost:5000/api/cart/items", {
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });
  // const cartItems = await res.json();
  // const totalItems = cartItems.allItems ? cartItems.allItems.length : 0;
  // if (totalItems) {
  //   document.getElementById("items").innerHTML = `${totalItems}  items`;
  // }

  document.getElementById("items").innerHTML =
  cartStore.totalItemsInCart.length + ` items`;
  await globalStore.getProducts();
  await globalStore.getCategories();
  await globalStore.getBanners();
  const main = document.getElementById("middle");
  main.innerHTML = await screen.render();
  if (screen.after_render) screen.after_render();
};;
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
