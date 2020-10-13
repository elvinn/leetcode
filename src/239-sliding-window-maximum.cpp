/**
 * https://leetcode.com/problems/sliding-window-maximum/
 *
 * Type: Deque
 * Difficulty: Hard
 * Time Complexity: O(n)n
 * Space Complexity: O()
 */

#include <cassert>
#include <deque>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  vector<int> maxSlidingWindow(vector<int> &nums, int k) {
    if (k == 1) {
      return nums;
    }

    vector<int> result;
    deque<int> window;

    // visit first k nums
    for (int i = 0; i < k; i++) {
      const int curNum = nums[i];
      while (!window.empty() && curNum > nums[window.back()]) {
        window.pop_back();
      }

      window.push_back(i);
    }

    result.push_back(nums[window.front()]);

    // visit left nums
    for (int i = k; i < nums.size(); i++) {
      if (!window.empty() && window.front() <= i - k) {
        window.pop_front();
      }

      const int curNum = nums[i];
      while (!window.empty() && curNum > nums[window.back()]) {
        window.pop_back();
      }

      window.push_back(i);
      result.push_back(nums[window.front()]);
    }

    return result;
  }
};

int main() {
  Solution mySolution;

  vector<int> nums = {1, 3, -1, -3, 5, 3, 6, 7};
  const int k = 3;
  const vector<int> result = {3, 3, 5, 5, 6, 7};

  assert(mySolution.maxSlidingWindow(nums, k) == result);

  return 0;
}
