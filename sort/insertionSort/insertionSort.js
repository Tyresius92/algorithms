const sortOrders = { asc: "ascending", desc: "descending" };

const compare = (a, b, order) => {
  if (order === sortOrders.desc) {
    return a < b;
  } else {
    return a > b;
  }
};

const isValidInput = elements => {
  return (
    Array.isArray(elements) &&
    elements.every(item => typeof item === typeof elements[0])
  );
};

const isValidSortOrder = order => {
  return Object.values(sortOrders).includes(order);
};

export const insertionSort = (elements, order = sortOrders.asc) => {
  if (!isValidInput(elements)) {
    throw new TypeError(
      "insertionSort must be called on an array of a single primitive type"
    );
  }

  if (!isValidSortOrder(order)) {
    order = sortOrders.asc;
  }

  for (let i = 1; i < elements.length; i++) {
    const key = elements[i];
    let j = i - 1;

    while (j > -1 && compare(elements[j], key, order)) {
      elements[j + 1] = elements[j];
      j--;
    }
    elements[j + 1] = key;
  }

  return elements;
};
