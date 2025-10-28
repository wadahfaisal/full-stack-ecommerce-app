import { Product } from "./contexts/products_context_type";

export type StarsProps = {
  stars: number;
  reviews: number;
};

export type AddToCartProps = {
  product: Product;
};

export type AmountButtonsProps = {
  increase: () => void;
  decrease: () => void;
  amount: number;
};

export type CartItemProps = {
  amount: number;
  color: string;
  id: string;
  name: string;
  price: number;
  image: string;
};

export type GridViewProps = {
  products: Product[];
};

export type ListViewProps = {
  products: Product[];
};

export type PageHeroProps = {
  title: string;
  product?: boolean;
};

export type ProductProps = {
  images: string[];
  name: string;
  price: number;
  id: string;
};

export type ProductImagesProps = {
  images: string[];
};

export type FormRowProps = {
  type: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
};

export type ColorsFilterProps = {
  colors: string[];
  color: string;
  updateFilter: React.MouseEventHandler<HTMLButtonElement>;
};
