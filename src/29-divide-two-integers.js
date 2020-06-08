/**
 * https://leetcode.com/problems/divide-two-integers/
 *
 * Type: Math
 * Difficulty: Medium
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const MAX_INT32 = 2147483647
const divide = (dividend, divisor) => {
  let isNegative = false
  if (dividend < 0) {
    isNegative = !isNegative
    dividend = -dividend
  }
  if (divisor < 0) {
    isNegative = !isNegative
    divisor = -divisor
  }

  // Avoid int32 overflow
  if (divisor === 1) {
    return isNegative
      ? Math.max(-MAX_INT32 - 1, -dividend)
      : Math.min(MAX_INT32, dividend)
  }

  const helper = (a, b) => {
    if (a < b) {
      return 0
    }
    if (a === b) {
      return 1
    }

    let count = 1
    let sum = b
    while (sum + sum < a) {
      sum += sum
      count += count
    }
    return count + helper(a - sum, b)
  }

  return isNegative ? -helper(dividend, divisor) : helper(dividend, divisor)
}

function main () {
  const testList = [
    {
      dividend: 10,
      divisor: 3,
      result: 3
    },
    {
      dividend: 7,
      divisor: -3,
      result: -2
    }
  ]

  for (const { dividend, divisor, result } of testList) {
    test(`${dividend} / ${divisor}`, t => {
      t.is(divide(dividend, divisor), result)
    })
  }
}

main()
