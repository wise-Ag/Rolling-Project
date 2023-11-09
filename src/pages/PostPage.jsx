import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderService from "../components/HeaderService/HeaderService";
import getRecipientRead from "../apis/getRecipientRead";
import { useAsync } from "../hooks/useAsync";
import CardContainer from "../components/Card/CardContainer/CardContainer";
import style from "./PostPage.module.css";
import clsx from "clsx";

const PostPage = () => {
  const { id } = useParams();
  const { loading, data } = useAsync(getRecipientRead, { id });
  const {
    name,
    messageCount,
    recentMessages,
    backgroundColor,
    backgroundImageURL,
  } = data;
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
  return (
    <div className={style.root}>
      <Header />
      <HeaderService
        recipientId={id}
        recipientName={name}
        messageCount={messageCount}
        profileImageURLs={recentProfileImg}
      />
      <div
        className={clsx(style.cardSection, {
          [style[backgroundColor]]: !backgroundImageURL,
        })}
        style={background}
      >
        <CardContainer />
      </div>
    </div>
  );
};

export default PostPage;
