/**
 * https://leetcode.com/problems/powx-n/
 *
 * Type: Math
 * Difficulty: Medium
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * Recursive Method
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow1 = (x, n) => {
  if (n === 0) {
    return 1
  }

  if (n < 0) {
    return 1 / myPow1(x, -n)
  }

  const base = myPow1(x, Math.floor(n / 2))
  if (n % 2 === 0) {
    return base * base
  } else {
    return base * base * x
  }
}

/**
 * Iterative Method
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow2 = (x, n) => {
  if (n === 0) {
    return 1
  }
  if (x === 0) {
    return 0
  }

  let isNegative = false

  if (n < 0) {
    isNegative = true
    n = -n
  }

  let result = 1
  let multi = x

  while (n > 0) {
    if (n % 2 === 1) {
      result *= multi
    }

    multi *= multi
    n = Math.floor(n / 2)
  }

  return isNegative ? 1 / result : result
}

function main () {
  const testList = [
    {
      x: 2,
      n: 10,
      result: Math.pow(2, 10)
    },
    {
      x: 2.1,
      n: 3,
      result: Math.pow(2.1, 3)
    },
    {
      x: 2,
      n: -2,
      result: Math.pow(2, -2)
    }
  ]

  for (const { x, n, result } of testList) {
    test(`${x} ${n}`, t => {
      t.is(myPow1(x, n), result)
      t.is(myPow2(x, n), result)
    })
  }
}

main()
