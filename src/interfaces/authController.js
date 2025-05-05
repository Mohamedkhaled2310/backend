module.exports = (registerUser,loginUser) => ({
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await registerUser({ email, password });
      res.status(201).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

    login: async (req, res) => {
      try {
        const { email, password } = req.body;
        const token = await loginUser({ email, password });
        res.json({ token });
      } catch (err) {
        res.status(401).json({ error: err.message });
      }
    }
  });