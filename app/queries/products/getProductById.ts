import type { Product } from '@/app/types/product';
import { client } from "@/sanity/lib/client";

export const getProductById = async (id: string): Promise<Product> => {
  const query = `*[_type == "product" && _id == $id]{
    _id,
    title,
    description,
    price,
    stock,
    images[]{
      asset->{
        url
      }
    },
    category->{
      title,
      slug
    }
  }`;

  const params = { id };
  const product = await client.fetch<Product>(query, params);
  return product;
};
