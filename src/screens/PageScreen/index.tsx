import Navbar from '@/src/app/components/Navbar';
import CarouselComponent from '@/src/app/components/Carousel';
import CategorySelector from '@/src/app/components/CategoriesProductsTabs';
import { getAllProducts } from '@/src/app/queries';
import { getFeaturedProducts } from '@/src/app/queries/products/featuredProducts';
import ProductsCards from '@/src/app/components/ProductsCards';

export default async function PageScreen() {
  const allProducts = await getAllProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <Navbar>
      <CarouselComponent />
      <div className="flex flex-col gap-10">
        <ProductsCards
          products={featuredProducts}
          carousel={true}
          isFeatured={true}
        />
        <CategorySelector />
        <ProductsCards products={allProducts} limit={4} />
      </div>
    </Navbar>
  );
}
