const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  router.post('/', controller.create);
  router.get('/patient/:patientId', controller.getByPatient);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.delete);

  return router;
};