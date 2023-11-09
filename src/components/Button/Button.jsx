import clsx from "clsx";
import styles from "./Button.module.css";

<<<<<<< HEAD
const Button = ({
  className,
  shape,
  direction,
  color,
  size,
  width,
  children,
  onClick,
  type = 'submit',
  disabled,
}) => {
  const buttonClassName = clsx(
    className,
=======
const Button = ({ shape, direction, color, size, width, children, onClick, disabled }) => {
  const buttonClassName = clsx(
>>>>>>> develop
    styles["button"],
    styles[shape],
    styles[`${direction}Arrow`],
    styles[`${color}`],
    styles[`size${size}`]
  );
  const buttonWidth = { width: `${width}rem` };
  return (
<<<<<<< HEAD
    <button
      type={type}
      disabled={disabled}
      style={buttonWidth}
      className={buttonClassName}
      onClick={onClick}
    >
=======
    <button disabled={disabled} style={buttonWidth} className={buttonClassName} onClick={onClick}>
>>>>>>> develop
      {children}
    </button>
  );
};

export default Button;
