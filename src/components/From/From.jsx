import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import db from "../../../db/firebase-config";
import { useState } from "react";
import styles from "./From.module.css";

const Form = ({ cart, total, clearCart, handleId }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");

  const handleChangeName = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeTelNumber = (event) => {
    setTelefono(event.target.value);
  };

  const handleChangeMail = (event) => {
    setMail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      buyer: {
        nombre,
        telefono,
        mail,
      },
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
      handleId(res.id);
      clearCart();
      updateprod();
    });

    const updateprod = () => {
      const orderDoc = doc(db, "orders", "Cq1EOV6R6UE7Lz9C9uZT");
      updateDoc(orderDoc, { total: 50 });
    };
  };

  return (
    <div className={styles.form}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Iván"
            name="nombre"
            value={nombre}
            onChange={handleChangeName}
          />
        </div>
        <div>
          <label>Telefono</label>
          <input
            type="text"
            placeholder="2983456484"
            name="telefono"
            value={telefono}
            onChange={handleChangeTelNumber}
          />
        </div>
        <div>
          <label>Mail</label>
          <input
            type="text"
            placeholder="email@gmail.com"
            name="mail"
            value={mail}
            onChange={handleChangeMail}
          />
        </div>
        <div>
          <button className={styles.btn}>Terminar compra</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
