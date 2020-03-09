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

console.log(groupAnagrams(
  ["eat", "tea", "tan", "ate", "nat", "bat"]
))