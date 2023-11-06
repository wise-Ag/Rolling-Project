import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Modal from "./components/Header/Modal/Modal";
import CardModal from "./components/Header/Modal/CardModal";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route
            path="/modal-test"
            element={
              <Modal>
                <CardModal />
              </Modal>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
