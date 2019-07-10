import { quickSort } from './quickSort';

describe('quick sort', () => {
  it('sorts an empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  it('sorts an array of one element', () => {
    expect(quickSort([5])).toEqual([5]);
  });

  it('sorts an array of two elements', () => {
    expect(quickSort([2, 1])).toEqual([1, 2]);
  });

  it('sorts an array of several items', () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts an array on pseudo-random input', () => {
    expect(quickSort([13, 99, 12, 1, 69, 11, 14, 100, 47, 1403, 6])).toEqual([
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

  it('sorts an array with duplicates', () => {
    expect(quickSort([1, 2, 3, 1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('sorts an array with floating point numbers', () => {
    expect(quickSort([1, 2.5, 0.5, 2, 1.5, 0.3])).toEqual([
      0.3,
      0.5,
      1,
      1.5,
      2,
      2.5
    ]);
  });

  it('sorts words', () => {
    expect(quickSort(['cantalope', 'apple', 'banana'])).toEqual([
      'apple',
      'banana',
      'cantalope'
    ]);
  });

  it('throws an error if not given an array', () => {
    expect(() => {
      quickSort('apple');
    }).toThrow(
      new TypeError(
        'quickSort must be called on an array of a single primitive type'
      )
    );
  });

  it('throws an error if elements are not all of the same type', () => {
    expect(() => {
      quickSort([3, 2, 7, 'apple', 1]);
    }).toThrow(
      new TypeError(
        'quickSort must be called on an array of a single primitive type'
      )
    );
  });
});
