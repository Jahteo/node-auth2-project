const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../api/configs");

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: "invalid token" })
      } else {
        req.jwt = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({ message: "missing authorization header" })
  }
}