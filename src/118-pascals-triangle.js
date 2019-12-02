/**
 * https://leetcode.com/problems/pascals-triangle/
 *
 * Type: Others
 * Difficulty: Easy
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 */

import test from 'ava'

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows <= 0) {
    return []
  }

  const result = [[1]]

  for (let i = 0; i < numRows - 1; i++) {
    const lastRow = result[i]
    const row = [1]
    const middle = Math.floor((i + 1) / 2)
    for (let j = 0; j < middle; j++) {
      row[j + 1] = lastRow[j] + lastRow[j + 1]
    }
    for (let j = middle; j < i + 1; j++) {
      row[j + 1] = row[i - j]
    }
    result.push(row)
  }

  return result
}

function main () {
  const testList = [
    {
      testData: 1,
      result: [[1]]
    },
    {
      testData: 5,
      result: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.deepEqual(generate(testData), result)
    })
  }
}

main()
