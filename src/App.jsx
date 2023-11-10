import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import HeaderService from "./components/HeaderService/HeaderService";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <>
      <Header
        button={
          <Button color={"outlined"} size={40}>
            롤링 페이퍼 만들기
          </Button>
        }
      />
      <HeaderService
        recipientId="20"
        recipientName={"테스트 입니다."}
        messageCount={20}
        profileImageURLs={["example/profileImage01.png", "example/profileImage02.png", "example/profileImage03.png"]}
      />
      <Outlet />
    </>
  );
};

export default App;
