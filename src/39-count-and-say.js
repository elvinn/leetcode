/**
 * https://leetcode.com/problems/count-and-say/
 *
 * Type: String
 * Difficulty: Easy
 * Time Complexity: O()
 * Space Complexity: O()
 */

import test from 'ava'

/**
 * @param {number} n
 * @return {string}
 */
var notes = ['1', '11']
var countAndSay = function (n) {
  if (notes[n - 1]) {
    return notes[n - 1]
  }

  const lastStr = countAndSay(n - 1)
  let lastChar = lastStr[0]
  let curSum = 0
  const curStrArray = []
  for (const curChar of lastStr) {
    if (curChar === lastChar) {
      curSum += 1
    } else {
      curStrArray.push(curSum)
      curStrArray.push(lastChar)
      lastChar = curChar
      curSum = 1
    }
  }
  curStrArray.push(curSum)
  curStrArray.push(lastChar)

  notes[n - 1] = curStrArray.join('')
  return notes[n - 1]
}

function main () {
  const testList = [
    {
      testData: 2,
      result: '11'
    },
    {
      testData: 3,
      result: '21'
    },
    {
      testData: 5,
      result: '111221'
    },
    {
      testData: 10,
      result: '13211311123113112211'
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(countAndSay(testData), result)
    })
  }
}

main()
