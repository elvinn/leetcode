/**
 * https://leetcode.com/problems/regular-expression-matching/
 *
 * Type: Dynamic Programming
 * Difficulty: Hard
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
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

function isSameChar (sChar, pChar) {
  return sChar === pChar || pChar === '.'
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  p = compressP(p)

  const dp = []
  const m = s.length
  const n = p.length
  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1).fill(false))
  }

  dp[0][0] = true
  dp[0][1] = false
  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
      if (p[i] !== '*') {
        break
      }
      dp[0][i + 1] = true
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const sChar = s[i - 1]
      const pChar = p[j - 1]
      if (isSameChar(sChar, pChar)) {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (pChar === '*') {
        dp[i][j] =
          dp[i][j - 2] || // 0 times
          dp[i][j - 1] || // one times
          (dp[i - 1][j] && isSameChar(sChar, p[j - 2])) // multi times
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
      p: 'a*',
      result: true
    },
    {
      s: '',
      p: 'a*',
      result: true
    },
    {
      s: 'aab',
      p: 'c*a*b',
      result: true
    },
    {
      s: 'mississippi',
      p: 'mis*is*p*.',
      result: false
    },
    {
      s: 'aaa',
      p: 'a*',
      result: true
    }
  ]

  for (const { s, p, result } of testList) {
    test(JSON.stringify({ s, p }), t => {
      t.is(isMatch(s, p), result)
    })
  }
}

main()
