import { Request, Response } from 'express'
import { FindUsersUserTokenCase } from './FindUsersTokenCase'

export class FindUsersTokenController {
  async handle(request: Request, response: Response) {
    const token = request.headers.authorization


    if (!token) {
      return response.status(401).json({ error: 'Token is missing' })
    }

    try {
      const findUsersUserCase = new FindUsersUserTokenCase()
      const result = await findUsersUserCase.execute({
        token: String(token)
      })

      if (!result) {
        return response.status(401).json({ error: 'Invalid token' })
      }

      return response.status(200).json(result)
    } catch (error) {
      console.error(error)

      if (error.message === 'Token is missing' || error.message === 'Invalid token') {
        return response.status(401).json({ error: error.message })
      }

      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}
