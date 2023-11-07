import clsx from "clsx";
import style from "./CloseModalButton.module.css";
const CloseModalButton = ({ onButtonClick }) => {
  const handleOnClick = () => {
    onButtonClick();
  };
  return (
    <button onClick={handleOnClick} className={clsx(style.root)}>
      확인
    </button>
  );
};
export default CloseModalButton;
