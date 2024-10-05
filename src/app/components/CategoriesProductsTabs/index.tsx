'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/src/components/ui/button';
import { getAllCategories } from '@/src/app/queries/categories/getAllCategories';
import Image from 'next/image';
import { Separator } from '@/src/components/ui/separator';

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
      <div className="grid grid-cols-8 gap-5">
        {categories.map((category) => (
          <div className="flex flex-col items-center justify-center gap-2">
            <Button
              key={category._id}
              variant="outline"
              className={`w-28 h-28 rounded-full p-0 flex flex-col items-center justify-center ${
                selectedCategory === category._id
                  ? 'border-2 border-blue-500'
                  : ''
              }`}
              onClick={() => setSelectedCategory(category._id)}
            >
              <Image
                src={category.icon.asset.url}
                width={1920}
                height={720}
                alt={category.title}
                className="w-full h-full rounded-full"
              />
            </Button>
            <span className="text-xs">{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
