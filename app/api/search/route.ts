import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/lib/db'

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')

  const resources = await db.resource.findMany({
    where: {
      OR: [
        {
          name: {
            search: q,
          },
        },
        {
          description: {
            search: q,
          },
        },
        {
          category: {
            name: {
              search: q,
            },
          },
        },
      ],
    },
    include: {
      category: true, // include category data
    },
  })
  // const resultMap = new Map<number, any>()
  // const result = resources.reduce((acc, resource) => {
  //   // console.log(`[DEBUG] resource.category: ${JSON.stringify(resource.category)}`)
  //   if (acc.get(resource.categoryId)) {
  //     console.log(`[DEBUG]: adding to existing category: ${resource.category.name}`)
  //     acc.get(resource.categoryId)['resources'].push(resource)
  //   } else {
  //     console.log(`[DEBUG]: creating new category: ${resource.category.name}`)
  //     acc.set(resource.categoryId, {
  //       name: resource.category.name,
  //       resources: [resource],
  //     })
  //     console.log(`[DEBUG]: acc: ${JSON.stringify(acc)}`)
  //   }
  //   // console.log(`[DEBUG] acc: ${JSON.stringify(acc)}`)
  //   return acc
  // }, resultMap)
  return NextResponse.json(resources)
}
