/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 *
 * Type: Linked List
 * Difficulty: Easy
 * Time Complexity: O(1)
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  if (!node) {
    return
  }
  node.val = node.next.val
  node.next = node.next.next
}

function main () {
  test('No test for linked list problems', t => {
    t.is(deleteNode(), undefined)
  })
}

main()
