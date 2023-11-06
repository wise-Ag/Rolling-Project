import { Outlet } from "react-router";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header>{/* 버튼 컴포넌트 받아야함 */}</Header>
      <Outlet />
    </>
  );
};

export default App;
