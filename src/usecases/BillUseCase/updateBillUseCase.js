module.exports = (billRepo) => {
    return async function updateBill(id, updates) {
      return await billRepo.updateBill(id, updates);
    };
  };