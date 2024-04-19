import useDocumentTitle from "../../hooks/useDocumentTitle"
import Card from "../../ui/card";
import Section from "../../ui/section";
import Typography from "../../ui/typography";
import LoginForm from "./form/loginForm";

export default function Login() {
    useDocumentTitle("Se connecter");

    return (
        <Section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Typography tag="h1">FitTrackr</Typography>
            <Card>
                <Typography tag="h2">Se connecter</Typography>
                <LoginForm />
            </Card>
        </Section>
    )
}