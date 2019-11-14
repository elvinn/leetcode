/**
 * Palindrome Linked List
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

function reverse (head) {
  let pre = null

  while (head) {
    const next = head.next
    head.next = pre
    pre = head
    head = next
  }

  return pre
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true
  }

  let slowNode = head
  let fastNode = head
  while (fastNode && fastNode.next) {
    slowNode = slowNode.next
    fastNode = fastNode.next.next
  }

  fastNode = reverse(slowNode)
  slowNode = head

  while (slowNode && fastNode) {
    if (slowNode.val !== fastNode.val) {
      return false
    }
    slowNode = slowNode.next
    fastNode = fastNode.next
  }

  return true
}

function main () {
  test('No test for linked list problems', t => {
    t.is(isPalindrome(), true)
  })
}

main()
