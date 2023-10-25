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

    delete(data, node = this.root) {
        if (this.root == null) {
            return null;
        }

        if (data < node.data) {
            node.left = this.delete(data, node.left); 
            return node;
        } else if (data > node.data) {
            node.right = this.delete(data, node.right);
            return node;
        } else {
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            } else {
                //get successor value
                let temp = node.right;
                let tempParent = node;
                while (temp.left) {
                    tempParent = temp;
                    temp = temp.left;
                }

                if (tempParent != node) {
                    tempParent.left = temp.right;
                } else {
                    tempParent.right = temp.left;
                }
                
                node.data = temp.data;
                return node;
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

    levelOrder(fn = null, data = [], queue = [this.root]) {
        while (queue.length > 0) {
            let currentNode = queue.shift();
            let currentData = currentNode.data;
            
            if (typeof fn == 'function') {
                data.push(fn(currentData));
            } else {
                data.push(currentData);
            }
            
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return data;
    }

    inorder(fn = null, data = [], node = this.root) {
        if (!node) return;
        this.inorder(fn, data, node.left);
        let currentData = node.data;
        if (typeof fn == 'function') {
            data.push(fn(currentData));
        } else {
            data.push(currentData);
        }
        this.inorder(fn, data, node.right);
        return data;
    }

    preorder(fn = null, data = [], node = this.root) {
        if (!node) return;
        let currentData = node.data;
        if (typeof fn == 'function') {
            data.push(fn(currentData));
        } else {
            data.push(currentData);
        }
        this.preorder(fn, data, node.left);
        this.preorder(fn, data, node.right);
        return data;
    }

    postorder(fn = null, data = [], node = this.root) {
        if (!node) return;
        let currentData = node.data;
        this.postorder(fn, data, node.left);
        this.postorder(fn, data, node.right);
        if (typeof fn == 'function') {
            data.push(fn(currentData));
        } else {
            data.push(currentData);
        }
        return data;
    }

    height(node, leftHt = 0, rightHt = 0) {
        if (!node) return;
        if (node.left) {
            leftHt = this.height(node.left, leftHt + 1);
        }
        if (node.right) {
            rightHt = this.height(node.right, rightHt + 1);
        }
        if (leftHt > rightHt) {
            return leftHt;
        } else {
            return rightHt;
        }
    }

    depth(targetNode, currentNode = this.root, dt = 0) {
        if (targetNode == currentNode) {
            return dt;
        }
        if (!currentNode.left && !currentNode.right) {
            return null;
        }

        if (targetNode.data < currentNode.data) {
            dt = this.depth(targetNode, currentNode.left, dt + 1);
        }
        if (targetNode.data > currentNode.data) {
            dt = this.depth(targetNode, currentNode.right, dt + 1);
        } 
        return dt;
    }

    isBalanced() {
        let queue = [this.root];
        let leftHt = 0;
        let rightHt = 0;
        let result = true;
        while (queue.length > 0) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
                leftHt = this.height(node.left) + 1;
            }
            if (node.right) {
                queue.push(node.right);
                rightHt = this.height(node.right) + 1;
            }
            if (Math.abs(leftHt - rightHt) > 1) {
                result = false;
            }
            leftHt = 0;
            rightHt = 0;
        }
        return result;
    }

    rebalance() {
        let dataArr = this.inorder();
        this.root = this.buildTree(dataArr);
        return this.root;
    }
}
