import { linearSearch } from "./linearSearch";

describe("linear search", () => {
  it("returns negative one on an empty array", () => {
    expect(linearSearch([], 5)).toBe(-1);
  });

  it("returns negative one if the target is not present", () => {
    expect(linearSearch([1, 2, 3], 7)).toBe(-1);
  });

  it("can find a single element", () => {
    expect(linearSearch([5], 5)).toBe(0);
  });

  it("can find an element that is in the middle of an array", () => {
    expect(linearSearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  });

  it("can find an element that is at the end of an array", () => {
    expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("returns the first occurence of the target element", () => {
    expect(linearSearch([1, 2, 3, 3, 4], 3)).toBe(2);
  });

  it("does not expect the elements to be sorted", () => {
    expect(linearSearch([3, 4, 1, 2, 7, 5], 7)).toBe(4);
  });

  it("throws an error if not given an array to search", () => {
    expect(() => {
      linearSearch("apple", 4);
    }).toThrow(new TypeError("invalid input to linearSearch"));
  });
});
