/**
 * https://leetcode.com/problems/number-of-1-bits/
 *
 * Type: Others
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0
  while (n > 0) {
    if (n % 2 === 1) {
      result += 1
    }
    n >>>= 1 // use '>>>' rather than '>>'
  }

  return result
}

function main () {
  const testList = [
    {
      testData: 1,
      result: 1
    },
    {
      testData: 2,
      result: 1
    },
    {
      testData: 3,
      result: 2
    },
    {
      testData: 4294967293,
      result: 31
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(hammingWeight(testData), result)
    })
  }
}

main()
