export class Heap {
  constructor(data = []) {
    this.heapSize = data.length - 1;
    this.data = data;
    this.buildHeap();
  }

  parent(i) {
    return Math.floor(i / 2);
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  buildHeap() {
    for (let i = Math.floor(this.data.length / 2); i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapify(i) {
    const left = this.left(i);
    const right = this.right(i);
    let largest = i;

    if (left <= this.heapSize && this.data[left] > this.data[i]) {
      largest = left;
    }

    if (right <= this.heapSize && this.data[right] > this.data[largest]) {
      largest = right;
    }

    if (largest !== i) {
      const temp = this.data[i];
      this.data[i] = this.data[largest];
      this.data[largest] = temp;

      this.heapify(largest);
    }
  }

  extractMax() {
    if (this.heapSize < 1) {
      throw new Error('heap underflow');
    }

    const max = this.data[0];
    this.data[0] = this.data[this.heapSize];
    this.data.pop();
    this.heapSize--;

    this.heapify(this.data, 0);

    return max;
  }

  insert(newVal) {
    this.heapSize++;
    let i = this.heapSize;

    while (i > 0 && this.data[this.parent(i)] < newVal) {
      this.data[i] = this.data[this.parent(i)];
      i = this.parent(i);
    }

    this.data[i] = newVal;
  }
}
