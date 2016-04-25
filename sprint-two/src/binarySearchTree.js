var BinarySearchTree = function(value) {

    var binaryTree = Object.create(binaryTreePrototype);
    binaryTree.value = value;
    binaryTree.left = null;
    binaryTree.right = null;
    return binaryTree;

};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val) {
    if (val < this.value) {
        if (this.left === null) {
            this.left = BinarySearchTree(val)
        } else {
            this.left.insert(val);
        }
    }


    if (val > this.value) {
        if (this.right === null) {
            this.right = BinarySearchTree(val)
        } else {
            this.right.insert(val)
        }
    } else {
        return "The tree already contains this value.";
    }

}


binaryTreePrototype.contains = function(target) {
    if (target === this.value) {
        return true
    } else if (target < this.value) {
        if (!this.left) {
            return false
        } else {
            return this.left.contains(target)
        }
    } else if (target > this.value) {
        if (!this.right) {
            return false
        } else {
            return this.right.contains(target)
        }
    }


}


binaryTreePrototype.depthFirstLog = function(cb) {
    cb(this.value)
    if (this.right) {
        this.right.depthFirstLog(cb)
    }
    if (this.left) {
        this.left.depthFirstLog(cb)
    }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
