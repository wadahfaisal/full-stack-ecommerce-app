import { Product } from "./products_context_type";

export type State = {
  all_products: Product[];
  filtered_products: Product[];
  grid_view: boolean;
  sort: string;
  filters: {
    text: string;
    category: string;
    company: string;
    color: string;
    max_price: number;
    min_price: number;
    price: number;
    shipping: boolean;
  };
};

export enum ActionTypes {
  LOAD_PRODUCTS = "LOAD_PRODUCTS",
  SET_GRIDVIEW = "SET_GRIDVIEW",
  SET_LISTVIEW = "SET_LISTVIEW",
  UPDATE_SORT = "UPDATE_SORT",
  SORT_PRODUCTS = "SORT_PRODUCTS",
  UPDATE_FILTERS = "UPDATE_FILTERS",
  FILTER_PRODUCTS = "FILTER_PRODUCTS",
  CLEAR_FILTERS = "CLEAR_FILTERS",
}

type ActionsWithPayload1 = {
  type: ActionTypes.LOAD_PRODUCTS;
  payload: Product[];
};
type ActionsWithPayload2 = {
  type: ActionTypes.UPDATE_SORT;
  payload: string;
};
export type ActionsWithPayload3 = {
  type: ActionTypes.UPDATE_FILTERS;
  payload: { name: string; value: boolean | string | number };
};

type ActionsWithoutPayload = {
  type:
    | ActionTypes.SET_GRIDVIEW
    | ActionTypes.SET_LISTVIEW
    | ActionTypes.SORT_PRODUCTS
    | ActionTypes.FILTER_PRODUCTS
    | ActionTypes.CLEAR_FILTERS;
};

export type Action =
  | ActionsWithoutPayload
  | ActionsWithPayload1
  | ActionsWithPayload2
  | ActionsWithPayload3;

export type FilterContextType = {
  all_products: Product[];
  filtered_products: Product[];
  grid_view: boolean;
  sort: string;
  filters: {
    text: string;
    category: string;
    company: string;
    color: string;
    max_price: number;
    min_price: number;
    price: number;
    shipping: boolean;
  };

  setGridView: () => void;
  setListView: () => void;
  updateSort: React.ChangeEventHandler<HTMLSelectElement>;
  // updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // updateFilters: (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.MouseEventHandler<HTMLButtonElement>
  // ) => void;
  updateFilters: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  clearFilters: () => void;

  updateButtonFilters: React.MouseEventHandler<HTMLButtonElement>;
};

export type UpdateFilters = {};
