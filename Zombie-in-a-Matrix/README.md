## Zombie in Matrix

Given a 2D grid, each cell is either a zombie `1` or a human `0`. Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. Find out how many hours does it take to infect all humans?

### Example:
```
Input:
[[0, 1, 1, 0, 1],
 [0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1],
 [0, 1, 0, 0, 0]]

Output: 2

Explanation:
At the end of the 1st hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 0, 1, 1],
 [1, 1, 1, 0, 1]]

At the end of the 2nd hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1]]
```

### Related Links:
* [LeetCode | Discuss for This Question](https://leetcode.com/discuss/interview-question/411357/)
* [LeetCode | Similar Question](https://leetcode.com/problems/rotting-oranges/)
* [LeetCode | Similar Question](https://leetcode.com/problems/walls-and-gates/)
