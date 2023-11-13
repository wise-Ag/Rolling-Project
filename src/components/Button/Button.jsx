import styles from "./Button.module.css";
import clsx from "clsx";
const Button = ({
  className,
  shape,
  direction,
  color,
  size,
  width,
  children,
  onClick,
  type = "submit",
  disabled,
}) => {
  const buttonClassName = clsx(
    styles["button"],
    styles[shape],
    styles[`${direction}Arrow`],
    styles[`${color}`],
    styles[`size${size}`],
    className,
  );

  const buttonWidth = { width: `${width}rem` };
  return (
    <button
      type={type}
      disabled={disabled}
      style={buttonWidth}
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
