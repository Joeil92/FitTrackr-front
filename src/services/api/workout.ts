import { Workout } from "./types/workout.interface";

export async function getWorkoutsByUser(userId: number): Promise<Workout[]> {
    const url = `http://localhost:8000/api/workouts/users/${userId}`;
    const options = {
        method: 'GET',
        headers: {
            'authorization': 'Bearer ' + localStorage.getItem('FitTrackrToken'),
            'accept': 'application/json'
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
}