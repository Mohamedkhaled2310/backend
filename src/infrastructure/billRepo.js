const BillModel = require('./mongodb/Bill');
const BillEntity = require('../domain/BillEntity');

function toEntity(doc) {
  if (!doc) return null;

  return new BillEntity({
    id: doc._id.toString(),
    appointment: doc.appointment,
    patient: doc.patient,
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

  async getById(id) {
    const doc = await BillModel.findById(id);
    return toEntity(doc);
  },

  async getByPatient(patientId) {
    const docs = await BillModel.find({ patient: patientId });
    return docs.map(toEntity);
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
