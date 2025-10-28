export type State = {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: Product[];
  featured_products: Product[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: Product;
};

export type Product = {
  averageRating: number;
  category: string;
  colors: string[];
  company: string;
  createdAt: Date;
  description: string;
  featured: boolean;
  freeShipping: boolean;
  id: string;
  images: string[];
  inventory: number;
  name: string;
  numOfReviews: number;
  price: number;
  reviews: [];
  updatedAt: Date;
  user: string;
  __v: number;
  _id: string;
  [key: string]: unknown;
};

export enum ActionTypes {
  OPEN_SIDEBAR = "OPEN_SIDEBAR",
  CLOSE_SIDEBAR = "CLOSE_SIDEBAR",
  GET_PRODUCTS_BEGIN = "GET_PRODUCTS_BEGIN",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
  GET_SINGLE_PRODUCT_BEGIN = "GET_SINGLE_PRODUCT_BEGIN",
  GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS",
  GET_SINGLE_PRODUCT_ERROR = "GET_SINGLE_PRODUCT_ERROR",
}

type ActionWithoutPayload = {
  type:
    | ActionTypes.OPEN_SIDEBAR
    | ActionTypes.CLOSE_SIDEBAR
    | ActionTypes.GET_PRODUCTS_BEGIN
    | ActionTypes.GET_PRODUCTS_ERROR
    | ActionTypes.GET_SINGLE_PRODUCT_BEGIN
    | ActionTypes.GET_SINGLE_PRODUCT_ERROR;
};

type ActionWithProductsPayload = {
  type: ActionTypes.GET_PRODUCTS_SUCCESS;

  payload: Product[];
};
type ActionWithProductPayload = {
  type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS;
  payload: Product;
};

export type Action =
  | ActionWithoutPayload
  | ActionWithProductsPayload
  | ActionWithProductPayload;

export type ProductContextType = {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: Product[];
  featured_products: Product[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: Product;

  openSidebar: () => void;
  closeSidebar: () => void;
  fetchSingleProduct: (url: any) => Promise<void>;
};
