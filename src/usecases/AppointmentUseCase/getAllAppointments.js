
module.exports = (appointmentRepo) => {
    return async function getAllAppointment() {
      return await appointmentRepo.getAllAppointment();
    };
  };
  