import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import RollingPaperPage from "./pages/RollingPaperPage";
import PostEditPage from "./pages/RollingPaperEditPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="list" element={<Index />} />
        <Route path="post" element={<Index />} />
        <Route path="post/:id" element={<RollingPaperPage />} />
        <Route path="post/:id/edit" element={<PostEditPage />} />
        <Route path="post/:id/message" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
