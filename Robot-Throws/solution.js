const robotThrows = (arr) => {
  let score = 0;
  let stack = [];
  arr.forEach((elem) => {
    if (Number.isInteger(elem)) {
      score += elem;
      stack.push(elem);
    } else if (elem === 'Z') {
      score -= stack.pop();
    } else if (elem === 'X') {
      score += (stack[stack.length - 1]*2);
      stack.push(stack[stack.length - 1]*2);
    } else if (elem === '+') {
      score += (stack[stack.length - 1] + stack[stack.length - 2])
      stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    }
  });

  return score;
}

let arr = [5, -2, 4, 'Z', 'X', 9, '+', '+']

console.log(robotThrows(arr));
