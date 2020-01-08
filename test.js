var threeSum = function (nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return []
  }

  const sortedNums = nums.sort((a, b) => a - b)
  const result = []

  const len = sortedNums.length
  for (let i = 0; i < len; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue
    }
    let j = i + 1
    let k = len - 1
    while (j < k) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k]
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
        while (j < k && sortedNums[j] === sortedNums[j + 1]) {
          console.log('b', j)
          j += 1
        }
        while (k > j && sortedNums[k] === sortedNums[k - 1]) {
          console.log('c', k)
          k -= 1
        }
        j += 1
        k -= 1
      } else if (sum < 0) {
        j += 1
      } else {
        k -= 1
      }
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
