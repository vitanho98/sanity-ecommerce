'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/src/components/ui/button';
import { getAllCategories } from '@/src/app/queries/categories/getAllCategories';
import Image from 'next/image';
import { Separator } from '@/src/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/components/ui/carousel';

interface Category {
  _id: string;
  title: string;
  icon: {
    asset: {
      url: string;
    };
  };
}

export default function CategorySelector() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getAllCategories();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="underline underline-offset-4 decoration-[#008ECC]">
        <p>
          Navegue pelas{' '}
          <span className="font-bold text-[#0071BC]">Categorias</span>
        </p>
      </div>
      <Separator className="w-full" />
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          slidesToScroll: 8,
        }}
        className="w-full"
      >
        <CarouselContent className="flex gap-4 pl-5">
          {categories.map((category) => (
            <CarouselItem key={category._id} className="basis-1/8 p-0">
              <div className="flex flex-col items-center justify-center gap-2">
                <Button
                  variant="outline"
                  className={`w-24 h-24 md:w-24 md:h-24 rounded-full p-0 flex flex-col items-center justify-center ${
                    selectedCategory === category._id
                      ? 'border-2 border-blue-500'
                      : ''
                  }`}
                  onClick={() => setSelectedCategory(category._id)}
                >
                  <Image
                    src={category.icon.asset.url}
                    width={96}
                    height={96}
                    alt={category.title}
                    className="w-full h-full rounded-full object-contain"
                  />
                </Button>
                <span className="text-xs text-center w-24">
                  {category.title}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`${categories.length > 8 ? 'block' : 'hidden'}`}
        />
        <CarouselNext
          className={`${categories.length > 8 ? 'block' : 'hidden'}`}
        />
      </Carousel>
    </div>
  );
}
