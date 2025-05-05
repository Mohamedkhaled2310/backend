module.exports = (userRepo, jwtService, bcryptHasher) => {
    return async ({ name,email, password,role}) => {
      const existingUser = await userRepo.findByEmail(email);
      if (existingUser) throw new Error('User already exists');
  
      const hashedPassword = await bcryptHasher.hash(password);
      const newUser = await userRepo.createUser({ name, email, password: hashedPassword, role});
  
      return jwtService.generateToken({ id: newUser._id, email: newUser.email });
    };
  };
  