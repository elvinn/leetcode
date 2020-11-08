/**
 * https://leetcode.com/problems/wiggle-sort-ii/
 *
 * Type: Sort
 * Difficulty: Medium
 * Time Complexity: O(n * log(n))
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function wiggleSort (nums) {
  nums = nums.sort((a, b) => a - b)
  const middle = Math.ceil(nums.length / 2)
  const A = nums.slice(0, middle).reverse()
  const B = nums.slice(middle).reverse()

  for (let i = 0; i < B.length; i++) {
    nums[2 * i] = A[i]
    nums[2 * i + 1] = B[i]
  }

  if (B.length < A.length) {
    nums[nums.length - 1] = A[A.length - 1]
  }
}

function main () {
  const testList = [
    {
      testData: [1, 5, 1, 1, 6, 4]
    },
    {
      testData: [1, 3, 2, 2, 3, 1]
    },
    {
      testData: [5, 3, 1, 2, 6, 7, 8, 5, 5]
    }
  ]

  for (const { testData } of testList) {
    test(JSON.stringify(testData), t => {
      wiggleSort(testData)
      for (let i = 0; i < testData.length - 1; i++) {
        if (i % 2 === 0) {
          t.assert(testData[i] < testData[i + 1])
        } else {
          t.assert(testData[i] > testData[i + 1])
        }
      }
    })
  }
}

main()
