/**
 * https://leetcode.com/problems/move-zeroes/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums = 0) {
  let zeroNum = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroNum++
      continue
    }

    if (zeroNum) {
      nums[i - zeroNum] = nums[i]
    }
  }
  for (let i = nums.length - 1; i > nums.length - zeroNum - 1; i--) {
    nums[i] = 0
  }
}

function main () {
  const testList = [
    {
      testArr: [0, 0, 0],
      result: [0, 0, 0]
    },
    {
      testArr: [0, 1, 0, 3, 12],
      result: [1, 3, 12, 0, 0]
    },
    {
      testArr: [1, 3, 0, 1],
      result: [1, 3, 1, 0]
    }
  ]

  for (const { testArr, result } of testList) {
    test(JSON.stringify(testArr), t => {
      moveZeroes(testArr)
      t.deepEqual(testArr, result)
    })
  }
}

main()
