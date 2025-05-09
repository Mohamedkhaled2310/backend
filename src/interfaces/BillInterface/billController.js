module.exports = (createBill,getAllbills, getPatientBills, updateBill, deleteBill) => ({
    async create(req, res) {
      try {
        const bill = await createBill(req.body);
        res.status(201).json(bill);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },
    async getAllbills(req, res) {
      try {
        const bills = await getAllbills();
        res.status(200).json(bills);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },

    async getByPatient(req, res) {
      try {
        const bills = await getPatientBills(req.user.id);
        res.status(200).json(bills);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },
  
    async update(req, res) {
      try {
        const bill = await updateBill(req.params.id, req.body);
        res.status(200).json(bill);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },
  
    async delete(req, res) {
      try {
        const result = await deleteBill(req.params.id);
        res.status(200).json(result);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  });
  