/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * Type: Dynamic Programming
 * Difficulty: Medium
 * Time Complexity: O()
 * Space Complexity: O()
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

  const cache = []

  cache[0] = nums[0]

  nums.forEach((current) => {
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
    let medium
    while (true) {
      medium = Math.floor((left + right) / 2)
      if (cache[medium] < current && cache[medium + 1] > current) {
        cache[medium] = current
      }
    }
  })
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
      testData: [10, 9, 2, 5, 3, 7, 101, 18],
      result: 4
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(lengthOfLIS1(testData), result)
    })
  }
}

main()
