import Icons from "../../../../assets";
import styles from "./Presentation.module.css";

function Presentantion() {
  return (
    <div className={styles.presentation_container}>
      <h1 className={styles.presentation_intro}>
        Anotações rápidas e <br /> fáceis para devs!
      </h1>
      <img
        className={styles.presentation_img}
        alt='Texto de apresentação'
        src={Icons.arrowImage}
      />
    </div>
  );
}

export default Presentantion;
