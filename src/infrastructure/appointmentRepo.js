const AppointmentModel = require('./mongodb/Appointment');
const Appointment = require('../domain/AppointmentEntity');

function toEntity(doc) {
  if (!doc) return null;

  const doctorId = typeof doc.doctor === 'object' ? doc.doctor._id.toString() : doc.doctor.toString();
  const patientId = typeof doc.patient === 'object' ? doc.patient._id.toString() : doc.patient.toString();

  return new Appointment({
    id: doc._id.toString(),
    patientId,
    doctorId,
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
    const docs = await AppointmentModel
    .find({ doctor: doctorId })
    .populate('patient', 'name');
    return docs.map((doc) => ({
      ...toEntity(doc),
      patientName: doc.patient.name,
    }));
  },

  async findByPatient(patientId) {
    const docs = await AppointmentModel
      .find({ patient: patientId })
      .populate('doctor', 'name');
  
    return docs.map((doc) => ({
      ...toEntity(doc),
      doctorName: doc.doctor.name,
    }));
  },

  async updateStatus(id, status) {
    const updated = await AppointmentModel.findByIdAndUpdate(id, { status }, { new: true });
    return toEntity(updated);
  },

  async getAllAppointment() {
    const docs = await AppointmentModel.find().populate('doctor patient', 'name name');
    console.log(docs);
    return docs.map((doc) => ({
      ...toEntity(doc),
      doctorName: doc.doctor.name,
      patientName: doc.patient.name,
    }));
  },
  async deleteAppointment(id) {
    const deleted = await AppointmentModel.findByIdAndDelete(id);
    return toEntity(deleted);
  },
};
