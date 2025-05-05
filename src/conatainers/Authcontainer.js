// Infrastructure
const bcryptHasher = require('../infrastructure/bcryptHasher');
const jwtService = require('../infrastructure/jwtService');
const userRepo = require('../infrastructure/userRepo');

// Use Cases
const loginUser = require('../usecases/loginUser')(userRepo, jwtService, bcryptHasher);
const registerUser = require('../usecases/registerUser')(userRepo, jwtService, bcryptHasher);
// Interfaces
const authController = require('../interfaces/authController')(registerUser, loginUser); 
const authRoutes = require('../interfaces/authRoutes')(authController);

module.exports = {
    authRoutes
  };