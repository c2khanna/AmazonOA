const uniquePair = (nums, target) => {
  let count = 0
  let set = new Set();
  let seen = new Set();
  nums.forEach(num => {
    if (set.has(target-num) && !seen.has(num)) {
      count++;
      seen.add(target-num);
      seen.add(num);
    } else if (!set.has(num)) {
      set.add(num);
    }
  });

  return count;
}

let nums = [3, 4, 2, 3];
let target = 6;

console.log(uniquePair(nums, target));

nums = [1, 1,1, 1,1, 1,1, 1,1, 1];
target = 2;

console.log(uniquePair(nums, target));

nums = [1, 1, 2, 45, 46, 46];
target = 47;

console.log(uniquePair(nums, target));
