module.exports = {
  env: process.env.NODE_ENV,
  db: {
    production: process.env.MONGODB_URI,
    development: `mongodb://localhost/levels-${this.env}`,
    test: `mongodb://localhost/levels-${this.env}`
  }
}; 
