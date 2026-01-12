const express = require('express')
const gym = require('../models/workoutModel')
const mongoose = require('mongoose')



// GET all workout
const getAllWorkouts = async (req,res) => {
    const workouts = await gym.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}


// GET a single workout

const getWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"no such workout baby"})
    }
    const workout = await gym.findById(id)

    if(!workout){
        return res.status(404).json({error: "no such workout"})
    }

    res.status(200).json(workout)
}

// CREATE a workout

const createWorkout = async (req,res)=>{

    const {title,load,reps} = req.body

    // add to DB
    try{
        const work = await gym.create({title,load,reps})
        res.status(200).json(work)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

// DELETE a workout

const deleteWorkout = async (req,res) => {

    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: "no such workout"})
    }

    const workout = await gym.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(workout)
}


// UPDATE a workout

const updateWorkout = async (req,res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no such workout"})
    }

    const workout = await gym.findOneAndUpdate({_id:id},{...req.body})

    if(!workout){
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}