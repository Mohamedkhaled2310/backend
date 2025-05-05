module.exports = (appointmentRepo) => {
    return async function getAppointmentsByDoctor(doctorId) {
      if (!doctorId) {
        throw new Error('Doctor ID is required');
      }
      return await appointmentRepo.findByDoctor(doctorId);
    };
  };
  