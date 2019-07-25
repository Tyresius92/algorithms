import { countingSort } from './countingSort';

describe('counting sort', () => {
  it.each`
    input                                            | result
    ${[]}                                            | ${[]}
    ${[5]}                                           | ${[5]}
    ${[2, 1]}                                        | ${[1, 2]}
    ${[5, 4, 3, 2, 1]}                               | ${[1, 2, 3, 4, 5]}
    ${[13, 99, 12, 1, 69, 11, 14, 100, 47, 1403, 6]} | ${[1, 6, 11, 12, 13, 14, 47, 69, 99, 100, 1403]}
    ${[1, 2, 3, 1, 2, 3]}                            | ${[1, 1, 2, 2, 3, 3]}
  `('should return $result when given $input', ({ input, result }) => {
    expect(countingSort(input, Math.max(...input))).toEqual(result);
  });

  it('throws an error if not given an array', () => {
    expect(() => {
      countingSort('apple');
    }).toThrow(
      new TypeError(
        'countingSort must be called on an array of a single primitive type'
      )
    );
  });

  it('throws an error if elements are not all of the same type', () => {
    expect(() => {
      countingSort([3, 2, 7, 'apple', 1]);
    }).toThrow(
      new TypeError(
        'countingSort must be called on an array of a single primitive type'
      )
    );
  });
});
