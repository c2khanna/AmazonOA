## Movies on Flight

You are on a flight and wanna watch two movies during this flight.
You are given `int[] movie_duration` which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

### Example 1
```
Input
movie_duration: [90, 85, 75, 60, 120, 150, 125]
d: 250
Output:
[90, 125]
90min + 125min = 215 is the maximum number within 220 (250min - 30min)
```

### Related Questions
* [Aone Code | This question](https://aonecode.com/amazon-online-assessment-questions#m)
* [GeeksForGeeks | This question not -30 mins](https://www.geeksforgeeks.org/amazon-interview-experience-sde-2-10/)
* [LeetCode | This question but indicies](https://leetcode.com/discuss/interview-question/313719/Amazon-or-Online-Assessment-2019-or-Movies-on-Flight)
