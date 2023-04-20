import express, { NextFunction, Request, Response, } from 'express'
import 'express-async-errors'
import { routes } from './routes'
const cors = require('cors');

const app = express()

// Configuração do CORS
app.use(cors());

app.use(express.json())

app.use(routes)

const port = 3333

app.use((err, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});


app.listen(port, () => {
  console.log('Server is running on port' + port)
})
