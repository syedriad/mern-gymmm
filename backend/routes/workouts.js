
const express = require('express')
const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
    
} = require('../controllers/workoutController')

const router = express.Router()




// get all workouts
router.get('/',getAllWorkouts) 


// get a single workout

router.get('/:id',getWorkout)


// POST a new workout
router.post('/',createWorkout)



// DELETE a new workout
router.delete('/:id', deleteWorkout)



// UPDATE a new workout
router.patch('/:id', updateWorkout)






module.exports = router