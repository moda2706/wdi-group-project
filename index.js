const express      = require('express');
const mongoose     = require('mongoose');
const morgan     = require('morgan');
const bodyParser   = require('body-parser');
const cors         = require('cors');
const expressJWT   = require('express-jwt');
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

app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
app.use(errorHandler);

app.listen(port, () => console.log(`Express has started on port: ${port}`));

module.exports = app;
