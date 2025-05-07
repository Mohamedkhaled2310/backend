module.exports = (billRepo) => {
    return async function createBill(data) {
      return await billRepo.createBill(data);
    };
  };