/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 *
 * Type: Linked List
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

#include <cassert>
using namespace std;

// Definition for a Node.
class Node {
public:
  int val;
  Node *next;
  Node *random;

  Node(int _val) {
    val = _val;
    next = NULL;
    random = NULL;
  }
};

class Solution {
public:
  Node *copyRandomList(Node *head) {
    if (!head) {
      return nullptr;
    }

    // copy val and next pointer
    Node *curNode = head;
    while (curNode) {
      Node *copyNode = new Node(curNode->val);
      copyNode->next = curNode->next;
      curNode->next = copyNode;
      curNode = copyNode->next;
    }

    // copy random pointer
    curNode = head;
    while (curNode) {
      Node *copyNode = curNode->next;
      if (!curNode->random) {
        copyNode->random = nullptr;
      } else {
        copyNode->random = curNode->random->next;
      }

      curNode = copyNode->next;
    }

    // extract copy linked list
    curNode = head;
    Node *result = head->next;
    while (curNode) {
      Node *copyNode = curNode->next;
      Node *originNextNode = copyNode->next;
      curNode->next = originNextNode;
      curNode = originNextNode;

      if (originNextNode) {
        copyNode->next = originNextNode->next;
      }
    }

    return result;
  }
};

int main() {
  Solution mySolution;

  return 0;
}
