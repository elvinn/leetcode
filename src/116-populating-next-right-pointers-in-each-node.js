/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 *
 * Type: Tree
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const connect = node => {
  if (!node || !node.left) {
    return node
  }

  node.left.next = node.right
  node.right.next = node.next ? node.next.left : null

  connect(node.left)
  connect(node.right)
  return node
}

function main () {
  test('No test for tree problems', t => {
    t.is(typeof connect, 'function')
  })
}

main()
