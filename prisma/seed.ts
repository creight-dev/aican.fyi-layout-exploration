import { Prisma, PrismaClient } from '@prisma/client'

import { categories } from '../data/categories'
import { resources } from '../data/resources'

const prisma = new PrismaClient()

const insertCategories = async () => {}

const insertResources = async () => {}

const main = async () => {}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
