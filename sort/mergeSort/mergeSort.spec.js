import { merge, mergeSort } from "./mergeSort";

describe("merge sort", () => {
  describe("merge function", () => {
    it("merges two empty arrays to one array", () => {
      expect(merge([], [])).toEqual([]);
    });

    it("merges an empty array and an array with a single item", () => {
      expect(merge([], [1])).toEqual([1]);
    });

    it("merges an array with a single item and an empty array", () => {
      expect(merge([1], [])).toEqual([1]);
    });

    it("merges an two arrays with one element each", () => {
      expect(merge([1], [2])).toEqual([1, 2]);
      expect(merge([4], [3])).toEqual([3, 4]);
    });

    it("merges two arrays of multiple values", () => {
      expect(merge([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ]);
    });

    it("merges two arrays of different length", () => {
      expect(merge([5], [1, 2, 3, 4, 6, 7, 8])).toEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ]);
    });

    it("throws an error if given something other than an array", () => {
      expect(() => {
        merge("hello", [1]);
      }).toThrow(new TypeError("input to merge must be an array"));

      expect(() => {
        merge([1], "hello");
      }).toThrow(new TypeError("input to merge must be an array"));
    });
  });

  describe("main sort function", () => {
    it("sorts an empty array", () => {
      expect(mergeSort([])).toEqual([]);
    });

    it("sorts an array of one element", () => {
      expect(mergeSort([5])).toEqual([5]);
    });

    it("sorts an array of two elements", () => {
      expect(mergeSort([2, 1])).toEqual([1, 2]);
    });

    it("sorts an array of several items", () => {
      expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it("sorts an array on pseudo-random input", () => {
      expect(mergeSort([13, 99, 12, 1, 69, 11, 14, 100, 47, 1403, 6])).toEqual([
        1,
        6,
        11,
        12,
        13,
        14,
        47,
        69,
        99,
        100,
        1403
      ]);
    });

    it("sorts an array with duplicates", () => {
      expect(mergeSort([1, 2, 3, 1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
    });

    it("sorts an array with floating point numbers", () => {
      expect(mergeSort([1, 2.5, 0.5, 2, 1.5, 0.3])).toEqual([
        0.3,
        0.5,
        1,
        1.5,
        2,
        2.5
      ]);
    });

    it("sorts words", () => {
      expect(mergeSort(["cantalope", "apple", "banana"])).toEqual([
        "apple",
        "banana",
        "cantalope"
      ]);
    });

    it("throws an error if not given an array", () => {
      expect(() => {
        mergeSort("apple");
      }).toThrow(
        new TypeError(
          "mergeSort must be called on an array of a single primitive type"
        )
      );
    });

    it("throws an error if elements are not all of the same type", () => {
      expect(() => {
        mergeSort([3, 2, 7, "apple", 1]);
      }).toThrow(
        new TypeError(
          "mergeSort must be called on an array of a single primitive type"
        )
      );
    });
  });
});
