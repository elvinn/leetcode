/**
 * https://leetcode.com/problems/word-search/
 *
 * Type: Backtracking
 * Difficulty: Medium
 * Time Complexity: O(n * k)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const rowMax = board.length
  const visitedBoard = board.map(() => [])
  const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]]

  const helper = (x, y, wordIndex = 0) => {
    if (wordIndex >= word.length) {
      return true
    }

    if (
      x >= rowMax ||
      x < 0 ||
      y < 0 ||
      visitedBoard[x][y] ||
      board[x][y] !== word[wordIndex]
    ) {
      return false
    }

    visitedBoard[x][y] = true

    for (let i = 0; i < directions.length; i++) {
      if (helper(x + directions[i][0], y + directions[i][1], wordIndex + 1)) {
        return true
      }
    }

    visitedBoard[x][y] = false
    return false
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (helper(i, j)) {
        return true
      }
    }
  }

  return false
}

function main () {
  const testList = [
    {
      board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      word: 'ABCCED',
      result: true
    },
    {
      board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      word: 'SEE',
      result: true
    },
    {
      board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      word: 'ABCB',
      result: false
    }
  ]

  for (const { board, word, result } of testList) {
    test(`${JSON.stringify(board)} - ${word}`, t => {
      t.is(exist(board, word), result)
    })
  }
}

main()
