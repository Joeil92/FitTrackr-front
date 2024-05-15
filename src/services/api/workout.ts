import { WorkoutInputs } from "../../pages/workouts/newWorkout/form/workoutForm";
import { Workout } from "./types/workout.interface";

export async function addWorkout(inputs: WorkoutInputs): Promise<{message: string, data: Workout}> {
    const url = `http://localhost:8000/api/workouts`;
    const options = {
        method: 'POST',
        headers: {
            'authorization': 'Bearer ' + localStorage.getItem('fitTrackrToken'),
            'content-type': 'application/json'
        },
        body: JSON.stringify(inputs)
    }

    const res = await fetch(url, options);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
}

export async function getWorkoutsByUser(userId: number): Promise<Workout[]> {
    const url = `http://localhost:8000/api/workouts/users/${userId}`;
    const options = {
        method: 'GET',
        headers: {
            'authorization': 'Bearer ' + localStorage.getItem('fitTrackrToken'),
            'accept': 'application/json'
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
}