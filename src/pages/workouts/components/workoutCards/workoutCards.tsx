import { format } from "date-fns";
import { Workout } from "../../../../services/api/types/workout.interface";
import Card from "../../../../ui/card/card";
import FlexContainer from "../../../../ui/flexContainer/flexContainer";
import GridContainer from "../../../../ui/gridContainer/gridContainer";
import Link from "../../../../ui/link/link";
import Typography from "../../../../ui/typography/typography";

interface Props {
    workouts: Workout[]
}

export default function WorkoutCards({ workouts }: Props) {
    return (
        <GridContainer cols={4} gap={12}>
            {workouts.map(workout => (
                <Card key={workout.id}>
                    <FlexContainer justify="space-between" alignItems="center">
                        <Link href={`/workouts/${workout.id}`}>{workout.name}</Link>
                        <Typography tag="span">{format(workout.createdAt, "dd/MM")}</Typography>
                    </FlexContainer>
                </Card>
            ))}
        </GridContainer>
    )
}