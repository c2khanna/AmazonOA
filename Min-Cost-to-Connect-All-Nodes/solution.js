const minCost = (N, edges, newEdges) => {
  let n = N;

  let parent = [];

  newEdges.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < N; i++) {
    parent[i] = i;
  }
  const find = (u) => {
    if (parent[u] === u) return u;
    return parent[u] = find(parent[u]);
  }

  const union = (u, v) => {
    let p1 = find(u);
    let p2 = find(v);

    if (p1 != p2) {
      parent[p1] = p2;
      n--;
    }
  }

  for (let [u, v] of edges) {
    union(u, v);
  }
  let res = 0;
  for (let [u, v, cost] of newEdges) {
    let p1 = find(u);
    let p2 = find(v);

    if (p1 != p2) {
      res += cost;
      union(u, v);
    }
  }

  return res;
}

let n = 6;
let edges = [[1, 4], [4, 5], [2, 3]];
let newEdges = [[1, 2, 5], [1, 3, 10], [1, 6, 20], [5, 6, 5]];

console.log(minCost(n, edges, newEdges));
