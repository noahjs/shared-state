
const StatelessDaemon = require('../src/stateless_daemon');

function random(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function loopStateless(loopNumber) {
  setTimeout(function() {
    StatelessDaemon.run(loopNumber, wasValid => loopStateless(loopNumber));
  }, random(0, 150));
}

loopStateless(random(1, 99));
