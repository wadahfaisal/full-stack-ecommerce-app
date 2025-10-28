import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import GridView from "./GridView";
import ListView from "./ListView";
// import { useEffect, useState } from "react";
// import { Loading } from ".";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  const { products_loading: isLoading } = useProductsContext();
  // const [productsStatus, setProductsStatus] = useState("pending");

  // useEffect(() => {
  //   /* New Start */
  //   if (!isLoading && products.length < 1) {
  //     setProductsStatus("no products");
  //   } else if (!isLoading && products.length > 1) {
  //     setProductsStatus("products available");
  //   }
  //   /* New End */
  // }, [products, isLoading]);

  if (isLoading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>loading...</h2>
    );
  }

  // if (productsStatus === "no products") {
  //   return (
  //     <h5 style={{ textTransform: "none" }}>
  //       Sorry, no products match your search...
  //     </h5>
  //   );
  // } else if (productsStatus === "products available") {
  //   return <GridView products={products} />;
  // }

  // if (!isLoading && products.length < 1) {

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products match your search...
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
