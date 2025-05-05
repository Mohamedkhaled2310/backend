const { validateUserInput } = require('../validators/userValidator');
module.exports = (registerUser,loginUser) => ({
  register: async (req, res) => {
    try {
      const validatedData = validateUserInput(req.body);
      const { name,email, password,role } = validatedData;
      const token = await registerUser({ name,email, password,role});
      res.status(201).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

    login: async (req, res) => {
      try {
        const { email, password } = req.body;
        const login_data = await loginUser({ email, password });
        res.cookie('token', login_data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'Strict', 
          maxAge: 24 * 60 * 60 * 1000 // one day
        });
        res.status(200).json({user: login_data.user});
      } catch (err) {
        res.status(401).json({ error: err.message });
      }
    }
  });