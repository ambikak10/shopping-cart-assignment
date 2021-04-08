const {splitFunction} = require("../supportingJSFiles/utils");

test("to be url home", () => {
  const obj = splitFunction('/home');
  expect(obj.resource).toBe('home');
});


test("to be url home", () => {
  const obj = splitFunction("#/products/5b6899123d1a866534f516de");
  expect(obj.id).toBe("5b6899123d1a866534f516de");
});