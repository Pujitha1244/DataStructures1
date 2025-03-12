class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
var removeNthFromEnd = function(head, n) {
     let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;
    
    // Move first n+1 steps ahead
    for (let i = 0; i < n + 1; i++) {
        first = first.next;
    }
    
    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    
    // Remove the nth node
    second.next = second.next.next;
    
    return dummy.next;
};

removeNthFromEnd([1,2,3,4,5], 2)