export const merge = (leftRay, rightRay) => {
  if (!Array.isArray(leftRay) || !Array.isArray(rightRay)) {
    throw new TypeError("input to merge must be an array");
  }

  let outputRay = [];

  let i = 0;
  let j = 0;

  while (i < leftRay.length && j < rightRay.length) {
    if (leftRay[i] < rightRay[j]) {
      outputRay.push(leftRay[i]);
      i++;
    } else {
      outputRay.push(rightRay[j]);
      j++;
    }
  }

  if (i === leftRay.length) {
    outputRay = outputRay.concat(rightRay.slice(j));
  } else if (j === rightRay.length) {
    outputRay = outputRay.concat(leftRay.slice(i));
  }

  return outputRay;
};

const isValidInput = elements => {
  return (
    Array.isArray(elements) &&
    elements.every(item => typeof item === typeof elements[0])
  );
};

export const mergeSort = elements => {
  if (!isValidInput(elements)) {
    throw new TypeError(
      "mergeSort must be called on an array of a single primitive type"
    );
  }

  if (elements.length > 1) {
    const midInd = Math.floor(elements.length / 2);

    const leftRay = mergeSort(elements.slice(0, midInd));

    const rightRay = mergeSort(elements.slice(midInd));

    return merge(leftRay, rightRay);
  } else {
    return elements;
  }
};
