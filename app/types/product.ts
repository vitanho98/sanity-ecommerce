export type Product = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  images: string[];
};