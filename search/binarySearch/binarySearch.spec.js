import { binarySearch } from './binarySearch';

describe('binary search', () => {
  it('returns negative one on an empty array', () => {
    expect(binarySearch([], 5)).toBe('not_found');
  });

  it('throws an error if input array is unsorted', () => {
    expect(() => {
      binarySearch([2, 1], 2);
    }).toThrow(new Error('input array to binary search must be sorted'));
  });

  it('returns negative one if the target is not present', () => {
    expect(binarySearch([1, 2, 3], 7)).toBe('not_found');
  });

  it('can find a single element', () => {
    expect(binarySearch([5], 5)).toBe(0);
  });

  it('can find an element that is in the middle of an array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  });

  it('can find an element that is at the end of an array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('finds an element that requires several recursions', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7)).toEqual(6);
  });

  it('finds an element when it will need to recurse right', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5)).toEqual(4);
  });

  it('throws an error if not given an array to search', () => {
    expect(() => {
      binarySearch('apple', 4);
    }).toThrow(new TypeError('invalid input to binarySearch'));
  });
});
