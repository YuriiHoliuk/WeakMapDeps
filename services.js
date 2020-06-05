const Api = {
  get(url) {
    console.log(`fetch data from url ${url}`);
    return 42;
  },
  post(url) {
    console.log(`fetch data from url ${url}`);
    return 43;
  },
};

const Logger = {
  info(...args) {
    console.log(...args);
  },
  error(...args) {
    console.error(...args);
  },
}

module.exports = {
  Api,
  Logger,
};
