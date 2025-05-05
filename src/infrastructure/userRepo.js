const UserModel = require('../domain/User');

module.exports = {
  async findByEmail(email) {
    return await UserModel.findOne({ email });
  },

  async createUser(userData) {
    const user = new UserModel(userData);
    return await user.save();
  },
  
};
