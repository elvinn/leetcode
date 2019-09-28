/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function (prices = []) {
  let result = 0
  for (let i = 1; i < prices.length; i++) {
    result += Math.max(prices[i] - prices[i - 1], 0)
  }
  return result
}

/**
 * This method is a litte more complicated,
 * but it can tell the time to buy and sell stock.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices = []) {
  let result = 0

  let hasStock = false
  let buyPrice

  for (let i = 0; i < prices.length; i++) {
    const nowPrice = prices[i]
    const nextPrice = prices[i + 1]
    if (!hasStock && nextPrice && nowPrice < nextPrice) {
      // search for lower price to buy stock
      hasStock = true
      buyPrice = nowPrice
    } else if (
      hasStock &&
      ((!nextPrice && nowPrice > buyPrice) ||
        (nowPrice && nowPrice > nextPrice))
    ) {
      // search for higher price to sell stock
      hasStock = false
      result += nowPrice - buyPrice
    }
  }

  return result
}

function main () {
  const testList = [
    {
      testArr: [1],
      result: 0
    },
    {
      testArr: [1, 4],
      result: 3
    },
    {
      testArr: [7, 1, 5, 3, 6, 4],
      result: 7
    },
    {
      testArr: [1, 2, 3, 4, 5],
      result: 4
    }
  ]

  for (const { testArr, result } of testList) {
    test(JSON.stringify(testArr), t => {
      t.is(maxProfit1(testArr), result)
      t.is(maxProfit2(testArr), result)
    })
  }
}

main()
