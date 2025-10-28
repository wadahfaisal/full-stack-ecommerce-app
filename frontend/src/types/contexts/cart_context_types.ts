import { Product } from "./products_context_type";

export type State = {
  cart: CartItem[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;
};

export type CartItem = {
  amount: number;
  color: string;
  id: string;
  max: number;
  name: string;
  price: number;
  image: string;
};

export type cartContextType = {
  cart: CartItem[];
  total_items: number;
  total_amount: number;
  shipping_fee: number;

  addToCart: (
    id: string,
    color: string,
    amount: number,
    product: Product
  ) => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: string) => void;
  clearCart: () => void;
};

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  CLEAR_CART = "CLEAR_CART",
  TOGGLE_CART_ITEM_AMOUNT = "TOGGLE_CART_ITEM_AMOUNT",
  COUNT_CART_TOTALS = "COUNT_CART_TOTALS",
}

type ActionWithPayload1 = {
  type: ActionTypes.ADD_TO_CART;
  payload: { id: string; color: string; amount: number; product: Product };
};
type ActionWithPayload2 = {
  type: ActionTypes.REMOVE_CART_ITEM;
  payload: string;
};
type ActionWithPayload3 = {
  type: ActionTypes.TOGGLE_CART_ITEM_AMOUNT;
  payload: { id: string; value: string };
};

type ActionWithoutPayload = {
  type: ActionTypes.CLEAR_CART | ActionTypes.COUNT_CART_TOTALS;
};

export type Action =
  | ActionWithPayload1
  | ActionWithPayload2
  | ActionWithPayload3
  | ActionWithoutPayload;
