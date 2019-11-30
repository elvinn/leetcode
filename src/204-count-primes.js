/**
 * https://leetcode.com/problems/count-primes/
 *
 * Type: Math
 * Difficulty: Easy
 * Time Complexity: O(nlglgn)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrimes = new Array(n).fill(true)

  const sqrtN = Math.sqrt(n)
  for (let i = 2; i < sqrtN; i++) {
    if (!isPrimes[i]) {
      continue
    }

    for (let j = i * i; j < n; j += i) {
      isPrimes[j] = false
    }
  }

  let result = 0
  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
      result += 1
    }
  }

  return result
}

function main () {
  const testList = [
    {
      testData: 10,
      result: 4
    },
    {
      testData: 2,
      result: 0
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(countPrimes(testData), result)
    })
  }
}

main()
