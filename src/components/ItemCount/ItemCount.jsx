import React, { useState } from "react";
import styles from "./ItemCount.module.css";
import Alert from "@mui/material/Alert";

const ItemCount = ({ stock, onAdd }) => {
  const [cant, onCant] = useState(1);
  const [maxLimit, setMaxLimit] = useState(false);

  const sumar = () => {
    if (cant < stock) {
      onCant(cant + 1);
    } else {
      setMaxLimit(true);
    }
  };

  const restar = (e) => {
    if (cant > 1) {
      onCant(cant - 1);
      setMaxLimit(false);
    }
  };

  return (
    <div className={styles.card}>
      <div>
        <button onClick={restar}>-</button>
        <span className={styles.cant}>{cant}</span>
        <button onClick={sumar}>+</button>
      </div>
      <p>Stock: {stock}</p>
      {maxLimit && (
        <Alert severity="error">Unidades máximas para comprar {stock}</Alert>
      )}
      <button style={{ width: "100%" }} onClick={() => onAdd(cant)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
