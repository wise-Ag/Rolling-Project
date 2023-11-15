import styles from "./Input.module.css";
import { useState } from "react";

const Input = ({
  placeholder = "Placeholder",
  isError,
  errorMessage = "Error Message",
  ...props
}) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={`${styles.inputContainer} ${isError ? styles.error : ""}`}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={name}
        onChange={handleChange}
        {...props}
      />
      {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
