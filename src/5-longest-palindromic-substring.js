/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Type: String
 * Difficulty: Medium
 * Time Complexity: O(n ^ 2)
 * Space Complexity: O(1)
 */

import test from 'ava'

const longestLen = function (s, left, right) {
  let L = left
  let R = right
  while (L >= 0 && right < s.length && s[L] === s[R]) {
    L -= 1
    R += 1
  }
  return R - L - 1
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let start = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    const maxLen = Math.max(longestLen(s, i, i), longestLen(s, i, i + 1))
    console.log(i, maxLen)
    if (maxLen > end - start + 1) {
      start = i - Math.floor((maxLen - 1) / 2)
      end = i + Math.floor(maxLen / 2)
      console.log('change start end', i, maxLen, start, end)
    }
  }
  return s.slice(start, end + 1)
}

function main () {
  const testList = [
    {
      testData: 'babad',
      result: 'bab'
    },
    {
      testData: 'cbbd',
      result: 'bb'
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(longestPalindrome(testData), result)
    })
  }
}

main()
