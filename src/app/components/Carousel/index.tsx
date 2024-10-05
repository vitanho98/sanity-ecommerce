import React from 'react';
import Image from 'next/image';
import { getCarouselImages } from '@/src/app/queries/carousel/getCarouselImages';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/components/ui/carousel';

export default async function CarouselComponent() {
  const carouselImages = await getCarouselImages();

  return (
    <div>
      {carouselImages.map((image) => (
        <Carousel key={image._id}>
          <CarouselContent>
            <CarouselItem>
              <Image
                src={image.image.asset.url}
                alt="Carousel Image"
                width={1920}
                height={720}
                className="rounded-xl w-full h-[320px] object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      ))}
    </div>
  );
}
