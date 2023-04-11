import type { Category } from '@prisma/client'

export const groupByCategory = (resources: any[]) => {
  const resultMap = resources.reduce((acc, resource) => {
    if (acc.get(resource.categoryId)) {
      acc.get(resource.categoryId)['resources'].push(resource)
    } else {
      acc.set(resource.categoryId, {
        name: resource.category.name,
        resources: [resource],
      })
    }
    return acc
  }, new Map<number, any>())
  return Array.from(resultMap.values())
}

interface CategoryCollection extends Category {}
export const addSizeProperty = (collection: { resources: any[] }) => {
  return {
    ...collection,
    size: collection.resources.length,
  }
}
