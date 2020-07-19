const minRepairCost = (N, edges, edgesToRepair) => {
  let n = N;
  let res = 0;

  let parent = [];

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

  //merge edges into edgesToRepair

  for (let i = 0; i < edges.length; i++) {
    let findEdge = edgesToRepair.find((elem) => {
      return (elem[0] === edges[i][0] && elem[1] === edges[i][1])
    });

    edges[i][2] = findEdge ? findEdge[2] : 0;
  }

  edges.sort((a, b) => a[2] - b[2]);

  for (let [u, v, cost] of edges) {
    let p1 = find(u);
    let p2 = find(v);

    if (p1 != p2) {
      res += cost;
      union(u, v);
    }
  }

  return res;
}

let n = 5;
let edges = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]];
let edgesToRepair = [[1, 2, 12], [3, 4, 30], [1, 5, 8]];

console.log(minRepairCost(n, edges, edgesToRepair));

n = 6;
edges = [[1, 2], [2, 3], [4, 5], [3, 5], [1, 6], [2, 4]];
edgesToRepair = [[1, 6, 410], [2, 4, 800]];

console.log(minRepairCost(n, edges, edgesToRepair));

n = 6;
edges = [[1, 2], [2, 3], [4, 5], [5, 6], [1, 5], [2, 4], [3, 4]];
edgesToRepair = [[1, 5, 110], [2, 4, 84], [3, 4, 79]];

console.log(minRepairCost(n, edges, edgesToRepair));
