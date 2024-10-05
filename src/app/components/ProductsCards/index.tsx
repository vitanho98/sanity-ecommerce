import { Card, CardContent, CardFooter } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { Separator } from '@/src/components/ui/separator';
import { ShoppingCart } from 'lucide-react';
import { formatCurrency } from '@/utils/formatValue';
import type { Product } from '@/src/app/types/product';
import { getFeaturedProducts } from '@/src/app/queries/products/featuredProducts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/src/components/ui/carousel';
import Link from 'next/link';

export default async function ProductsCards({
  query,
  carousel = false,
}: {
  query: () => Promise<Product[]>;
  carousel?: boolean;
}) {
  const products = await query();

  if (products.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        {query === getFeaturedProducts && (
          <>
            <div className="underline underline-offset-4 decoration-[#008ECC]">
              <p>
                Os <span className="font-bold text-[#0071BC]">Destaques</span>{' '}
                deste mês
              </p>
            </div>
            <Separator className="w-full" />
          </>
        )}
        {carousel ? (
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                {products.map((product: Product) => (
                  <Card
                    key={product._id}
                    className="overflow-hidden w-[300px] rounded-xl hover:border-1 transition-all duration-700 hover:border-blue-500"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={product.imageUrl}
                          alt={product.title}
                          width={1920}
                          height={720}
                          className="w-full h-48 object-cover"
                        />
                        {product.discountPrice && (
                          <Badge
                            variant={'productcard'}
                            className="absolute -top-0 -right-1 text-xs bg-blue-500 rounded-bl-xl"
                          >
                            {Math.round(
                              (1 - product.discountPrice / product.price) * 100,
                            )}
                            % OFF
                          </Badge>
                        )}
                        {new Date().getTime() -
                          new Date(product._createdAt).getTime() <
                          7 * 24 * 60 * 60 * 1000 && (
                          <Badge
                            variant={'productcard'}
                            className="absolute -top-0 -left-1 bg-black text-white rounded-br-xl"
                          >
                            NOVO
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start p-4">
                      <h3 className="font-semibold text-sm">{product.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {product.category.title}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="font-bold">
                          {formatCurrency(product.price)}
                        </span>
                        {product.discountPrice && (
                          <span className="ml-2 text-sm line-through text-muted-foreground">
                            {formatCurrency(product.discountPrice)}
                          </span>
                        )}
                      </div>
                    </CardFooter>
                    <CardFooter>
                      <Link href={`/product/${product.slug}`}>
                        <Button
                          variant="none"
                          className="w-full gap-2 bg-blue-500 opacity-95 flex items-center justify-center"
                        >
                          <ShoppingCart size={16} />
                          Comprar
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {products.map((product: Product) => (
              <Card
                key={product._id}
                className="overflow-hidden w-[300px] drop-shadow-lg shadow-gray-100 rounded-xl"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={1920}
                      height={720}
                      className="w-full h-48 object-cover"
                    />
                    {product.discountPrice && (
                      <Badge
                        variant={'productcard'}
                        className="absolute -top-0 -right-1 text-xs bg-blue-500 rounded-bl-xl"
                      >
                        {Math.round(
                          (1 - product.discountPrice / product.price) * 100,
                        )}
                        % OFF
                      </Badge>
                    )}
                    {new Date().getTime() -
                      new Date(product._createdAt).getTime() <
                      7 * 24 * 60 * 60 * 1000 && (
                      <Badge
                        variant={'productcard'}
                        className="absolute -top-0 -left-1 bg-black text-white rounded-br-xl"
                      >
                        NOVO
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <h3 className="font-semibold text-sm">{product.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {product.category.title}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="font-bold">
                      {formatCurrency(product.price)}
                    </span>
                    {product.discountPrice && (
                      <span className="ml-2 text-sm line-through text-muted-foreground">
                        {formatCurrency(product.discountPrice)}
                      </span>
                    )}
                  </div>
                </CardFooter>
                <CardFooter>
                  <Link href={`/product/${product.slug}`}>
                    <Button
                      variant="none"
                      className="w-full gap-2 bg-blue-500 opacity-95 flex items-center justify-center"
                    >
                      <ShoppingCart size={16} />
                      Comprar
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
  return null;
}
