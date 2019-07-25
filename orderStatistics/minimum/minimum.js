export const minimum = input => {
  if (!Array.isArray(input) || input === undefined || input.length === 0) {
    return null;
  }

  let currentMin = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] < currentMin) {
      currentMin = input[i];
    }
  }

  return currentMin;
};
