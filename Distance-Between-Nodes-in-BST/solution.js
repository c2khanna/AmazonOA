function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const distanceBSTNodes = (nums, node1, node2) => {

  if (nums.indexOf(node1) === -1 || nums.indexOf(node2) === -1) {
    return -1
  }
  let tree = bstFromPreorder(nums);

  let queue = [];

  findNode(queue, tree, node1);
  findNode(queue, tree, node2);

  return queue.length;
}

const findNode = (queue, tree, node) => {
  if (queue.length > 0 && queue[0] === tree.val) {
    queue.shift();
  } else {
    queue.push(tree.val);
  }
  if (tree.val === node) {
    return;
  }
  if (tree.val < node) {
    findNode(queue, tree.right, node);
  } else {
    findNode(queue, tree.left, node);
  }
}

var bstFromPreorder = function(preorder) {
  if (preorder.length === 0) return null;

  let root = new TreeNode(preorder[0]);

  for (let i = 1; i < preorder.length; i++) {
    addNode(root, preorder[i])
  }

  return root;
};

const addNode = (node, val) => {
  if (val < node.val && !node.left) {
    node.left = new TreeNode(val)
  }
  if (val > node.val && !node.right) {
    node.right = new TreeNode(val)
  }

  if (val < node.val && node.left) {
    addNode(node.left, val);
  }
  if (val > node.val && node.right) {
    addNode(node.right, val);
  }
}

let nums = [2, 1, 3];
let node1 = 1;
let node2 = 3;

console.log(distanceBSTNodes(nums, node1, node2)); // expect 2

nums = [5,2,1,null,null,3, null, null, 12, 9, null, null, 21, 19, null, null, 25, null, null]
node1 = 3;
node2 = 9;
console.log(distanceBSTNodes(nums, node1, node2)); // expect 4

node1 = 9;
node2 = 25;
console.log(distanceBSTNodes(nums, node1, node2)); // expect 3

node1 = 12;
node2 = 9;
console.log(distanceBSTNodes(nums, node1, node2)); // expect 1

node1 = 18;
node2 = 9;
console.log(distanceBSTNodes(nums, node1, node2)); // expect -1 since 18 isnt in tree

nums = [];
console.log(distanceBSTNodes(nums, node1, node2)); // expect -1 since tree should be empty
