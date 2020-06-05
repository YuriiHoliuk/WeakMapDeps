const responseMock = 1;

const ApiMock = {
  get() {
    console.log('ApiMock, do nothing');
    return responseMock;
  },
  post() {
    console.log('ApiMock, do nothing');
    return responseMock;
  },
}

const LoggerMock = {
  info() {
    // write to file
  },
  error() {
    // write to file
  },
}

module.exports = {
  ApiMock,
  LoggerMock,
  responseMock,
};
