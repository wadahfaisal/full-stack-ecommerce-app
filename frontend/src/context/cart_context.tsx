import { Product } from "../types/contexts/products_context_type";
import reducer from "../reducers/cart_reducer";
import {
  useEffect,
  useContext,
  useReducer,
  createContext,
  PropsWithChildren,
} from "react";
import {
  cartContextType,
  CartItem,
  State,
  ActionTypes,
} from "../types/contexts/cart_context_types";

const getCartFromLS = (): CartItem[] => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState: State = {
  cart: getCartFromLS(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 750,
};

const CartContext = createContext({} as cartContextType);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: Product
  ) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: { id, color, amount, product },
    });
  };

  const removeItem = (id: string): void => {
    dispatch({ type: ActionTypes.REMOVE_CART_ITEM, payload: id });
  };

  const toggleAmount = (id: string, value: string): void => {
    dispatch({
      type: ActionTypes.TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, value },
    });
  };

  const clearCart = (): void => {
    dispatch({ type: ActionTypes.CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: ActionTypes.COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
