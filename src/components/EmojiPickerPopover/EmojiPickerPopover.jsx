import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

import styles from "./EmojiPickerPopover.module.css";

/**
 * 이모지 피커 팝오버를 나타내는 컴포넌트.
 * @param {Object} props - 컴포넌트에 전달되는 속성(props) 객체.
 * @param {ReactNode} props.button - 팝오버 열기 버튼 요소.
 * @param {Function} props.onEmojiClick - 이모지 클릭 이벤트 핸들러 함수.
 * @returns {JSX.Element} - 이모지 피커 팝오버 컴포넌트의 JSX 엘리먼트.
 */
const EmojiPickerPopover = ({ button, onEmojiClick }) => {
  const [isEmojiPopoverOpen, setEmojiPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setEmojiPopoverOpen(!isEmojiPopoverOpen);
  };

  return (
    <div className={styles.emojiPickerPopover}>
      {button}
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
