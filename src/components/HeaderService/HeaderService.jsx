import { useState } from "react";

import styles from "./HeaderService.module.css";

import BadgeEmojiList from "../BadgeEmoji/BadgeEmojiList";
import EmojiPickerPopover from "../EmojiPickerPopover/EmojiPickerPopover";
import RollingPaperInfo from "../RollingPaperInfo/RollingPaperInfo";
import getEmoji from "../../apis/getEmoji";
import postEmoji from "../../apis/postEmoji";

const HeaderService = ({ recipientId, recipientName, writerCount, profileImageURL }) => {
  const [emojiData, setEmojiData] = useState([]);
  const [isSharePopover, setSharePopover] = useState(false);

  const fetchEmojiData = async () => {
    try {
      const response = await getEmoji(recipientId);

      if (response.result.results) {
        setEmojiData(response.result.results.map((value) => ({ emoji: value.emoji, count: value.count })));
      }
    } catch (error) {
      console.error("Error fetching emoji data:", error);
    }
  };

  const handleEmojiClick = async (emoji) => {
    try {
      console.log(emoji.emoji);
      await postEmoji(recipientId, emoji.emoji);
      fetchEmojiData();
    } catch (error) {
      console.error("Error posting emoji:", error);
    }
  };

  const handleShareClick = () => {
    setSharePopover(!isSharePopover);
  };

  return (
    <div className={styles.headerService}>
      <div className={styles.container}>
        <div className={styles.rollingPaperInfocontainer}>
          <RollingPaperInfo recipientName={recipientName} writerCount={writerCount} profileImageURL={profileImageURL} />
        </div>
        <div className={styles.utilsConainer}>
          <div className={styles.verticalLineWrapper}>
            <div className={styles.verticalLine} />
          </div>
          <BadgeEmojiList emojis={emojiData} />
          <div className={styles.buttonsContainer}>
            <EmojiPickerPopover onEmojiClick={handleEmojiClick} />
            <div className={styles.verticalLine} />
            <div className={styles.shareButtonContainer}>
              <button className={styles.shareButton} onClick={handleShareClick}>
                공유{/* 버튼 컴포넌트로 교체해야함 */}
              </button>
              {isSharePopover && (
                <div className={styles.sharePopover}>
                  <button className={styles.sharePopoverButton}>카카오톡 공유</button>
                  <button className={styles.sharePopoverButton}>URL 공유</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
