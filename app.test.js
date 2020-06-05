const { deps } = require('./deps');
const { Api, Logger } = require('./services');
const { ApiMock, LoggerMock, responseMock } = require('./mocks');
const { app } = require('./app');

// mock dependencies
deps.set(Api, ApiMock);
deps.set(Logger, LoggerMock);

app() === responseMock
  ? console.log('Tests passed')
  : console.error(`Tests failed: App should call api and return ${responseMock}`);
