import { useForm } from "react-hook-form"
import Input from "../../../../components/form/input";
import Submit from "../../../../components/form/submit";
import { useMutation } from "react-query";
import { addWorkout } from "../../../../services/api/workout";
import { ErrorResponse } from "../../../../shared/types/errorResponse.interface";
import { useNavigate, useOutletContext } from "react-router-dom";
import { OutletContextProps } from "../../../root/root";

interface Props {

}

export interface WorkoutInputs {
    name: string
    user: number
}

export default function WorkoutForm({ }: Props) {
    const navigate = useNavigate();
    const { user } = useOutletContext<OutletContextProps>();

    const defaultValues = {
        name: "",
        user: user.id
    }

    const { handleSubmit, control, formState: { errors } } = useForm<WorkoutInputs>({
        defaultValues: defaultValues
    });

    const mutation = useMutation({
        mutationFn: (inputs: WorkoutInputs) => addWorkout(inputs),
        onSuccess: (data) => {
            navigate(`/workouts/${data.data.id}`);
        },
        onError: (data: ErrorResponse) => {
            console.log(data);
        }
    });

    const onSubmit = async (inputs: WorkoutInputs) => mutation.mutate(inputs);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="name"
                label="Titre"
                placeholder="Titre..."
                control={control}
                errors={errors.name}
                rules={{ required: true }}
            />
            <Submit value="Créer le programme" />
        </form>
    )
}
