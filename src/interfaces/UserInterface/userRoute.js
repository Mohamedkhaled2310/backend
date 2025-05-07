const express = require('express');
const router = express.Router();

module.exports = (userController) => {
  router.get('/doctors', userController.getDoctors);
  return router;
};
