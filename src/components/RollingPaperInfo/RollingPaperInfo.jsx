import ProfileInfo from "../ProfileInfo/ProfileInfo";
import styles from "./RollingPaperInfo.module.css";

const RollingPaperInfo = ({ recipientName, messageCount, profileImageURLs }) => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.name}>To. {recipientName}</h1>
      </div>
      <ProfileInfo messageCount={messageCount} profileImagesURL={profileImageURLs} />
    </div>
  );
};

export default RollingPaperInfo;
