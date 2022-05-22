import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Ubicacion = () => {
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
        Ubicación
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
        La Orinogula. fambién conocida como Llanos Orientales, es una de las 6
        regiones naturalesdedColombia. Está ubicada al oriente del país,
        Timitando al norte YAéste con Venezuela, al sur con Amazonia y al oeste
        conila región andina. Determinada por la cuenca del río Orinoco, es un
        ecosistema. que se caracteriza por ser una planicie. La región se halla
        entre los ríos Arauca, Guaviare, Orinoco y el Piedemonte llanero.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Es una región de intensa actividad ganadera donde se escenificaron
        importantes luchas durante la época de la Independencia colombiana y
        venezolana. Culturalmente está habitada por el llanero, individuo común
        también a los Llanos venezolanos. La Orinoquía coíncide en mucho con dos
        regiones claramente diferenciadas y suele confundirse con ellas. La
        primera es una cuenca hidrográfica, la del río Orinoco. Esta se extiende
        desde los Andes a las selvas amazónicas (el mismo río Orinoco nace en la
        selva amazónica venezolana), e incluye las cuencas de los ríos Meta,
        Guaviare y Guainía. La segunda, los Llanos, es una región natural y
        cultural colombo-venezolana. A esta la caracterizan sus extensas sabanas
        de zona intertropical y bosques de galería; sus habitantes, los
        llaneros, tienen una cultura y una historia diferenciada.
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
          onClick={() => navigate("/conocimiento")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Conociendo
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
          onClick={() => navigate("/conocimiento/historia")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Historia</Typography>
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

export default Ubicacion;
