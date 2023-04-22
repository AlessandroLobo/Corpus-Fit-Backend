import express, { NextFunction, Request, Response, } from 'express'
import 'express-async-errors'
import { routes } from './routes'
const cors = require('cors');

const app = express()

// Configuração do CORS
app.use(cors({
  origin: '*',
  Credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use(express.json())

app.use(routes)

const port = 3333

export function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (!request.headers.authorization) {
    return response.status(401).json({ error: 'Token is missing' })
  }

  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}

app.listen(port, () => {
  console.log('Server is running in url: http://localhost:' + port)
})
