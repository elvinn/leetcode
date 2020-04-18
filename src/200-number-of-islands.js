/**
 * https://leetcode.com/problems/number-of-islands/
 *
 * Type: Graph
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {

  const checkOne = (x, y) => {
    if (!grid[x]
      || grid[x][y] !== '1'
    ) {
      return false
    }

    grid[x][y] = '0'
    checkOne(x - 1, y)
    checkOne(x + 1, y)
    checkOne(x, y + 1)
    checkOne(x, y - 1)

    return true
  }

  let res = 0
  grid.forEach((row, x) => {
    row.forEach((_, y) => {

      if (checkOne(x, y)) {
        res += 1
      }
    })
  })

  return res
}

function main () {
  const testList = [
    {
      testData: [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
      ],
      result: 1
    },
    {
      testData: [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
      ],
      result: 3
    },
    {
      testData: [
        ['1', '1', '1'],
        ['0', '1', '0'],
        ['1', '1', '1']
      ],
      result: 1
    },
    {
      testData: [
        ["1","0","1","1","1"],
        ["1","0","1","0","1"],
        ["1","1","1","0","1"]
      ],
      result: 1
    },
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(numIslands(testData), result)
    })
  }
}

main()
