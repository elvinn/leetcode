/**
 * https://leetcode.com/problems/implement-strstr/
 *
 * Type: String
 * Difficulty: Easy
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * KMP
 * Time Complexity: O(m)
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  function getNext (str) {
    const next = [-1]
    let i = 0
    let j = -1
    while (i < str.length - 1) {
      if (j === -1 || str[i] === str[j]) {
        j += 1
        i += 1
        next[i] = j
      } else {
        j = next[j]
      }
    }
    return next
  }

  const next = getNext(needle)
  let i = 0
  let j = 0
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      j++
      i++
    } else {
      j = next[j]
    }
  }
  return j === needle.length ? i - needle.length : -1
}

/**
 * use JS API.
 * The fatest method.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr1 = function (haystack, needle) {
  return haystack.indexOf(needle)
}

/**
 * Brute Force Method
 * Time Complexity: O((m - n) * n)
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function (haystack, needle) {
  if (!needle) {
    return 0
  }

  for (let i = 0; i < haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i
    }
  }

  return -1
}

function main () {
  const testList = [
    {
      haystack: 'hello',
      needle: 'll',
      result: 2
    },
    {
      haystack: 'hello',
      needle: '',
      result: 0
    },
    {
      haystack: 'aaaaa',
      needle: 'bbs',
      result: -1
    }
  ]

  for (const { haystack, needle, result } of testList) {
    test(JSON.stringify({ haystack, needle }), t => {
      t.is(strStr(haystack, needle), result)
      t.is(strStr1(haystack, needle), result)
      t.is(strStr2(haystack, needle), result)
    })
  }
}

main()
