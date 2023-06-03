import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import { ConfirmForm, FormActions, FormHeader } from "./styles";
import { CalendarBlank, Clock } from "phosphor-react";

export function ConfirmStep() {
    function handleConfirmScheduling() {}
    return (
        <ConfirmForm as='form' onSubmit={handleConfirmScheduling}>
            <FormHeader>
                <Text>
                    <CalendarBlank />
                    02 de Junho de 2023
                </Text>
                <Text>
                    <Clock />
                </Text>
            </FormHeader>
            <label>
                <Text size='sm'>Nome Completo</Text>
                <TextInput  placeholder='Seu nome'/>
            </label>
            <label>
                <Text size='sm'>E-mail</Text>
                <TextInput type='email' placeholder='Seu E-mail'/>
            </label>
            <label>
                <Text size='sm'>Observaçoes</Text>
                <TextArea />
            </label>

            <FormActions>
                <Button type="button" variant='tertiary'>Cancelar</Button>
                <Button type="submit">Confirmar</Button>
            </FormActions>
        </ConfirmForm>
    )
}