/**
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * Type: String
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  }

  const commonChars = []
  let index = 0
  while (true) {
    const sameChar = strs[0][index]
    if (typeof sameChar === 'undefined') {
      break
    }

    let isSame = true
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][index] !== sameChar) {
        isSame = false
        break
      }
    }

    if (!isSame) {
      break
    } else {
      commonChars.push(sameChar)
      index += 1
    }
  }

  return commonChars.join('')
}

function main () {
  const testList = [
    {
      testData: ['flower', 'flow', 'flight'],
      result: 'fl'
    },
    {
      testData: ['dog', 'racecar', 'car'],
      result: ''
    },
    {
      testData: [''],
      result: ''
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(longestCommonPrefix(testData), result)
    })
  }
}

main()
