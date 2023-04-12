import styles from "./Home.module.css";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div>
      <Typography className={styles.sub_title} variant="h4">
        Lo que buscas, y más...
      </Typography>
      <p className={styles.resumen}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        dignissimos, at quae itaque dolor consequuntur. Perspiciatis
        consequuntur inventore iusto voluptatem, officiis, enim provident fuga
        veritatis commodi neque ipsum, cumque magni.
      </p>
      <p className={styles.resumen}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        dignissimos, at quae itaque dolor consequuntur. Perspiciatis
        consequuntur inventore iusto voluptatem, officiis, enim provident fuga
        veritatis commodi neque ipsum, cumque magni. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Unde, repellat, hic delectus dicta
        quibusdam veniam quasi odio nesciunt sed sit sint itaque blanditiis nisi
        ratione, non exercitationem saepe totam facere. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Aliquid, vel nisi. Esse, fugiat id
        non nesciunt quam rerum error a impedit, obcaecati aspernatur,
        repudiandae dolorum. Quas fuga est sapiente voluptatum?
      </p>
      <p className={styles.resumen}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit
        consequuntur, dolor eaque tempora ullam inventore exercitationem tempore
        impedit qui perspiciatis accusamus minima ipsa fuga, officia soluta
        nostrum ut iusto! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cumque ipsam magni expedita minima officiis a laudantium quod
        praesentium. Veritatis nulla unde, magnam beatae voluptate adipisci
        repellendus eum nobis tempore itaque.
      </p>
    </div>
  );
}

export default Home;
