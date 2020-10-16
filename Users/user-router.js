const router = require('express').Router();

const Users = require('./user-model.js');
const restricted = require("../Auth/restricted-middleware");

//Routes
router.get('/', restricted, checkRole("crazy"), (req, res) => {
  Users.find()
  .then(users => {
    res.status(200).json({ users, jwt: req.jwt});
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

function checkRole (role) {
  return function (req, res, next) {
    if(req.jwt.department === role) {
      next();
    } else {
      res.status(403).json({ message: "you don't have access here. CheckRole says no."})
    }
  }
}

module.exports = router;