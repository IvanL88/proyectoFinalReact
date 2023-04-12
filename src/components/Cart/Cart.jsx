import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Form from "../From/From";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const [idCompra, setIdCompra] = useState("");
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  const handleId = (id) => {
    setIdCompra(id);
  };

  if (idCompra) {
    return (
      <Typography variant="h5" className={styles.container}>
        Gracias por su compra ! su numero de recibo es el: {idCompra}
      </Typography>
    );
  }

  if (cart.length === 0) {
    return (
      <Typography variant="h5" className={styles.container}>
        No hay elementos en el carrito, volver a <Link to="/"> home</Link>
      </Typography>
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        {cart?.map((item) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <div className="btn btn-danger d-block m-3" onClick={clearCart}>
                  Eliminar todos
                </div>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <span className="me-3">Total: ${totalPrice}.-</span>
      </div>
      <Form
        cart={cart}
        total={totalPrice}
        clearCart={clearCart}
        handleId={handleId}
      />
    </div>
  );
};

export default Cart;
