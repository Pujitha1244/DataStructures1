// Question 1:Construct Singly Linked List -
// Design a Singly linked list class that has a head and tail.
// Every node is to have two attributes: value:  the value of the current node, and next: a pointer to the next node.
// The linked list is to be 0-indexed. The class should support the following:

// SinglyLinkedList() Initializes the SinglyLinkedList object.

// get(index) Get the value of the indexth node. If the index is invalid, return -1.

// addAtHead(value)- Add a node of given value before the first element of the linked list.

// addAtTail(value) -  Add a node of given value at the last element of the linked list.

// addAtIndex(index, value) Add a node of given value before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, don’t insert the node.

// deleteAtIndex(index) Delete the indexth node in the linked list, if the index is valid, else nothing happens.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  get(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  addAtHead(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this;
  }
  addAtTail(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return this;
  }
  addAtIndex(index, value) {
    if (index < 0 && index > this.size) {
      return "Invalid Index";
    }
    if (index === 0) {
      return this.addAtHead(value);
    }
    if (index === this.size) {
      return this.addAtTail(value);
    }
    const node = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = node;
    node.next = temp;
    this.size++;
    return this;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return "Invalid Index";
    }
    if (index === 0) {
      let temp = this.head;
      this.head = temp.next;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
      return temp;
    }
    if (index === this.size - 1) {
      let oldTail = this.tail;
      let newTail = this.get(index - 1);
      this.tail = newTail;
      newTail.next = this.tail;
      this.size--;
      return oldTail;
    }
    let prev = this.get(index - 1);
    let deleteNode = prev.next;
    prev.next = deleteNode.next;
    this.size--;
    return deleteNode;
  }

  getAllNodes() {
    let current = this.head;
    const nodes = [];
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

const sl = new SinglyLinkedList();
sl.addAtHead(1);
sl.addAtTail(2);
sl.addAtTail(33);
sl.addAtTail(4);
sl.deleteAtIndex(2);

//   console.log(sl);
console.log(sl.getAllNodes());
console.log(sl.get(2))
