const AppointmentModel = require('../domain/Appointment');

module.exports = {
  async createAppointment(data) {
    const appointment = new AppointmentModel(data);
    return await appointment.save();
  },

  async findByDoctor(doctorId) {
    return await AppointmentModel.find({ doctor: doctorId });
  },

  async findByPatient(patientId) {
    return await AppointmentModel.find({ patient: patientId });
  },

  async updateStatus(id, status) {
    return await AppointmentModel.findByIdAndUpdate(id, { status }, { new: true });
  },

  // async getById(id) {
  //   return await AppointmentModel.findById(id);
  // },

  async deleteAppointment(id) {
    return await AppointmentModel.findByIdAndDelete(id);
  },
  
  async deleteAppointment(id) {
    return await AppointmentModel.findByIdAndDelete(id);
  }
};
