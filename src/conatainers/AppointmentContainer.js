const appointmentRepo = require('../infrastructure/appointmentRepo');

const createAppointment = require('../usecases/AppointmentUseCase/createAppointment')(appointmentRepo);
const getAppointmentsByDoctor = require('../usecases/AppointmentUseCase/getAppointmentsByDoctor')(appointmentRepo);
const getAppointmentsByPatient = require('../usecases/AppointmentUseCase/getAppointmentsByPatient')(appointmentRepo);
const updateAppointmentStatus = require('../usecases/AppointmentUseCase/updateAppointmentStatus')(appointmentRepo);
const deleteAppointment = require('../usecases/AppointmentUseCase/deleteAppointment')(appointmentRepo);
const getAllAppointment = require('../usecases/AppointmentUseCase/getAllAppointments')(appointmentRepo);
const appointmentController = require('../interfaces/AppointmentInterface/appointmentController')(
  createAppointment,
  getAppointmentsByDoctor,
  getAppointmentsByPatient,
  updateAppointmentStatus,
  deleteAppointment,
  getAllAppointment
);

const appointmentRoutes = require('../interfaces/AppointmentInterface/appointmentRoutes')(appointmentController);
module.exports = {
    appointmentRoutes
  };
