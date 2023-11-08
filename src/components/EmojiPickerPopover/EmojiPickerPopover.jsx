import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

import styles from "./EmojiPickerPopover.module.css";

const EmojiPickerPopover = ({ onEmojiClick }) => {
  const [isEmojiPopoverOpen, setEmojiPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setEmojiPopoverOpen(!isEmojiPopoverOpen);
  };

  return (
    <div className={styles.emojiPickerPopover}>
      <button className={styles.button} onClick={handleButtonClick}>
        추가{/* 버튼 컴포넌트로 교체해야함 */}
      </button>
      {isEmojiPopoverOpen && (
        <div className={styles.emojiPopover}>
          <EmojiPicker onEmojiClick={onEmojiClick} width={306} height={392} />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopover;
