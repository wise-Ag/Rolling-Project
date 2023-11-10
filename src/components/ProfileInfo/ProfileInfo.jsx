import styles from "./ProfileInfo.module.css";

/**
 * 프로필 정보를 나타내는 컴포넌트.
 * @param {Object} props - 컴포넌트에 전달되는 속성(props) 객체.
 * @param {number} props.messageCount - 작성된 메시지의 총 개수.
 * @param {string[]} props.profileImageURLs - 프로필 이미지 URL 목록.
 * @returns {JSX.Element} - 프로필 정보 컴포넌트의 JSX 엘리먼트.
 */
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
