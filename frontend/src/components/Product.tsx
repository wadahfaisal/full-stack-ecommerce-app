import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import productImage from "../assets/product.jpg";
import { ProductProps as Props } from "../types/propsTypes";

const Product = ({ images, name, price, id }: Props) => {
  return (
    <article className="product-component">
      <div className="container">
        <img src={images[0]} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </article>
  );
};

export default Product;
