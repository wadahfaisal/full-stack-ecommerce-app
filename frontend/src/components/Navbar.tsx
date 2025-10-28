import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { user } = useUserContext();

  // return (
  //   <nav>
  //     <div className="nav-center">
  //       <div className="nav-header">
  //         <Link to="/">
  //           <h1 style={{ marginBottom: "0", fontWeight: "700" }}>fashe</h1>
  //         </Link>
  //         <button type="button" className="nav-toggle" onClick={openSidebar}>
  //           <FaBars />
  //         </button>
  //       </div>
  //       <ul className="nav-links">
  //         {links.map((link) => {
  //           const { id, text, url } = link;
  //           return (
  //             <li key={id}>
  //               <Link to={url}>{text}</Link>
  //             </li>
  //           );
  //         })}
  //         {user && (
  //           <li>
  //             <Link to="/checkout">checkout</Link>
  //           </li>
  //         )}
  //       </ul>
  //       <CartButtons />
  //     </div>
  //   </nav>
  // );
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h1 style={{ marginBottom: "0", fontWeight: "700" }}>fashe</h1>
          </Link>
          {/* <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button> */}
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <div className="right-column">
          <CartButtons />
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
