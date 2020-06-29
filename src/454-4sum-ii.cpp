/**
 * https://leetcode.com/problems/4sum-ii/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(N^2)
 * Space Complexity: O(N^2)
 */

#include <cassert>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
  int fourSumCount(vector<int> &A, vector<int> &B, vector<int> &C,
                   vector<int> &D) {
    unordered_map<int, int> map;
    int result = 0;

    for (int i = 0; i < A.size(); i++) {
      for (int j = 0; j < B.size(); j++) {
        int sum = A[i] + B[j];
        map[sum] += 1;
      }
    }

    for (int i = 0; i < C.size(); i++) {
      for (int j = 0; j < B.size(); j++) {
        int sum = C[i] + D[j];
        result += map[-sum];
      }
    }

    return result;
  }
};

int main() {
  Solution mySolution;

  vector<int> A{1, 2};
  vector<int> B{-2, -1};
  vector<int> C{-1, 2};
  vector<int> D{0, 2};
  assert(mySolution.fourSumCount(A, B, C, D) == 3);

  return 0;
}
