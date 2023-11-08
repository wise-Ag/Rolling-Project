import styles from "./BadgeEmoji.module.css";

const BadgeEmoji = ({ emoji, count }) => {
  return (
    <div className={styles.badgeEmoji}>
      {emoji} {count}
    </div>
  );
};

export default BadgeEmoji;
