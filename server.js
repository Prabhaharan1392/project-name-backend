require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

// express app
const app = express();
app.use(cors());
// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to db
async function connectDB() {
  mongoose.set('strictQuery', false);
  const result = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });
  console.log('DB connected');
  return result;
}
connectDB();
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
