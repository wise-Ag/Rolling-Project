import clsx from 'clsx';
import styles from './Button.module.css';

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
    styles["button"],
    styles[shape],
    styles[`${direction}Arrow`],
    styles[`${color}`],
    styles[`size${size}`]
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
