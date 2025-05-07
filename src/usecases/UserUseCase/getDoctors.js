const User = require('../../domain/UserEntity');

module.exports = (userRepo) => async () => {
    const doctorDocs = await userRepo.getDoctors();
  
    return doctorDocs.map(doc => new User({
      id: doc._id.toString(),
      name: doc.name,
    }));
  };