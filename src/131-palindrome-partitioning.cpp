/**
 * https://leetcode.com/problems/palindrome-partitioning
 *
 * Type: Backtracking
 * Difficulty: Medium
 * Time Complexity: O(N * 2^N)
 * Space Complexity: O(N)
 */

#include <cassert>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  vector<vector<string>> partition(string s) {
    vector<vector<string>> result;

    if (!s.length()) {
      return result;
    }

    if (s.length() == 1) {
      result.push_back(vector<string>{s});
      return result;
    }

    vector<string> valid_partion;
    dfs(result, valid_partion, s, 0);

    return result;
  }

  void dfs(vector<vector<string>> &result, vector<string> &valid_partion,
           string s, int start) {
    if (start >= s.length()) {
      result.push_back(valid_partion);
      return;
    }

    for (int end = start; end < s.length(); end++) {
      cout << start << ',' << end << endl;
      ;
      if (!is_palindrome(s, start, end)) {
        continue;
      }

      valid_partion.push_back(s.substr(start, end - start + 1));

      dfs(result, valid_partion, s, end + 1);

      valid_partion.pop_back();
    }
  }

  bool is_palindrome(string &s, int low, int high) {
    while (low < high) {
      if (s[low] != s[high]) {
        return false;
      }

      low++;
      high--;
    }

    return true;
  }
};

void print(vector<vector<string>> result) {
  for (auto const &v : result) {
    for (auto const &s : v) {
      cout << s << ", ";
    }
    cout << endl;
  }
}

int main() {
  Solution mySolution;

  print(mySolution.partition("aabb"));
  return 0;
}
