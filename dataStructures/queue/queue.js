export class Queue {
  constructor() {
    this._data = [];
    this._size = 0;
  }

  isEmpty() {
    return this._size === 0;
  }

  enqueue(value) {
    this._size++;
    this._data.push(value);
  }

  dequeue() {
    this._size--;
    return this._data.shift();
  }
}
