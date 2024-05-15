import useDocumentTitle from "../../hooks/useDocumentTitle"
import { useContext } from "react";
import { authContext } from "../../services/providers/authProvider/authProvider";
import Layout from "../../ui/layout/layout";
import Typography from "../../ui/typography/typography";

export default function Dashboard() {
    useDocumentTitle('Tableau de bord');

    const { user } = useContext(authContext);

    return (
        <Layout>
            <Typography tag="h1">👋 Bonjour, {user?.firstname}!</Typography>
        </Layout>
    )
}