import styles from "./Errors.module.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function Error404() {
  return (
    <div className={styles.container}>
      <SentimentVeryDissatisfiedIcon fontSize="large" />
      <h2>OOPS! 404</h2>
      <h3>Página no encontrada</h3>
    </div>
  );
}

export default Error404;
