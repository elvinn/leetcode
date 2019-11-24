/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Type: Dynamic Programming
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0 || prices.length === 1) {
    return 0
  }

  let maxProfit = 0
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    maxProfit = Math.max(maxProfit, price - minPrice)
    minPrice = Math.min(minPrice, price)
  }

  return maxProfit
}

function main () {
  const testList = [
    {
      testData: [7, 1, 5, 3, 6, 4],
      result: 5
    },
    {
      testData: [7, 6, 4, 3, 1],
      result: 0
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(maxProfit(testData), result)
    })
  }
}

main()
