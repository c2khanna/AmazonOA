## Substrings of size K with K distinct chars

Given a string `s` and an int `k`, return all unique substrings of `s` of size `k` with `k` distinct characters.


### Example 1:
```
Input: s = "abcabc", k = 3
Output: ["abc", "bca", "cab"]
```

### Example 2:
```
Input: s = "abacab", k = 3
Output: ["bac", "cab"]
```

### Example 3:
```
Input: s = "awaglknagawunagwkwagl", k = 4
Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]
Explanation:
Substrings in order are: "wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag", "wagl"
"wagl" is repeated twice, but is included in the output once.
```

### Related links

* [LeetCode | Discuss](https://leetcode.com/discuss/interview-question/370112)
* [Another Potential Solution](https://leetcode.com/playground/wikMJPnj)
