const addToArray = require("./addToArray");

test("add 4,5,6 to array [1,2,3]", () => {
  const arr = [1, 2, 3];
  addToArray(arr, 4, 5, 6);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});
