const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./src/infrastructure/mongodb/connection'); 
const { authRoutes } = require('./src/conatainers/AuthContainer');
const { appointmentRoutes } = require('./src/conatainers/AppointmentContainer');
const { authMiddleware } = require('./src/infrastructure/middleware/auth');
const {billRoutes}  = require('./src/conatainers/BillContainer');
const {userRoutes} =  require('./src/conatainers/UserContainer');

const app = express();
dotenv.config();
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
  }));
app.use(express.json());
app.use(cookieParser());

connectDB();

  

app.use('/auth', authRoutes);
app.use('/appointments',authMiddleware, appointmentRoutes);
app.use('/bills', authMiddleware, billRoutes);
app.use('/user', authMiddleware,userRoutes );
const PORT = process.env.PORT || 5000;
// console.log(process.env.PORT );
app.listen(PORT, () => console.log(`server on port ${PORT}`));
