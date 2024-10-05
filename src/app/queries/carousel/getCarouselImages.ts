import type { CarouselProducts } from '@/src/app/types/carouselproducts';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export const getCarouselImages = async (): Promise<CarouselProducts[]> => {
  const query = groq`
    *[_type == "carouselproducts"] {
      _id,
      _createdAt,
      _updatedAt,
      image {
        asset-> {
          url 
        }
      },
    }
  `;
  const carouselImages = await client.fetch<CarouselProducts[]>(query);
  return carouselImages;
};
