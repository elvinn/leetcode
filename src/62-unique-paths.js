/**
 * https://leetcode.com/problems/unique-paths/
 *
 * Type: Dynamic Programming
 * Difficulty: Medium
 * Time Complexity: O(m * n)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const ans = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      ans[j] = ans[j - 1] + ans[j]
    }
  }

  return ans[n - 1]
}

function main () {
  const testList = [
    {
      m: 3,
      n: 2,
      result: 3
    },
    {
      m: 7,
      n: 3,
      result: 28
    }
  ]

  for (const { m, n, result } of testList) {
    test(`${m} ${n} ${result}`, t => {
      t.is(uniquePaths(m, n), result)
    })
  }
}

main()
