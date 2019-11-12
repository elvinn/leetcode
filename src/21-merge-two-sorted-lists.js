/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Type: Linked List
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }

  let head
  if (l1.val < l2.val) {
    head = l1
    l1 = l1.next
  } else {
    head = l2
    l2 = l2.next
  }

  let cur = head
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2
      cur = cur.next
      l2 = l2.next
    } else {
      cur.next = l1
      cur = cur.next
      l1 = l1.next
    }
  }

  if (!l1 && l2) {
    cur.next = l2
  } else if (l1 && !l2) {
    cur.next = l1
  }

  return head
}

function main () {
  test('No test for linked list problems', t => {
    t.is(mergeTwoLists(), undefined)
  })
}

main()
