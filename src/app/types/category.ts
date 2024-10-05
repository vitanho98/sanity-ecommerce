export interface Category {
  _id: string;
  title: string;
  description: string;
  icon: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
}
