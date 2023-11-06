import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logoImg from "../../assets/logo/logo.svg";

const Header = ({ chilren }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.logoContainer} to="/">
          <img className={styles.logoImage} src={logoImg} alt="로고 이미지" />
          <h1 className={styles.logoTitle}>Rolling</h1>
        </Link>
        {chilren}
      </div>
    </div>
  );
};

export default Header;
