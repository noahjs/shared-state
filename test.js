
const StatelessDaemon = require('./src/stateless_daemon');
const StatefulDaemon = require('./src/stateful_daemon');

function random(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function loopStateless(loopNumber) {
  setTimeout(function() {
    StatelessDaemon.run(loopNumber, wasValid => loopStateless(loopNumber));
  }, random(0, 150));
}

function loopStateful(loopNumber) {
  setTimeout(function() {
    StatefulDaemon.run(loopNumber, wasValid => loopStateful(loopNumber));
  }, random(0, 150));
}

// usually invoked outside

loopStateless(1);
loopStateless(2);

// loopStateful(1);
// loopStateful(2);