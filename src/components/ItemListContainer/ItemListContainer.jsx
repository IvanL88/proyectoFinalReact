import MediaCard from "../Card/MediaCard";
import styles from "./ItemListContainer.module.css";
import Box from "@mui/material/Box";

const ItemListContainer = ({ products }) => {
  return (
    <Box
      className={styles.container}
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
      gap={2}
    >
      {products.map((product) => (
        <MediaCard key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default ItemListContainer;
