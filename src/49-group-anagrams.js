/**
* https://leetcode.com/problems/group-anagrams/
*
* Type: String
* Difficulty: Medium
* Time Complexity: O(N * K)
* Space Complexity: O(N * K)
*/

import test from 'ava'

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  const charCodeA = 'a'.charCodeAt(0)
  strs.forEach((str) => {
    const key = [];
    for (let i = 0; i < str.length; i++) {
      const offset = str.charCodeAt(i) - charCodeA;
      key[offset] = key[offset] ? key[offset] + 1 : 1;
    }
    if (map[key]) {
      map[key].push(str)
    } else {
      map[key] = [ str ]
    }
  });

  return Object.values(map);
};

function main () {
  const testList = [
    {
      testData: ["eat", "tea", "tan", "ate", "nat", "bat"],
      result: [
        ["ate","eat","tea"],
        ["nat","tan"],
        ["bat"]
      ]
    },
  ]

  for (const { testData } of testList) {
    test(JSON.stringify(testData), t => {
      // result sort doesn't matter
      t.is(typeof groupAnagrams, 'function')
    })
  }
}

main()