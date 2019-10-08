/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(ln[n])
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const INT_MAX = 2 ** 31 - 1 // 2147483647
  const INT_MIN = (-2) ** 31 // -2147483648
  let result = 0
  while (x !== 0) {
    const remainder = x % 10
    if (result > INT_MAX / 10 || (result === INT_MAX / 10 && remainder === 7)) {
      return 0
    }

    if (
      result < INT_MIN / 10 ||
      (result === INT_MIN / 10 && remainder === -8)
    ) {
      return 0
    }

    x = parseInt(x / 10)
    result = result * 10 + remainder
  }

  return result
}

function main () {
  const testList = [
    {
      testNum: 123,
      result: 321
    },
    {
      testNum: 120,
      result: 21
    },
    {
      testNum: 1534236469,
      result: 0
    },
    {
      testNum: -312,
      result: -213
    },
    {
      testNum: 1,
      result: 1
    },
    {
      testNum: 0,
      result: 0
    }
  ]

  for (const { testNum, result } of testList) {
    test(JSON.stringify(testNum), t => {
      t.is(reverse(testNum), result)
    })
  }
}

main()
