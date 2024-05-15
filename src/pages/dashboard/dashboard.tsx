import useDocumentTitle from "../../hooks/useDocumentTitle"
import LayoutTitle from "../../ui/layoutTitle/layoutTitle";
import { useOutletContext } from "react-router-dom";
import { OutletContextProps } from "../root/root";

export default function Dashboard() {
    useDocumentTitle('Tableau de bord');

    const { user } = useOutletContext<OutletContextProps>();

    return (
        <>
            <LayoutTitle>👋 Bonjour, {user.firstname}!</LayoutTitle>
        </>
    )
}