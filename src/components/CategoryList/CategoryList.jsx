import styles from "./CategoryList.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CategoryList = ({ categorias }) => {
  return (
    <div className={styles.container}>
      {categorias.map((categoria) => (
        <Link to={`${categoria.id}`} key={categoria.id}>
          <Button variant="text" categoria={categoria}>
            {categoria.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
