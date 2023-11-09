import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import { check } from "prettier";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Button shape={check}/>
    </>
  );
};

export default App;
