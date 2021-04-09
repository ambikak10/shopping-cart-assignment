import globalStore from "../supportingJSFiles/generalModel.js";


test("should not login the non-registered user", () => {
 expect(globalStore.login("ak@gmail.com", "abcd")).toBeFalsy();
})

test("should signup the user", () => {
     expect(globalStore.signup("py@gmail.com", "qwerty")).toBeTruthy();
});


test("should not allow already registered user to signup again", () => {
  expect(globalStore.signup("py@gmail.com", "qwerty")).toBeFalsy();
});

test("should login the signed up user", () => {
    expect(globalStore.login("py@gmail.com", "qwerty")).toBeTruthy();
})


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ "id": "1234" }]),
  })
);
it("fetches data from API", async() => {
  expect(await globalStore.getBanners()).toEqual(
    ([{"id": "1234"}])
  );
  // expect(fetch).toHaveBeenCalledTimes(1)
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

// test("should be defined", () => {
//   expect(ProductsScreen).toBeDefined();
// })
// import ProductsScreen from "../screens/ProductsScreen";
// import LoginScreen from "../screens/LoginScreen.js";