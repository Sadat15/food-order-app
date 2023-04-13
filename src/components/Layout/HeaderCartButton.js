import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton({ onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <AiOutlineShoppingCart />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
}

export default HeaderCartButton;
