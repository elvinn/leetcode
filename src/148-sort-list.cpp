/**
* https://leetcode.com/problems/sort-list/
*
* Type: Linked List
* Difficulty: Medium
* Time Complexity: O(nlog(n))
* Space Complexity: O(1)
*/

#include <cassert>
#include <iostream>
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
  ListNode* sortList(ListNode* head) {
    ListNode dummyNode;
    dummyNode.next = head;

    cout << "begin" << endl;

    auto p = &dummyNode;
    int length = 0;
    while (p->next)
    {
      p = p->next;
      length += 1;
    }
    cout << length << endl;
    
    for (int size = 1; size < length; size *= 2)
    {
      auto tail = &dummyNode;
      auto cur = dummyNode.next;

      while (cur)
      {
        auto left = cur;
        auto right = cut(left, size);
        cur = cut(right, size);

        tail->next = merge(left, right);

        while (tail->next)
        {
          tail = tail->next;
        }
      }
    }
    
    return dummyNode.next;
  }

  ListNode* cut(ListNode* head, int n) {
    auto temp = head;

    while (temp && --n)
    {
      temp = temp->next;
    }

    if (!temp)
    {
      return nullptr;
    }
    
    auto result = temp->next;
    temp->next = nullptr;
    return result;
  }

  ListNode* merge(ListNode* head1, ListNode* head2) {
    ListNode dummyHead;
    auto p = &dummyHead;
    while (head1 && head2)
    {
      if (head1->val < head2->val)
      {
        p->next = head1;
        p = p->next;
        head1 = head1->next;
      }
      else 
      {
        p->next = head2;
        p = p->next;
        head2 = head2->next;
      }
    }
    
    p->next = head1 ? head1 : head2;

    return dummyHead.next;
  }
};

int main() {
  ListNode node1(1);
  ListNode node2(5);
  ListNode node3(3);
  ListNode node4(7);

  node1.next = &node2;
  node2.next = &node3;
  node3.next = &node4;

  Solution mySolution;
  mySolution.sortList(&node1);
  return 0;
}
