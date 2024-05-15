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
import WorkoutCards from "./components/workoutCards/workoutCards";
import { useState } from "react";
import Searchbar from "../../components/searchbar/searchbar";
import Filters from "./components/filters/filters";

export default function Workouts() {
    const { user } = useOutletContext<OutletContextProps>();
    const [searchbarInputs, setSearchbarInputs] = useState("");

    useDocumentTitle("Programmes");

    const { data: workouts = [], isLoading, isError } = useQuery({
        queryFn: () => getWorkoutsByUser(Number(user.id)),
        queryKey: ['workouts', Number(user.id)],
        enabled: Boolean(user.id)
    });

    const workoutsFiltered = workouts.filter(w => {
        const isInputs = w.name.toLowerCase().includes(searchbarInputs.toLowerCase());

        return isInputs
    })

    if (isLoading) return <></>

    if (isError) return <Typography>Something went wrong</Typography>

    return (
        <>
            <Searchbar
                handleChange={setSearchbarInputs}
                placeholder="Rechercher un programme..."
            />
            <Filters />
            <Section>
                {!workoutsFiltered.length
                    ? <Link href="/workouts/new_workout">
                        <FlexContainer direction="row" gap={2}>{programIcon} Créer un programme</FlexContainer>
                    </Link>
                    : <WorkoutCards workouts={workoutsFiltered} />}
            </Section>
        </>
    )
}