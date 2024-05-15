import { useQuery } from "react-query";
import { getWorkoutsByUser } from "../../services/api/workout";
import Typography from "../../ui/typography/typography";
import Section from "../../ui/section/section";
import { programIcon } from "../../shared/utils/icon";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import FlexContainer from "../../ui/flexContainer/flexContainer";
import Link from "../../ui/link/link";
import { useOutletContext } from "react-router-dom";
import { OutletContextProps } from "../root/root";

export default function Workouts() {
    const { user } = useOutletContext<OutletContextProps>();

    useDocumentTitle("Programmes");

    const { data: workouts = [], isLoading, isError } = useQuery({
        queryFn: () => getWorkoutsByUser(Number(user.id)),
        queryKey: ['workouts', Number(user.id)],
        enabled: Boolean(user.id)
    });

    if (isLoading) return <></>

    if (isError) return <Typography>Something went wrong</Typography>

    return (
        <>
            <Section>
                {!workouts.length
                    ? <Link href="/workouts/new_workout">
                        <FlexContainer direction="row" gap={2}>{programIcon} Créer un programme</FlexContainer>
                    </Link>
                    : <></>}
            </Section>
        </>
    )
}