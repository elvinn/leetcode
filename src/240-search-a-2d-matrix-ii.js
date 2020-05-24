/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 *
 * Type: Searching
 * Difficulty: Medium
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (!matrix || !matrix[0] || !matrix[0].length) {
    return false
  }

  const bottom = matrix.length - 1
  const right = matrix[0].length - 1

  for (let i = bottom, j = 0; i >= 0 && j <= right; ) {
    const val = matrix[i][j]

    if (val > target) {
      i -= 1
    } else if (val === target) {
      return true
    } else {
      j += 1
    }
  }

  return false
}

function main () {
  const testList = [
    {
      matrix: [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
      ],
      target: 5,
      result: true
    },
    {
      matrix: [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
      ],
      target: 20,
      result: false
    }
  ]

  for (const { matrix, target, result } of testList) {
    test(JSON.stringify(matrix) + target, t => {
      t.is(searchMatrix(matrix, target), result)
    })
  }
}

main()
