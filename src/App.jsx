import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import RollingPaperPage from "./pages/RollingPaperPage";
import RollingPaperEditPage from "./pages/RollingPaperEditPage";
import LandingPage from "./pages/LandingPage";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="list" element={<Index />} />
        <Route path="post" element={<Index />} />
        <Route path="post/:id" element={<RollingPaperPage />} />
        <Route path="post/:id/edit" element={<RollingPaperEditPage />} />
        <Route path="post/:id/message" element={<Index />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
