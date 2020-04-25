/**
 * https://leetcode.com/problems/permutations/
 *
 * Type: Backtracking
 * Difficulty: Medium
 * Time Complexity: O(n * n!)
 * Space Complexity: O(n!)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  if (!nums.length) {
    return []
  }

  const result = []

  const helper = (i, arr) => {
    if (i === nums.length) {
      result.push(arr)
      return
    }

    const num = nums[i]
    for (let index = 0; index <= arr.length; index++) {
      const newArr = [...arr]
      newArr.splice(index, 0, num)
      helper(i + 1, newArr)
    }
  }

  helper(1, [nums[0]])

  return result
}

function main () {
  const testList = [
    {
      testData: [],
      result: []
    },
    {
      testData: [1],
      result: [[1]]
    },
    {
      testData: [1, 2],
      result: [[1, 2], [2, 1]]
    },
    {
      testData: [1, 2, 3],
      result: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(permute(testData).length, result.length)
    })
  }
}

main()
