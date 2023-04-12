import express from 'express'
import { routes } from './routes'

const app = express()

app.use(routes)

const port = 3333

app.use(express.json())

app.listen(port, () => {
  console.log('Server is running on port' + port)
})
