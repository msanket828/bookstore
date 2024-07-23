import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);
  const initialiseProductList = (products) => {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products,
      },
    });
  };

  const getOnlyInStockProducts = (products) => {
    return state.onlyInStock
      ? products.filter((prod) => prod.in_stock === true)
      : products;
  };

  const getBestSellerProducts = (products) => {
    return state.bestSellerOnly
      ? products.filter((prod) => prod.best_seller === true)
      : products;
  };

  const getProductBySortBy = (products) => {
    if (state.sortBy === "LOWTOHIGH") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "HIGHTOLOW") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  };

  const getProductRatingWise = (products) => {
    if (state.rating === "4ANDABOVE") {
      return products.filter((prod) => prod.rating >= 4);
    }
    if (state.rating === "3ANDABOVE") {
      return products.filter((prod) => prod.rating >= 3);
    }
    if (state.rating === "2ANDABOVE") {
      return products.filter((prod) => prod.rating >= 2);
    }
    if (state.rating === "1ANDABOVE") {
      return products.filter((prod) => prod.rating >= 1);
    }
    return products;
  };

  const filterProductList = getProductRatingWise(
    getProductBySortBy(
      getOnlyInStockProducts(getBestSellerProducts(state.productList))
    )
  );

  const value = {
    state,
    dispatch,
    products: filterProductList,
    initialiseProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
