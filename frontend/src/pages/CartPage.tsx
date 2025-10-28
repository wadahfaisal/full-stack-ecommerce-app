import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="cart-page page-100">
        <div className="empty">
          <h2>your cart is empty</h2>
          <Link to="/products" className="btn">
            fill cart
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <PageHero title="cart" />
      <section className="page">
        <CartContent />
      </section>
    </main>
  );
};

export default CartPage;
