/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 *
 * Type: Searching
 * Difficulty: Medium
 * Time Complexity: O(n * log(r−l))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
  const n = matrix.length

  const check = compareValue => {
    let value
    let i = n - 1
    let j = 0
    let count = 0
    while (i >= 0 && j < n) {
      value = matrix[i][j]
      if (value <= compareValue) {
        i += 1
        count += 1
      } else {
        j += 1
      }
    }

    return count <= k
  }

  let left = matrix[0][0]
  let right = matrix[n - 1][n - 1]
  let middle
  while (left < right) {
    middle = Math.floor((left + right) / 2)
    if (check(middle)) {
      right = middle
    } else {
      left = middle + 1
    }
  }

  return left
}

function main () {
  const testList = [
    {
      matrix: [[1, 5, 9], [10, 11, 13], [12, 13, 15]],
      k: 8,
      result: 13
    },
    {
      matrix: [[-5]],
      k: 1,
      result: -5
    }
  ]

  for (const { matrix, k, result } of testList) {
    test(JSON.stringify({ matrix, k }), t => {
      t.is(kthSmallest(matrix, k), result)
    })
  }
}

main()
