import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderService from "../components/HeaderService/HeaderService";
import getRecipientRead from "../apis/getRecipientRead";
import { useAsync } from "../hooks/useAsync";
import style from "./RollingPaperPage.module.css";
import clsx from "clsx";
import Cards from "../components/Cards/Cards";
import { Navigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <LocaleContext.Provider value={{ id: id, name: name }}>
      <div className={style.root}>
        <Header isNotMobileVisible={!isMobile} />
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
          <Cards />
        </div>
      </div>
    </LocaleContext.Provider>
  );
};

export default PostPage;
