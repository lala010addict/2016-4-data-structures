var Tree = function(value) {
    var newTree = {};
    newTree.value = value;

    // your code here

    _.extend(newTree, treeMethods);
    newTree.children = [];

    return newTree;
};


// var extend = function(to, from){
//   for (var key in from){
//     to[key] = from[key];
//   }
// };



var treeMethods = {};

treeMethods.addChild = function(value) {
    this.children.push(Tree(value))


};

treeMethods.contains = function(target) {
    var found = false;
    var walkTree = function(node) {
        if (node.value === target) {
            found = true;
        }
        _.each(node.children, function(item) {
            walkTree(item)
        })
    }


    walkTree(this)
    return found;
};

treeMethods.traverse = function(cb) {
    cb(this.value)

    if (!this.children) {
        return;
    }

    _.each(this.children, function(item) {
            item.traverse(cb)
        })

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
