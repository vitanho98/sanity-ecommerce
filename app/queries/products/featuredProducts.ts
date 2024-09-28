import type { Product } from "@/app/types/product";
import { client } from "@/sanity/lib/client";

export const getFeaturedProducts = async () => {
  const query = `*[_type == "product" && featured == true]{
    _id,
    title,
    slug,
    "images": images[].asset->url
  }`;

  const featuredProducts = await client.fetch<Product[]>(query);
  console.log('Featured Products:', featuredProducts); // Para depuração
  return featuredProducts;
};
