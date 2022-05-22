import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const EcoOrinoquiaTokenomics = () => {
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
        Tokenomics Eco Orinoquia
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "15px",
        }}
      />

      <Box
        sx={{
          marginTop: "34px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            marginTop: "34px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              border: "1px solid #7DDFCC",
              pt: 2,
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Descripción</Box>
            <Box sx={{ width: "50%" }}>% Asignación</Box>
          </Box>
          <Box
            sx={{
              pt: 2,
              border: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Inversión Ecológica y Social</Box>
            <Box sx={{ width: "50%" }}>80</Box>
          </Box>
          <Box
            sx={{
              pt: 2,
              border: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>
              Marketing y campaña de concientización
            </Box>
            <Box sx={{ width: "50%" }}>3</Box>
          </Box>
          <Box
            sx={{
              pt: 2,
              border: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Partners e inversión semilla</Box>
            <Box sx={{ width: "50%" }}>3</Box>
          </Box>
          <Box
            sx={{
              pt: 2,
              border: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Plataforma tecnológica</Box>
            <Box sx={{ width: "50%" }}>4</Box>
          </Box>
          <Box
            sx={{
              pt: 2,
              border: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Equipo desarrollo</Box>
            <Box sx={{ width: "50%" }}>10 </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", mt: 3 }}>
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
          onClick={() => navigate("/ecoOrinoquia/token")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              EcoOrinoquia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Eco Orinoquia Token
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
          onClick={() => navigate("/ecoOrinoquia/gobernanza")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Gobernanza</Typography>
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

export default EcoOrinoquiaTokenomics;
