import Product from "./Product";
import { GridViewProps as Props } from "../types/propsTypes";

const GridView = ({ products }: Props) => {
  return (
    <section className="grid-view">
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
