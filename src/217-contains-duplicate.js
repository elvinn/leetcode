/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map()
  for (const key of nums) {
    if (map.has(key)) {
      return true
    }
    map.set(key, 1)
  }

  return false
}

function main () {
  const testList = [
    {
      testArr: [1],
      result: false
    },
    {
      testArr: [1, 2, 3, 1],
      result: true
    },
    {
      testArr: [1, 2, 3, 4],
      result: false
    },
    {
      testArr: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      result: true
    }
  ]

  for (const { testArr, result } of testList) {
    test(JSON.stringify(testArr), t => {
      t.is(containsDuplicate(testArr), result)
    })
  }
}

main()
