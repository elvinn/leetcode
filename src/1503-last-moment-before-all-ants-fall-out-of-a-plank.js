/**
 * https://leetcode.com/contest/weekly-contest-196/problems/last-moment-before-all-ants-fall-out-of-a-plank/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
const getLastMoment = (n, left, right) => {
  let mostLeft = 0
  let mostRight = n

  left.forEach(i => (mostLeft = Math.max(mostLeft, i)))
  right.forEach(i => (mostRight = Math.min(mostRight, i)))

  return Math.max(mostLeft, n - mostRight)
}

function main () {
  const testList = [
    {
      n: 4,
      left: [4, 3],
      right: [0, 1],
      result: 4
    },
    {
      n: 7,
      left: [],
      right: [0, 1, 2, 3, 4, 5, 6, 7],
      result: 7
    },
    {
      n: 7,
      left: [0, 1, 2, 3, 4, 5, 6, 7],
      right: [],
      result: 7
    }
  ]

  for (const { n, left, right, result } of testList) {
    test(`${n} ${left} ${right}`, t => {
      t.is(getLastMoment(n, left, right), result)
    })
  }
}

main()
