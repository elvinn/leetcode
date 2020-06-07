/**
 * https://leetcode.com/problems/sqrtx/
 *
 * Type: Math
 * Difficulty: Easy
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  if (x <= 0) {
    return 0
  }

  let x0 = x
  let x1 = x
  while (true) {
    x1 = (x0 + x / x0) / 2
    if (x0 - x1 < 1e-5) {
      break
    }
    x0 = x1
  }

  return Math.floor(x1)
}

function main () {
  const testList = [
    {
      testData: 4,
      result: 2
    },
    {
      testData: 8,
      result: 2
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(mySqrt(testData), result)
    })
  }
}

main()
