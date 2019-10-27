/**
* https://leetcode.com/problems/implement-strstr/
*
* Type: String
* Difficulty: Easy
* Time Complexity: O()
* Space Complexity: O()
*/

import test from 'ava'

/**
 * Brute Force Method
 * Time Complexity: O((m - n) * n)
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
      return 0;
    }

    for (let i = 0; i < haystack.length - needle.length; i++) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }

    return -1;
};

function main () {
  const testList = [
    {
      haystack: "hello",
      needle: "ll",
      result: 2
    },
    {
      haystack: "hello",
      needle: "",
      result: 0
    },
    {
      haystack: "aaaaa",
      needle: "bbs",
      result: -1
    },
  ]

  for (const { haystack, needle, result } of testList) {
    test(JSON.stringify({haystack, needle}), t => {
      t.is(strStr(haystack, needle), result)
    })
  }
}

main()