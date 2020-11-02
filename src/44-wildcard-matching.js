/**
 * https://leetcode.com/problems/wildcard-matching/
 *
 * Type: Backtracking and Dynamic Programming
 * Difficulty: Hard
 * Time Complexity: O(mn)
 * Space Complexity: O(mn)
 */

import test from 'ava'

const compressP = p => {
  if (!p) {
    return p
  }

  const charList = [p[0]]
  for (let i = 1; i < p.length; i++) {
    if (p[i] === '*' && p[i - 1] === '*') {
      continue
    }

    charList.push(p[i])
  }

  return charList.join('')
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  p = compressP(p)

  const m = s.length
  const n = p.length
  const dp = []
  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1).fill(false))
  }

  dp[0][0] = true
  if (p[0] === '*') {
    dp[0][1] = true
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const pChar = p[j - 1]
      if (pChar === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
      } else if (pChar === '?' || s[i - 1] === pChar) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = false
      }
    }
  }

  return dp[m][n]
}

function main () {
  const testList = [
    {
      s: 'aa',
      p: 'a',
      result: false
    },
    {
      s: 'aa',
      p: '*',
      result: true
    },
    {
      s: 'cb',
      p: '?a',
      result: false
    },
    {
      s: 'adceb',
      p: '*a*b',
      result: true
    },
    {
      s: 'acdcb',
      p: 'a*c?b',
      result: false
    },
    {
      s: '',
      p: '****',
      result: true
    },
    {
      s: 'abcabczzzde',
      p: '*abc???de*',
      result: true
    },
    {
      s: 'aaaaa',
      p: '****a',
      result: true
    }
  ]

  for (const { s, p, result } of testList) {
    test(JSON.stringify({ s, p, result }), t => {
      t.is(isMatch(s, p), result)
    })
  }
}

main()
