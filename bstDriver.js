const Tree = require( './binarySearchTree');

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const randomArray = (amount = 100, ceiling = 500) => {
    let arr = [];
    for (let index = 0; index < amount; index++) {
        arr.push(Math.round(Math.random() * ceiling));
    }
    return arr;
}

let arr = randomArray(25, 70);
console.log(`new array: ${arr}`);

let tr = new Tree(arr);
prettyPrint(tr.root);
console.log(`is balanced? ${tr.isBalanced()}`);
console.log(`level order: ${tr.levelOrder()}`);
console.log(`preorder: ${tr.preorder()}`);
console.log(`postorder: ${tr.postorder()}`);
console.log(`inorder: ${tr.inorder()}`);

let newArr = randomArray(10, 70);
console.log(`new guys: ${newArr}`);
while(newArr.length > 0) {
    tr.insert(newArr.shift());
}
prettyPrint(tr.root);
console.log(`is balanced? ${tr.isBalanced()}`);
tr.rebalance();
prettyPrint(tr.root);
console.log(`is balanced? ${tr.isBalanced()}`);
console.log(`level order: ${tr.levelOrder()}`);
console.log(`preorder: ${tr.preorder()}`);
console.log(`postorder: ${tr.postorder()}`);
console.log(`inorder: ${tr.inorder()}`);