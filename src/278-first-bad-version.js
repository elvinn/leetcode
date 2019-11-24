/**
 * https://leetcode.com/problems/first-bad-version/
 *
 * Type: Sorting and Searching
 * Difficulty: Easy
 * Time Complexity: O(logn)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    return left
  }
}

function main () {
  test('No test for first-bad-version', t => {
    t.is(typeof solution(), 'function')
  })
}

main()
