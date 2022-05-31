import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OrinoquiaRoi = () => {
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
        Roi
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
        <Typography
          marginBottom={2}
          marginTop={2}
          color={"#7DDFCC"}
          fontSize={18}
          width={"100%"}
        >
          El ROI permite evaluar la rentabilidad de una determinada inversión.
          ROI=Ganancia-inversión/inversión.
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
          <Typography width={"100%"} marginBottom={2} fontSize={"30px"}>
            Farm
          </Typography>
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
            <Box sx={{ width: "25%" }}>Item</Box>
            <Box sx={{ width: "25%" }}>Cantidad</Box>
            <Box sx={{ width: "25%" }}>Precio</Box>
            <Box sx={{ width: "25%" }}>Producción</Box>
          </Box>
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
            <Box sx={{ width: "25%" }}>Árbol NFT</Box>
            <Box sx={{ width: "25%" }}>1</Box>
            <Box sx={{ width: "25%" }}>30</Box>
            <Box sx={{ width: "25%" }}>70</Box>
          </Box>
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
            <Box sx={{ width: "25%" }}>Agua</Box>
            <Box sx={{ width: "25%" }}>1</Box>
            <Box sx={{ width: "25%" }}>10</Box>
            <Box sx={{ width: "25%" }}>-</Box>
          </Box>
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
            <Box sx={{ width: "25%" }}>Nutrientes</Box>
            <Box sx={{ width: "25%" }}>1</Box>
            <Box sx={{ width: "25%" }}>10</Box>
            <Box sx={{ width: "25%" }}>-</Box>
          </Box>
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
            <Box sx={{ width: "25%" }}>Arcos y flechas</Box>
            <Box sx={{ width: "25%" }}>1</Box>
            <Box sx={{ width: "25%" }}>5</Box>
            <Box sx={{ width: "25%" }}>-</Box>
          </Box>
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
            <Box sx={{ width: "25%" }}></Box>
            <Box sx={{ width: "25%" }}>Total</Box>
            <Box sx={{ width: "25%" }}>55 O2</Box>
            <Box sx={{ width: "25%" }}>70 O2</Box>
          </Box>
          <Typography
            marginBottom={2}
            marginTop={2}
            color={"#7DDFCC"}
            fontSize={18}
            width={"100%"}
          >
            Cálculo para un árbol común los de mayor rareza tienen una
            producción mayor (2 o 4 % adicional). El ROI estimado es de 8
            semanas.
          </Typography>
          <Typography
            marginBottom={2}
            marginTop={2}
            color={"#7DDFCC"}
            fontSize={25}
            width={"100%"}
          >
            PvP:
          </Typography>
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
            <Box sx={{ width: "25%" }}>Item</Box>
            <Box sx={{ width: "25%" }}>Cantidad</Box>
            <Box sx={{ width: "25%" }}>Precio</Box>
            <Box sx={{ width: "25%" }}>Producción</Box>
          </Box>
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
            <Box sx={{ width: "25%" }}>Indígena NFT</Box>
            <Box sx={{ width: "25%" }}>1</Box>
            <Box sx={{ width: "25%" }}>100</Box>
            <Box sx={{ width: "25%" }}>120</Box>
          </Box>
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
            <Box sx={{ width: "25%" }}></Box>
            <Box sx={{ width: "25%" }}>Total</Box>
            <Box sx={{ width: "25%" }}>100 O2</Box>
            <Box sx={{ width: "25%" }}>120 O2</Box>
          </Box>
          <Typography
            marginBottom={2}
            marginTop={2}
            color={"#7DDFCC"}
            fontSize={18}
            width={"100%"}
          >
            Cálculo con un estimado de una tasa de partidas ganadas del 50%. El
            ROI estimado es de 8 a 9 semanas.
          </Typography>
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
          onClick={() => navigate("/play-to-earn/gamemode/dominio-resguardo")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Play to Earn - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Dominio Resguardo
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
          onClick={() => navigate("/play-to-earn/mercado")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Mercado</Typography>
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

export default OrinoquiaRoi;
