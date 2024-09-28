import type { Category } from '@/app/types/category';
import { client } from '@/sanity/lib/client';

export const getAllCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"]{
    _id,
    title,
    slug
  }`;

  const categories = await client.fetch<Category[]>(query);
  return categories;
};
