class Appointment {
  constructor({ id, patientId, doctorId, date, reason, status, createdAt, updatedAt }) {
    this.id = id;
    this.patientId = patientId;
    this.doctorId = doctorId;
    this.date = date;
    this.reason = reason;
    this.status = status || 'scheduled';
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Appointment;
