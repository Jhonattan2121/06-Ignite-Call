import { Avatar, Heading, Text } from '@ignite-ui/react'
import { Container, UserHeader } from './styles'
import { GetStaticProps, GetStaticPaths } from 'next'
import prisma from '@/libs/prisma'
import { ScheduleForm } from './ScheduleForm'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  const { name, bio, avatarUrl } = user
  return (
    <Container>
      <UserHeader>
        <Avatar src={avatarUrl} />
        <Heading>{name}</Heading>
        <Text>{bio}</Text>
      </UserHeader>
      <ScheduleForm />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await prisma.user.findMany()

  const paths = users.map((user) => ({
    params: { username: user.username },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 Day
  }
}
