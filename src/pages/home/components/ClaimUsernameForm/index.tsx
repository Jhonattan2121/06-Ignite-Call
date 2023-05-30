import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimUsernameFormSchema = z.object({
    username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

   async function handleClaimUsername(data: ClaimUsernameFormData) {
  console.log(data);
}
    return (
        <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
            <TextInput size="sm" prefix="ignite.com/" placeholder="Seu usuario" {...register('username')}/>
            <Button size="sm" type="submit">
                Reservar usuário
                <ArrowRight />
            </Button>
        </Form>
    )
}