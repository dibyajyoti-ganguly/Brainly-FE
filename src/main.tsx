import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import { Browse } from "./Browse";
// 4. Wrap your app with ContentProvider (in App.tsx or main.tsx)
import { ContentProvider } from "./utils/contentContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContentProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  </StrictMode>
);
