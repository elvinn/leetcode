/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters
 *
 * Type: String
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(m) m is the size of the charset
 */

import test from 'ava'

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0
  const charMap = new Map()
  for (let i = 0, j = 0; j < s.length; j++) {
    const char = s[j]
    const oldIndex = charMap.get(char)
    if (typeof oldIndex === 'number') {
      i = Math.max(i, oldIndex + 1)
    }
    charMap.set(char, j)
    maxLen = Math.max(maxLen, j - i + 1)
  }

  return maxLen
}

function main () {
  const testList = [
    {
      testData: 'abcabcbb',
      result: 3
    },
    {
      testData: 'bbbbb',
      result: 1
    },
    {
      testData: 'pwwkew',
      result: 3
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(lengthOfLongestSubstring(testData), result)
    })
  }
}

main()
