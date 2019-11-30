/**
 * https://leetcode.com/problems/power-of-three/
 *
 * Type: Math
 * Difficulty: Easy
 * Time Complexity: O(log3(n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) {
    return false
  }

  while (n % 3 === 0) {
    n /= 3
  }

  return n === 1
}

function main () {
  const testList = [
    {
      testData: -1,
      result: false
    },
    {
      testData: 1,
      result: true
    },
    {
      testData: 2,
      result: false
    },
    {
      testData: 3,
      result: true
    },
    {
      testData: 9,
      result: true
    },
    {
      testData: 27,
      result: true
    },
    {
      testData: 81,
      result: true
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(isPowerOfThree(testData), result)
    })
  }
}

main()
