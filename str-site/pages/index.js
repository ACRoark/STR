import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; //importing font awesome css
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.mainCont}>
      <div className={`${styles.mainImgCont} ${styles.towerImg}`}>
        <div className={styles.blackCard}>
          <div className={`${styles.sirenContainer} ${styles.sirenImg}`}>
            <div className={styles.sirenImg}></div>
          </div>

          <div className={styles.releaseCard}>
            <span>
              <h3 style={{ display: "inline" }}>
                Hallowed Halls, Consecrated Stone
              </h3>
              <span> by Allsiah</span>
            </span>
            <br />
          </div>

          <div className={styles.releaseCard}>
            <span>
              <h3 style={{ display: "inline" }}>Constance</h3>
              <span> by Beneath</span>
            </span>
            <br />
          </div>

          <div className={styles.releaseCard}>
            <span>
              <h3 style={{ display: "inline" }}>
                No Beast That Cannot Be Slain
              </h3>
              <span> by Naaro/ Normakk</span>
            </span>
          </div>

          <br />
          <br />
          <div className={styles.icon}>
            <a
              href="https://www.instagram.com/sonic.transmitter.records/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
          </div>
          {/* <button onClick={() => router.push("/Artist")}>Click me</button> */}
        </div>
      </div>
    </div>
  );
}
