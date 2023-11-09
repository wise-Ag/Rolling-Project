import styles from "./RollingPaperInfo.module.css";

/**
 * 롤링 페이퍼 정보를 나타내는 컴포넌트.
 * @param {Object} props - 컴포넌트에 전달되는 속성(props) 객체.
 * @param {string} props.recipientName - 수신자의 이름.
 * @param {number} props.messageCount - 작성된 메시지의 총 개수.
 * @param {string[]} props.profileImageURLs - 프로필 이미지 URL 목록.
 * @returns {JSX.Element} - 롤링 페이퍼 정보 컴포넌트의 JSX 엘리먼트.
 */
const RollingPaperInfo = ({ recipientName, children }) => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.name}>To. {recipientName}</h1>
      </div>
      {children}
    </div>
  );
};

export default RollingPaperInfo;
