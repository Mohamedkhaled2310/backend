const express = require('express');
const router = express.Router();

module.exports = (controller) => {
  router.post('/login', controller.login);
  router.post('/register', controller.register);
  return router;
};
