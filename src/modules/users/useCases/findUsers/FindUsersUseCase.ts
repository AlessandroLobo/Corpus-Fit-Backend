import { prisma } from "../../../../database/prismaClient";
import { verify, JwtPayload, VerifyOptions } from 'jsonwebtoken'

interface IFindUsersUserCase {
  token: string;
}

export class FindUsersUserCase {
  async execute({ token }: IFindUsersUserCase) {

    if (!token) {
      throw new Error('Token is missing')
    }

    try {
      const decoded = verify(token.replace('Bearer ', ''), process.env.JWT_SECRET!, {
        algorithms: ['HS256'],
      } as VerifyOptions) as JwtPayload

      const user = await prisma.user.findFirst({
        where: {
          email: decoded.email
        },
        select: {
          id: true,
          email: true,
          // outros campos se precisarem retornar
        }
      })

      if (!user) {
        throw new Error('User not found')
      }

      return user;
    } catch (err) {
      console.error('Error validating token:', err)
      return null
    }
  }
}
