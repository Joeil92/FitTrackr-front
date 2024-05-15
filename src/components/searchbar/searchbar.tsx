import { Dispatch } from "react";
import { searchIcon } from "../../shared/utils/icon";

interface Props {
    handleChange: Dispatch<React.SetStateAction<string>>
    placeholder: string
}

export default function Searchbar({ placeholder, handleChange }: Props) {
    return (
        <div className="flex gap-3 bg-white border rounded-full p-2 mb-6  ">
            {searchIcon}
            <input 
                type="text" 
                className="w-full outline-none" 
                placeholder={placeholder}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}