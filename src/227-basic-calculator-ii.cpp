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

    stack<char> charStack;

    int index = 0;
    while (index < s.length()) {
      const char ch = s.at(index);
      if (ch == ' ') {
        index += 1;
        continue;
      }
      
      if (ch == '*' || ch == '/') {
        const int num1 = charStack.top() - '0';
        char ch2;
        do {
          index += 1;
          ch2 = s.at(index);
        } while (ch2 == ' ');
        
        const int num2 = ch2 - '0';
        charStack.pop();

        int result;
        if (ch == '*') {
          result = num1 * num2;
        } else {
          result = num1 / num2;
        }

        charStack.push(result + '0');
      } else {
        charStack.push(s.at(index));
      }

      index += 1;
    }

    int result = 0;
    while (charStack.size() > 0) {
      const char ch = charStack.top();
      charStack.pop();

      if (ch == '+') {
        result += charStack.top() - '0';
        charStack.pop();
      } else if (ch == '-') {
        result -= charStack.top() - '0';
        charStack.pop();
      } else {
        result = ch - '0';
      }
    }

    return result;
  };
};

int main() {
  Solution mySolution;

  cout << mySolution.calculate("3+2*2") << endl;
  assert(mySolution.calculate("3+2*2") == 7);
  assert(mySolution.calculate(" 3/2 ") == 1);
  assert(mySolution.calculate(" 3+5 / 2 ") == 5);
  assert(mySolution.calculate("42") == 42);
  assert(mySolution.calculate("42+158") == 200);

  return 0;
}
