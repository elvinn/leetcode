/**
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Type: Backtracking
 * Difficulty: Medium
 */

import test from 'ava'

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  if (!n) {
    return []
  }

  const result = []

  const helper = (str = '', leftNum = 0, rightNum = 0) => {
    if (leftNum === n && rightNum === n) {
      result.push(str)
    }

    if (rightNum < leftNum) {
      helper(`${str})`, leftNum, rightNum + 1)
    }
    if (leftNum < n) {
      helper(`${str}(`, leftNum + 1, rightNum)
    }
  }

  helper()
  return result
}

function main () {
  const testList = [
    {
      testData: 0,
      result: []
    },
    {
      testData: 1,
      result: ['()']
    },
    {
      testData: 2,
      result: ['()()', '(())']
    },
    {
      testData: 3,
      result: ['((()))', '()(())', '(())()', '()()()', '(()())']
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(generateParenthesis(testData).length, result.length)
    })
  }
}

main()
