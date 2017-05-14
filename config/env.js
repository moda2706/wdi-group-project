// const port  = process.env.PORT || 4000;
// const env   = process.env.NODE_ENV  || 'development';
// const dbURI = process.env.MONGODB_URI || `mongodb://localhost/levels-${env}`;
// const secret = process.env.secret || `shh`;

module.exports = {
  port: process.env.PORT || 4000,
  db: 'mongodb://localhost:27017/qwertyApp',
  secret: process.env.SECRET || 'gosh this is so secret... sh....'
};

// module.exports = {port, env, dbURI, secret};
