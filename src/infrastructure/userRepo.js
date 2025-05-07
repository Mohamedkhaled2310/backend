const UserModel = require('./mongodb/User'); 
const UserEntity = require('../domain/UserEntity');

function toEntity(userDoc) {
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
}

module.exports = {
  async findByEmail(email) {
    const userDoc = await UserModel.findOne({ email });
    if (!userDoc) return null;
    
    return toEntity(userDoc);
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

    return toEntity(saved);
  },
  async getDoctors() {
    // const doctorDocs = await UserModel.find({ role: 'doctor' });
    // console.log(doctorDocs);
    return await UserModel.find({ role: 'patient' }).select('_id name');
  }
};
