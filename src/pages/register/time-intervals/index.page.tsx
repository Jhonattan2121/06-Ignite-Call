import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { IntervalBox, IntervalDay, IntervalInputs, IntervalItem, IntervalsContainer } from "./styles";
import { ArrowRight } from "phosphor-react";

export default function TimeIntervals() {
    return (
        <Container>
            <Header>
                <Heading as="strong">Quase lá!</Heading>
                <Text>
                    Defina o intervalo de horários que você está disponível em cada dia da semana.
                </Text>
                <MultiStep size={4} currentStep={3} />
            </Header>

            <IntervalBox as="form">
                <IntervalsContainer>
                    {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'].map((day) => (
                        <IntervalItem key={day}>
                            <IntervalDay>
                                <Checkbox />
                                <Text>{day}</Text>
                            </IntervalDay>
                            <IntervalInputs>
                                <TextInput size='sm' type="time" step={60} />
                                <TextInput size='sm' type="time" step={60} />
                            </IntervalInputs>
                        </IntervalItem>
                    ))}
                </IntervalsContainer>

                <Button type='submit'>
                    Próximo passo <ArrowRight />
                </Button>
            </IntervalBox>
        </Container>
    )
}
