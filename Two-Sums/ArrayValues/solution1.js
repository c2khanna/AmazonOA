/* 
O(n^2) Time Complexity and O(1) Space Complexity
*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
	for (let i = 0; i < array.length; i++) {
		for(let j = i+1; j < array.length; j++) {
			if ((array[i]+array[j]) === targetSum) {
				return [array[i], array[j]]
			}
		}
	}
	return [];
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumberSum(array, targetSum));
