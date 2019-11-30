/**
 * https://leetcode.com/problems/min-stack/
 *
 * Type: Design
 * Difficulty: Easy
 * Time Complexity: O(1)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (
    this.minStack.length === 0 ||
    x <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const result = this.stack.pop()
  if (result === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }

  return result
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

function main () {
  test('Min Stack', t => {
    const stack = new MinStack()
    stack.push(1)
    t.is(stack.top(), 1)
    t.is(stack.getMin(), 1)
    stack.push(2)
    stack.push(-1)
    stack.push(3)
    t.is(stack.getMin(), -1)
    t.is(stack.top(), 3)
  })
}

main()
