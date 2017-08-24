var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../index.js');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /:word',(done) => {
    request(server)
      .get('/foo')
      .expect(200, done);
  });
  it('404 everything else',(done) => {
    request(server)
      .get('/word/word')
      .expect(404, done);
  });
});