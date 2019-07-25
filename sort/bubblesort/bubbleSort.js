const swap = (input, a, b) => {
  const temp = input[a];
  input[a] = input[b];
  input[b] = temp;
};

export const bubbleSort = input => {
  for (let i = 0; i < input.length - 1; i++) {
    let swapped = false;
    for (let j = i; j < input.length - 1; j++) {
      if (input[j] > input[j + 1]) {
        swap(input, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      return input;
    }
  }

  return input;
};
