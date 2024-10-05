import { type SchemaTypeDefinition } from 'sanity';
import product from './product';
import category from './category';
import carouselproducts from './carouselproducts';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, carouselproducts],
};
