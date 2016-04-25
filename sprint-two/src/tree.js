var Tree = function(value) {
    var newTree = {};
    newTree.value = value;

    _.extend(newTree, treeMethods);
    newTree.children = []; // fix me

    return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value) {

    this.children.push(Tree(value))


};

treeMethods.contains = function(target) {

    var result = false;
    var walkTree = function(node) {
        if (node.value === target) {
            result = true;
            return;
        }

        _.each(node.children, function(item) {
            walkTree(item)
        })


    }

    walkTree(this)
    return result
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
