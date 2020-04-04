/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 *
 * Type: Linked List
 * Difficulty: Easy
 * Time Complexity: O(m + n)
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
var getIntersectionNode = function (headA, headB) {
  let pointA = headA
  let pointB = headB
  let reachTailTimes = 0
  while (reachTailTimes <= 2 && pointA && pointB) {
    if (pointA === pointB) {
      return pointA
    }

    if (!pointA.next) {
      // reach listA tail
      reachTailTimes += 1
      pointA = headB
    } else {
      pointA = pointA.next
    }

    if (!pointB.next) {
      // reach listB tail
      reachTailTimes += 1
      pointB = headA
    } else {
      pointB = pointB.next
    }
  }

  return pointA === pointB ? pointA : null
}

function main () {
  test('No test for linked list problems', t =>
    t.is(typeof getIntersectionNode, 'function'))
}

main()
