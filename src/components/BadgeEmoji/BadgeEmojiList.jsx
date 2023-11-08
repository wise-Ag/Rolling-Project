import { useEffect, useState } from "react";
import styles from "./BadgeEmojiList.module.css";
import BadgeEmoji from "./BadgeEmoji";
import arrowDownImage from "../../assets/images/arrowDown.svg";

const BadgeEmojiList = ({ emojis }) => {
  const [emojiData, setEmojiData] = useState([]);
  const [isButton, setIsButton] = useState(false);

  const handleButtonClick = () => {
    const invaildEmojiData = !emojiData[0].length;
    if (invaildEmojiData) return;

    setIsButton(!isButton);
  };

  useEffect(() => {
    setEmojiData([emojis.slice(0, 3), emojis.slice(0, 8)]);
  }, [emojis]);

  return (
    <div className={styles.container}>
      <ul className={styles.badgeEmojiList}>
        {emojiData?.[0]?.map((item) => (
          <li key={item.emoji}>
            <BadgeEmoji emoji={item.emoji} count={item.count} />
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleButtonClick}>
          <img src={arrowDownImage} alt="arrow down" />
        </button>
        {isButton && (
          <ul className={styles.badgeEmojiListPopover}>
            {emojiData?.[1]?.map((item) => (
              <li key={item.emoji}>
                <BadgeEmoji emoji={item.emoji} count={item.count} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BadgeEmojiList;
