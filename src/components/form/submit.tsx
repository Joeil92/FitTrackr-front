interface Props {
    value: string
    disabled?: boolean
}

export default function Submit({ value, disabled = false }: Props) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className="text-white transition-all uppercase text-xs font-medium bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full py-3 px-4 text-center"
        >{value}</button>
    )
}