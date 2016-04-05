
const forky = require('forky');

// Start Email Researcher
forky({path: __dirname + '/daemons/daemon_stateless.js', workers:2});
