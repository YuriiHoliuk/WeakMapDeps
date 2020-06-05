const { app } = require('./app');
const { deps } = require('./deps');
const { Api, Logger } = require('./services');

// set dependencies
deps.set(Api, Api);
deps.set(Logger, Logger);

const result = app();

console.log('App result', result);
