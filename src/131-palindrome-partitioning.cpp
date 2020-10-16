/**
 * https://leetcode.com/problems/palindrome-partitioning
 *
 * Type: Backtracking
 * Difficulty: Medium
 * Time Complexity: O()
 * Space Complexity: O()
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

    vector<string> empty;
    helper(result, empty, s);

    return result;
  }

  void helper(vector<vector<string>> &result, vector<string> valid_partion,
              string s) {
    const size_t s_length = s.length();
    for (size_t i = 1; i <= s_length; i++) {
      string s1 = s.substr(0, i);
      if (!is_palindrome(s1)) {
        continue;
      }

      valid_partion.push_back(s1);

      if (i == s_length - 1) {
        valid_partion.push_back(s.substr(i, 1));
        result.push_back(vector<string>(valid_partion));
        valid_partion.pop_back();
        valid_partion.pop_back();
      } else if (i == s_length) {
        result.push_back(vector<string>(valid_partion));
      } else {
        string s2 = s.substr(i, s_length - i);
        helper(result, valid_partion, s2);
        valid_partion.pop_back();
      }
    }
  }

  bool is_palindrome(string s) {
    size_t mid = s.length() / 2;
    size_t back_end = s.length() - 1;
    for (size_t i = 0; i < mid; i++) {
      if (s.at(i) != s.at(back_end - i)) {
        return false;
      }
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
