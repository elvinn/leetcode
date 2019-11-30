/**
 * 13. Roman to Integer
 *
 * Type: Math
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let prev = 0
  for (let i = s.length - 1; i >= 0; i--) {
    const cur = romanMap[s[i]]
    if (cur < prev) {
      result -= cur
    } else {
      result += cur
    }
    prev = cur
  }
  return result
}

function main () {
  const testList = [
    {
      testData: 'III',
      result: 3
    },
    {
      testData: 'IV',
      result: 4
    },
    {
      testData: 'IX',
      result: 9
    },
    {
      testData: 'LVIII',
      result: 58
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(romanToInt(testData), result)
    })
  }
}

main()
