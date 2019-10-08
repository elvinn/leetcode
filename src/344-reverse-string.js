/**
 * https://leetcode.com/problems/reverse-string/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const length = s.length
  for (let i = 0; i < Math.floor(length / 2); i++) {
    const temp = s[i]
    s[i] = s[length - i - 1]
    s[length - i - 1] = temp
  }
}

function main () {
  const testList = [
    {
      testArr: ['h', 'e', 'l', 'l', 'o'],
      result: ['o', 'l', 'l', 'e', 'h']
    },
    {
      testArr: ['H', 'a', 'n', 'n', 'a', 'h'],
      result: ['h', 'a', 'n', 'n', 'a', 'H']
    },
    {
      testArr: ['a'],
      result: ['a']
    }
  ]

  for (const { testArr, result } of testList) {
    test(JSON.stringify(testArr), t => {
      reverseString(testArr)
      t.deepEqual(testArr, result)
    })
  }
}

main()
