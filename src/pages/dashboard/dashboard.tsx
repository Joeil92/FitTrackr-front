import useDocumentTitle from "../../hooks/useDocumentTitle"
import { useContext } from "react";
import { authContext } from "../../services/providers/authProvider/authProvider";

export default function Dashboard() {
    useDocumentTitle('Tableau de bord');

    const { user } = useContext(authContext);

    return (
        <>

        </>
    )
}