import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const DivisionPolitica = () => {
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
        División político territorial de los resguardos firmantes del convenio
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "50px",
        }}
      />
      <Typography marginTop={{ xs: 10, sm: 0 }} fontSize={"30px"}>
        Mapa de resguardos firmantes
        <br />
      </Typography>
      <Typography marginBottom={1} color={"#7DDFCC"} paragraph>
        Total Hectáreas del convenio: 189.418,23
      </Typography>
      <Box
        sx={{
          width: "100%",
          zIndex: 55,
        }}
        component={"img"}
        src={"/img/todos.jpg"}
      ></Box>
      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        onClick={() =>
          window.open(
            "https://www.google.com/maps/d/u/0/edit?hl=es&hl=es&ll=4.76841067637298,-70.12758420270741&mid=1k_S88Gtzpo8xwQiM599kZoTKXWpIr3ql&z=12",
            "_blank"
          )
        }
      >
        <Button
          sx={{
            zIndex: 1,
            color: "#7DDFCC",
            fontWeight: 700,
            fontSize: 25,
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          Ubicación en Google Maps
        </Button>
      </Box>

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
          onClick={() => navigate("/conocimiento/resguardo-indigena")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Resguardos indígenas
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
          onClick={() => navigate("/Conocimiento/reguardo/rios-tomo-y-beweri")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">
              Resguado Ríos Tomo y Beweri
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

export default DivisionPolitica;
