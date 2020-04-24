/**
 * visit tree node methods
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * BFS Visit
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node} node 
 */
const bfsVisit = (node) => {
  const result = []
  const queue = []

  while (true) {
    result.push(node.val)

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }

    if (!queue.length) {
      break
    }

    node = queue.shift()
  }

  return result
}

/**
 * DFS: pre-order visit recursively
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node} root 
 */
const preOrderVisitRecursively = (root) => {
  const result = []

  const visit = (node) => {
    if (!node) {
      return
    }

    result.push(node.val)

    visit(node.left)
    visit(node.right)
  }

  visit(root)

  return result
}

/**
 * DFS: pre-order visit iteratively
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node} root 
 */
const preOrderVisitIteratively = (root) => {
  const result = []
  const stack = [ root ]

  while (stack.length) {
    const node = stack.pop()
    result.push(node.val)

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }

  return result
}

/**
 * DFS: in-order visit recursively
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node} root 
 */
const inOrderVisitRecursively = (root) => {
  const result = []

  const visit = (node) => {
    if (!node) {
      return
    }

    visit(node.left)

    result.push(node.val)

    visit(node.right)
  }

  visit(root)

  return result
}

/**
 * DFS: in-order visit iteratively
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node} root 
 */
const inOrderVisitIteratively = (root) => {
  const result = []
  const stack = []

  let node = root
  while (true) {
    if (node) {
      stack.push(node)
      node = node.left
    } else if (stack.length) {
      node = stack.pop()
      result.push(node.val)
      node = node.right
    } else {
      break
    }
  }

  return result
}

/**
 * DFS: post-order visit iteratively
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node} root 
 */
const postOrderVisitRecursively = (root) => {
  const result = []

  const visit = (node) => {
    if (!node) {
      return
    }

    visit(node.left)
    visit(node.right)

    result.push(node.val)
  }

  visit(root)

  return result
}

/**
 * DFS: post-order visit iteratively
 * useing two stacks with reverse
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node} root 
 */
const postOrderVisitIteratively1 = (root) => {
  const result = []
  const stack = [ root ]

  if (!root) {
    return []
  }

  while (stack.length) {
    const node = stack.pop()

    result.push(node.val)

    if (node.left) {
      stack.push(node.left)
    }

    if (node.right) {
      stack.push(node.right)
    }
  }

  return result.reverse()
}

/**
 * DFS: post-order visit iteratively
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {Node} root 
 */
const postOrderVisitIteratively2 = (root) => {
  const result = []
  const stack = []

  let cur = root
  let pre = null
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }

    if (stack.length) {
      cur = stack.pop()
      if (!cur.right || pre === cur.right) {
        result.push(cur.val)
        pre = cur
        cur = null
      } else {
        stack.push(cur)
        cur = cur.right
      }
    }
  }

  return result
}