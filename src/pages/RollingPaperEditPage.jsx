import { Navigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderService from "../components/HeaderService/HeaderService";
import getRecipientRead from "../apis/getRecipientRead";
import { useAsync } from "../hooks/useAsync";
import styles from "./RollingPaperPage.module.css";
import clsx from "clsx";
import Cards from "../components/Cards/Cards";
import Button from "../components/Button/Button";

const RollingPaperEditPage = () => {
  const { id } = useParams();

  const { loading, data } = useAsync(getRecipientRead, { id });
  const {
    name,
    messageCount,
    recentMessages,
    backgroundColor,
    backgroundImageURL,
  } = data;

  const handleDeletePage = () => {
    console.log("페이지가 삭제되었습니다.");
  };

  const recentProfileImg = recentMessages
    ? recentMessages.map((value) => value.profileImageURL)
    : [
        "example/profileImage01.png",
        "example/profileImage02.png",
        "example/profileImage03.png",
      ];

  const background = backgroundImageURL
    ? { backgroundImage: `url(${backgroundImageURL})` }
    : {};

  if (loading) return <div>loading</div>;
  if (data == false) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.root}>
      <Header />

      <HeaderService
        recipientId={id}
        recipientName={name}
        messageCount={messageCount}
        profileImageURLs={recentProfileImg}
      />
      <div
        className={clsx(styles.cardSection, {
          [styles[backgroundColor]]: !backgroundImageURL,
        })}
        style={background}
      >
        <Button className={styles.deleteButton} onClick={handleDeletePage}>
          삭제하기
        </Button>
        <Cards />
      </div>
    </div>
  );
};

export default RollingPaperEditPage;
