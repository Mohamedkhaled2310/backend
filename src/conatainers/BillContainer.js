const billRepo = require('../infrastructure/billRepo');


const createBill = require('../usecases/BillUseCase/createBillUseCase')(billRepo);
const getPatientBills = require('../usecases/BillUseCase/getPatientBillsUseCase')(billRepo);
const updateBill = require('../usecases/BillUseCase/updateBillUseCase')(billRepo);
const deleteBill = require('../usecases/BillUseCase/deleteBillUseCase')(billRepo);


const billController = require('../interfaces/BillInterface/billController')(
  createBill,
  getPatientBills,
  updateBill,
  deleteBill
);
const billRoutes = require('../interfaces/BillInterface/billRoutes')(billController);

module.exports = {
    billRoutes,
}