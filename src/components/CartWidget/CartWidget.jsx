import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { getTotalCantidades } = useContext(CartContext);
  const totalCantidades = getTotalCantidades();
  return (
    <div className="position-relative">
      <BsCart4 style={{ float: "right" }} size={30} color="#8F1838" />
      {totalCantidades !== 0 && (
        <span className={styles.numberCart} style={{ textDecoration: "none" }}>
          {totalCantidades}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
