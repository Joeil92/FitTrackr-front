import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import Typography from "../../../../ui/typography/typography";
import { getWorkoutById } from "../../../../services/api/workout";

export default function Workout() {
    const { workoutId } = useParams();

    const { data: workout, isLoading, isError } = useQuery({
        queryFn: () => getWorkoutById(String(workoutId)),
        queryKey: ['workout', String(workoutId)],
        enabled: Boolean(String(workoutId))
    });

    if (isError) return <Typography>Something went wrong</Typography>

    if (isLoading || !workout) return <></>

    return (
        <>
            <Typography>{workout.name}</Typography>
        </>
    )
}