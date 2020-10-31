/**
 * https://leetcode.com/problems/remove-invalid-parentheses/
 *
 * Type: Backtracking
 * Difficulty: Hard
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */

import test from 'ava'

const isValid = s => {
  let leftSubRight = 0
  for (const ch of s) {
    switch (ch) {
      case '(':
        leftSubRight += 1
        break
      case ')':
        leftSubRight -= 1
        break
      default:
        break
    }

    if (leftSubRight < 0) {
      return false
    }
  }

  return leftSubRight === 0
}

const strSplice = (str, index, count) => {
  const arr = [...str]
  arr.splice(index, count)
  return arr.join('')
}

/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function (s) {
  let curLevel = new Set([s])
  let nextNevel
  while (true) {
    const validResult = Array.from(curLevel).filter(str => isValid(str))
    if (validResult.length) {
      return validResult
    }

    nextNevel = new Set()
    for (const str of curLevel) {
      for (let i = 0; i < str.length; i++) {
        const ch = str[i]
        if (ch === '(' || ch === ')') {
          nextNevel.add(strSplice(str, i, 1))
        }
      }
    }

    curLevel = nextNevel
  }
}

function main () {
  const testList = [
    {
      testData: ')(',
      result: ['']
    },
    {
      testData: '()())()',
      result: ['(())()', '()()()']
    },
    {
      testData: ')f(',
      result: ['f']
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.deepEqual(removeInvalidParentheses(testData), result)
    })
  }
}

main()
