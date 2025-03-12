// Question 1:Construct Queue

// Implement a Queue:

// 1. Using an Array

// 2. with a Queue class using a Linked list

// One should be able to add to the queue and remove from the queue following the FIFO property.

// Array
// const queue = [];
// queue.push(1);
// queue.push(2);
// queue.push(3);

// console.log(queue);

// queue.shift();

// console.log(queue);

// Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      return null;
    } else {
      let temp = this.first.next;
      this.first = temp;
      this.size--;
      return temp;
    }
  }
}

const queue1 = new Queue();
queue1.enqueue(1);
queue1.dequeue();
console.log(queue1);
