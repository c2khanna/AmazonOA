function minHours(grid) {
  let q = [];

  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 1) {
        q.push([i, j]);
      }
    });
  });
  let hours = 0;
  while (q.length > 0) {
    let qL = q.length;
    while (qL > 0) {
      let [curX, curY] = q.shift();
      if (curY > 0 && grid[curX][curY - 1] === 0 ) {
        q.push([curX, curY - 1]);
        grid[curX][ curY - 1] = 1;
      }
      if (curX + 1 < grid.length && grid[curX + 1][curY] === 0) {
        q.push([curX+1, curY]);
        grid[curX+1][curY] = 1;
      }
      if (curY + 1 < grid[0].length && grid[curX][curY+1] === 0) {
        q.push([curX, curY + 1]);
        grid[curX][curY+1] = 1;
      }
      if (curX > 0 && grid[curX - 1][curY] === 0) {
        q.push([curX - 1, curY]);
        grid[curX - 1][curY] = 1;
      }
      qL--;
    }
    if (q.length > 0) {
      hours++;
    }
  }

  return hours;
}
const grid1 = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1]
];

const grid2 = [
  [0, 1, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0]
];

console.log(`grid1 = ${minHours(grid1)}`);
console.log(`grid2 = ${minHours(grid2)}`);
