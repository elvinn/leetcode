/**
 * https://leetcode.com/problems/minimum-window-substring/
 *
 * Type: Array (Sliding Window)
 * Difficulty: Hard
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 */

#include <cassert>
#include <climits>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
  unordered_map<char, int> originCharMap, charCounterMap;

  bool isValid() {
    for (const auto &p : originCharMap) {
      if (charCounterMap[p.first] < p.second) {
        return false;
      }
    }

    return true;
  }

  string minWindow(string s, string t) {
    for (const auto &c : t) {
      originCharMap[c]++;
    }

    int leftIndex = 0;
    int rightIndex = 0;
    int minLength = INT_MAX;
    int resultLeft = -1;

    while (rightIndex < s.size()) {
      const char rightChar = s[rightIndex];
      if (originCharMap.find(rightChar) != originCharMap.end()) {
        charCounterMap[rightChar]++;
      }

      while (isValid() && leftIndex <= rightIndex) {
        if (rightIndex - leftIndex + 1 < minLength) {
          minLength = rightIndex - leftIndex + 1;
          resultLeft = leftIndex;
        }

        const char leftChar = s[leftIndex];
        if (originCharMap.find(leftChar) != originCharMap.end()) {
          charCounterMap[leftChar]--;
        }

        leftIndex++;
      }

      rightIndex++;
    }

    return resultLeft == -1 ? "" : s.substr(resultLeft, minLength);
  }
};

int main() {
  Solution mySolution;

  string s = "ADOBECODEBANC";
  string t = "ABC";

  assert(mySolution.minWindow(s, t) == "BANC");

  return 0;
}
