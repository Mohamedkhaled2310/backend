const UserModel = require('./mongodb/User'); 
const UserEntity = require('../domain/UserEntity');

module.exports = {
  async findByEmail(email) {
    const userDoc = await UserModel.findOne({ email });
    if (!userDoc) return null;
    
    return new UserEntity({
      id: userDoc._id,
      name: userDoc.name,
      email: userDoc.email,
      password: userDoc.password,
      role: userDoc.role,
      createdAt: userDoc.createdAt,
      updatedAt: userDoc.updatedAt
    });
  },

  async createUser(userData) {
    const user = new UserEntity(userData);
    
    const userDoc = new UserModel({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    });

    const saved = await userDoc.save();

    return new UserEntity({
      id: saved._id,
      name: saved.name,
      email: saved.email,
      password: saved.password,
      role: saved.role,
      createdAt: saved.createdAt,
      updatedAt: saved.updatedAt
    });
  }
};
