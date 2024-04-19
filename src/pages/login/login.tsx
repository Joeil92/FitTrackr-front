import useDocumentTitle from "../../hooks/useDocumentTitle"
import Section from "../../ui/section";
import Typography from "../../ui/typography";

export default function Login() {
    useDocumentTitle("Se connecter");

    return (
        <Section className="h-screen w-full">
            <Typography>Se connecter</Typography>
        </Section>
    )
}