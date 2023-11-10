import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import CardContainer from "./components/Card/CardContainer/CardContainer";
import ModalTest from "./components/Modal/ModalTest";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="test" element={<CardContainer />} />
          <Route path="test/:id" element={<CardContainer />} />
          {/* 이후에 삭제할 모달, 토스트 테스트용 경로 */}
          <Route path="modal-test" element={<ModalTest/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
