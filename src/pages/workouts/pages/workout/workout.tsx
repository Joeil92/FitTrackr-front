import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import Typography from "../../../../ui/typography/typography";
import { getWorkoutById } from "../../../../services/api/workout";
import LayoutTitle from "../../../../ui/layoutTitle/layoutTitle";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import Button from "../../../../ui/button/button";
import { useState } from "react";
import Modal from "../../../../ui/modal/modal";
import ExerciceForm from "./form/exerciceForm";

export default function Workout() {
    const [openModal, setOpenModal] = useState(false);
    const { workoutId } = useParams();

    const { data: workout, isLoading, isError } = useQuery({
        queryFn: () => getWorkoutById(String(workoutId)),
        queryKey: ['workout', String(workoutId)],
        enabled: Boolean(String(workoutId))
    });

    useDocumentTitle(String(workout?.name));

    if (isError) return <Typography>Something went wrong</Typography>

    if (isLoading || !workout) return <></>

    return (
        <>
            <LayoutTitle>{workout.name}</LayoutTitle>
            <Button onClick={() => setOpenModal(true)}>Ajouter un exercice</Button>
            <Modal title="Ajouter un exercice" active={openModal} handleActive={setOpenModal}>
                <ExerciceForm />
            </Modal>
        </>
    )
}