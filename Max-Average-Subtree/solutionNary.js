function TreeNode(val, children) {
  this.val = (val===undefined ? 0 : val)
  this.children = (children===undefined ? [] : children)
}

var maximumAverageSubtree = function(root) {
  let maxAvg = -Infinity;
  let nodeToReturn = null;
  const someFunc = (node) => {
    let sum = 0;
    let childCount = 1;

    if (!node) {
      return {
        curSum:sum,
        curCount: childCount
      }
    }

    sum = node.val;

    node.children.forEach(child => {
      let {curSum, curCount} = someFunc(child);
      sum += curSum;
      childCount += curCount;
    });

    if (sum/childCount > maxAvg) {
      maxAvg = sum/childCount;
      nodeToReturn = node;
    }

    return {
      curSum:sum,
      curCount: childCount
    }
  }

  someFunc(root);
  return nodeToReturn;
};

let root = new TreeNode(1, [new TreeNode(-5, [new TreeNode(1), new TreeNode(2)]), new TreeNode(13, [new TreeNode(4), new TreeNode(-2)]), new TreeNode(4)])

console.log(maximumAverageSubtree(root));

root = new TreeNode(20, [new TreeNode(12, [new TreeNode(11), new TreeNode(2), new TreeNode(3)]), new TreeNode(18, [new TreeNode(15), new TreeNode(8)])])

console.log(maximumAverageSubtree(root));
