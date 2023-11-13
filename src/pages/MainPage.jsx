import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import mainPageStyle from "./MainPage.module.css";
import frame from "../assets/images/etc/frame.png";
import point1 from "../assets/images/etc/point1.svg";
import point2 from "../assets/images/etc/point2.svg";
import frame2 from "../assets/images/etc/frame2.png";

import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();
  const headerButton = (
    <Button color="outlined" size="40" onClick={() => navigate("/post")}>
      롤링페이퍼만들기
    </Button>
  );
  return (
    <>
      <Header button={headerButton}></Header>
      <div className={mainPageStyle.container}>
        <div className={mainPageStyle.box1}>
          <div className={mainPageStyle.frame}>
            <img src={point1} alt="point1" />
            <div className={mainPageStyle.title}>
              <p>
                누구나 손쉽게, 온라인
                <br className={mainPageStyle.linebreak} />
                롤링 페이퍼를 만들 수 있어요
              </p>
            </div>
            <p className={mainPageStyle.description}>
              로그인없이자유롭게만들어요
            </p>
          </div>
          <img src={frame} alt="frame1" className={mainPageStyle.image} />
        </div>
        <div className={mainPageStyle.box2}>
          <img src={frame2} alt="frame2" className={mainPageStyle.image} />
          <div className={mainPageStyle.frame}>
            <img src={point2} alt="point2" />
            <span className={mainPageStyle.title}>
              <p>
                서로에게 이모지로 감정을
                <br className={mainPageStyle.linebreak} />
                표현해보세요
              </p>
            </span>
            <p>롤링 페이퍼에 이모지를 추가할 수 있어요</p>
          </div>
        </div>
        <Button
          className={mainPageStyle.button}
          color="primary"
          size="56"
          onClick={() => navigate("/list")}
        >
          구경해보기
        </Button>
      </div>
    </>
  );
};

export default MainPage;
