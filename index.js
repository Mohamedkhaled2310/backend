const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./src/infrastructure/mongodb/connection'); 
const { authRoutes } = require('./src/conatainers/AuthContainer');
const { appointmentRoutes } = require('./src/conatainers/AppointmentContainer');
// Initializeation
const app = express();
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);
const PORT = process.env.PORT || 5000;
// console.log(process.env.PORT );
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
