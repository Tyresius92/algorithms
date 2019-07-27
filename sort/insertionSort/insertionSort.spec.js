import { insertionSort } from './insertionSort';

describe('insertion sort', () => {
  it('sorts an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  it('sorts an array of one element', () => {
    expect(insertionSort([5])).toEqual([5]);
  });

  it('sorts an array of two elements', () => {
    expect(insertionSort([2, 1])).toEqual([1, 2]);
  });

  it('sorts an array of several items', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts an array on pseudo-random input', () => {
    expect(
      insertionSort([13, 99, 12, 1, 69, 11, 14, 100, 47, 1403, 6])
    ).toEqual([1, 6, 11, 12, 13, 14, 47, 69, 99, 100, 1403]);
  });

  it('sorts an array with duplicates', () => {
    expect(insertionSort([1, 2, 3, 1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('sorts an array with floating point numbers', () => {
    expect(insertionSort([1, 2.5, 0.5, 2, 1.5, 0.3])).toEqual([
      0.3,
      0.5,
      1,
      1.5,
      2,
      2.5
    ]);
  });

  it('sorts words', () => {
    expect(insertionSort(['cantalope', 'apple', 'banana'])).toEqual([
      'apple',
      'banana',
      'cantalope'
    ]);
  });

  it('accepts an ordering parameter', () => {
    const input = [3, 1, 2];
    const order = 'ascending';
    const expected = [1, 2, 3];

    expect(insertionSort(input, order)).toEqual(expected);
  });

  it("accepts an ordering parameter of 'descending'", () => {
    const input = [1, 2, 3, 4, 5];
    const order = 'descending';
    const expected = [5, 4, 3, 2, 1];

    expect(insertionSort(input, order)).toEqual(expected);
  });

  it('defaults to ascending if given a bad ordering parameter', () => {
    const input = [3, 4, 1, 4, 5];
    const badOrder = 'garbage';
    const expected = [1, 3, 4, 4, 5];

    expect(insertionSort(input, badOrder)).toEqual(expected);
  });

  it('throws an error if not given an array', () => {
    expect(() => {
      insertionSort('apple');
    }).toThrow(
      new TypeError(
        'insertionSort must be called on an array of a single primitive type'
      )
    );
  });

  it('throws an error if elements are not all of the same type', () => {
    expect(() => {
      insertionSort([3, 2, 7, 'apple', 1]);
    }).toThrow(
      new TypeError(
        'insertionSort must be called on an array of a single primitive type'
      )
    );
  });
});
