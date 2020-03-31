/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Type: Linked List
 * Difficulty: Medium
 * Time Complexity: O(n + m)
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
var addTwoNumbers = function (l1, l2) {
  const result = {}
  const emptyNode = { val: 0 }
  let node = result
  let addToNext = 0
  while (true) {
    const sum = l1.val + l2.val + addToNext
    l1 = l1.next || emptyNode
    l2 = l2.next || emptyNode
    if (sum >= 10) {
      addToNext = 1
      node.val = sum - 10
    } else {
      addToNext = 0
      node.val = sum
    }

    if (l1 !== emptyNode || l2 !== emptyNode || addToNext) {
      node.next = {}
      node = node.next
    } else {
      node.next = null
      break
    }
  }

  return result
}

function main () {
  test('No test for linked list problems', t =>
    t.is(typeof addTwoNumbers, 'function'))
}

main()
