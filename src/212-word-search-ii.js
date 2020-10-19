/**
 * https://leetcode.com/problems/word-search-ii/
 *
 * Type: Backtracking
 * Difficulty: Hard
 */

import test from 'ava'

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  const WORD_KEY = '$'

  // init trie tree
  const trie = {}
  for (const word of words) {
    let node = trie
    for (const char of word) {
      node[char] = node[char] || {}
      node = node[char]
    }

    node[WORD_KEY] = word
  }

  const VISITED_KEY = '#'
  const visitPos = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  const row = board.length
  const col = board[0].length

  // search for valid word
  const backtracking = (parent, x, y) => {
    const char = board[x][y]
    const currentNode = parent[char]

    if (currentNode[WORD_KEY]) {
      result.push(currentNode[WORD_KEY])
      delete currentNode[WORD_KEY]
    }

    // optimization: reach the leaf node and it is no longer needed, so delete it
    if (!Object.keys(currentNode).length) {
      delete parent[char]
      return
    }

    board[x][y] = VISITED_KEY

    for (const [xOffset, yOffset] of visitPos) {
      const newX = x + xOffset
      const newY = y + yOffset

      if (
        newX < 0 ||
        newX >= row ||
        y < 0 ||
        y >= col ||
        board[newX][newY] === VISITED_KEY
      ) {
        continue
      }

      if (!currentNode[board[newX][newY]]) {
        continue
      }

      backtracking(currentNode, newX, newY)
    }

    board[x][y] = char
  }

  // loop board
  const result = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (trie[board[i][j]]) {
        backtracking(trie, i, j)
      }
    }
  }

  return result
}

function main () {
  const testList = [
    {
      board: [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v']
      ],
      words: ['oath', 'pea', 'eat', 'rain'],
      result: ['eat', 'oath']
    }
  ]

  for (const { board, words, result } of testList) {
    test(JSON.stringify({ board, words }), t => {
      t.is(findWords(board, words).length, result.length)
    })
  }
}

main()
