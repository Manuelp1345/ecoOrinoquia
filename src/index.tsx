import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Intro from "./pages/Introduccion";
import Redirect from "./utils/Redirect";
import Conociendo from "./pages/Conociendo";
import Ubicacion from "./pages/subpages/Ubicacion";
import Historia from "./pages/subpages/Historia";
import Flora from "./pages/subpages/Flora";
import Fauna from "./pages/subpages/Fauna";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Redirect />} />
        <Route path="/Introduccion" element={<App Element={<Intro />} />} />
        <Route
          path="/Conocimiento"
          element={<App Element={<Conociendo />} />}
        />
        <Route
          path="/Conocimiento/ubicacion"
          element={<App Element={<Ubicacion />} />}
        />
        <Route
          path="/Conocimiento/historia"
          element={<App Element={<Historia />} />}
        />
        <Route
          path="/Conocimiento/flora"
          element={<App Element={<Flora />} />}
        />
        <Route
          path="/Conocimiento/fauna"
          element={<App Element={<Fauna />} />}
        />
        <Route path="/Educando" element={<App Element={<Intro />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
