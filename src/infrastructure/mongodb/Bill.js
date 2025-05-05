const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  paid: { type: Boolean, default: false },
  paymentMethod: { type: String, enum: ['cash', 'card', 'insurance'], default: 'cash' },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Bill', billSchema);