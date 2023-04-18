import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../context/cart-context";

function HeaderCartButton({ onClick }) {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((acc, val) => {
    return acc + val.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <AiOutlineShoppingCart />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
