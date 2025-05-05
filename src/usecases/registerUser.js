module.exports = (userRepo, jwtService, bcryptHasher) => {
    return async ({ email, password }) => {
      const existingUser = await userRepo.findByEmail(email);
      if (existingUser) throw new Error('User already exists');
  
      const hashedPassword = await bcryptHasher.hash(password);
      const newUser = await userRepo.createUser({ email, password: hashedPassword });
  
      return jwtService.generateToken({ id: newUser._id, email: newUser.email });
    };
  };
  