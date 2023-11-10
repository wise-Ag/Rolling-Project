import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logoImg from "../../assets/logo/logo.svg";

/**
 * 웹 페이지의 헤더를 나타내는 컴포넌트.
 * @param {Object} props - 컴포넌트에 전달되는 속성(props) 객체.
 * @param {ReactNode} props.button - 헤더 내부에 포함할 버튼 요소.
 * @returns {JSX.Element} - 헤더 컴포넌트의 JSX 엘리먼트.
 */
const Header = ({ button }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.logoContainer} to="/">
          <img className={styles.logoImage} src={logoImg} alt="로고 이미지" />
          <h1 className={styles.logoTitle}>Rolling</h1>
        </Link>
        {button}
      </div>
    </div>
  );
};

export default Header;
