import React, {
  useEffect,
  useContext,
  useReducer,
  PropsWithChildren,
} from "react";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";
import {
  State,
  ActionTypes,
  FilterContextType,
} from "../types/contexts/filter_context_type";

const initialState: State = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    max_price: 0,
    min_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext({} as FilterContextType);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: ActionTypes.LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: ActionTypes.FILTER_PRODUCTS });
    dispatch({ type: ActionTypes.SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: ActionTypes.SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: ActionTypes.SET_LISTVIEW });
  };

  const updateSort: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    // for demonstration
    // const name = e.target.name
    const value = e.target.value;

    dispatch({ type: ActionTypes.UPDATE_SORT, payload: value });
  };

  // ***************************************************************
  const updateButtonFilters: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    const { name } = e.target as HTMLButtonElement;

    let value;
    if (name === "category") {
      value = (e.target as HTMLButtonElement).textContent as string;
      dispatch({ type: ActionTypes.UPDATE_FILTERS, payload: { name, value } });
    }
    if (name === "color") {
      value = (e.target as HTMLButtonElement).dataset.color as string;
      dispatch({ type: ActionTypes.UPDATE_FILTERS, payload: { name, value } });
    }
    window.scrollTo({ top: 0 });
  };
  // **********************************************************************
  const updateFilters: React.ChangeEventHandler<
    HTMLSelectElement | HTMLInputElement
  > = (e) => {
    let { name, value } = e.target;
    let tempValue: boolean | number;
    // if (name === "category") {
    //   value = e.target.textContent as string;
    // }
    // if (name === "color") {
    //   value = e.target.dataset.color as string;
    // }
    if (name === "price") {
      // value = Number(value);
      tempValue = Number(value);
      dispatch({
        type: ActionTypes.UPDATE_FILTERS,
        payload: { name, value: tempValue },
      });
      window.scrollTo({ top: 0 });
      return;
    }
    if (name === "shipping") {
      // value = e.target.checked;
      tempValue = (e.target as HTMLInputElement).checked;
      dispatch({
        type: ActionTypes.UPDATE_FILTERS,
        payload: { name, value: tempValue },
      });
      window.scrollTo({ top: 0 });
      return;
    }
    dispatch({ type: ActionTypes.UPDATE_FILTERS, payload: { name, value } });
    window.scrollTo({ top: 0 });
  };

  const clearFilters = () => {
    dispatch({ type: ActionTypes.CLEAR_FILTERS });
    window.scrollTo({ top: 0 });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
        updateButtonFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
