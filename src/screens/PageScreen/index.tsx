import Navbar from '@/src/app/components/Navbar';
import CarouselComponent from '@/src/app/components/Carousel';
import CategorySelector from '@/src/app/components/CategoriesProductsTabs';
import { getAllProducts } from '@/src/app/queries';
import { getFeaturedProducts } from '@/src/app/queries/products/featuredProducts';
import ProductsCards from '@/src/app/components/ProductsCards';

export default function PageScreen() {
  return (
    <Navbar>
      <CarouselComponent />
      <div className="flex flex-col gap-10">
        <ProductsCards query={getFeaturedProducts} carousel={true} />
        <CategorySelector />
        <ProductsCards query={getAllProducts} />
      </div>
    </Navbar>
  );
}
