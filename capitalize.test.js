const capitalizeString = require("./capitalize");

test("capitalize string", () => {
  expect(capitalizeString("string")).toBe("String");
});
