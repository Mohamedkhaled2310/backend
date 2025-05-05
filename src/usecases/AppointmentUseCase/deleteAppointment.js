module.exports = (appointmentRepo) => {
    return async function deleteAppointment(id) {
    if (!id) {
        throw new Error('Appointment ID is required');
    }
      return await appointmentRepo.deleteAppointment(id);
    };
  };