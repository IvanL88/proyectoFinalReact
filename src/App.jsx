import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ProductItem from "./components/ProductItem/ProductItem";
import styles from "./App.module.css";
import Error404 from "./components/Errors/Error404";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import CartContext from "./context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/firebase-config";
import Cart from "./components/Cart/Cart";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemRef = collection(db, "items");

  const getItems = async () => {
    const itemCollection = await getDocs(itemRef);
    const items = itemCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItems(items);
    setIsLoading(false);
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log(items);

  const categorias = [
    {
      id: 1,
      name: "Retro",
    },
    {
      id: 2,
      name: "Gamer",
    },
    {
      id: 3,
      name: "Optico",
    },
    {
      id: 4,
      name: "Inalambrico",
    },
    {
      id: 5,
      name: "Recargable",
    },
  ];

  return (
    <CartContext>
      <Navbar className={styles.container} />
      <h1 className={styles.title}>Bienvenido a MouseLand</h1>
      {isLoading ? (
        <div className={styles.container}>
          {" "}
          <Spinner />
        </div>
      ) : (
        <Routes>
          <Route
            path="/home"
            element={<ItemListContainer products={items} />}
          />
          <Route path="/" element={<ItemListContainer products={items} />} />
          <Route path="/productos/:id" element={<ProductItem />} />
          <Route
            path="/categorias/:id"
            element={<CategoryItem products={items} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      )}
      ;
    </CartContext>
  );
}

export default App;
