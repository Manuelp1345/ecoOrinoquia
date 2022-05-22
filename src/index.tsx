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
import ProblematicaActual from "./pages/subpages/ProblematicaActual";
import DivisionPolitica from "./pages/subpages/DivisionPolitica";
import ResguardosIndigenas from "./pages/subpages/ResguardosIndigenas";
import ResguardoRiosTomo from "./pages/subpages/reguardos/ResguardoRiosTomo";
import ResguardoSanLuis from "./pages/subpages/reguardos/ResguardoSanLuis";
import ResguardoEsmeralda from "./pages/subpages/reguardos/ResguardoEsmeralda";
import ResguardoValdivia from "./pages/subpages/reguardos/ResguardoValdivia";
import ResguardoPuntaBandera from "./pages/subpages/reguardos/ResguardoPuntaBandera";
import ResguardoKawaneruba from "./pages/subpages/reguardos/ResguardoKawaneruba";
import ResguardoRiosMuco from "./pages/subpages/reguardos/ResguardoRiosMuco";

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
        <Route
          path="/Conocimiento/problematica-actual"
          element={<App Element={<ProblematicaActual />} />}
        />
        <Route
          path="/Conocimiento/resguardo-indigena"
          element={<App Element={<ResguardosIndigenas />} />}
        />
        <Route
          path="/Conocimiento/Division-politico-territorial"
          element={<App Element={<DivisionPolitica />} />}
        />
        <Route
          path="/Conocimiento/reguardo/rios-tomo-y-beweri"
          element={<App Element={<ResguardoRiosTomo />} />}
        />
        <Route
          path="/Conocimiento/reguardo/san-luis-del-tomo"
          element={<App Element={<ResguardoSanLuis />} />}
        />
        <Route
          path="/Conocimiento/reguardo/la-esmeralda"
          element={<App Element={<ResguardoEsmeralda />} />}
        />
        <Route
          path="/Conocimiento/reguardo/valdivia"
          element={<App Element={<ResguardoValdivia />} />}
        />
        <Route
          path="/Conocimiento/reguardo/punta-bandera"
          element={<App Element={<ResguardoPuntaBandera />} />}
        />
        <Route
          path="/Conocimiento/reguardo/Kawaneruba"
          element={<App Element={<ResguardoKawaneruba />} />}
        />
        <Route
          path="/Conocimiento/reguardo/rios-muco-y-guarrojo"
          element={<App Element={<ResguardoRiosMuco />} />}
        />
        <Route path="/Educando" element={<App Element={<Intro />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
