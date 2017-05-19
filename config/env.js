module.exports = {
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost:27017/qwertyApp-development',
    test: 'mongodb://localhost:27017/qwertyApp'
  },
  port: process.env.PORT || 4000,
  secret: process.env.SECRET || 'gosh this is so secret... shhh...'
};
