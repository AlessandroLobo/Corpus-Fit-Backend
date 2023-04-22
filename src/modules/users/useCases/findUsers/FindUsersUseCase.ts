import { prisma } from "../../../../database/prismaClient";
import { verify, JwtPayload, VerifyOptions } from 'jsonwebtoken'

interface IFindUsersUserCase {
  token: string;
}

export class FindUsersUserCase {
  async execute({ token }: IFindUsersUserCase) {
    console.log(token);

    if (!token) {
      throw new Error('Token is missing')
    }

    try {
      console.log('JWT_SECRET:', process.env.JWT_SECRET)
      const decoded = verify(token.replace('Bearer ', ''), process.env.JWT_SECRET!, {
        algorithms: ['HS256'],
      } as VerifyOptions) as JwtPayload
      console.log('Decoded token:', decoded)

      const user = await prisma.user.findFirst({
        where: {
          email: decoded.email
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
