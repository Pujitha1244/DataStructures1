// Question 1:Construct Stack

// Implement a Stack:

// 1.Using an Array

// 2.with a Stack class using a Linked list

// One should be able to add to the stack and remove from the stack following the LIFO property.

// Array
// const arr = new Array();
// arr.push(1);
// arr.push(2);
// arr.push(3);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(23);
// arr.push(44);
// console.log(arr);
// arr.pop();
// console.log(arr);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Add at beg
// Remove from Beg
class stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  addAtBegining(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  removeFromBeginning() {
    if (!this.first) return null;
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return temp;
  }
}

const stacks = new stack();

stacks.addAtBegining(2);
stacks.addAtBegining(5);

console.log(stacks);
