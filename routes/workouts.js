const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all workout routes
// router.use(requireAuth)

// GET all workouts
router.get('/', requireAuth, getWorkouts);

//GET a single workout
router.get('/:id', requireAuth, getWorkout);

// POST a new workout
router.post('/', requireAuth, createWorkout);

// DELETE a workout
router.delete('/:id', requireAuth, deleteWorkout);

// UPDATE a workout
router.patch('/:id', requireAuth, updateWorkout);

module.exports = router;
