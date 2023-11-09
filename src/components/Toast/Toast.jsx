import { useContext } from "react";
import style from "./Toast.module.css";
import checkImg from "../../assets/images/checkImg.svg"
import closeIcon from "../../assets/images/icons/closeIcon.svg";
import { ToastContext } from "../Modal/ModalTest";
const Toast = ({ children }) => {
  const closeToast = useContext(ToastContext);
  const handleCloseToastClick = () => {
    closeToast();
  };
  return (
    <div className={style.root}>
      <div className={style.text}>
        <img src={checkImg} alt="checked" /> {children}
      </div>
      <button onClick={handleCloseToastClick}>
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
};
export default Toast;
