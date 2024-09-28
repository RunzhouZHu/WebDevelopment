const map = require("./map");

describe("test of the callback function map", () => {
  test("map [1,2,3], callback function excuted 3 times", () => {
    const mockFn = jest.fn((x) => x * 2);
    map([1, 2, 3], mockFn);
    expect(mockFn.mock.calls.length).toBe(3);
  });

  test("map [1,2,3], callback function returns 2,4,6", () => {
    const mockFn = jest.fn((x) => x * 2);
    map([1, 2, 3], mockFn);
    expect(mockFn.mock.results[0].value).toBe(2);
    expect(mockFn.mock.results[1].value).toBe(4);
    expect(mockFn.mock.results[2].value).toBe(6);
  });
});
