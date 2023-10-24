class LinkedList {
    constructor(value = null) {
        this.head = new Node(value);
        this.tail = this.head;
    }

    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let currentNode = this.head;
        let size = 0;
        while(currentNode) {
            currentNode = currentNode.next;
            size += 1;
        }
        return size;
    }

    get head() {
        return this._head;
    }

    set head(node) {
        this._head = node;
    }

    get tail() {
        return this._tail;
    }

    set tail(node) {
        this._tail = node;
    }

    at(index) {
        if (index >= this.size) {
            return null;
        } else if (index == this.size - 1) {
            return this.tail;
        }
        let currentNode = this.head;
        while (index > 0) {
            currentNode = currentNode.next;
            index -= 1;
        }
        return currentNode;
    }

    pop() {
        let currentNode = this.head;
        if (this.size() <= 1) {
            this.head = null;
            this.tail = null;
            return currentNode;
        }
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        let oldTail = currentNode.next;
        currentNode.next = null;
        this.tail = currentNode;
        return oldTail;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value == value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value == value) {
                return index;
            } else {
                currentNode = currentNode.next;
                index += 1;
            }
        }
        return null;
    }

    toString() {
        let currentNode = this.head;
        let string = '';
        while (currentNode) {
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }
        string += 'null';
        return string;
    }

    insertAt(value, index) {
        if (index > this.size() + 1) {
            return null;
        } else if (index == 0) {
            this.prepend(value);
        } else {
            let newNode = new Node(value);
            let prevNode = this.at(index - 1);
            newNode.next = this.at(index);
            prevNode.next = newNode;
        }
    }

    removeAt(index) {
        if (index > this.size()) {
            return null;
        } else if (index == this.size() - 1) {
            return this.pop(value);
        } else {
            let prevNode = this.at(index - 1);
            let removedNode = this.at(index);
            prevNode.next = removedNode.next;
            return removedNode;
        }
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let loona = new LinkedList("heejin");
console.log(loona.toString());
loona.append('chuu');
loona.prepend('haseul');
loona.append('jinsoul');
console.log(loona.toString());
loona.insertAt('yves', 0);
console.log(loona.toString());
loona.insertAt('paldo', 4);
console.log(loona.toString());
loona.insertAt('choerry', 6);
console.log(loona.toString());
console.log(loona.removeAt(4));
console.log(loona.toString());