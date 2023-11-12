import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="list" element={<Index />} />
        <Route path="post" element={<Index />} /* 정진호 */ />
        <Route path="post/:id" element={<Index />} />
        <Route path="post/:id/edit" element={<Index />} />
        <Route path="post/:id/message" element={<Index />} /* 정진호 */ />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
