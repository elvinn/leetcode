/**
 * https://leetcode.com/problems/string-to-integer-atoi
 *
 * Type: String
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const MAX_INT = 2 ** 31 - 1 // 2147483647
  const MIN_INT = -(2 ** 31) // -2147483648

  let result
  let lessThanZero = false

  for (const char of str) {
    if (char === ' ' && typeof result === 'undefined') {
      continue
    }

    if (char === '-' && typeof result === 'undefined') {
      result = 0
      lessThanZero = true
      continue
    }

    if (char === '+' && typeof result === 'undefined') {
      result = 0
      continue
    }

    const charValue = char.codePointAt(0) - 48 // 48 -> '0'
    if (charValue < 0 || charValue > 9) {
      break
    }

    result = result || 0

    if (!lessThanZero) {
      if (
        result > MAX_INT / 10 ||
        (result === Math.floor(MAX_INT / 10) && charValue > 7)
      ) {
        return MAX_INT
      }
    } else {
      if (
        result > -MIN_INT / 10 ||
        (result === Math.floor(-MIN_INT / 10) && charValue > 8)
      ) {
        return MIN_INT
      }
    }
    result = result * 10 + charValue
  }

  result = result || 0

  return lessThanZero ? -result : result
}

function main () {
  const testList = [
    {
      testData: '+42',
      result: 42
    },
    {
      testData: '+-42',
      result: 0
    },
    {
      testData: '42',
      result: 42
    },
    {
      testData: '   -42',
      result: -42
    },
    {
      testData: '4193 with words',
      result: 4193
    },
    {
      testData: 'words and 987',
      result: 0
    },
    {
      testData: '-91283472332',
      result: -2147483648
    },
    {
      testData: '91283472332',
      result: 2147483647
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(myAtoi(testData), result)
    })
  }
}

main()
