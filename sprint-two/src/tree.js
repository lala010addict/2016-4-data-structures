var Tree = function(value) {
    var newTree = {};
    newTree.value = value
    newTree.children = [];
    _.extend(newTree, treeMethods)
    return newTree

};



treeMethods = {};



treeMethods.addChild = function(value) {
    this.children.push(Tree(value))

};

treeMethods.contains = function(target) {
    var found = false;
    var walkTree = function(node) {
        if (node.value === target) {
            found = true
        }

        _.each(node.children, function(child) {
            walkTree(child)
        })

    }


    walkTree(this)
    return found

};

treeMethods.traverse = function(cb) {
    cb(this.value)
    if (!this.children) {
        return; }
    for (var i = 0; i < this.children.length; i++) {
        this.children[i].traverse(cb)
    }


}



/*
 * Complexity: What is the time complexity of the above functions?
 */
