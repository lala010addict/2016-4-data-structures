var Queue = function() {
    this.begin = 0;
    this.end = 0;
    this.storage = {};

};


Queue.prototype.enqueue = function (val) {
	this.storage[this.end] = val
	this.end++
}


Queue.prototype.dequeue  = function (argument) {
	var curr = this.storage[this.begin]
		delete this.storage[this.begin]
if(this.begin < this.end){
	this.begin++
}
	return curr
}


Queue.prototype.size  = function (argument) {
 	return this.end - this.begin 
}