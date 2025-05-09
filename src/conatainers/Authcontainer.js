const bcryptHasher = require('../infrastructure/bcryptHasher');
const jwtService = require('../infrastructure/jwtService');
const userRepo = require('../infrastructure/userRepo');


const loginUser = require('../usecases/AuthUseCase/loginUser')(userRepo, jwtService, bcryptHasher);
const registerUser = require('../usecases/AuthUseCase/registerUser')(userRepo, jwtService, bcryptHasher);

const authController = require('../interfaces/AuthInterface/authController')(registerUser, loginUser); 
const authRoutes = require('../interfaces/AuthInterface/authRoutes')(authController);

module.exports = {
    authRoutes
  };