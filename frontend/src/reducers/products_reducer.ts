import {
  State,
  Action,
  ActionTypes,
} from "../types/contexts/products_context_type";

const products_reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true };
    case ActionTypes.CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false };
    case ActionTypes.GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter((product) => {
        return product.featured === true;
      });
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products,
      };
    case ActionTypes.GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };

    case ActionTypes.GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
    case ActionTypes.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };
    case ActionTypes.GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };

    default:
      // return state
      throw new Error(`No Matching "${(action as Action).type}" - action type`);
  }
};

export default products_reducer;
