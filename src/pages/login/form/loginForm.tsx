import { useForm } from "react-hook-form"
import Input from "../../../components/form/input";
import Submit from "../../../components/form/submit";
import { useMutation, useQueryClient } from "react-query";
import { auth } from "../../../services/api/auth";

export interface LoginInputs {
    email: string
    password: string
}

export default function LoginForm() {
    const { handleSubmit, control, formState: { errors } } = useForm<LoginInputs>({
        defaultValues: {
            email: 'admin@mon-organisation.fr',
            password: 'test'
        }
    });
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (inputs: LoginInputs) => auth(inputs),
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (data) => {
            console.error(data);
        }
    });

    const onSubmit = (inputs: LoginInputs) => mutation.mutate(inputs)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                control={control}
                name="email"
                placeholder="john@exemple.com"
                errors={errors.email}
                label="Email"
                rules={{ required: true }}
            />
            <Input
                control={control}
                type="password"
                name="password"
                placeholder="••••••••"
                errors={errors.password}
                label="Mot de passe"
                rules={{ required: true }}
            />
            <Submit value="Se connecter" />
        </form>
    )
}