import {
  Action,
  State,
  ActionTypes,
  ActionsWithPayload3,
} from "../types/contexts/filter_context_type";

const filter_reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS:
      const products = action.payload;
      let maxPrice: number | number[] = products.map(
        (product) => product.price
      );
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...products],
        filtered_products: [...products],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case ActionTypes.SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case ActionTypes.SET_LISTVIEW:
      return { ...state, grid_view: false };
    case ActionTypes.UPDATE_SORT:
      return { ...state, sort: action.payload };

    case ActionTypes.SORT_PRODUCTS:
      const { filtered_products, sort } = state;
      let tempProducts = [...filtered_products];

      switch (sort) {
        case "price-lowest":
          tempProducts = tempProducts.sort((product1, product2) => {
            // if (product1.price < product2.price) {
            //   return -1;
            // }
            // if (product1.price > product2.price) {
            //   return 1;
            // }
            // return 0;
            return product1.price - product2.price;
          });
          return { ...state, filtered_products: tempProducts };
        case "price-highest":
          tempProducts = tempProducts.sort(
            (product1, product2) => product2.price - product1.price
          );
          return { ...state, filtered_products: tempProducts };

        case "name-a":
          tempProducts = tempProducts.sort((product1, product2) =>
            product1.name.localeCompare(product2.name)
          );
          return { ...state, filtered_products: tempProducts };
        case "name-z":
          tempProducts = tempProducts.sort((product1, product2) =>
            product2.name.localeCompare(product1.name)
          );
          return { ...state, filtered_products: tempProducts };
      }

    case ActionTypes.UPDATE_FILTERS:
      // const { name, value } = action.payload;
      const { name, value } = (action as ActionsWithPayload3).payload;

      return { ...state, filters: { ...state.filters, [name]: value } };

    case ActionTypes.FILTER_PRODUCTS:
      const { all_products } = state;

      const { text, company, category, color, price, shipping } = state.filters;
      let tempFilteredProducts = [...all_products];

      if (text) {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }

      if (category !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.category === category
        );
      }
      if (company !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.company === company
        );
      }

      if (color !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      tempFilteredProducts = tempFilteredProducts.filter(
        (product) => product.price <= price
      );

      if (shipping) {
        tempFilteredProducts = tempFilteredProducts.filter(
          (product) => product.freeShipping === true
        );
      }

      return { ...state, filtered_products: tempFilteredProducts };

    case ActionTypes.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",

          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      throw new Error(`No Matching "${(action as Action).type}" - action type`);
  }
  // return state;
};

export default filter_reducer;
