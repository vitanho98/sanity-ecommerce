export type Product = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  imageUrl: string;
  price: number;
  discountPrice?: number;
  category: {
    title: string;
  };
  _createdAt: string;
};
