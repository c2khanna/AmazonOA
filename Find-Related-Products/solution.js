var findRelatedProducts = function(graph) {
  let obj = new Map();

  graph.forEach((row, i) => {
    row.forEach((product, j) => {
      if (obj.has(product)) {
        row.forEach((pro) => {
          obj.set(pro, obj.get(product))
        });
      } else {
        obj.set(product, i);
      }
    });
  });

  let newObj = new Map();

  for (const [key, value] of obj) {
    if (!newObj.has(value)) {
      newObj.set(value, [key])
    } else {
      let temp = newObj.get(value);
      temp.push(key);
      newObj.set(value, temp);
    }
  }

  let res = [];

  for (const [key, value] of newObj) {
    if (value.length > res.length) res = value;
  }

  return res
};

let graph = [
  ["product1", "product2", "product3"],
  ["product5", "product2"],
  ["product6", "product7"],
  ["product8", "product7"]
];

console.log(findRelatedProducts(graph));

graph = [["Item0","Item1"], ["Item2", "Item3"], ["Item0", "Item4"]]

console.log(findRelatedProducts(graph));

graph = []

console.log(findRelatedProducts(graph));
