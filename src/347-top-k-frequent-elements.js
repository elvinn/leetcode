/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Type: Sorting
 * Difficulty: Medium
 * Time Complexity: O(n + k)
 * Space Complexity: O(n + k)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = {}
  nums.forEach(num => {
    map[num] = map[num] ? map[num] + 1 : 1
  })

  const list = []
  Object.entries(map).forEach(([key, val]) => {
    if (!list[val]) {
      list[val] = []
    }
    list[val].push(parseInt(key, 10))
  })

  const result = []
  for (let i = list.length; i >= 0 && result.length < k; i--) {
    const nums = list[i]
    if (Array.isArray(nums)) {
      result.push(...nums)
    }
  }

  return result
}

function main () {
  const testList = [
    {
      nums: [1, 1, 1, 2, 2, 3],
      k: 2,
      result: [1, 2]
    },
    {
      nums: [1],
      k: 1,
      result: [1]
    },
    {
      nums: [1, 2],
      k: 2,
      result: [1, 2]
    }
  ]

  for (const { nums, k, result } of testList) {
    test(JSON.stringify(nums) + k, t => {
      t.deepEqual(topKFrequent(nums, k), result)
    })
  }
}

main()
