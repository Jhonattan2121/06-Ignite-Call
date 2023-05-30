import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, Header } from "./styles";
import { ArrowRight } from "phosphor-react";

export default function Register() {
    return (
        <Container>
            <Header>
                <Heading as="strong">bem vindo ao Ignite Call</Heading>
                <Text>
                    Aqui você pode criar uma conta no Ignite Call.
                </Text>

                <MultiStep size={4} currentStep={1}/>

                <Form as="form">
                    <label>
                        <Text size="sm">Nome de usuário</Text>
                        <TextInput prefix="ignite.com/" placeholder="Seu usuário" />
                    </label>

                    <label>
                        <Text size="sm">Nome completo</Text>
                        <TextInput  placeholder="Seu Nome" />
                    </label>

                    <Button type="submit">Próximo passo
                    <ArrowRight />
                    </Button>
                </Form>
            </Header>
        </Container>
    )
}