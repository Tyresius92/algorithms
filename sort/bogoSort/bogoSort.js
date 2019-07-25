const swap = (input, a, b) => {
  const temp = input[a];
  input[a] = input[b];
  input[b] = temp;
};

const isSorted = input => {
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      return false;
    }
  }

  return true;
};

const shuffle = input => {
  for (let i = 0; i < input.length; i++) {
    const randIndex = Math.floor(Math.random() * Math.floor(i));
    swap(input, i, randIndex);
  }
};

export const bogoSort = input => {
  while (!isSorted(input)) {
    shuffle(input);
  }

  return input;
};

