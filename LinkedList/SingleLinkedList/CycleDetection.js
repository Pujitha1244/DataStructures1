// Question 2:
// Cycle Detection - You are given the head of a linked list. Check if there is a cycle and if yes,
// return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node inthe list that can be reached again by continuously following the next pointer.
// Do not modify the linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = three;

let head = one;

function checkLoop(head) {
  if (!head) return null;
  if (!head.next) return null;
  let hare = head;
  let tortoise = head;
  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      break;
    }
  }
  if (hare !== tortoise) return null;
  //   fine where cycle begins
  let pointer = head;
  while (pointer !== tortoise) {
    pointer = pointer.next;
    tortoise = tortoise.next;
  }
  return pointer;
}

console.log(checkLoop(head));
