module.exports = (billRepo) => {
  return async function getAllbills() {
    return await billRepo.getAllBills();
  };
}