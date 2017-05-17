const express      = require('express');
const mongoose     = require('mongoose');
const morgan     = require('morgan');
const bodyParser   = require('body-parser');
const cors         = require('cors');
const expressJWT   = require('express-jwt');
const jwt          = require('jsonwebtoken');
const User         = require('./models/user');
const app          = express();
const env          = require('./config/env');
const router       = require('./config/routes');
const dest         = `${__dirname}/public`;
const port         = process.env.PORT || 4000;

const errorHandler = require('./lib/errors');


mongoose.Promise   = require('bluebird');

app.use(express.static(dest));

mongoose.connect(env.db);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', expressJWT({ secret: env.secret })
  .unless({
    path: [
      { url: '/api/register', methods: ['POST'] },
      { url: '/api/login',    methods: ['POST'] }
    ]
  }));

app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.' });
}

app.use(assignUser);

function assignUser(req, res, next) {
  const token = getToken(req);

  if (!token) return next();
  const payload = jwt.verify(token, env.secret);
  User
    .findById(payload.id)
    .exec()
    .then(user => {
      if (!user) return res.status(500).json({
        message: 'Invalid JWT provided.'
      });
      req.user = user;
      return next();
    })
    .catch(next);
}

function getToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
}

app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
app.use(errorHandler);

app.listen(port, () => console.log(`Express has started on port: ${port}`));

module.exports = app;
