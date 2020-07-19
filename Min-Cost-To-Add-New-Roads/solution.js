var minimumCost = function(N, connections) {
  let n = N;

  let parent =[];

  for (let i = 0; i < N; i++) {
    parent[i] = i;
  }

  connections.sort((a, b) => a[2] - b[2]);

  const find = (u) => {
    if (parent[u] === u) return u;
    return parent[u] = find(parent[u]);
  }

  const union = (u, v) => {
    let p1 = find(u);
    let p2 = find(v);

    if (p1 !== p2) {
      parent[p1] = p2;
      n--;
    }
  }

  let res = 0;

  for (let [u, v, cost] of connections) {
    let p1 = find(u);
    let p2 = find(v);

    if (p1 !== p2) {
      res += cost;
      union(u, v);
    }
  }

  return n === 1 ? res : -1;
};

let n = 3;
let connections = [[1,2,5],[1,3,6],[2,3,1]];

console.log(minimumCost(n, connections));

n = 4;
connections = [[1,2,3],[3,4,4]];

console.log(minimumCost(n, connections));
