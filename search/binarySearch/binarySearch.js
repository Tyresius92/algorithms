export const binarySearch = (input, target) => {
  if (!Array.isArray(input)) {
    throw new TypeError("invalid input to binarySearch");
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i + 1]) {
      throw new Error("input array to binary search must be sorted");
    }
  }

  if (input.length === 0) {
    return "not_found";
  }

  const low = 0;
  const high = input.length;
  const mid = Math.floor(input.length / 2);

  if (input[mid] > target) {
    return binarySearch(input.slice(low, mid - 1), target);
  } else if (input[mid] < target) {
    const result = binarySearch(input.slice(mid + 1, high), target);
    return result === "not_found" ? result : mid + 1 + result;
  } else {
    return mid;
  }
};
