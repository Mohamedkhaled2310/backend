// Infrastructure
const userRepo = require('../infrastructure/userRepo');

// Use Cases
const getDoctorsUseCase = require('../usecases/UserUseCase/getDoctors')(userRepo);

// Interfaces
const userController = require('../interfaces/UserInterface/userController')(getDoctorsUseCase);
const userRoutes = require('../interfaces/UserInterface/userRoute')(userController);

module.exports = {
  userRoutes
};
