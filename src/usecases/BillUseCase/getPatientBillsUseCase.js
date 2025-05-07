module.exports = (billRepo) => {
    return async function getPatientBills(patientId) {
      return await billRepo.getByPatient(patientId);
    };
  };
  