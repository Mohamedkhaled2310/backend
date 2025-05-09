const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  router.post('/', controller.create);
  router.get('/doctor', controller.getByDoctor);
  router.get('/patient', controller.getByPatient);
  router.patch('/:id/status', controller.updateStatus);
  router.delete('/:id', controller.delete);

  return router;
};
