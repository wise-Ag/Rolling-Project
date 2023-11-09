import { useState } from 'react';
import styles from './Background.module.css';

const colors = ['beige', 'blue', 'purple', 'green'];

const Background = () => {
  const [selectedColor, setSelectedColor] = useState('beige');

  const handleClickColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.container}>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => handleClickColor(color)}
          className={`${styles.colorBox} ${styles[color]}`}
        >
          {selectedColor === color && <p>Selected</p>}
        </div>
      ))}
      <p>Selected color: {selectedColor}</p>
    </div>
  );
};

export default Background;
