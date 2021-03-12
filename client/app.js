import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from "./screens/LoginScreen.js";
import ProductsScreen from "./screens/ProductsScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import SignupScreen from "./screens/SignupScreen.js";
import CartScreen from "./screens/CartScreen.js";
import {parseRequestUrl} from './utils.js';
const routes = {
  "/": LoginScreen,
  "/home": HomeScreen,
  "/products": ProductsScreen,
  "/signup": SignupScreen,
  "/cart": CartScreen,
  "/login": LoginScreen,
  "/products/:id": ProductsScreen,
};
const router = async() => {
  const request = parseRequestUrl();
 const parseUrl =
   (request.resource ? `/${request.resource}` : "/") 
   +
   (request.id ? "/:id" : "") +
   (request.verb ? `/${request.verb}` : "");
  console.log(request);
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById('middle');
  main.innerHTML = await screen.render();
}
window.addEventListener("load", router);
window.addEventListener("hashchange", router);


