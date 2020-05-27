/**
 * https://leetcode.com/problems/coin-change/
 *
 * Type: Dynamic Programming
 * Difficulty: Medium
 * Time Complexity: O()
 * Space Complexity: O()
 */

import test from 'ava'

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  const cache = {}

  const helper = leftAmount => {
    if (leftAmount < 0) {
      return -1
    } else if (leftAmount === 0) {
      return 0
    } else if (cache[leftAmount]) {
      return cache[leftAmount]
    }

    let result = Number.MAX_SAFE_INTEGER
    coins.forEach(coin => {
      const changeNum = helper(leftAmount - coin)
      if (changeNum === -1) {
        return
      }
      result = Math.min(result, changeNum + 1)
    })

    result = result === Number.MAX_SAFE_INTEGER ? -1 : result
    cache[leftAmount] = result
    return result
  }

  return helper(amount)
}

function main () {
  const testList = [
    {
      coins: [1, 2, 5],
      amount: 11,
      result: 3
    },
    {
      coins: [2],
      amount: 3,
      result: -1
    }
  ]

  for (const { coins, amount, result } of testList) {
    test(JSON.stringify(coins) + amount, t => {
      t.is(coinChange(coins, amount), result)
    })
  }
}

main()
