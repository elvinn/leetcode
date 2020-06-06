/**
 * https://leetcode.com/problems/excel-sheet-column-number/
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
const titleToNumber = s => {
  const basic = 65 - 1
  const length = s.length

  let result = 0
  for (let i = length - 1; i >= 0; i--) {
    const num = s.charCodeAt(i) - basic
    result += num * Math.pow(26, length - 1 - i)
  }

  return result
}

function main () {
  const testList = [
    {
      testData: 'A',
      result: 1
    },
    {
      testData: 'AB',
      result: 28
    },
    {
      testData: 'ZY',
      result: 701
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(titleToNumber(testData), result)
    })
  }
}

main()
