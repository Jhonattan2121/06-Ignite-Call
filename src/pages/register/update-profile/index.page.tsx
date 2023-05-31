import { Button, Heading, MultiStep, Text, TextArea } from "@ignite-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAnnotation, ProfileBox } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Container, Header } from "../styles";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "@/pages/api/auth/[...nextauth].api";


const updateProfileSchema = z.object({
    bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
    const {register,
         handleSubmit, 
         formState: { isSubmitting}}
          = useForm<UpdateProfileData>({
        resolver: zodResolver(updateProfileSchema),
    })

    const session = useSession()
    console.log(session)
 
    async function handleUpdateProfile(data: UpdateProfileData) {
        
    }
    return (
        <Container>
            <Header>
                <Heading as="strong">bem vindo ao Ignite Call</Heading>
                <Text>
                Precisamos de algumas informações para criar o seu perfil! Ah, e você poderá editar essas informações posteriormente.
                </Text>

                <MultiStep size={4} currentStep={4}/>

                <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
                    <label>
                       <Text size="sm">Foto de perfil</Text>
                    </label>

                    <label>
                        <Text size="sm">Sobre voce</Text>
                        <TextArea {...register('bio')} />
                        <FormAnnotation size='sm'>
                            Fale um pouco sobre voce. Isto sera exibido em sua pagina pessoal.
                        </FormAnnotation>
                    </label>

                    <Button type="submit" disabled={isSubmitting}>Finalizar
                    <ArrowRight />
                    </Button>
                </ProfileBox>
            </Header>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const session = await getServerSession(req, res, buildNextAuthOptions(req, res));
    
    return {
      props: {
        session,
      },
    };
  };