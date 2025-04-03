import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

// @ts-expect-error("prisma error")
const globalForPrisma = global as unknown as { prisma: typeof prisma }

// @ts-expect-error("prisma error")
const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma