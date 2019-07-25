import { bogoSort } from './bogoSort';

describe('bogoSort', () => {
  it('is connected properly', () => {
    expect(true).toBe(true);
  });

  it('can sort an empty array', () => {
    expect(bogoSort([])).toEqual([]);
  });

  it('can sort an array of a single element', () => {
    expect(bogoSort([5])).toEqual([5]);
  });

  it('can sort an array of two unordered elements', () => {
    expect(bogoSort([2, 1])).toEqual([1, 2]);
  });

  it('can sort an array of many elements', () => {
    expect(bogoSort([1, 2, 3, 2])).toEqual([1, 2, 2, 3]);
  });
});
