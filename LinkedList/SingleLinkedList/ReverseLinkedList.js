// Question 1:
// Reverse SLL-
// You are given the head of a Singly Linked list.
// Write a function that will take the given head as input, reverse the Linked List and return the new head of the reversed Linked List.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

console.log(reverseLinkedList(head));
