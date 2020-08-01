/*
O(nLogn) Time Complexity and O(1) Space Complexity
*/

function twoNumberSum(newArr, targetSum) {
  // Write your code here.
  targetSum -= 30;
	let array = [...newArr].sort((a, b) => a - b );
	let i = 0;
	let j = array.length - 1;
  let res = [0, 0];
	while ( i < j) {
		if ((array[i] + array[j]) <= targetSum) {
      if ((res[0] + res[1]) < (array[i] + array[j])) {
        res = [array[i], array[j]];
      } else if ((res[0] + res[1]) === (array[i] + array[j])) {
        let max = Math.max(res[0], res[1], array[i], array[j])
        if (res.indexOf(max) === -1) {
          res = [array[i], array[j]];
        }
      }
      i++;
		} else {
			j--;
		}
	}
	return (res[0] === 0 && res[1] === 0) ? [] : [newArr.indexOf(res[0]), newArr.indexOf(res[1])];
}

let array = [90, 85, 75, 60, 120, 150, 125];
let targetSum = 250;

console.log(twoNumberSum(array, targetSum));

array = [27, 1,10, 39, 12, 52, 32, 67, 76];
targetSum = 107;

console.log(twoNumberSum(array, targetSum));
