const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  reason: { type: String },
  status: {
    type: String,
    enum: ['scheduled', 'attended', 'missed', 'canceled'],
    default: 'scheduled'
  }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);