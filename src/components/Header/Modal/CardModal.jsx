import style from "./CardModal.module.css";
import ModalButton from "./ModalButton";
const CardModal = ({
  profileImageURL = "https://fastly.picsum.photos/id/1082/100/100.jpg?hmac=0rTbHjwuEo-KpMp2E4aCa2JWXFT_FPh6cqJwhTxcZl4",
  sender = "Jieun",
  relationship,
  content = "testing",
  createdAt = "2023.11.2",
}) => {
  return (
    <>
      <div className={style.root}>
        <div className={style.header}>
          <div className={style.profileContainer}>
            <img src={profileImageURL} alt="프로필 이미지" />
            <div className={style.profile}>
              <h1 className={style.sender}>
                From. <span>{sender}</span>
              </h1>
              <div>뱃지</div>
            </div>
          </div>
          <p>{createdAt}</p>
        </div>
        <div className={style.content}>{content}</div>
      </div>
      <ModalButton type="verify" />
    </>
  );
};

export default CardModal;
