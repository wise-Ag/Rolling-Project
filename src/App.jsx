import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import HeaderService from "./components/HeaderService/HeaderService";

const App = () => {
  return (
    <>
      <Header>{/* 버튼 컴포넌트 받아야함 */}</Header>
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
