const swap = (input, a, b) => {
  const temp = input[a];
  input[a] = input[b];
  input[b] = temp;
};

// const isSorted = input => {
//   for (let i = 0; i < input.length - 1; i++) {
//     if (input[i] > input[i + 1]) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// const shuffle = input => {
//   for (let i = 0; i < input.length; i++) {
//     const randIndex = Math.floor(Math.random() * Math.floor(i));
//     swap(input, i, randIndex);
//   }
// };
//
// // secretly this is BOGOSORT
// export const bubbleSort = input => {
//   while (!isSorted(input)) {
//     shuffle(input);
//     console.log(input);
//   }
//
//   return input;
// };

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
