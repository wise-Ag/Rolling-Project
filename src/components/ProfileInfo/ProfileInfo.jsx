import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({ messageCount, profileImageURLs }) => {
  // li 요소에 이미 3명이 표시되었으므로 writerCount에서 3을 뺀 값을 변수에 저장
  const messageCountMinusThree = messageCount - 3;

  return (
    <div className={styles.profileInfoContainer}>
      <ul className={styles.profileImageListContainer}>
        <li className={styles.profileImageWrapper}>
          <img src={profileImageURLs[0]} alt="프로필 이미지 1"></img>
        </li>
        <li className={styles.profileImageWrapper}>
          <img src={profileImageURLs[1]} alt="프로필 이미지 2"></img>
        </li>
        <li className={styles.profileImageWrapper}>
          <img src={profileImageURLs[2]} alt="프로필 이미지 3"></img>
        </li>
        <li className={styles.profileImageWrapper}>+{messageCountMinusThree}</li>
      </ul>
      <p className={styles.description}>
        <span className={styles.accent}>{messageCount}</span>명이 작성했어요!
      </p>
    </div>
  );
};

export default ProfileInfo;
