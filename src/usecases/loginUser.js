module.exports = (userRepo, tokenService, passwordHasher) => async ({ email, password }) => {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error('User not found');
  
    const isValid = await passwordHasher.compare(password, user.password);
    if (!isValid) throw new Error('Invalid password');
  
    return tokenService.generateToken({ id: user.id, email: user.email });
  };
  