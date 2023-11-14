import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import CardListPage from "./pages/CardListPage";
import CreateTo from "./pages/CreateTo";
import CreateFrom from "./pages/CreateFrom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="list" element={<CardListPage />} /* 이정윤 */ />
        <Route path="post" element={<CreateTo />} /* 정진호 */ />
        <Route path="post/:id" element={<Index />} />
        <Route path="post/:id/edit" element={<Index />} />
        <Route path="post/:id/message" element={<CreateFrom />} /* 정진호 */ />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
