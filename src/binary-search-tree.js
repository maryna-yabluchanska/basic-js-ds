const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.base = null;
    }

    root() {
        return this.base;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.base === null) this.base = newNode;
        else this.insertNode(this.base, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(node, data) {
        if (node === null) {
            return null;
        }

        if (data < node.data) return this.search(node.left, data);
        else if (data > node.data) return this.search(node.right, data);
        else return node;
    }

    has(data) {
        return this.search(this.base, data) !== null;
    }

    find(data) {
        return this.search(this.base, data);
    }

    findMin(node) {
        if (node.left === null) return node;
        return this.findMin(node.left);
    }

    remove(data) {
        this.removeNode(this.base, data);
    }

    removeNode(node, data) {
        if (node === null) return null;
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }

        if (data === node.data) {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }

            const newNode = this.findMin(node.right);
            node.data = newNode.data;
            node.right = this.removeNode(node.right, newNode.data);
            return node;
        }
    }

    min() {
        return this.findMin(this.base).data;
    }

    max() {
        return findMax(this.base).data;

        function findMax(node) {
            if (node.right === null) return node;
            return findMax(node.right);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = {
    BinarySearchTree,
};