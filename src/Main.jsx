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
          <Route path="model-test" element={<ModalTest/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
