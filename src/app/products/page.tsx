import Navbar from '@/src/app/components/Navbar';
import { getAllProducts } from '@/src/app/queries';
import ProductsCards from '@/src/app/components/ProductsCards';

export default async function AllProductsPage() {
  const allProducts = await getAllProducts();

  return (
    <Navbar>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Todos os Produtos</h1>
        <div className="">
          <ProductsCards products={allProducts} />
        </div>
      </div>
    </Navbar>
  );
}
