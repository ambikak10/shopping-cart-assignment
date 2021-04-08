import ProductsScreen from "../screens/ProductsScreen";
import LoginScreen from "../screens/LoginScreen.js";
import globalStore from "../supportingJSFiles/generalModel.js";

// test("should be defined", () => {
//   expect(ProductsScreen).toBeDefined();
// })

test("should not authenticate the user", () => {
 expect(globalStore.login("ak@gmail.com", "abcd")).toBeFalsy();
})

describe("test methods", () => {
 test("should signup a user", () => {
   expect(globalStore.signup("py@gmail.com", "qwerty")).toBeTruthy();
 });
 test("should not authenticate the user", () => {
   expect(globalStore.login("py@gmail.com", "qwerty")).toBeTruthy();
 });
})

// describe("test properties", () => {
//   test("should have property", () => {
//     let users = globalStore.getUsers();
//     console.log(users);
//     expect(users).toHaveProperty("emailID");
//   });
//   console.log(globalStore)
// });

// test("should be defined", () => {
//   expect(ProductsScreen).toHaveProperty("render");
// });
