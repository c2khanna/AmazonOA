function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
  let prehead = new ListNode(-1);

  let prev = prehead;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 ? l1 : l2;

  return prehead.next
};

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(l1, l2));
