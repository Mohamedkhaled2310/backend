const userRepo = require('../infrastructure/userRepo');

const getDoctorsUseCase = require('../usecases/UserUseCase/getDoctors')(userRepo);

const userController = require('../interfaces/UserInterface/userController')(getDoctorsUseCase);
const userRoutes = require('../interfaces/UserInterface/userRoute')(userController);

module.exports = {
  userRoutes
};
