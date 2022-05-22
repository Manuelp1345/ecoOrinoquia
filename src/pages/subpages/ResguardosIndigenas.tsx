import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ResguardosIndigenas = () => {
  const navigate = useNavigate();

  return (
    <Box
      className="container"
      sx={{
        marginLeft: { sm: 26 },
        marginTop: { sm: 17 },
        paddingLeft: { sm: "78px" },
        p: 3,
      }}
    >
      <Toolbar />
      <Typography marginTop={{ xs: 10, sm: 0 }} fontSize={"40px"}>
        Resguardos indígenas
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "50px",
        }}
      />
      <Typography marginBottom={1} color={"#7DDFCC"} paragraph>
        Existen 35 Resguardos Indígenas, los cuales ocupan 3.620.642 hectáreas,
        equivalentes al 36% del territorio del departamento del Vichada.
        <br />
        <br />
        Las etnias existentes son Sikuani, Piapoco, Piaroa, Puinave, Curripaco,
        Sáliva, Cuiba, Amorúa y Cubeo.
        <br />
        <br />
        Las actividades económicas de estas comunidades son de subsistencia,
        entre éstas se encuentran la pesca, caza, siembra en conucos y
        artesanías.
        <br />
        <br />
        <Typography sx={{ fontWeight: "bold" }}>Resguardos</Typography>
        <ul>
          <li>Guacamayas y Maipore. </li>
          <li>Caño Guaripa .</li>
          <li> Caño Bachaco. </li>
          <li> La Hormiga.</li>
          <li>Caños Murciélago-dagua y Rio Mesetas.</li>
          <li>Cachicamo. </li>
          <li>Campoalegre y Riopalito. </li>
          <li>La Pascua.</li>
          <li>Santa Rosalía.</li>
          <li>Merey La Veraita.</li>
          <li>San Luis del Tomo.</li>
          <li>Muco Mayoragua.</li>
          <li>Rios Muco y Guarrojo.</li>
          <li>La Esmeralda.</li>
          <li>Valdivia.</li>
          <li>Guacamayas mamiyare.</li>
          <li>Kawaneruba.</li>
          <li>Saracure y Rio Cada.</li>
          <li> Iwiwi.</li>
          <li>El Unuma.</li>
          <li>Santa Teresita del Tuparro.</li>
          <li> Rio Siare.</li>
          <li> Corocoro.</li>
          <li> Carpintero Palomas.</li>
          <li> Concordia.</li>
          <li> Guaco Alto y Guaco Bajo.</li>
          <li> Cali- Barranquilla.</li>
          <li> Flores sombrero.</li>
          <li> Egua-guaricana.</li>
          <li> La Llanura.</li>
          <li> Rios Tomo y Weberi.</li>
          <li> Selva de Matavén.</li>
          <li> Nueva Esperanza del Tomo.</li>
          <li> Punta Bandera.</li>
        </ul>
        <br />
        <br />
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Box
          className="btnContent"
          padding={3}
          component={"div"}
          sx={{
            background: "#0D5043",
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: "#7DDFCC",
            flexDirection: "row-reverse",
            zIndex: 1,
          }}
          onClick={() => navigate("/conocimiento/problematica-actual")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Problemática actual
            </Typography>
          </Box>
          <ArrowLeft sx={{ fontSize: "45px", color: "#37C7AB" }} />
        </Box>
        <Box
          className="btnContent"
          padding={3}
          component={"div"}
          sx={{
            background: "#0D5043",
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: "#7DDFCC",
            zIndex: 1,
          }}
          onClick={() =>
            navigate("/conocimiento/Division-politico-territorial")
          }
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">
              División politico territorial de los resguardos firmantes del
              convenio
            </Typography>
          </Box>
          <ArrowRight sx={{ fontSize: "45px", color: "#37C7AB" }} />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "75px",
        }}
      />
    </Box>
  );
};

export default ResguardosIndigenas;
