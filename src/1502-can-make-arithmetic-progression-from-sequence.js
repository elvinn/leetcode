/**
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 *
 * Type: array
 * Difficulty: easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = arr => {
  arr.sort((a, b) => a - b)
  const diff = arr[0] - arr[1]
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== diff) {
      return false
    }
  }
  return true
}

function main () {
  const testList = [
    {
      testData: [3, 5, 1],
      result: true
    },
    {
      testData: [1, 2, 4],
      result: false
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(canMakeArithmeticProgression(testData), result)
    })
  }
}

main()
