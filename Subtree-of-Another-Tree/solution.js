function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}

var isSubtree = function(s, t) {
    sTrev = [];
    tTrev = [];

    dfs(s, sTrev);
    dfs(t, tTrev);
    return (sTrev.toString()).indexOf(tTrev.toString()) > -1
};

const dfs = (node, res) => {
    if (!node) {
        res.push('null');
        return;
    }

    res.push('#'+node.val)
    dfs(node.left, res);
    dfs(node.right, res);
}

let s = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5))
let t = new TreeNode(4, new TreeNode(1), new TreeNode(2))

console.log(isSubtree(s, t));

s = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5))
t = new TreeNode(4, new TreeNode(1), new TreeNode(2))

console.log(isSubtree(s, t));
