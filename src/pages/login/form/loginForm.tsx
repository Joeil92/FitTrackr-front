import { useForm } from "react-hook-form"
import Input from "../../../components/form/input";
import Submit from "../../../components/form/submit";

interface LoginInputs {
    email: string
    password: string
}

export default function LoginForm() {
    const { handleSubmit, control, formState: { errors } } = useForm<LoginInputs>();

    const onSubmit = (data: LoginInputs) => {
        console.log(data);
    }

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