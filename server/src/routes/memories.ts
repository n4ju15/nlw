import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
    return memories
  })

  app.get('/memories/:id', async () => {})

  app.post('/memories', async () => {})

  app.put('/memories/:id', async () => {})

  app.delete('/memories/:id', async () => {})
}
