import Icons from "../../../../assets";
import Divider from "../../../../components/ui/Divider/Divider";
import IconButton from "../../../../components/ui/IconButton/IconButton";
import styles from "./Form.module.css";

type FormProps = {
  onClick: () => void;
};
function Form({ onClick }: FormProps) {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_social}>
        <img src={Icons.linkedinIcon} alt='Linkedin' />
        <img src={Icons.instaIcon} alt='Instagram' />
      </div>
      <div className={styles.form_inner}>
        <img
          src={Icons.logo}
          alt='Logo Nothink'
          className={styles.wrapper_img}
        />
        <h3 className={styles.wrapper_title}>Escolha sua forma de login</h3>
        <div className={styles.actions}>
          <IconButton onClick={onClick} type='google' />
          <Divider />
          <IconButton isDark type='github' />
        </div>
      </div>
    </div>
  );
}

export default Form;
