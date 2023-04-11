import { db } from '../lib/db'
import { categories } from './categories'
import { resources } from './resources'

const main = async () => {
  // Seed categories
  const categoryMap = new Map<string, number>()
  for (const categoryName of categories) {
    const createdCategory = await db.category.create({
      data: {
        name: categoryName,
      },
    })
    categoryMap.set(createdCategory.name, createdCategory.id)
  }

  // Seed resources
  for (const resource of resources) {
    const categoryId = categoryMap.get(resource.category)
    if (categoryId) {
      await db.resource.create({
        data: {
          name: resource.name,
          description: resource.description,
          categoryId: categoryId,
          url: resource.url,
        },
      })
    }
  }
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
