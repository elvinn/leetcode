/**
 * https://leetcode.com/problems/single-number/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums = []) {
  return nums.reduce((prev, cur) => prev ^ cur, 0)
};

function main () {
  const testList = [
    {
      testArr: [2, 2, 1],
      result: 1
    },
    {
      testArr: [4,1,2,1,2],
      result: 4
    }
  ]

  for (const { testArr, result } of testList) {
    test(JSON.stringify(testArr), t => {
      t.is(singleNumber(testArr), result)
    })
  }
}

main()