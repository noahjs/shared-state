/**
 * Library stateful.js
 */

var lib = null;

var Stateful = function(){
    this.number = 0;
    return this;
}
Stateful.prototype.add = function(val){
    this.number += val;
}
Stateful.prototype.reset = function(){
    this.number = 0;
}
Stateful.prototype.result = function(){
    var val = this.number;
    this.reset();
    return val;
}

module.exports = function(){
    if( !lib ){
        lib = new Stateful();
    }
    return lib;
};