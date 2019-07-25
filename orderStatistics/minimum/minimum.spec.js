import { minimum } from './minimum';

describe('minimum', () => {
  it.each`
    input              | output
    ${undefined}       | ${null}
    ${'apple'}         | ${null}
    ${[]}              | ${null}
    ${[5]}             | ${5}
    ${[3, 1]}          | ${1}
    ${[3, 4, 2, 1, 5]} | ${1}
  `('should return $output when input = $input', ({ input, output }) => {
    expect(minimum(input)).toBe(output);
  });
});
