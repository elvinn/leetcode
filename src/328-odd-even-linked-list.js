/**
 * https://leetcode.com/problems/odd-even-linked-list/
 *
 * Type: Linked List
 * Difficulty: Medium
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head
  }

  const evenNodeHead = head.next
  let oddNode = head
  let evenNode = head.next

  while (evenNode && evenNode.next) {
    oddNode.next = evenNode.next
    oddNode = oddNode.next

    evenNode.next = oddNode.next
    evenNode = evenNode.next
  }

  oddNode.next = evenNodeHead

  return head
}

function main () {
  test('No test for linked list problems', t =>
    t.is(typeof oddEvenList, 'function'))
}

main()
