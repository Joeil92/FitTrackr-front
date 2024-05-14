import { Control, Controller, FieldError } from "react-hook-form";

type Type = 'text' | 'password' | 'number' | 'date' | 'datetime-local' | 'time'

interface Rules {
    required: boolean
}

interface Props {
    control: Control<any>
    name: string
    label: string
    type?: Type
    placeholder?: string
    errors: FieldError | undefined
    rules?: Rules
}

export default function Input({ control, name, label, type = 'text', placeholder, errors, rules }: Props) {
    return (
        <Controller
            render={({ field }) => (
                <div className="mb-6">
                    <label
                        htmlFor={name}
                        className="block uppercase tracking-wide text-xs font-medium mb-2"
                    >{label}</label>
                    <input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        className="appearance-none outline-none block w-full border rounded-lg py-2 px-2 leading-tight focus:border-blue-500 focus:ring-blue-500"
                    />
                    {
                        errors?.type === 'required' && <p className="text-red-500 text-xs">Ce champ est obligatoire</p>
                    }
                </div>
            )}
            name={name}
            rules={rules}
            control={control}
        />
    )
}