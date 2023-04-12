import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../../db/firebase-config";
import Spinner from "../Spinner/Spinner";
import styles from "./CategoryItem.module.css";

const CategoryItem = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const itemCollection = collection(db, "items");
    const q =
      id === undefined
        ? itemCollection
        : query(itemCollection, where("category", "==", parseInt(id)));

    getDocs(q)
      .then((items) => {
        const products = items.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className={styles.container}>
      {isLoading ? <Spinner /> : <ItemListContainer products={items} />}
    </div>
  );
};

export default CategoryItem;
