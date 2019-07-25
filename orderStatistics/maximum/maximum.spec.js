import { maximum } from './maximum';

describe('maximum', () => {
  it.each`
    input              | output
    ${undefined}       | ${null}
    ${'apple'}         | ${null}
    ${[]}              | ${null}
    ${[5]}             | ${5}
    ${[3, 1]}          | ${3}
    ${[3, 4, 2, 1, 5]} | ${5}
  `('should return $output when input = $input', ({ input, output }) => {
    expect(maximum(input)).toBe(output);
  });
});
