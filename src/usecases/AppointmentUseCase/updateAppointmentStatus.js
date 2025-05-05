module.exports = (appointmentRepo) => {
    return async function updateAppointmentStatus(id, status) {
        if (!id) {
            throw new Error('Appointment ID is required');
        }
      return await appointmentRepo.updateStatus(id, status);
    };
  };
  