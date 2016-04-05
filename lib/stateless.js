

/**
 * Library stateful.js
 */
var lib;

var Stateless = function(){
    this.number = 0
}
Stateless.prototype.add = function(val){
    this.number += val;
}
Stateless.prototype.reset = function(){
    this.number = 0;
}
Stateless.prototype.result = function(){
    var val = this.number;
    this.reset();
    return val;
}

module.exports = function(){
    return new Stateless();
};
