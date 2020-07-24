var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  if (matrix[0][0] > target ||
    matrix[matrix.length - 1][matrix[0].length - 1] < target) {
      return false;
  }

  let r = 0;
  let c = matrix[0].length - 1;

  while (r < matrix.length && c >= 0) {
    if (matrix[r][c] === target) {
      return true;
    } else if (matrix[r][c] < target) {
      r++;
    } else {
      c--;
    }
  }
  return false;
};

let matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

let target = 5;

console.log(searchMatrix(matrix, target));

target = 20;

console.log(searchMatrix(matrix, target));
