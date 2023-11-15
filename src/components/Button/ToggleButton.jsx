import styles from "./ToggleButton.module.css";

const ToggleButton = ({ toggle, setToggle }) => {
  const handleToggleButtonClick = () => {
    setToggle((curr) => !curr);
  };

  return (
    <div className={styles.toggleButtonContainer}>
      <button
        className={styles.toggleButton}
        disabled={toggle}
        onClick={handleToggleButtonClick}
      >
        색상
      </button>
      <button
        className={styles.toggleButton}
        disabled={toggle}
        onClick={handleToggleButtonClick}
      >
        이미지
      </button>
    </div>
  );
};

export default ToggleButton;
