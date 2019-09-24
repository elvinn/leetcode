/**
 * https://leetcode.com/problems/plus-one/
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits = []) {
  const result = []
  let addNumber = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    if (addNumber === 0) {
      result.unshift(digits[i])
      continue
    }
    const sum = digits[i] + addNumber
    if (sum >= 10) {
      addNumber = 1
      result.unshift(sum - 10)
    } else {
      addNumber = 0
      result.unshift(sum)
    }
  }
  if (addNumber !== 0) {
    result.unshift(addNumber)
  }
  return result
}

/**
 * Wrong Resolution
 * It doesn't work if number is too large
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOneError = function (digits) {
//   const number = parseInt(digits.join(''), 10)
//   return (number + 1)
//     .toString()
//     .split('')
//     .map(s => parseInt(s, 10))
// }

function main () {
  const testList = [
    {
      testArr: [1, 2, 3],
      result: [1, 2, 4]
    },
    {
      testArr: [4, 3, 2, 1],
      result: [4, 3, 2, 2]
    },
    {
      testArr: [9, 9],
      result: [1, 0, 0]
    },
    {
      testArr: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
      result: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
    }
  ]

  for (const { testArr, result } of testList) {
    test(`${JSON.stringify(testArr)}`, t => {
      t.deepEqual(plusOne(testArr), result)
    })
  }
}

main()
