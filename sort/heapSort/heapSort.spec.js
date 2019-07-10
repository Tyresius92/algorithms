import { heapSort } from './heapSort';

describe('heap sort', () => {
  it('sorts an empty array', () => {
    expect(heapSort([])).toEqual([]);
  });

  it('sorts an array of one element', () => {
    expect(heapSort([5])).toEqual([5]);
  });

  it('sorts an array of two elements', () => {
    expect(heapSort([2, 1])).toEqual([1, 2]);
  });

  it('sorts an array of several items', () => {
    expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts an array on pseudo-random input', () => {
    expect(heapSort([13, 99, 12, 1, 69, 11, 14, 100, 47, 1403, 6])).toEqual([
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
    expect(heapSort([1, 2, 3, 1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('sorts an array with floating point numbers', () => {
    expect(heapSort([1, 2.5, 0.5, 2, 1.5, 0.3])).toEqual([
      0.3,
      0.5,
      1,
      1.5,
      2,
      2.5
    ]);
  });

  it('sorts words', () => {
    expect(heapSort(['cantalope', 'apple', 'banana'])).toEqual([
      'apple',
      'banana',
      'cantalope'
    ]);
  });

  it('throws an error if not given an array', () => {
    expect(() => {
      heapSort('apple');
    }).toThrow(
      new TypeError(
        'heapSort must be called on an array of a single primitive type'
      )
    );
  });

  it('throws an error if elements are not all of the same type', () => {
    expect(() => {
      heapSort([3, 2, 7, 'apple', 1]);
    }).toThrow(
      new TypeError(
        'heapSort must be called on an array of a single primitive type'
      )
    );
  });
});
