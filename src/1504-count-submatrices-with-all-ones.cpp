/**
 * https://leetcode.com/contest/weekly-contest-196/problems/count-submatrices-with-all-ones/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(n * n * m)
 * Space Complexity: O()
 */

#include <cassert>
#include <vector>

using namespace std;

class Solution {
public:
  int numSubmat(vector<vector<int>> &mat) {
    const int row = mat.size();
    const int col = mat[0].size();

    int ans = 0;

    for (int i = 0; i < row; i++) {
      // sum
      for (int j = i; j < row; j++) {
        int now = 0;
        for (int k = 0; k < col; k++) {
          if (mat[j][k] == 0) {
            now = 0;
          } else {
            now = k == 0 ? mat[j][0] : now + 1;
          }
          ans += now;
        }
      }

      for (int j = row - 1; j > i; j--) {
        for (int k = 0; k < col; k++) {
          mat[j][k] = mat[j][k] & mat[j - 1][k];
        }
      }
    }
    return ans;
  }
};

int main() {
  Solution mySolution;

  vector<vector<int>> mat1 = {{0, 1, 1, 0}, {0, 1, 1, 1}, {1, 1, 1, 0}};

  assert(mySolution.numSubmat(mat1) == 24);

  vector<vector<int>> mat2 = {
      {1, 0, 1},
      {1, 1, 0},
      {1, 1, 0},
  };

  assert(mySolution.numSubmat(mat2) == 13);

  return 0;
}
