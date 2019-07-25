import { Stack } from './stack';

describe('stack', () => {
  it('can report that it is empty', () => {
    expect(new Stack().isEmpty()).toBe(true);
  });

  it('can have a value pushed in', () => {
    const testStack = new Stack();
    testStack.push(5);
    expect(testStack.isEmpty()).toBe(false);
  });

  it('can pop a value', () => {
    const testStack = new Stack();
    testStack.push(5);
    expect(testStack.pop()).toBe(5);
  });

  it('can let you peek at the top value', () => {
    const testStack = new Stack();
    testStack.push(5);
    expect(testStack.peek()).toBe(5);
    expect(testStack.isEmpty()).toBe(false);
  });

  it('throws an error if you attempt to peek on an empty stack', () => {
    expect(() => {
      new Stack().peek();
    }).toThrow(new Error('underflow'));
  });

  it('reports emptiness correctly after several pushes and pops', () => {
    const testStack = new Stack();
    expect(testStack.isEmpty()).toBe(true);
    testStack.push(5);
    expect(testStack.isEmpty()).toBe(false);
    expect(testStack.pop()).toBe(5);
    expect(testStack.isEmpty()).toBe(true);
  });

  it('throws an error if pop is called on empty stack', () => {
    expect(() => {
      new Stack().pop();
    }).toThrow(new Error('underflow'));
  });
});
