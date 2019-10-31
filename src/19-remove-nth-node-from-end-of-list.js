/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (n <= 0) {
    return head
  }

  let firstPointer = head
  let secondPointer = head

  // loop secondPointer to the end
  let curIndex = 0
  while (secondPointer.next) {
    secondPointer = secondPointer.next
    curIndex += 1

    if (curIndex >= n + 1) {
      firstPointer = firstPointer.next
    }
  }

  if (curIndex < n) {
    return head.next
  }

  firstPointer.next = firstPointer.next.next
  return head
}

function main () {
  test('No test for linked list problems', t => {
    t.is(removeNthFromEnd(), undefined)
  })
}

main()
