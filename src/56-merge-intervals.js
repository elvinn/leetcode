/**
 * https://leetcode.com/problems/merge-intervals/
 *
 * Type: Sorting
 * Difficulty: Medium
 * Time Complexity: O(n * log(n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {
  if (!intervals || !intervals.length) {
    return []
  }

  intervals = intervals.sort((a, b) => a[0] - b[0])

  const result = []
  let left = intervals[0][0]
  let right = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    const [curLeft, curRight] = intervals[i]

    if (curLeft <= right) {
      right = Math.max(right, curRight)
    } else {
      result.push([left, right])
      left = curLeft
      right = curRight
    }
  }

  result.push([left, right])

  return result
}

function main () {
  const testList = [
    {
      testData: [[1, 3], [2, 6], [8, 10], [15, 18]],
      result: [[1, 6], [8, 10], [15, 18]]
    },
    {
      testData: [[1, 4], [4, 5]],
      result: [[1, 5]]
    },
    {
      testData: [[1, 4], [2, 3]],
      result: [[1, 4]]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.deepEqual(merge(testData), result)
    })
  }
}

main()
