//---LEETCODE---

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

//---------test with log------------
//   let c = new ListNode(35, 45);
//   let b = new ListNode(25, c);
//   let a1 = new ListNode(15, b);

//   let c2 = new ListNode(30, 40);
//   let b2 = new ListNode(20, c2);
//   let a2 = new ListNode(10, b2);
  
// console.log(mergeTwoLists(a1, a2));