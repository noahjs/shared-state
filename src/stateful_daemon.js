
/**
 * Controller A
 */
const Lib = require('../lib/stateful');

module.exports = {
  run: run
};

function random(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function run(fork, cb){

    var a = random(1, 10);
    var b = random(1, 10);

    var lib = new Lib();
    lib.reset();
    lib.add(a);
    lib.add(b);

    var logLine = '(' + a + '+' + b + ') = ' + (a+b);
    console.log( '[',fork,'] ', ' Trying: ', logLine );

    setTimeout(function(){
        var result = lib.result();
        var logLine = '(' + a + '+' + b + ') = ' + (a+b) + ' / ' + result;
        console.log( '[',fork,'] ', result == (a+b) ? "YES" : "NO", logLine );
        return cb();
    }, random(0, 300));
}
