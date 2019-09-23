/**
 * https://leetcode.com/problems/rotate-array/
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

import test from 'ava'

var rotate = function (nums, k) {
  if (!nums || !nums.length) {
    return
  }

  k = k % nums.length
  if (!k) {
    return
  }

  const tempArr = new Array(k).concat(nums)
  for (let i = 0; i < k; i++) {
    tempArr[i] = tempArr[tempArr.length - k + i]
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = tempArr[i]
  }
}

function main () {
  const testList = [
    {
      testArr: [1, 2, 3, 4, 5, 6, 7],
      k: 3,
      result: [5, 6, 7, 1, 2, 3, 4]
    },
    {
      testArr: [-1, -100, 3, 99],
      k: 2,
      result: [3, 99, -1, -100]
    }
  ]

  for (const { testArr, k, result } of testList) {
    test(`${JSON.stringify(testArr)} ${k}`, t => {
      rotate(testArr, k)
      t.deepEqual(testArr, result)
    })
  }
}

main()
