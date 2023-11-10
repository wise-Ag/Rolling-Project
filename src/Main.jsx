import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import PostPage from "./pages/PostPage";
import PostEditPage from "./pages/PostEditPage";

// import KaKao from "./utils/KaKao";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/:id/edit" element={<PostEditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
