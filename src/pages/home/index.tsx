import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import PreviewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
        <Hero>
        <Heading as="h1" size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</Text>
        </Hero>

        <Preview>
        <Image 
        src={PreviewImage} 
        height={400} 
        quality={100} 
        priority
        alt='Caléndario simbolizando aplicaçáo em desenvolvimento' />
        </Preview>
    </Container>
  )
}
