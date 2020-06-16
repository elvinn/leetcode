/**
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  let zeroIndex = -1
  let base = 1

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (!num) {
      if (zeroIndex === -1) {
        zeroIndex = i
        continue
      } else {
        // has more than one zero
        base = 0
        break
      }
    }

    base *= num
  }

  if (zeroIndex > -1) {
    const result = nums.fill(0)

    if (base) {
      result[zeroIndex] = base
    }

    return result
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = base / (nums[i] || 1)
  }

  return nums
}

function main () {
  const testList = [
    {
      testData: [1, 0],
      result: [0, 1]
    },
    {
      testData: [1, 0, 0],
      result: [0, 0, 0]
    },
    {
      testData: [9, 0, -2],
      result: [0, -18, 0]
    },
    {
      testData: [1, 2, 3, 4],
      result: [24, 12, 8, 6]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.deepEqual(productExceptSelf(testData), result)
    })
  }
}

main()
