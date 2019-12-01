/**
 * https://leetcode.com/problems/reverse-bits/
 *
 * Type: Others
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0
  let mask = 1
  for (let i = 0; i < 32; i++) {
    result *= 2 // use '* 2' rather than '<< 1' to avoid overflow
    const and = mask & n
    // -2147483648 means '10000000000000000000000000000000'
    if (and > 0 || and === -2147483648) {
      result += 1
    }
    mask <<= 1
  }

  return result
}

function main () {
  const testList = [
    {
      testData: 43261596,
      result: 964176192
    },
    {
      testData: 4294967293,
      result: 3221225471
    }
  ]

  // −1000000000000000000000000000010
  // 10111111111111111111111111111111
  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(reverseBits(testData), result)
    })
  }
}

main()
