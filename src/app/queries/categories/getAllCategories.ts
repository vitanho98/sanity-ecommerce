import type { Category } from '@/src/app/types/category';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export const getAllCategories = async (): Promise<Category[]> => {
  const query = groq`
    *[_type == "category"] {
      _id,
      title,
      slug,
      icon {
        asset-> {
          url
        }
      }
    }
  `;

  const categories = await client.fetch<Category[]>(query);
  return categories;
};
