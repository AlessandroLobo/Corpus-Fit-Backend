import { prisma } from "../../../../database/prismaClient";
import { verify, JwtPayload, VerifyOptions } from 'jsonwebtoken'

interface IFindUsersUserTokenCase {
  token: string;
}

export class FindUsersUserTokenCase {
  async execute({ token }: IFindUsersUserTokenCase) {

    if (!token) {
      throw new Error('Token is missing')
    }

    try {
      const decoded = verify(token.replace('Bearer ', ''), process.env.JWT_SECRET!, {
        algorithms: ['HS256'],
      } as VerifyOptions) as JwtPayload

      const student = await prisma.student.findFirst({
        where: {
          email: decoded.email
        },
        select: {
          id: true,
          email: true,
          // outros campos se precisarem retornar
        }
      })

      if (!student) {
        throw new Error('User not found')
      }

      return student;
    } catch (err) {
      console.error('Error validating token:', err)
      return null
    }
  }
}
