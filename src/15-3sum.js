/**
 * https://leetcode.com/problems/3sum/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * use twp pointers
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return []
  }

  const sortedNums = nums.sort((a, b) => a - b)
  const result = []

  const len = sortedNums.length
  for (let i = 0; i < len; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue
    }
    let j = i + 1
    let k = len - 1
    while (j < k) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k]
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
        while (j < k && sortedNums[j] === sortedNums[j + 1]) {
          j += 1
        }
        while (k > j && sortedNums[k] === sortedNums[k - 1]) {
          k -= 1
        }
        j += 1
        k -= 1
      } else if (sum < 0) {
        j += 1
      } else {
        k -= 1
      }
    }
  }
  return result
}

/**
 * Use hash map
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function (nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return []
  }

  const numMap = {}
  nums.forEach(num => {
    if (!numMap[num]) {
      numMap[num] = 1
    } else {
      numMap[num] += 1
    }
  })

  const result = []
  const keys = Object.keys(numMap)
    .map(a => parseInt(a, 10))
    .sort((a, b) => a - b)

  let lastMatchedNumC
  for (let i = 0; i < keys.length; i++) {
    const numA = keys[i]
    lastMatchedNumC = Number.MAX_VALUE
    for (let j = numMap[numA] > 1 ? i : i + 1; j < keys.length; j++) {
      const numB = keys[j]
      if (numB > lastMatchedNumC) {
        break
      }

      const numC = -numA - numB
      if (numC >= numB && numMap[numC]) {
        if (numC === numB) {
          if (numC === numA && numMap[numC] < 3) {
            continue
          }
          if (numMap[numC] < 2) {
            continue
          }
        }
        lastMatchedNumC = numC
        result.push([numA, numB, numC])
      }
    }
  }

  return result
}

function main () {
  const testList = [
    {
      testData: [-1, 0, 1, 2, -1, -4],
      result: [[-1, -1, 2], [-1, 0, 1]]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.deepEqual(threeSum(testData), result)
      t.deepEqual(threeSum2(testData), result)
    })
  }
}

main()
