import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

// HTTP Method: GET, POST, PUT, PATCH, DELETE, HEAD, OPOTION

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
