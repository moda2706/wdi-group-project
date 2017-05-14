const { api, expect } = require('../spec_helper');

const Level = require('../../models/level');

describe('GET /levels', () => {

  beforeEach(done => {
    Level
    .remove()
    .then(() => done())
    .catch(done);
  });


  beforeEach(done => {
    Level
    .create({
      score: 0,
      time: 60,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    })
    .then(() => done())
    .catch(done);
  });

  it('should return a 200 response', function(done) {
    // this.skip();
    api
    .get('/levels')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) console.log(err);
      expect(res.status).to.be.eq(200);
      done();
    });
  });
  it('should return an array', function(done) {
    // this.skip();
    api
    .get('/levels')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) console.log(err);
      expect(res.body).to.be.an('array');
      done();
    });
  });
  it('should return a JSON object', function(done) {
    // this.skip();
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
  it('should return a level-like object with the required fields as the first item in the array', function(done) {
    // this.skip();
    api
    .get('/levels')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) console.log(err);
      expect(res.body)
      .to.have.property(0)
      .and.to.include.keys([
        // 'name',
        '_id',
        'updatedAt',
        'createdAt'
      ]);
      done();
    });
  });
  it('should return a level-like object with all fields as the first item in the array', function(done) {
    // this.skip();
    api
    .get('/levels')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) console.log(err);
      expect(res.body)
      .to.have.property(0)
      .and.to.all.keys([
        '__v',
        '_id',
        'score',
        'time',
        'content',
        'updatedAt',
        'createdAt'
      ]);
      done();
    });
  });
});

describe('GET /levels/:id', () => {

  beforeEach(done => {
    Level
    .remove()
    .then(() => done())
    .catch(done);
  });

  // Just being 100% sure
  afterEach(done => {
    Level
    .remove()
    .then(() => done())
    .catch(done);
  });

  it('should return a 200 response', function(done) {
    // this.skip();
    Level
    .create({
      name: 'Minestrone',
      image: 'http://levelimages.com/level',
      description: 'What a lovely level with small pasta extras...',
      price: 3.99,
      bestBefore: new Date()
    })
    .then(level => {
      api
      .get(`/levels/${level._id}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status)
        .to.eq(200);
        done();
      });
    })
    .catch(done);
  });
});
