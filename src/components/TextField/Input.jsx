//import React from 'react';
import styles from './Input.module.css';

const Input = ({
  placeholder = 'Placeholder',
  isError,
  errorMessage = 'Error Message',
  ...props
}) => {
  return (
    <div className={`${styles.inputContainer} ${isError ? styles.error : ''}`}>
      <input className={styles.input} placeholder={placeholder} {...props} />
      {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
