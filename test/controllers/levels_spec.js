const { api, expect } = require('../spec_helper');

describe('Levels Controller Test', () => {
  describe('GET /api/levels', () => {
    it('should return a 200 response', done => {
      this.skip();
      api
      .get('/controllers/levels')
      .set('Accept', 'application/json')
      .expect(200, done);
      if (err) console.log(err);
      expect(res.status).to.be.eq(200);
      done();
    });
  });
  it('should return an array', function (done) {
    this.skip();
    api
    .get('/levels')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) console.log(err);
      expect(res.body).to.be.an('array');
      done();
    });
  });
  it('should return a JSON object', function (done) {
    api
    .get('/levels')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) console.log(err);
      expect(res.header['content-type'])
      .to.be.eq('application/json; charset=utf-8');
      done();
    });
  });
  it('should return the correct index.html with title QWERTY', function(done) {
    // this.skip()
    api
    .get('/')
    .set('Accept', 'application/html')
    .end((err, res) => {
      if (err) console.log(err);
      expect(res.text)
      .to.contain('<title>QWERTY</title>');
      done();
    });
  });
  it('should return the correct index.html even when strange endpoint called', function(done) {
    // this.skip()
    api
    .get('/asdasdinnefwfwe')
    .set('Accept', 'application/html')
    .end((err, res) => {
      if (err) console.log(err);
      expect(res.text)
      .to.contain('<title>QWERTY</title>');
      done();
    });
  });
});
