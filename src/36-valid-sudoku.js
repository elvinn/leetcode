/**
 * https://leetcode.com/problems/valid-sudoku/
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const size = 9
  // check row
  for (let i = 0; i < size; i++) {
    if (!validRow(board[i])) {
      return false
    }
  }

  // check column
  for (let i = 0; i < size; i++) {
    const newRow = []
    for (let j = 0; j < size; j++) {
      newRow.push(board[j][i])
    }
    if (!validRow(newRow)) {
      return false
    }
  }

  // check sub board
  const subSize = 3
  for (let i = 0; i < subSize; i++) {
    for (let j = 0; j < subSize; j++) {
      const newRow = [
        ...board[j * 3].slice(i * 3, i * 3 + 3),
        ...board[j * 3 + 1].slice(i * 3, i * 3 + 3),
        ...board[j * 3 + 2].slice(i * 3, i * 3 + 3)
      ]

      if (!validRow(newRow)) {
        return false
      }
    }
  }

  return true
}

var validRow = function (row = []) {
  const rowStr = row.join('').replace(/\./g, '')
  const charSet = new Set(rowStr)
  return charSet.size - rowStr.length === 0
}

function main () {
  const testList = [
    {
      testArr: [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
      ],
      result: true
    }
  ]

  for (const { testArr, k, result } of testList) {
    test(`${JSON.stringify(testArr)} ${k}`, t => {
      t.is(isValidSudoku(testArr), result)
    })
  }
}

main()
