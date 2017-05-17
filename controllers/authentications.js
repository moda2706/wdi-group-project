module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};

const User     = require('../models/user');
const jwt      = require('jsonwebtoken');
const env      = require('../config/env');

function authenticationsRegister(req, res){

  User.create(req.body, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });

    console.log('req body is ');
    console.log(req.body);
    const token = jwt.sign({ id: user.id, username: user.username }, env.secret, { expiresIn: 60*60*24 });
    return res.status(201).json({
      message: `Welcome ${user.username}!`,
      user,
      token
    });
  });
}

function authenticationsLogin(req, res){
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user || !user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: 'Unauthorized.' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, env.secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      message: 'Welcome back.',
      user,
      token
    });
  });
}


// const decoded = TokenService.decodeToken();
//
//     if (decoded) {
//       User
//       .get({ id: decoded.id }).$promise
//       .then(data => {
//
//         // Data is the user data
//         console.log(`User with id ${data._id} completed the level.`);
//
//   });
// }
