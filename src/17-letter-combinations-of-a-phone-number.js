/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Type: backtracking
 * Difficulty: Medium
 * Time Complexity: O(3^n + 4^m)
 * Space Complexity: O(3^n + 4^m)
 */

import test from 'ava'

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (!digits) {
    return []
  }

  const number2letterMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  let result = ['']
  digits.split('').forEach(number => {
    const letters = number2letterMap[number]
    const newResult = []
    letters.forEach(letter => {
      result.forEach(old => newResult.push(`${old}${letter}`))
    })
    result = newResult
  })

  return result
}

function main () {
  const testList = [
    {
      testData: '',
      result: []
    },
    {
      testData: '2',
      result: ['a', 'b', 'c']
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.deepEqual(letterCombinations(testData), result)
    })
  }
}

main()
