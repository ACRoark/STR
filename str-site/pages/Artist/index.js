// import styles from "../../styles/artist.css";
import { useRouter } from "next/router";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Artist() {
  return (
    <div className={styles.container}>
      <div className={styles.mainCont}>
        <div className={styles.backgroundRed}>Artist Picture</div>
      </div>
    </div>
  );
}

export default Artist;
