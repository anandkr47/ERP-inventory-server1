const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/usermodel');

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded.user._id);

      if (!user) {
        res.status(401);
        throw new Error('User not found');
      }

      req.user = user;
      console.log(req.user);
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Invalid token');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('No token provided');
  }
});

module.exports = validateToken;
