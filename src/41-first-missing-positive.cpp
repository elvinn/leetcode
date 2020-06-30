/**
 * https://leetcode.com/problems/first-missing-positive/
 *
 * Type: Array
 * Difficulty: Hard
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

#include <cassert>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  // use `n+1` as the mark
  int firstMissingPositive1(vector<int> &nums) {
    const int n = nums.size();
    const int maxResult = n + 1;
    for (int &num : nums) {
      if (num <= 0) {
        num = maxResult;
      }
    }

    for (int i = 0; i < n; i++) {
      const int num = abs(nums[i]);
      if (num <= n) {
        nums[num - 1] = -abs(nums[num - 1]);
      }
    }

    for (int i = 0; i < n; i++) {
      if (nums[i] > 0) {
        return i + 1;
      }
    }

    return maxResult;
  }

  // swap to make nums[i] = i + 1
  int firstMissingPositive2(vector<int> &nums) {
    const int n = nums.size();
    for (int i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n && nums[i] != nums[nums[i] - 1]) {
        swap(nums[i], nums[nums[i] - 1]);
      }
    }

    for (int i = 0; i < n; i++) {
      if (nums[i] != i + 1) {
        return i + 1;
      }
    }

    return n + 1;
  }
};

int main() {
  Solution mySolution;

  vector<int> input1 = {3, 4, -1, 1, 0};
  const int output1 = 2;

  vector<int> input2 = {1, 1};
  const int output2 = 2;

  assert(mySolution.firstMissingPositive1(input1) == output1);
  assert(mySolution.firstMissingPositive2(input2) == output2);

  return 0;
}
