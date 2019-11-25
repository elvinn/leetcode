/**
 * https://leetcode.com/problems/shuffle-an-array/
 *
 * Type: Design
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const newNums = [...this.nums]
  const length = newNums.length
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * (length - i)) + i
    const temp = newNums[i]
    newNums[i] = newNums[randomIndex]
    newNums[randomIndex] = temp
  }

  return newNums
}

function main () {
  test('No test for design problems', t => {
    const solution = new Solution([1, 2, 3])
    t.is(typeof solution, 'object')
  })
}

main()
