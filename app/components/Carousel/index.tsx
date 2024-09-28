import React from 'react';
import Image from 'next/image';
import { getFeaturedProducts } from '@/app/queries/products/featuredProducts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default async function CarouselComponent() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {featuredProducts.map((product) => (
        <Carousel key={product._id}>
          <CarouselContent>
            {product.images.map((image) => (
              <CarouselItem key={image}>
                <Image
                  src={image}
                  alt={product.title}
                  width={1280}
                  height={320}
                  objectFit="cover"
                  className="rounded-xl w-full h-[320px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      ))}
    </div>
  );
}
