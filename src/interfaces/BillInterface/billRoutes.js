const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  router.route('/')
  .post(controller.create)
  .get(controller.getAllbills);
  router.get('/patient', controller.getByPatient);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.delete);

  return router;
};