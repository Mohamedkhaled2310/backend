const AppointmentModel = require('./mongodb/Appointment');
const Appointment = require('../domain/AppointmentEntity');

function toEntity(doc) {
  if (!doc) return null;
  return new Appointment({
    id: doc._id.toString(),
    patientId: doc.patient.toString(),
    doctorId: doc.doctor.toString(),
    date: doc.date,
    reason: doc.reason,
    status: doc.status,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  });
}

module.exports = {
  async createAppointment(data) {
    const appointment = new AppointmentModel(data);
    const saved = await appointment.save();
    return toEntity(saved);
  },

  async findByDoctor(doctorId) {
    const docs = await AppointmentModel.find({ doctor: doctorId });
    return docs.map(toEntity);
  },

  async findByPatient(patientId) {
    const docs = await AppointmentModel.find({ patient: patientId });
    return docs.map(toEntity);
  },

  async updateStatus(id, status) {
    const updated = await AppointmentModel.findByIdAndUpdate(id, { status }, { new: true });
    return toEntity(updated);
  },

  async deleteAppointment(id) {
    const deleted = await AppointmentModel.findByIdAndDelete(id);
    return toEntity(deleted);
  },
};
