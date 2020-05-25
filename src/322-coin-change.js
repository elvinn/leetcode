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
  const helper = (leftAmount) => {

  }

  for (let i = 0; i < coins.length; i++) {
    
  }
}

function main () {
  const testList = [
    {
      testData: 1,
      result: 2
    },
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(coinChange(testData), result)
    })
  }
}

main()