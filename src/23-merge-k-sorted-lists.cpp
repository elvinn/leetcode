/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Type: Linked List
 * Difficulty: Hard
 * Time Complexity: O(Nln(k))
 * Space Complexity: O(k)
 */

#include <queue>
using namespace std;

struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode *mergeKLists(vector<ListNode *> &lists) {
    auto cmp = [](ListNode *left, ListNode *right) {
      return left->val > right->val;
    };

    priority_queue<ListNode *, vector<ListNode *>, decltype(cmp)> queue(cmp);

    ListNode head;
    ListNode *temp = &head;
    for (const auto listHead : lists) {
      if (listHead) {
        queue.push(listHead);
      }
    }

    while (!queue.empty()) {
      ListNode *popHead = queue.top();
      queue.pop();
      temp->next = popHead;
      temp = temp->next;
      if (popHead->next) {
        queue.push(popHead->next);
      }
    }

    return head.next;
  }
};

int main() {
  Solution mySolution;

  return 0;
}
