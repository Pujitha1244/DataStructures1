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
  let curr = head;
  while (curr) {
    let nextDistintValue = curr.next;
    while (nextDistintValue !== null && curr.val === nextDistintValue.val) {
      nextDistintValue = nextDistintValue.next;
    }
    curr.next = nextDistintValue;
    // curr = curr.next
    curr = nextDistintValue;
  }
  return head;
}

function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

// Remove duplicates
const newHead = removeDupes(head);

// Print the updated list
printList(newHead);
