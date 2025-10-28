import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { user, logoutUser } = useUserContext();

  return (
    <div className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span
            className="cart-value"
            style={
              total_items > 99 ? { padding: "12px", top: -10, right: -18 } : {}
            }
          >
            {total_items}
          </span>
        </span>
      </Link>
      {user ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            logoutUser();
            clearCart();
          }}
        >
          logout <FaUserMinus />
        </button>
      ) : (
        // <button type="button" className="auth-btn" onClick={loginWithRedirect}>
        //   Login
        //   <FaUserPlus />
        // </button>
        <Link to="/login" className="auth-btn">
          Login
          <FaUserPlus />
        </Link>
      )}
    </div>
  );
};

export default CartButtons;
