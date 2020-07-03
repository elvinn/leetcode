/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

#include <cassert>
#include <vector>
using namespace std;

class Solution {
public:
  /**
   * Binary search
   * Time Complexity: O(n * log(n))
   * Space Complexity: O(1)
   */
  int findDuplicate(vector<int> &nums) {
    int low = 1;
    int high = nums.size() - 1;
    while (low < high) {
      int mid = (low + high) / 2;
      int count = 0;
      for (int value : nums) {
        if (value <= mid) {
          count++;
        }
      }

      if (count > mid) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
};

int main() {
  Solution mySolution;

  vector<int> input1{1, 3, 4, 2, 2};
  vector<int> input2{3, 1, 3, 4, 2};
  vector<int> input3{1, 1};

  assert(mySolution.findDuplicate(input1) == 2);
  assert(mySolution.findDuplicate(input2) == 3);
  assert(mySolution.findDuplicate(input3) == 1);

  return 0;
}
