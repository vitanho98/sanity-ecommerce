import type { Product } from '@/src/app/types/product';
import { client } from '@/sanity/lib/client';

export const getFeaturedProducts = async () => {
  const query = `*[_type == "product" && featured == true]{
    _id,
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    price,
    discountPrice,
    _createdAt,
    category->{
      title,
      "slug": slug.current,
    },
  }`;

  try {
    const featuredProducts = await client.fetch<Product[]>(query);
    return featuredProducts;
  } catch (error) {
    console.error('Failed to fetch featured products:', error);
    return [];
  }
};
