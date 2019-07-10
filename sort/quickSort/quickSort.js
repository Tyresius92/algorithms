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

const inclusiveRandBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const partition = (input, start, end) => {
  const pivot = input[inclusiveRandBetween(start, end)];
  let i = start - 1;
  let j = end + 1;

  while (true) {
    do {
      j--;
    } while (input[j] > pivot);

    do {
      i++;
    } while (input[i] < pivot);

    if (i < j) {
      swap(input, i, j);
    } else {
      return j;
    }
  }
};

const recursiveQuickSort = (input, start, end) => {
  if (start < end) {
    const mid = partition(input, start, end);
    recursiveQuickSort(input, start, mid);
    recursiveQuickSort(input, mid + 1, end);
  }
};

export const quickSort = input => {
  if (!isValidInput(input)) {
    throw new TypeError(
      'quickSort must be called on an array of a single primitive type'
    );
  }

  recursiveQuickSort(input, 0, input.length - 1);

  return input;
};
