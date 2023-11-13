import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import PostPage from "./pages/PostPage";
import PostEditPage from "./pages/PostEditPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="list" element={<Index />} />
        <Route path="post" element={<Index />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="post/:id/edit" element={<PostEditPage />} />
        <Route path="post/:id/message" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
