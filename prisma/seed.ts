import { db } from '../lib/db'
import { categories } from './categories'
import { resources } from './resources'

const insertCategories = async () => {
  for (const category of categories) {
    await db.category.create({
      data: {
        name: category,
      },
    })
  }
}

const insertResources = async () => {
  for (const resource of resources) {
    console.log(`[DEBUG] inserting resource: (name: ${resource.name}, category: ${resource.category})`)
    const _category = await db.category.findUnique({
      where: {
        name: resource.category,
      },
    })
    console.log(`[DEBUG] found categoryId: ${_category?.id}`)
    await db.resource.create({
      data: {
        name: resource.name,
        description: resource.description,
        url: resource.url,
        category: resource.category,
        categoryId: _category?.id,
      },
    })
  }
}

const main = async () => {
  await insertCategories()
  await insertResources()
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
