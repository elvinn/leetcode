/**
 * https://leetcode.com/problems/happy-number/
 *
 * Type: Math
 * Difficulty: Easy
 * Time Complexity: O(log(n))
 * Space Complexity: O(log(n))
 */

import test from 'ava'

/**
 * Use set to find circle
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  const getNext = n => {
    let result = 0
    while (n > 0) {
      result += (n % 10) ** 2
      n = Math.floor(n / 10)
    }

    return result
  }

  const set = new Set()
  while (n !== 1) {
    if (set.has(n)) {
      break
    }

    set.add(n)

    n = getNext(n)
  }

  return n === 1
}

function main () {
  const testList = [
    {
      testData: 19,
      result: true
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(isHappy(testData), result)
    })
  }
}

main()
