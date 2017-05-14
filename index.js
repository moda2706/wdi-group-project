const express      = require('express');
const port         = process.env.PORT || 4000;
const app          = express();
const dest         = `${__dirname}/public`;
const router       = require('./config/routes');
const errorHandler = require('./lib/errors');
const cors         = require('cors');
const expressJWT   = require('express-jwt');
const mongoose     = require('mongoose');
const env          = require('./config/env');
const bodyParser   = require('body-parser');
mongoose.Promise   = require('bluebird');

app.use(express.static(dest));

mongoose.connect(env.db);

app.use(bodyParser.json());
app.use(cors());

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

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
app.use(errorHandler);

app.use('/api', router);
app.listen(port, () => console.log(`Express has started on port: ${port}`));

module.exports = app;
