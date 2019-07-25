import { bubbleSort } from './bubbleSort';

describe('bubbleSort', () => {
  it('is connected properly', () => {
    expect(true).toBe(true);
  });

  it('can sort an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('can sort an array of a single element', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });

  it('can sort an array of two unordered elements', () => {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
  });

  it('can sort an array of many elements', () => {
    expect(bubbleSort([1, 2, 3, 2])).toEqual([1, 2, 2, 3]);
  });
});
