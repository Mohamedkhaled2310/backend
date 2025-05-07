module.exports = (billRepo) => {
    return async function deleteBill(id) {
      return await billRepo.deleteBill(id);
    };
  };