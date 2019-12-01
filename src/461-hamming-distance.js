/**
 * https://leetcode.com/problems/hamming-distance/
 *
 * Type: Others
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y
  let result = 0
  while (n > 0) {
    if (n % 2 === 1) {
      result += 1
    }
    n >>>= 1 // use '>>>' rather than '>>'
  }

  return result
}

function main () {
  const testList = [
    {
      x: 1,
      y: 4,
      result: 2
    }
  ]

  for (const { x, y, result } of testList) {
    test(JSON.stringify({ x, y }), t => {
      t.is(hammingDistance(x, y), result)
    })
  }
}

main()
