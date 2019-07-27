import { Heap } from './heap';

describe('Heap', () => {
  it('can be created with no argument', () => {
    expect(new Heap()).toBeInstanceOf(Heap);
  });

  it('can be created', () => {
    expect(new Heap([])).toBeInstanceOf(Heap);
  });

  it('builds a heap', () => {
    expect(new Heap([1, 2, 3]).data).toEqual([3, 2, 1]);
  });

  it('builds a bigger heap', () => {
    expect(new Heap([1, 2, 3, 4, 5]).data).toEqual([5, 4, 3, 1, 2]);
  });

  it('builds the heap in the textbook example', () => {
    expect(new Heap([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]).data).toEqual([
      16,
      14,
      10,
      8,
      7,
      9,
      3,
      2,
      4,
      1
    ]);
  });

  it('can extract max', () => {
    expect(new Heap([1, 2, 3, 4, 5]).extractMax()).toBe(5);
  });

  it('cannot extract max on empty heap', () => {
    expect(() => new Heap([]).extractMax()).toThrow(
      new Error('heap underflow')
    );
  });

  it('can be inserted into', () => {
    const myHeap = new Heap([1, 2, 3]);

    myHeap.insert(100);

    expect(myHeap.data).toEqual([100, 3, 1, 2]);
  });
});
