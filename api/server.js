const express = require("express");
const helmet = require("helmet");

const UserRouter = require('../users/user-router.js');
const AuthRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

//register & login endpoints
server.use('/api', AuthRouter);
//protected users
server.use('/api/users', UserRouter);

server.get("/", (req, res) => {
  res.status(200).json({ hello: "are you excited yet?" });
});
module.exports = server;