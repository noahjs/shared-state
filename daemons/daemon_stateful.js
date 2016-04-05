
const StatefulDaemon = require('../src/stateful_daemon');

function random(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function loopStateful(loopNumber) {
  setTimeout(function() {
    StatefulDaemon.run(loopNumber, wasValid => loopStateful(loopNumber));
  }, random(0, 150));
}

loopStateful(random(1, 99));
