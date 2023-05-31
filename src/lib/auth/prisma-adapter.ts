import { Adapter, AdapterUser } from "next-auth/adapters"
import { prisma } from "../prisma"

export  function PrismaAdapter(): Adapter {
    return {
      async createUser(user) {
        
      },

      async  getUser(id: string): Promise<AdapterUser | null> {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
            id,
          },
          });

        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email!,
          emailVerified: null,
          avatar_url: user.avatar_url?.toISOString() 
        };
    },

      async getUserByEmail(email: string): Promise<AdapterUser | null> {
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                email,
            },
        })

        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email!,
            emailVerified: null,
            avatar_url: user.avatar_url?.toISOString(),
            
        }
      },
      async getUserByAccount({ providerAccountId, provider }) {
        const { user } = await prisma.account.findUniqueOrThrow({
          where: {
             provider_provider_Account_Id: {
              provider,
              provider_Account_Id: providerAccountId,
             },
          },
          include: {
            user: true,
          },
        })
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email!,
          emailVerified: null,
          avatar_url: user.avatar_url?.toISOString(),
        }
      },
      async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id!,
        },
        data: {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url?.toString(),
        },
       })
       return {
        id: prismaUser.id,
        name: prismaUser.name,
        username: prismaUser.username,
        email: prismaUser.email!,
        emailVerified: null,
        avatar_url: prismaUser.avatar_url?.toString(),
      }
      },

      async linkAccount(account) {
        await prisma.account.create({
          data: {
            user_Id: account.userId,
            type: account.type,
            provider: account.provider,
            provider_Account_Id: account.providerAccountId,
            refresh_token: account.refresh_token,
            access_token: account.access_token,
            expires_at: account.expires_at,
            token_type: account.token_type,
            scope: account.scope,
            id_token: account.id_token,
            session_state: account.session_state,
          }
        })
      },
      
      async createSession({ sessionToken, userId, expires }) {
        await prisma.session.create({
          data: {
            user_Id: userId,
            expires,
            session_Token: sessionToken
          },
        })
        return {
          userId,
          expires,
          sessionToken,
        }
      },
      async getSessionAndUser(sessionToken) {
        const {user, ...session} = await prisma.session.findFirstOrThrow({
          where: {
            session_Token: sessionToken
          },
          include: {
            user: true,
          }
        })
        return {
          session: {
            userId: session.user_Id,
            expires: session.expires,
            sessionToken: session.session_Token
          },
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email!,
            emailVerified: null,
            avatar_url: user.avatar_url?.toISOString(),
          },
        }
      },
      async updateSession({ sessionToken, userId, expires}) {
        const prismaSession = await prisma.session.update({
          where: {
            session_Token: sessionToken,
          },
          data: {
            expires,
            user_Id: userId,
          },
        })
        return {
          sessionToken: prismaSession.session_Token,
          userId: prismaSession.user_Id,
          expires: prismaSession.expires,
        }
      },

      
    }
  }