import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const EcoOrinoquiaToken = () => {
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
        Eco Orinoquia Token
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "50px",
        }}
      />
      <Typography>
        EcoOrinoquia es el token de gobernanza del ecosistema EcoOrinoquia que
        permitirá captar fondos para los resguardos indígenas así como financiar
        las bases para el desarrollo del metaverso EcoOrinoquia iniciando por
        juego free to play y play to earn Orinoquia.
      </Typography>
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
            width: "35%",
            zIndex: 55,
          }}
          component={"img"}
          src={"/img/logo1 copia 6.svg"}
        />
        <Typography marginTop={{ xs: 10, sm: 2 }} fontSize={"40px"}>
          Datos del token
          <br />
        </Typography>
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
            <Box sx={{ width: "50%" }}>Nombre:</Box>
            <Box sx={{ width: "50%" }}>ECO ORINOQUIA</Box>
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
            <Box sx={{ width: "50%" }}>Símbolo:</Box>
            <Box sx={{ width: "50%" }}>EOQ</Box>
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
            <Box sx={{ width: "50%" }}>Unidad::</Box>
            <Box sx={{ width: "50%" }}>Jaguar</Box>
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
            <Box sx={{ width: "50%" }}>Decimales:</Box>
            <Box sx={{ width: "50%" }}>8</Box>
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
            <Box sx={{ width: "50%" }}>Cantidad Máxima:</Box>
            <Box sx={{ width: "50%" }}>500.000.000</Box>
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
            <Box sx={{ width: "50%" }}>Red:</Box>
            <Box sx={{ width: "50%" }}>Binance Smart Chain. </Box>
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
            <Box sx={{ width: "50%" }}>Contrato:</Box>
            <Box sx={{ width: "50%" }}>-------------------</Box>
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
          onClick={() => navigate("/ecoOrinoquia")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              EcoOrinoquia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Que es EcoOrinoquia
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
          onClick={() => navigate("/ecoOrinoquia/tokenomics")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">
              Tokenomics Eco Orinoquia
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

export default EcoOrinoquiaToken;
