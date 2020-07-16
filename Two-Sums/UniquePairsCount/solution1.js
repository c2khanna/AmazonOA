const uniquePair = (nums, target) => {
  nums.sort((a, b) => a - b);
  let seen = new Set();
  let count = 0
  let i = 0;
  let j = nums.length - 1;
	while ( i < j) {
		if ((nums[i] + nums[j]) === target && !seen.has(nums[i]) && !seen.has(target - nums[i])) {
			count++;
      seen.add(nums[i]);
      seen.add(nums[j]);
      i++;
      j--;
		} else if ((nums[i] + nums[j]) < target) {
			i++;
		} else {
			j--;
		}
	}

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
