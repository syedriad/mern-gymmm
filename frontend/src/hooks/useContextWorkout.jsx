
import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";


export const useContextWorkout = ()=>{

    const context = useContext(WorkoutContext)

    if(!context){
        throw Error('useWorkoutContext must be used inside a workoutContextProvider')
    }

    return context
}