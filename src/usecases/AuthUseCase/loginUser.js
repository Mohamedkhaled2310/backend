module.exports = (userRepo, tokenService, passwordHasher) => async ({ email, password }) => {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error('User not found');
  
    const isValid = await passwordHasher.compare(password, user.password);
    if (!isValid) throw new Error('Invalid password');
    return { user: {id:user.id,name:user.name,email:user.email,role:user.role} ,token:tokenService.generateToken({ id: user.id, email: user.email })};
  };
  