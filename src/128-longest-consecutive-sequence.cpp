/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * Type: Array
 * Difficulty: Hard
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

#include <cassert>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  int longestConsecutive(vector<int> &nums) {
    unordered_map<int, int> map;

    for (auto num : nums) {
      map[num] = 1;
    }

    int result = 0;
    for (auto num : nums) {
      if (map[num - 1]) {
        continue;
      }

      map[num] = 1;
      int currentCount = 0;
      while (map[num]) {
        currentCount++;
        num++;
      }

      result = max(result, currentCount);
    }

    return result;
  }
};

int main() {
  Solution mySolution;

  vector<int> input = {100, 4, 200, 1, 3, 2};
  int output = 4;

  assert(mySolution.longestConsecutive(input) == 4);

  return 0;
}
