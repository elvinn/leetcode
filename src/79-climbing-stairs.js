/**
 * https://leetcode.com/problems/climbing-stairs/
 *
 * Type: Dynamic Programming
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // f(n) = f(n-1) + f(n-2)
  const notes = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    notes[i] = notes[i - 1] + notes[i - 2]
  }

  return notes[n]
}

function main () {
  const testList = [
    {
      testData: 2,
      result: 2
    },
    {
      testData: 3,
      result: 3
    },
    {
      testData: 4,
      result: 5
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(climbStairs(testData), result)
    })
  }
}

main()
