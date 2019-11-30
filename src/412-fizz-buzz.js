/**
 * https://leetcode.com/problems/fizz-buzz/
 *
 * Type: Math
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else {
      result.push(`${i}`)
    }
  }

  return result
}

function main () {
  const testList = [
    {
      testData: 1,
      result: ['1']
    },
    {
      testData: 15,
      result: [
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz'
      ]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.deepEqual(fizzBuzz(testData), result)
    })
  }
}

main()
