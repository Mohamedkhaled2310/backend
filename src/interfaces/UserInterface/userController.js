module.exports = getDoctors = (getDoctorsUseCase) => 
({
    getDoctors: async (req, res) => {
      try {
        const doctors = await getDoctorsUseCase();
        res.json(doctors);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
});
