import Icons from "../../../assets";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  isDark?: boolean;
  type: "google" | "github";
  onClick?: () => void;
};

function IconButton({ isDark = false, type, onClick }: IconButtonProps) {
  const darkButtonClass = !isDark
    ? styles.icon_button
    : `${styles.icon_button} ${styles.icon_button_dark}`;

  return (
    <button className={darkButtonClass} onClick={onClick}>
      <img src={Icons[type]} alt='Linkedin' />
      <span className={styles.actions_button_text}>Entrar com Github</span>
    </button>
  );
}

export default IconButton;
