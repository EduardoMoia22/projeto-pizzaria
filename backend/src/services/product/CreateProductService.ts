import { prismaClient } from "../../prisma";

interface ProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  categoryId: string;
}

export class CreateProductService{
  async execute({name, price, description, banner, categoryId}: ProductRequest){
    
    const product = await prismaClient.product.create({
     data:{
      name: name,
      price: price,
      description: description,
      banner: banner,
      categoryId: categoryId
     }
    })

    return product
  }
}
