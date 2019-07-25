import { Queue } from './queue';

describe('Queue', () => {
  it('can be created', () => {
    expect(new Queue()).toBeInstanceOf(Queue);
  });

  it('can enqueue and dequeue an element', () => {
    const tester = new Queue();

    tester.enqueue(5);
    expect(tester.dequeue()).toBe(5);
  });

  it('can enqueue and dequeue multiple elements', () => {
    const tester = new Queue();

    tester.enqueue(1);
    tester.enqueue(5);
    tester.enqueue(7);

    expect(tester.dequeue()).toBe(1);
    expect(tester.dequeue()).toBe(5);
    expect(tester.dequeue()).toBe(7);
  });

  it('can report if it is empty', () => {
    expect(new Queue().isEmpty()).toBe(true);
  });

  it('can report that it is not empty', () => {
    const tester = new Queue();
    tester.enqueue(7);

    expect(tester.isEmpty()).toBe(false);

    tester.dequeue();

    expect(tester.isEmpty()).toBe(true);
  });
});
