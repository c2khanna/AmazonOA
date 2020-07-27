var findTreasure = function(grid) {
  if (grid.length === 0) {
    return -1;
  }

  let q = [[0,0]];
  let steps = 0;

  while (q.length > 0) {
    let qL = q.length;
    while (qL > 0) {
      let [curX, curY] = q.shift();

      if (curY > 0 && grid[curX][curY - 1] != 'D' ) {
        if (grid[curX][curY - 1] == 'X') {
          return ++steps;
        }
        q.push([curX, curY - 1]);
        grid[curX][curY - 1] = 'D';
      }
      if (curX + 1 < grid.length && grid[curX + 1][curY] != 'D') {
        if (grid[curX + 1][curY] == 'X') {
          return ++steps;
        }
        q.push([curX+1, curY]);
        grid[curX + 1][curY] = 'D';
      }
      if (curY + 1 < grid[0].length && grid[curX][curY+1] != 'D') {
        if (grid[curX][curY+1] == 'X') {
          return ++steps;
        }
        q.push([curX, curY + 1]);
        grid[curX][curY+1] = 'D';
      }
      if (curX > 0 && grid[curX - 1][curY] != 'D') {
        if (grid[curX - 1][curY] == 'X') {
          return ++steps;
        }
        q.push([curX - 1, curY]);
        grid[curX - 1][curY] = 'D';
      }
      qL--;
    }
    steps++;
  }

  return -1
}

let grid = [['O', 'O', 'O', 'D'],
           ['D', 'O', 'D', 'D'],
           ['O', 'O', 'O', 'O'],
           ['X', 'D', 'D', 'O']];

console.log(findTreasure(grid));
