/*
O(nLogn) Time Complexity and O(1) Space Complexity
*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a, b) => a - b );
	let i = 0;
	let j = array.length - 1;
	while ( i < j) {
		if ((array[i] + array[j]) === targetSum) {
			return [array[i], array[j]];
		} else if ((array[i] + array[j]) < targetSum) {
			i++;
		} else {
			j--;
		}
	}
	return [];
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumberSum(array, targetSum));
