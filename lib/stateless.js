

/**
 * Library stateful.js
 */
var lib;

var Stateless = function(){
    this.number = 0
}
Stateless.add = function(val){
    this.number += val;
}
Stateless.reset = function(){
    this.number = 0;
}
Stateless.result = function(){
    var val = this.number;
    this.reset();
    return val;
}

module.exports = function(){
    return Stateless;
};