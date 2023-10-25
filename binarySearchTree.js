class Node {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get left() {
        return this._left;
    }

    set left(value) {
        this._left = value;
    }

    get right() {
        return this._right;
    }

    set right(value) {
        this._right = value;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    get root() {
        return this._root;
    }

    set root(value) {
        this._root = value;
    }

    #mergeSort(array) {
        if (array.length <= 1) {
            return array;
        } else {
            let i = Math.floor(array.length / 2);
            let leftArray = this.#mergeSort(array.slice(0, i));
            let rightArray = this.#mergeSort(array.slice(i, array.length));
    
            let sortedArray = [];
            while(leftArray.length > 0 && rightArray.length > 0) {
                if (leftArray[0] <= rightArray[0]) {
                    sortedArray.push(leftArray.shift());
                } else {
                    sortedArray.push(rightArray.shift());
                }
            }
            if (leftArray.length > 0) {
                sortedArray = sortedArray.concat(leftArray);
            } else if (rightArray.length > 0) {
                sortedArray = sortedArray.concat(rightArray);
            }
            return sortedArray;
        }
    }

    #removeDuplicates(array) {
        let newArray = [];

        array.forEach(element => {
            if (!newArray.includes(element)) {
                newArray.push(element);
            }
        });
        return newArray;
    }

    #makeTree(array) {
        if (array.length < 1) {
            return null;
        } if (array.length == 1) {
            let newNode = new Node(array[0]);
            return newNode;
        } else {
            let middleIndex = Math.floor(array.length / 2);
            let newNode = new Node(array[middleIndex]);
            let leftArray = array.slice(0, middleIndex);
            let rightArray = array.slice(middleIndex + 1, array.size);

            newNode.left = this.#makeTree(leftArray);
            newNode.right = this.#makeTree(rightArray);
            return newNode;
        }
    }

    buildTree(array) {
        let cleanArray = this.#mergeSort(array);
        cleanArray = this.#removeDuplicates(cleanArray);
        return this.#makeTree(cleanArray);
    }

    insert(data, node = this.root) {
        if (data == node.data) {
            return null;
        } else if (data < node.data) {
            if (!node.left) {
                let newNode = new Node(data);
                node.left = newNode;
            } else {
                this.insert(data, node.left);
            }
        } else {
            if (!node.right) {
                let newNode = new Node(data);
                node.right = newNode;
            } else {
                this.insert(data, node.right);
            }
        }
    }

    find(data, node = this.root) {
        if (this.root == null) {
            return null;
        }

        if (data < node.data) {
            if (node.left) return this.find(data, node.left);
        } else if (data > node.data) {
            if (node.right) return this.find(data, node.right);
        } else {
            return node;
        }
        return null;
    }
}

// [1,2,3,4]
let newTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);


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

prettyPrint(newTree.root);

console.log(newTree.find(9));
console.log(newTree.find(4));
console.log(newTree.find(10));