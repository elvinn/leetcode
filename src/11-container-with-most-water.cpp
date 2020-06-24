/**
 * https://leetcode.com/problems/container-with-most-water/
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
  int maxArea(vector<int> &height) {
    int result = 0;
    int i = 0;
    int j = height.size() - 1;
    while (i < j) {
      int distance = j - i;
      int y;
      if (height[i] < height[j]) {
        y = height[i];
        i++;
      } else {
        y = height[j];
        j--;
      }

      result = max(result, y * distance);
    }

    return result;
  }
};

int main() {
  Solution mySolution;

  vector<int> height{1, 8, 6, 2, 5, 4, 8, 3, 7};
  assert(mySolution.maxArea(height) == 49);
  return 0;
}
