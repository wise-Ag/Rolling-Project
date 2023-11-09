import BadgeRelation from "../BadgeRelation/BadgeRelation";
import style from "./CardModal.module.css";

const CardModal = ({
  profileImageURL = "https://fastly.picsum.photos/id/1082/100/100.jpg?hmac=0rTbHjwuEo-KpMp2E4aCa2JWXFT_FPh6cqJwhTxcZl4",
  sender = "Jieun",
  relationship = "지인",
  content = "testing",
  createdAt = "2023.11.2",
}) => {
  return (
    <div className={style.root}>
      <div className={style.header}>
        <div className={style.profileContainer}>
          <img src={profileImageURL} alt="프로필 이미지" />
          <div className={style.profile}>
            <h1 className={style.sender}>
              From. <span>{sender}</span>
            </h1>
            <BadgeRelation type={relationship} />
          </div>
        </div>
        <p className={style.createdAt}>{createdAt}</p>{" "}
      </div>
      <div className={style.content}>{content}</div>
    </div>
  );
};

export default CardModal;
