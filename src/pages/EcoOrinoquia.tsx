import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const EcoOrinoquia = () => {
  const navigate = useNavigate();

  return (
    <Box
      className="container"
      sx={{
        marginLeft: { sm: 26 },
        marginTop: { sm: 17 },
        paddingLeft: { sm: "78px" },
        p: 3,
        pb: 10,
      }}
    >
      <Toolbar />
      <Typography marginTop={{ xs: 10, sm: 0 }} fontSize={"40px"}>
        Que es EcoOrinoquia
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "50px",
        }}
      />
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        EcoOrinoquia es un proyecto crypto basado en la geografía y cultura
        indígena de la Orinoquia, con el objetivo de generar conciencia en las
        nuevas generaciones y en la colectividad sobre la importancia de la
        conservación de ciertos ecosistemas y lugares del planeta que son
        fundamentales para el equilibrio medioambiental y la preservación de la
        vida en el mismo, además de captar y administrar recursos de forma
        transparente, pública y auditable para ayudar a los resguardos indígenas
        de la zona en mejorar sus condiciones de vida y ambientales, restaurando
        y preservando los lugares donde habitan. Para mayor información
        detallada ir a{" "}
        <Button
          sx={{
            cursor: "pointer!important",
            color: "#7DDFCC",
            fontSize: "0.9rem",
            fontWeight: 400,
            ml: -1,
            textTransform: "none",
          }}
          onClick={() => window.open("https://ecoorinoquia.org", "_blank")}
        >
          https://ecoorinoquia.org
        </Button>
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
          onClick={() => navigate("/Educando/6")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              EcoOrinoquia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              ¿Cuánto oxígeno necesita un humano para vivir?
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
          onClick={() => navigate("/EcoOrinoquia/token")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Eco Orinoquia Token</Typography>
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

export default EcoOrinoquia;
