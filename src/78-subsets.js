/**
 * https://leetcode.com/problems/subsets/
 *
 * Type: Backtracking
 * Difficulty: Medium
 * Time Complexity: O(n * 2^n)
 * Space Complexity: O(n * 2^n)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets1 = nums => {
  const result = [[]]

  const helper = (oneSet, start) => {
    result.push(oneSet)
    for (let i = start; i < nums.length; i++) {
      helper([...oneSet, nums[i]], i + 1)
    }
  }

  nums.forEach((num, index) => helper([num], index + 1))

  return result
}

const subsets2 = nums => {
  const result = [[]]

  nums.forEach(num => {
    const length = result.length
    for (let i = 0; i < length; i++) {
      result.push([...result[i], num])
    }
  })

  return result
}

function main () {
  const testList = [
    {
      testData: [],
      result: [[]]
    },
    {
      testData: [1],
      result: [[], [1]]
    },
    {
      testData: [1, 2],
      result: [[], [1], [2], [1, 2]]
    },
    {
      testData: [1, 2, 3],
      result: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(subsets1(testData).length, result.length)
      t.is(subsets2(testData).length, result.length)
    })
  }
}

main()
