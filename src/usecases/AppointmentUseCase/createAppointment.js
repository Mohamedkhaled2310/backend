module.exports = (appointmentRepo) => {
    return async function createAppointment(data) {
      if (!data) {
        throw new Error('Appointment data is required');
      }
      return await appointmentRepo.createAppointment(data);
    };
  };
  