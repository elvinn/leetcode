/**
 * https://leetcode.com/problems/valid-palindrome/
 *
 * Type: String
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

var isAlphanumeric = function (codePoint) {
  if (codePoint >= 48 && codePoint <= 57) {
    // 0 - 9
    return true
  }

  if (codePoint >= 65 && codePoint <= 90) {
    // A - Z
    return true
  }

  if (codePoint >= 97 && codePoint <= 122) {
    // a - z
    return true
  }

  return false
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase()
  let i = 0
  let j = s.length - 1

  while (i < j) {
    const codePointI = s.codePointAt(i)
    const codePointJ = s.codePointAt(j)
    let bothAlphanumeric = true
    if (!isAlphanumeric(codePointI)) {
      bothAlphanumeric = false
      i++
    }
    if (!isAlphanumeric(codePointJ)) {
      bothAlphanumeric = false
      j--
    }
    if (!bothAlphanumeric) {
      continue
    }
    if (codePointI === codePointJ) {
      i++
      j--
    } else {
      return false
    }
  }

  return true
}

function main () {
  const testList = [
    {
      testData: 'A man, a plan, a canal: Panama',
      result: true
    },
    {
      testData: 'aA',
      result: true
    },
    {
      testData: 'a',
      result: true
    },
    {
      testData: '',
      result: true
    },
    {
      testData: 'race a car',
      result: false
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(isPalindrome(testData), result)
    })
  }
}

main()
