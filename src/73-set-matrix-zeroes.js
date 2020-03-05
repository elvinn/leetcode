/**
 * https://leetcode.com/problems/set-matrix-zeroes/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const n = matrix.length // rows
  const m = matrix[0].length // cols

  let isFirstColZero = false

  for (let i = 0; i < n; i++) {
    const row = matrix[i]
    if (row[0] === 0) {
      isFirstColZero = true
    }

    for (let j = 1; j < m; j++) {
      if (row[j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  // first row except matrix[0][0]
  const firstRow = matrix[0]
  for (let i = 1; i < m; i++) {
    if (firstRow[i] === 0) {
      for (let j = 1; j < n; j++) {
        matrix[j][i] = 0
      }
    }
  }

  // first col
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < m; j++) {
        matrix[i][j] = 0
      }
    }
  }

  // whether to make first col zero
  if (isFirstColZero) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0
    }
  }

  return matrix
}

function main () {
  const testList = [
    {
      testData: [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]],
      result: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.deepEqual(setZeroes(testData), result)
    })
  }
}

main()
