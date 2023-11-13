import { useState, useEffect } from "react";
import getRecipientReactions from "./../apis/getRecipientReactions";

const useEmoji = (recipientId) => {
  const [emojiData, setEmojiData] = useState([]);

  const updateEmojiData = async () => {
    try {
      const response = await getRecipientReactions({ recipientId });

      if (response.result.results) {
        setEmojiData(() => response.result.results.map((value) => ({ emoji: value.emoji, count: value.count })));
      }
    } catch (error) {
      console.error("Error updating emoji data:", error);
    }
  };

  useEffect(() => {
    updateEmojiData();
  }, [recipientId]);

  return emojiData;
};

export default useEmoji;
