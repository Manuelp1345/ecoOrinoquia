import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Flora = () => {
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
        Flora
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
        Es la variedad de plantas que hay en los bosques de galería como:
        plantas maderables, plantas medicinales y plantas alimentarias.
        <br />
        <br />
        Pejanía.Naejawa Wina (plantas maderables)
        <br />
        <br />
        Guatero Cuyumi
        <br />
        <br />
        Caño fistor Palo aceite (makinae)
        <br />
        <br />
        Flor morado
        <br />
        <br />
        Ibichure (Witsulinue)
        <br />
        <br />
        Palo yopo (dopenae)
        <br />
        <br />
        Plantas medicinales: Se caracteriza por su utilidad en medicina
        tradicional. El pueblo sikuani los emplea para la curación de diferentes
        enfermedades comunes como:
        <br />
        <br />
        Pumani domae (gripa)
        <br />
        <br />
        Buju domae(tos)
        <br />
        <br />
        Maneri domae (tuberculosis)
        <br />
        <br />
        Sulia domae (Diarrea)
        <br />
        <br />
        Todas estas clases de plantas medicinales se encuentran en los montes, y
        en las sabanas. Plantas alimenticias: En los pequeños bosques de galería
        hay plantas alimenticias o árboles frutales como:
        <br />
        <br />
        Ajau (ceje)
        <br />
        <br />
        Cucurito (najarebo)
        <br />
        <br />
        Pandare (iwitsulinae)
        <br />
        <br />
        Trujunae
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
            zIndex: 5,
            flexDirection: "row-reverse",
          }}
          onClick={() => navigate("/conocimiento/historia")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Flora
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
            zIndex: 5,
          }}
          onClick={() => navigate("/conocimiento/fauna")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Fauna</Typography>
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

export default Flora;
