/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query'],
})
