/**
 * https://leetcode.com/problems/rotate-image/
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// import test from 'ava'

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  if (n <= 1) {
    return
  }
  let temp1, temp2
  let x, y
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // rotate frame
    for (let j = i; j < n - i - 1; j++) {
      // rotate top to right
      x = j
      y = n - i - 1
      temp1 = matrix[i][j]
      swap()

      // rotate right to bottom
      x = y
      y = n - j - 1
      swap()

      // rotate bottom to left
      x = y
      y = i
      swap()

      // rotate left to top
      x = i
      y = j
      swap()
    }
  }

  function swap () {
    temp2 = matrix[x][y]
    matrix[x][y] = temp1
    temp1 = temp2
  }
}

function main () {
  const testList = [
    {
      testArr: [[1]],
      result: [[1]]
    },
    {
      testArr: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      result: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
    },
    {
      testArr: [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]],
      result: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
    }
  ]

  for (const { testArr, k, result } of testList) {
    test(`${JSON.stringify(testArr)} ${k}`, t => {
      rotate(testArr)
      t.deepEqual(testArr, result)
    })
  }
}

main()
