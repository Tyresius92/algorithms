export const maximum = input => {
  if (!Array.isArray(input) || input === undefined || input.length === 0) {
    return null;
  }

  let currentMax = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] > currentMax) {
      currentMax = input[i];
    }
  }

  return currentMax;
};
