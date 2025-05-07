class Bill {
    constructor({ id, appointment, patient, amount, paid = false, paymentMethod = 'cash', notes, createdAt, updatedAt }) {
      this.id = id;
      this.appointment = appointment;
      this.patient = patient;
      this.amount = amount;
      this.paid = paid;
      this.paymentMethod = paymentMethod;
      this.notes = notes;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  
  module.exports = Bill;
  