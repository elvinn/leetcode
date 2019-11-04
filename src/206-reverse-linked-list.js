/**
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Type: Linked List
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }

  let tempNode = null
  let preNode = null
  let curNode = head

  while (curNode) {
    tempNode = preNode
    preNode = curNode
    curNode = curNode.next
    preNode.next = tempNode
  }

  return preNode
}

function main () {
  test('No test for linked list problems', t => {
    t.is(reverseList(), undefined)
  })
}

main()
