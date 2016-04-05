

/**
 * Library stateful.js
 */

var lib;

var Stateful = function(){
    this.string = "AAA"
}
Stateful.init = function(){
    this.string = "BBB";
}
Stateful.foo = function(){
    return this.string;
}

module.exports = function(){
    if( !lib ){
        lib = new Stateful();
    }
    return lib;
};


/**
 * Controller A
 */
var lib = require('stateful.js');
lib.foo(); //"AAA"
lib.init(); // null
lib.foo(); // "BBB"


/**
 * Controller B
 */
var db = require('stateful.js');
lib.foo(); // "BBB"





/**
 * Library stateless.js
 */

var stateless = function(){
    this.string = "AAA"
}
stateless.init = function(){
    this.string = "BBB";
}
stateless.foo = function(){
    return this.string;
}

module.exports = function(){
    return stateless;
};


/**
 * Controller A
 */
var lib = require('stateless.js');
lib.foo(); //"AAA"
lib.init(); // null
lib.foo(); // "BBB"


/**
 * Controller B
 */
var db = require('stateful.js');
lib.foo(); //"AAA"