/**
 * https://leetcode.com/problems/two-sums/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * Brute Force
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (hashMap.has(diff)) {
      return [hashMap.get(diff), i]
    }
    hashMap.set(nums[i], i)
  }
}

/**
 * Brute Force
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

function main () {
  const testList = [
    {
      testArr: [2, 7, 11, 15],
      target: 9,
      result: [0, 1]
    },
    {
      testArr: [0, 1, 3, 5],
      target: 5,
      result: [0, 3]
    }
  ]

  for (const { testArr, target, result } of testList) {
    test(JSON.stringify(testArr), t => {
      t.deepEqual(twoSum1(testArr, target), result)
      t.deepEqual(twoSum2(testArr, target), result)
    })
  }
}

main()
