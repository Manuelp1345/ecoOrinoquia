import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OrinoquiaItems = () => {
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
        Items
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
            <Box sx={{ width: "33%" }}>Item</Box>
            <Box sx={{ width: "33%" }}>Precio en O2</Box>
            <Box sx={{ width: "33%" }}># Usos</Box>
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
            <Box sx={{ width: "33%" }}>Lote B??sico</Box>
            <Box sx={{ width: "33%" }}>0</Box>
            <Box sx={{ width: "33%" }}>Ilimitados</Box>
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
            <Box sx={{ width: "33%" }}>Lote Extendido</Box>
            <Box sx={{ width: "33%" }}>30</Box>
            <Box sx={{ width: "33%" }}>70</Box>
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
            <Box sx={{ width: "33%" }}>??rbol NFT</Box>
            <Box sx={{ width: "33%" }}>30</Box>
            <Box sx={{ width: "33%" }}>10</Box>
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
            <Box sx={{ width: "33%" }}>Agua</Box>
            <Box sx={{ width: "33%" }}>10</Box>
            <Box sx={{ width: "33%" }}>70</Box>
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
            <Box sx={{ width: "33%" }}>Nutrientes o polvo m??gico</Box>
            <Box sx={{ width: "33%" }}>10</Box>
            <Box sx={{ width: "33%" }}>70</Box>
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
            <Box sx={{ width: "33%" }}>Flechas y arcos</Box>
            <Box sx={{ width: "33%" }}>5</Box>
            <Box sx={{ width: "33%" }}>35</Box>
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
            <Box sx={{ width: "33%" }}>Ind??gena NFT</Box>
            <Box sx={{ width: "33%" }}>100</Box>
            <Box sx={{ width: "33%" }}>240 batalla</Box>
          </Box>
          <Typography
            marginBottom={2}
            marginTop={2}
            color={"#7DDFCC"}
            fontSize={18}
            width={"100%"}
          >
            Espacios de plantaci??n por lote. B??sico 3, extendido 7.
          </Typography>
          <Typography width={"100%"} marginBottom={2} fontSize={"30px"}>
            Rarezas nft
          </Typography>
          <Typography
            marginBottom={2}
            marginTop={2}
            color={"#7DDFCC"}
            fontSize={25}
            width={"100%"}
          >
            ??rboles:
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
            <Box sx={{ width: "33%" }}>Rareza</Box>
            <Box sx={{ width: "33%" }}>% Minteo</Box>
            <Box sx={{ width: "33%" }}>% Adicional Producci??n</Box>
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
            <Box sx={{ width: "33%" }}>Com??n</Box>
            <Box sx={{ width: "33%" }}>80%</Box>
            <Box sx={{ width: "33%" }}>0%</Box>
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
            <Box sx={{ width: "33%" }}>Poco Com??n</Box>
            <Box sx={{ width: "33%" }}>15%</Box>
            <Box sx={{ width: "33%" }}>2%</Box>
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
            <Box sx={{ width: "33%" }}>Peligro Extinci??n</Box>
            <Box sx={{ width: "33%" }}>5%</Box>
            <Box sx={{ width: "33%" }}>4%</Box>
          </Box>
          <Typography
            marginBottom={2}
            marginTop={2}
            color={"#7DDFCC"}
            fontSize={25}
            width={"100%"}
          >
            Ind??genas:
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
            <Box sx={{ width: "33%" }}>Rareza</Box>
            <Box sx={{ width: "33%" }}>% Minteo</Box>
            <Box sx={{ width: "33%" }}>% Adicional para Venta</Box>
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
            <Box sx={{ width: "33%" }}>Com??n</Box>
            <Box sx={{ width: "33%" }}>70%</Box>
            <Box sx={{ width: "33%" }}>0%</Box>
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
            <Box sx={{ width: "33%" }}>Poco Com??n</Box>
            <Box sx={{ width: "33%" }}>25%</Box>
            <Box sx={{ width: "33%" }}>2%</Box>
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
            <Box sx={{ width: "33%" }}>Peligro Extinci??n</Box>
            <Box sx={{ width: "33%" }}>5%</Box>
            <Box sx={{ width: "33%" }}>4%</Box>
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
          onClick={() => navigate("/play-to-earn/orinoquia")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Play to Earn - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Orinoquia
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
          onClick={() => navigate("/play-to-earn/Recompensas")}
        >
          <Box>
            <Typography variant="subtitle2">Pr??ximo</Typography>
            <Typography variant="subtitle1">Recompensas</Typography>
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

export default OrinoquiaItems;
