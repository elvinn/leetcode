/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * Type: Dynamic Programming
 * Difficulty: Medium
 * Time Complexity: O(n * log(n))
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS1 = nums => {
  if (!nums.length) {
    return 0
  }
  const cache = Array(nums.length).fill(1)
  nums.forEach((current, i) => {
    for (let j = 0; j < i; j++) {
      if (nums[j] < current) {
        cache[i] = Math.max(cache[i], cache[j] + 1)
      }
    }
  })

  return Math.max(...cache)
}

/**
 * Time Complexity: O(n * log(n))
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS2 = nums => {
  if (!nums.length) {
    return 0
  }

  if (nums.length === 1) {
    return 1
  }

  const cache = []

  cache[0] = nums[0]

  nums.forEach(current => {
    const cacheLength = cache.length
    if (current > cache[cacheLength - 1]) {
      cache.push(current)
      return
    }

    if (current === cache[cacheLength - 1]) {
      return
    }

    let left = 0
    let right = cacheLength - 1
    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      const middleVal = cache[middle]
      if (middleVal > current) {
        right = middle - 1
      } else if (middleVal === current) {
        left = middle
        break
      } else {
        left = middle + 1
      }
    }

    cache[left] = current
  })

  return cache.length
}

function main () {
  const testList = [
    {
      testData: [],
      result: 0
    },
    {
      testData: [3, 2, 1],
      result: 1
    },
    {
      testData: [4, 10, 4, 3, 8, 9],
      result: 3
    },
    {
      testData: [10, 9, 2, 5, 3, 7, 101, 18],
      result: 4
    },
    {
      testData: [3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12],
      result: 6
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(lengthOfLIS1(testData), result)
      t.is(lengthOfLIS2(testData), result)
    })
  }
}

main()
