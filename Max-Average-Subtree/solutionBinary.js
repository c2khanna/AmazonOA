function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
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

    if (node.left) {
      let {curSum, curCount} = someFunc(node.left);
      sum += curSum;
      childCount += curCount;
    }
    if (node.right) {
      let {curSum, curCount} = someFunc(node.right);
      sum += curSum;
      childCount += curCount;
    }

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

let root = new TreeNode(5, new TreeNode(6), new TreeNode(1))

console.log(maximumAverageSubtree(root));

root = new TreeNode(1, new TreeNode(-5, new TreeNode(1), new TreeNode(2)), new TreeNode(13, new TreeNode(4), new TreeNode(-2)))

console.log(maximumAverageSubtree(root));
