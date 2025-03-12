// Question 2:
// delete duplicates -
// You are given the head of a Sorted Singly Linked list. Write a function that will take the given head as input,
// delete all nodes that have a value that is already the value of another node so that each value appears 1 time only and
// return the linked list, which is still to be a sorted linked list.

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node("a");
head.next.next.next.next.next = new Node("a");
//1=>2=>2=>3=>'a'=>'a'=>null
console.log("head :", head);

function removeDupes(head) {
  let current = head;
  while (current) {
    let nextDistint = current.next;
    if (current.val === nextDistint.val && nextDistint !== null) {
      nextDistint = nextDistint.next;
    }
    current.next = nextDistint;
    current = nextDistint;
  }
  return head;
}

removeDupes(head);
