/**
 * https://leetcode.com/problems/coin-change/
 *
 * Type: Dynamic Programming
 * Difficulty: Medium
 * Time Complexity: O(amount * coinType)
 * Space Complexity: O(amount)
 */

import test from 'ava'

/**
 * Top down
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange1 = (coins, amount) => {
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

/**
 * Bottom up
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange2 = (coins, amount) => {
  const cache = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  cache[0] = 0
  for (let i = 1; i <= amount; i++) {
    coins.forEach(value => {
      if (value <= i) {
        cache[i] = Math.min(cache[i], cache[i - value] + 1)
      }
    })
  }

  return cache[amount] === Number.MAX_SAFE_INTEGER ? -1 : cache[amount]
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
      t.is(coinChange1(coins, amount), result)
      t.is(coinChange2(coins, amount), result)
    })
  }
}

main()
