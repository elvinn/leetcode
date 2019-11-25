/**
 * https://leetcode.com/problems/valid-anagram/
 *
 * Type: String
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  function getStringMap (str) {
    const map = new Map()
    // use `of` to support unicode characters
    for (const char of str) {
      const value = map.get(char) || 0
      map.set(char, value + 1)
    }

    return map
  }

  const sMap = getStringMap(s)
  const tMap = getStringMap(t)

  if (sMap.size !== tMap.size) {
    return false
  }

  for (const key of sMap.keys()) {
    if (sMap.get(key) !== tMap.get(key)) {
      return false
    }
  }

  return true
}

function main () {
  const testList = [
    {
      s: 'anagram',
      q: 'nagaram',
      result: true
    },
    {
      s: 'rat',
      q: 'cat',
      result: false
    },
    {
      s: '🤣hello',
      q: 'holel🤣',
      result: true
    },
    {
      s: '🤣hello',
      q: 'happy🤣',
      result: false
    }
  ]

  for (const { s, q, result } of testList) {
    test(JSON.stringify(`${s} ${q}`), t => {
      t.is(isAnagram(s, q), result)
    })
  }
}

main()
