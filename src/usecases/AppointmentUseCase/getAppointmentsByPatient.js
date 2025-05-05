module.exports = (appointmentRepo) => {
    return async function getAppointmentsByPatient(patientId) {
        if (!patientId) {
            throw new Error('Patient ID is required');
        }
      return await appointmentRepo.findByPatient(patientId);
    };
  };
  