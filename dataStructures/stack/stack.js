export class Stack {
  constructor() {
    this._data = [];
    this._top = -1;
  }

  isEmpty() {
    return this._top === -1;
  }

  push(value) {
    this._top++;
    this._data[this._top] = value;
  }

  checkEmpty() {
    if (this.isEmpty()) {
      throw new Error('underflow');
    }
  }

  peek() {
    this.checkEmpty();
    return this._data[this._top];
  }

  pop() {
    this.checkEmpty();
    const elem = this._data[this._top];
    this._top--;
    return elem;
  }
}
