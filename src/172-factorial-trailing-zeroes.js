/**
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 *
 * Type: Math
 * Difficulty: Easy
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = n => {
  let result = 0
  while (n > 0) {
    n = Math.floor(n / 5)
    result += n
  }

  return result
}

function main () {
  const testList = [
    {
      testData: 3,
      result: 0
    },
    {
      testData: 5,
      result: 1
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(trailingZeroes(testData), result)
    })
  }
}

main()
