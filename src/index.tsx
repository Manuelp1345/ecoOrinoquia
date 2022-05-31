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
import Educando from "./pages/Educando";
import OxigenoOne from "./pages/educando/OxigenoOne";
import OxigenoTwo from "./pages/educando/OxigenoTwo";
import OxigenoThree from "./pages/educando/OxigenoThree";
import OxigenoFour from "./pages/educando/OxigenoFour";
import OxigenoFive from "./pages/educando/OxigenoFive";
import OxigenoSix from "./pages/educando/OxigenoSix";
import EcoOrinoquia from "./pages/EcoOrinoquia";
import EcoOrinoquiaToken from "./pages/subpages/ecoOrinoquia/EcoOrinoquiaToken";
import EcoOrinoquiaTokenomics from "./pages/subpages/ecoOrinoquia/EcoOrinoquiaTokenomics";
import EcoOrinoquiaGobernanza from "./pages/subpages/ecoOrinoquia/EcoOrinoquiaGobernanza";
import EcoOrinoquiaMapa from "./pages/subpages/ecoOrinoquia/EcoOrinoquiaMapa";
import Orinoquia from "./pages/Orinoquia";
import OrinoquiaItems from "./pages/orinoquia/OrinoquiaItems";
import OrinoquiaRecompensas from "./pages/orinoquia/OrinoquiaRecompensas";
import GameMode from "./pages/GameMode";
import GameModeFarm from "./pages/gameMode/GameModeFarm";
import GameModePvP from "./pages/gameMode/GameModePvP";
import GameModeDominio from "./pages/gameMode/GameModeDominio";
import OrinoquiaRoi from "./pages/orinoquia/OrinoquiaRoi";
import OrinoquiaMercado from "./pages/orinoquia/OrinoquiaMercado";
import OrinoquiaTienda from "./pages/orinoquia/OrinoquiaTienda";
import OrinoquiaFinanzas from "./pages/orinoquia/OrinoquiaFinanzas";
import Team from "./pages/Team";
import Redes from "./pages/Redes";
import ResguardoNuevaEsperanza from "./pages/subpages/reguardos/ResguardoNuevaEsperanza";

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
        <Route
          path="/Conocimiento/reguardo/nueva-esperanza-del-tomo"
          element={<App Element={<ResguardoNuevaEsperanza />} />}
        />
        <Route path="/Educando" element={<App Element={<Educando />} />} />
        <Route path="/Educando/1" element={<App Element={<OxigenoOne />} />} />
        <Route path="/Educando/2" element={<App Element={<OxigenoTwo />} />} />
        <Route
          path="/Educando/3"
          element={<App Element={<OxigenoThree />} />}
        />
        <Route path="/Educando/4" element={<App Element={<OxigenoFour />} />} />
        <Route path="/Educando/5" element={<App Element={<OxigenoFive />} />} />
        <Route path="/Educando/6" element={<App Element={<OxigenoSix />} />} />
        <Route
          path="/ecoorinoquia"
          element={<App Element={<EcoOrinoquia />} />}
        />
        <Route
          path="/ecoorinoquia/token"
          element={<App Element={<EcoOrinoquiaToken />} />}
        />
        <Route
          path="/ecoorinoquia/tokenomics"
          element={<App Element={<EcoOrinoquiaTokenomics />} />}
        />
        <Route
          path="/ecoorinoquia/gobernanza"
          element={<App Element={<EcoOrinoquiaGobernanza />} />}
        />
        <Route
          path="/ecoorinoquia/route-map"
          element={<App Element={<EcoOrinoquiaMapa />} />}
        />
        <Route
          path="/play-to-earn/orinoquia"
          element={<App Element={<Orinoquia />} />}
        />
        <Route
          path="/play-to-earn/items"
          element={<App Element={<OrinoquiaItems />} />}
        />
        <Route
          path="/play-to-earn/Recompensas"
          element={<App Element={<OrinoquiaRecompensas />} />}
        />
        <Route
          path="/play-to-earn/gamemode"
          element={<App Element={<GameMode />} />}
        />
        <Route
          path="/play-to-earn/gamemode/farm"
          element={<App Element={<GameModeFarm />} />}
        />
        <Route
          path="/play-to-earn/gamemode/PvP"
          element={<App Element={<GameModePvP />} />}
        />
        <Route
          path="/play-to-earn/gamemode/dominio-resguardo"
          element={<App Element={<GameModeDominio />} />}
        />
        <Route
          path="/play-to-earn/roi"
          element={<App Element={<OrinoquiaRoi />} />}
        />
        <Route
          path="/play-to-earn/mercado"
          element={<App Element={<OrinoquiaMercado />} />}
        />
        <Route
          path="/play-to-earn/tienda"
          element={<App Element={<OrinoquiaTienda />} />}
        />
        <Route
          path="/play-to-earn/sostenibilidad-finaciera"
          element={<App Element={<OrinoquiaFinanzas />} />}
        />
        <Route path="/team" element={<App Element={<Team />} />} />
        <Route path="/redes-sociales" element={<App Element={<Redes />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
