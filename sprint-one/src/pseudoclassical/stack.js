var Stack = function() {
    this.count = 0;
    this.storage = {}

};


Stack.prototype.size = function() {
    return this.count

};

Stack.prototype.push = function(val) {
    this.storage[this.count] = val
    this.count++

};

Stack.prototype.pop = function() {
    if (this.count > 0) {
        this.count--;
        var curr = this.storage[this.count]
        delete this.storage[this.count]

    }
    return curr
};


//first in last out


//file:///Users/jipeng/Git/thesis/2016-4-data-structures/sprint-one/SpecRunnerSection.html?pseudoclassical
