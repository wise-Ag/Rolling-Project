import clsx from "clsx";
import style from "./ModalButton.module.css";
const ModalButton = ({ type }) => {
  const BUTTON_TYPE = {
    verify: { color: "purple", text: "확인" },
  };
  return (
    <button
      className={clsx(style.root, {
        [style.purple]: BUTTON_TYPE[type].color === "purple",
      })}
    >
      {BUTTON_TYPE[type].text}
    </button>
  );
};
export default ModalButton;
