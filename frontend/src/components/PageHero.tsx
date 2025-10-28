import { Link } from "react-router-dom";
import { PageHeroProps as Props } from "../types/propsTypes";

const PageHero = ({ title, product }: Props) => {
  return (
    <section className="page-hero">
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>{" "}
          {product && <Link to="/products">/ products</Link>} /{title}
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
