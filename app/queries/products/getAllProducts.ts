import type { Product } from "@/app/types/product";
import { client } from "@/sanity/lib/client";

export const getAllProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    _id,
    _createdAt,
    _rev,
    _type,
    _updatedAt,
    title,
    description,
    slug,
    price,
    stock,
    featured,
    images[]{
      asset->{
        url
      }
    },
    category->{
      _id,
      title,
      slug
    }
  }`;

  const products = await client.fetch<Product[]>(query);

  console.log('Produtos retornados:', products);

  return products;
};
