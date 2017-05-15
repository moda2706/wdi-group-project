module.exports = {
  port: process.env.PORT || 4000,
  db: 'mongodb://localhost:27017/qwertyApp',
  secret: process.env.SECRET || 'gosh this is so secret... shhh...'
};
