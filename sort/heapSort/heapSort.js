const isValidInput = input => {
  return (
    Array.isArray(input) && input.every(item => typeof item === typeof input[0])
  );
};

const parent = i => {
  return Math.floor(i / 2);
};

const leftChild = i => {
  return 2 * i + 1;
};

const rightChild = i => {
  return 2 * i + 2;
};

const buildHeap = input => {
  for (let i = Math.floor(input.length / 2); i >= 0; i--) {
    heapify(input, i, input.length);
  }
};

const heapify = (input, i, heapSize) => {
  const left = leftChild(i);
  const right = rightChild(i);
  let largest = i;

  if (left < heapSize && input[left] > input[i]) {
    largest = left;
  }

  if (right < heapSize && input[right] > input[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(input, largest, i);

    heapify(input, largest, heapSize);
  }
};

const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

export const heapSort = input => {
  if (!isValidInput(input)) {
    throw new TypeError(
      'heapSort must be called on an array of a single primitive type'
    );
  }

  buildHeap(input);
  let heapSize = input.length;
  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);

    heapSize--;

    heapify(input, 0, heapSize);
  }

  return input;
};
