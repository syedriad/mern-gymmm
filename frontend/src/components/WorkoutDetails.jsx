import { useContextWorkout } from "../hooks/useContextWorkout"

const WorkoutDetails = ({hardwork}) =>{

    const {dispatch} = useContextWorkout()

    const handleDlt = async ()=>{
        const response = await fetch(`https://mern-gymmm-appi.vercel.app/api/workouts/${hardwork._id}`,{
            method: 'DELETE'
        } )

        const jason = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: jason})
        }

    }

    return(
        <div className="workout-details">

            <h4>{hardwork.title}</h4>
            <p><strong>load (kg):</strong> {hardwork.load}</p>
            <p><strong>Reps:</strong> {hardwork.reps} </p>
            <p>{hardwork.createdAt}</p>
            <span onClick={handleDlt} >Delete</span>

        </div>
    )
}

export default WorkoutDetails
