## Robot Throws

"a robot throws a ball at various blocks marked with a symbol so as to knock these out. You have been asked to automate the scoring process. score is computed with each throw. The "last score" is the score of the previous throw (or 0, if there is no previous) and total score is the sum of the scores of all the throws. The symbols on a block can be an integer, a sign or a letter. Each sign or letter represents a special rule as given below."

* if it is integer, the score for that throw is the value of that integer.
* if it is 'X', the score for that throw is double the last score.
* if it is '+', the score for that throw is the sum of the last two scores.
* if it is 'Z', the last is removed, as though the last throw never happened.

### Example:
```
Input = [5, -2, 4, Z, X, 9, +, +]
Output = 27

Explanation:
i = 0, total score 5;
i = 1, total score 5 + -2 = 3;
i = 2, total score 3 + 4 = 7;
i = 3, total score 7 - 4 = 3 (with 'Z' previous throw is removed from scores.)
i = 4, total score 3 + (-2 * 2) = -1 (with 'X', we multiply last score by 2. notice that 4 is removed in i = 3, we skip it through )
i = 5, total score -1 + 9 = 8;
i = 6, total score 8 + (-4 + 9) = 13
i = 7, total score 13 + (9 + 5) = 27
```

### Related Links:
* [LeetCode | Discuss](https://leetcode.com/discuss/interview-question/344650/Amazon-Online-Assessment-Questions/608750)
