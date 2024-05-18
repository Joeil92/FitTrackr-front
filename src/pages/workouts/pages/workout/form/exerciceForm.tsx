import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom"

export interface ExerciceInputs {
    id?: number
    workout: number | string
    exercice: number | string
}

export default function ExerciceForm() {
    const { workoutId } = useParams();
    const { handleSubmit, control, formState: { errors } } = useForm();

    return (
        <form action=""></form>
    )
}