import { useContext } from "react";
import Layout from "../../ui/layout/layout";
import { authContext } from "../../services/providers/authProvider/authProvider";
import { useQuery } from "react-query";
import { getWorkoutsByUser } from "../../services/api/workout";
import Typography from "../../ui/typography/typography";
import Section from "../../ui/section/section";
import Button from "../../ui/button/button";
import { programIcon } from "../../shared/utils/icon";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import FlexContainer from "../../ui/flexContainer/flexContainer";

export default function Workouts() {
    const { user } = useContext(authContext);

    useDocumentTitle("Programmes");

    const { data: workouts = [], isLoading, isError } = useQuery({
        queryFn: () => getWorkoutsByUser(Number(user?.id)),
        queryKey: ['workouts', Number(user?.id)],
        enabled: Boolean(user?.id)
    });

    if (isLoading) return <></>

    if (isError) return <Typography>Something went wrong</Typography>

    return (
        <Layout>
            <Section>
                {!workouts.length
                    ? <Button>
                        <FlexContainer direction="row" gap={2}>{programIcon} Créer un programme</FlexContainer>
                    </Button>
                    : <></>}
            </Section>
        </Layout>
    )
}