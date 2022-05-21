import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Container } from "./utils/Container";
import Intro from "./pages/Introduccion";
import Redirect from "./utils/Redirect";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Redirect />} />
        <Route path="/Introduccion" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
