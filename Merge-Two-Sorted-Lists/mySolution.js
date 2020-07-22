function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
  if (!l1)
    return l2;
  if (!l2)
    return l1;

  let root = null;
  if (l1.val <= l2.val) {
    root = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    root = new ListNode(l2.val);
    l2 = l2.next;
  }

  let curNode = root;

  while (l1 || l2) {
    if (!l1) {
      curNode.next = l2;
      l2 = l2.next;
      curNode = curNode.next;
      continue;
    }

    if (!l2) {
      curNode.next = l1;
      curNode = curNode.next;
      l1 = l1.next;
      continue;
    }

    if (l1.val <= l2.val) {
      curNode.next = l1;
      curNode = curNode.next;
      l1 = l1.next
    } else {
      curNode.next = l2;
      curNode = curNode.next;
      l2 = l2.next;
    }
  }
  return root
};

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(l1, l2));
