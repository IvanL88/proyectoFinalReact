import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductItem.module.css";
import db from "../../../db/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";
import Spinner from "../Spinner/Spinner";

const ProductItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [cant, setCant] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [existsItem, setExistsItem] = useState(false);
  const { cart, addToCart } = useContext(CartContext);

  const getItem = async () => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setItem(docSnap.data());
      setIsLoading(false);
      setExistsItem(true);
    } else {
      setIsLoading(false);
      console.log("No hay item");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getItem();
  }, []);

  const onAdd = (cant) => {
    setCant(cant);
    addToCart(item, cant);
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : existsItem ? (
        <div className={styles.container}>
          <h3 className={styles.title}>{item.title}</h3>
          <div>
            {" "}
            <span className={styles.categoryName}>Categoría: </span>
            {(() => {
              switch (item.category) {
                case 1:
                  return "Retro";
                case 2:
                  return "Gamer";
                case 3:
                  return "Optico";
                case 4:
                  return "Inalambrico";
                case 5:
                  return "Recargable";
                default:
                  return null;
              }
            })()}
          </div>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} width="200" height="200" />
          <p>$ {item.price}</p>
          {cant === 0 ? (
            <ItemCount stock={item.stock} onAdd={onAdd} />
          ) : (
            <Button as={Link} to="/cart" className={styles.btnDark}>
              Ir a carrito
            </Button>
          )}
        </div>
      ) : (
        <div>No existe el producto indicado</div>
      )}
    </div>
  );
};

export default ProductItem;
