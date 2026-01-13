import { useState } from "react";
import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useContextWorkout } from "../hooks/useContextWorkout";


const Home = () => {
  
  const {workouts, dispatch} = useContextWorkout()

  useEffect(()=>{
    const fetchWorkout = async () => {
      const response = await fetch('https://mern-gymmm-appi.vercel.app/api/workouts')

      const jason = await response.json()
      console.log("Fetched workouts:", jason);

      
      if(response.ok){
        dispatch({type: 'SET_WORKOUTS' , payload: jason})
      }

    }
    fetchWorkout()
  },[])

  return (
    
      <div className="home">
        <div className="workouts">
          {workouts && workouts.map((hardwork)=>(
            hardwork? (
            <WorkoutDetails key={hardwork._id}  hardwork={hardwork} />
            ):null
          ))}
        </div>
        <WorkoutForm/>
      </div>
    
  );
};

export default Home;
