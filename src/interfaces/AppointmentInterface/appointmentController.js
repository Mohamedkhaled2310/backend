module.exports = (
    createAppointment,
    getAppointmentsByDoctor,
    getAppointmentsByPatient,
    updateAppointmentStatus,
    deleteAppointment,
  ) => {
    return {
      create: async (req, res) => {
        const { doctorId, date, time, reason } = req.body;
        const patientId = req.user.id;
      
        try {
          const appointment = await createAppointment({ 
          patient:patientId,
          doctor:doctorId,
          date,
          reason,
        });
          res.status(201).json(appointment);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      },
  
      getByDoctor: async (req, res) => {
        try {
          const doctorId = req.user.id;
          const appointments = await getAppointmentsByDoctor(doctorId);
          res.status(200).json(appointments);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      },
  
      getByPatient: async (req, res) => {
        try {
          const patientId = req.user.id;
          const appointments = await getAppointmentsByPatient(patientId);
          console.log(appointments);
          res.status(200).json(appointments);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      },
  
      updateStatus: async (req, res) => {
        try {
          const { id } = req.params;
          const { status } = req.body;
          const updated = await updateAppointmentStatus(id, status);
          res.status(200).json(updated);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      },
      delete: async (req, res) => {
        try {
          const { id } = req.params;
          await deleteAppointment(id);
          res.status(204).end();
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      },
    };
  };
  