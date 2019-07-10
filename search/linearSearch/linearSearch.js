export const linearSearch = (input, target) => {
  if (!Array.isArray(input)) {
    throw new TypeError("invalid input to linearSearch");
  }

  let index = 0;

  while (index < input.length) {
    if (input[index] === target) {
      return index;
    }
    index++;
  }

  return -1;
};
