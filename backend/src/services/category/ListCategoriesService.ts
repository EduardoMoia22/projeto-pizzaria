import { prismaClient } from "../../prisma";

export class ListCategoriesService{
  async execute(){
    const listOfCategories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true
      }
    })

    return listOfCategories
  }
}