const { deps } = require('./deps');
const { Api, Logger } = require('./services');

function app() {
  const api = deps.get(Api);
  const logger = deps.get(Logger);
  const result = api.post('http://my-site.com');

  logger.info('result', result);

  return result;
}

module.exports = {
  app,
};
