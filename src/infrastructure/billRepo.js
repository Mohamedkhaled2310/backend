const BillModel = require('./mongodb/Bill');
const BillEntity = require('../domain/BillEntity');

function toEntity(doc) {
  if (!doc) return null;
  const appointment = typeof doc.appointment ==='object' ? doc.appointment._id.toString() : appointment.toString();
  const patient = typeof doc.patient ==='object' ? doc.patient._id.toString() : patient.toString();
  return new BillEntity({
    id: doc._id.toString(),
    appointment: appointment,
    patient: patient,
    amount: doc.amount,
    paid: doc.paid,
    paymentMethod: doc.paymentMethod,
    notes: doc.notes,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  });
}

module.exports = {
  async createBill(data) {
    const bill = new BillModel(data);
    const saved = await bill.save();
    return toEntity(saved);
  },
  async getAllBills() {
    const docs = await BillModel.find()
    .populate('patient', 'name')
    .populate('appointment', 'date reason');
    // console.log(docs);
    return docs.map((doc) => ({
      ...toEntity(doc),
      appointmentReason: doc.appointment.reason,
      appointmentDate: doc.appointment.date,
      patientName: doc.patient.name,
    }));
  },
  async getById(id) {
    const doc = await BillModel.findById(id);
    return toEntity(doc);
  },

  async getByPatient(patientId) {
    const docs = await BillModel.find({ patient: patientId })
    .populate('appointment', 'date reason');
    return docs.map((doc) => ({
      ...toEntity(doc),
      appointmentReason: doc.appointment.reason,
      appointmentDate: doc.appointment.date,
    }));
  },

  async updateBill(id, updates) {
    const updated = await BillModel.findByIdAndUpdate(id, updates, { new: true });
    return toEntity(updated);
  },

  async deleteBill(id) {
    const deleted = await BillModel.findByIdAndDelete(id);
    return toEntity(deleted);
  },

  // optional
  async markAsPaid(id) {
    const updated = await BillModel.findByIdAndUpdate(id, { paid: true }, { new: true });
    return toEntity(updated);
  }
};
