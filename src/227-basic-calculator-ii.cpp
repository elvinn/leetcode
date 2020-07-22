/**
 * https://leetcode.com/problems/basic-calculator-ii/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

#include <cassert>
#include <iostream>
#include <stack>
#include <string>
using namespace std;

class Solution {
public:
  int calculate(string s) {
    if (s.length() == 0) {
      return 0;
    }

    s += '#';
    stack<int> intStack;

    int curNum = 0;
    char preOption = '+';
    for (int i = 0; i < s.size(); i++) {
      if (s[i] == ' ') {
        continue;
      }

      if (s[i] >= '0' && s[i] <= '9') {
        curNum = curNum * 10 + (s[i] - '0');
        continue;
      }

      switch (preOption) {
      case '+':
        intStack.push(curNum);
        break;
      case '-':
        intStack.push(-curNum);
        break;
      case '*':
        intStack.top() *= curNum;
        break;
      case '/':
        intStack.top() /= curNum;
      default:
        break;
      }

      curNum = 0;
      preOption = s[i];
    }

    int res = 0;
    while (!intStack.empty()) {
      res += intStack.top();
      intStack.pop();
    }

    return res;
  };
};

int main() {
  Solution mySolution;

  assert(mySolution.calculate("3+2*2") == 7);
  assert(mySolution.calculate(" 3/2 ") == 1);
  assert(mySolution.calculate(" 3+5 / 2 ") == 5);
  assert(mySolution.calculate("42") == 42);
  assert(mySolution.calculate("42+158") == 200);

  return 0;
}
