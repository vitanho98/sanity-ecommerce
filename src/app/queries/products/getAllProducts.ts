import type { Product } from '@/src/app/types/product';
import { client } from '@/sanity/lib/client';

export const getAllProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
  _id,
  _createdAt,
  _rev,
  _type,
  _updatedAt,
  title,
  "slug": slug.current,  
  price,
  discountPrice,
  stock,
  featured,
  "imageUrl": image.asset->url,   
  category->{
    _id,
    title,
    "slug": slug.current   
  },
}`;

  const products = await client.fetch<Product[]>(query);

  return products;
};
