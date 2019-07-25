const isValidInput = input => {
  return (
    Array.isArray(input) && input.every(item => typeof item === typeof input[0])
  );
};

const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

export const countingSort = (input, maxVal) => {
  if (!isValidInput(input)) {
    throw new TypeError(
      'countingSort must be called on an array of a single primitive type'
    );
  }

  const output = [];
  const tempRay = [];

  for (let i = 0; i < maxVal + 1; i++) {
    tempRay[i] = 0;
  }

  input.forEach(number => {
    tempRay[number]++;
  });

  for (let i = 1; i < maxVal + 1; i++) {
    tempRay[i] = tempRay[i] + tempRay[i - 1];
  }

  for (let j = input.length - 1; j >= 0; j--) {
    output[tempRay[input[j]] - 1] = input[j];
    tempRay[input[j]] = tempRay[input[j]] - 1;
  }

  return output;
};
