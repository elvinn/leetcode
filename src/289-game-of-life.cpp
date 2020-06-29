/**
 * https://leetcode.com/problems/game-of-life/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 */

#include <cassert>
#include <vector>
using namespace std;

class Solution {
public:
  void gameOfLife(vector<vector<int>> &board) {
    const int neighbors[3] = {0, -1, 1};

    const int rows = board.size();
    const int cols = board[0].size();

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        int liveNeighbors = 0;

        // loop eight neighbors
        for (int x = 0; x < 3; x++) {
          for (int y = 0; y < 3; y++) {
            if (neighbors[x] == 0 && neighbors[y] == 0) {
              continue;
            }

            const int row = i + neighbors[x];
            const int col = j + neighbors[y];

            if (row < 0 || row >= rows || col < 0 || col >= cols) {
              continue;
            }

            if (abs(board[row][col]) == 1) {
              liveNeighbors += 1;
            }
          }
        }

        const int val = board[i][j];

        if (val == 0 && liveNeighbors == 3) {
          board[i][j] = 2;
        } else if (val == 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
          board[i][j] = -1;
        }
      }
    }

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        board[i][j] = board[i][j] > 0 ? 1 : 0;
      }
    }
  }
};

int main() {
  Solution mySolution;

  vector<vector<int>> input = {
      {0, 1, 0},
      {0, 0, 1},
      {1, 1, 1},
      {0, 0, 0},
  };
  vector<vector<int>> output = {
      {0, 0, 0},
      {1, 0, 1},
      {0, 1, 1},
      {0, 1, 0},
  };

  mySolution.gameOfLife(input);
  assert(input == output);

  return 0;
}
