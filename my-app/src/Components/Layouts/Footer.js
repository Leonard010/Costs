import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer>
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaGoogle/></li>
        </ul>
        <p>Nosso rodapé</p>
    </footer>
  );
}

export default Footer;
