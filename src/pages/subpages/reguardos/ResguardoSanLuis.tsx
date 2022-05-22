import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ResguardoSanLuis = () => {
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
        Resguardo San Luis del Tomo
        <br />
        <br />
      </Typography>
      <Box
        sx={{
          width: "100%",
          zIndex: 55,
        }}
        component={"img"}
        src={"/img/RESGUARDO SAN LUIS DEL TOMO.png"}
      />
      <Typography textAlign={"center"}>
        Fuente: IGAC (Instituto geográfico Agustín Codazzi)
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
            width: "25%",
            zIndex: 55,
          }}
          component={"img"}
          src={"/img/LOGO SAN LUIS DEL TOMO.png"}
        />
        <Typography textAlign={"center"}>Escudo</Typography>
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
              fontWeight: 300,
              fontSize: "1.5rem",
              width: "50%",
              textAlign: "center",
            }}
          >
            Datos
          </Box>
          <Box
            sx={{
              fontWeight: 300,
              fontSize: "1.5rem",
              width: "50%",
              textAlign: "center",
            }}
          >
            Descripción
          </Box>

          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Resguardo:</Box>
            <Box sx={{ width: "50%" }}>San Luis del Tomo</Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Ubicación:</Box>
            <Box sx={{ width: "50%" }}>
              Se encuentra en inmediaciones de la inspección de tres matas y
              limita con el Rio Tomo y los caños Urimica y Samarro.
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Extensión:</Box>
            <Box sx={{ width: "50%" }}>24.746 Ha. 3.230 M2</Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Temperatura:</Box>
            <Box sx={{ width: "50%" }}>Entre 24ºC y 29ºC</Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Etnia:</Box>
            <Box sx={{ width: "50%" }}>
              Sikuani clanes majamomobi, majümomobi, ocaramomobi y metsamomobi
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Lengua:</Box>
            <Box sx={{ width: "50%" }}>Sikuani </Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Población:</Box>
            <Box sx={{ width: "50%" }}>790 pobladores y 158 familias. </Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Modo de vida:</Box>
            <Box sx={{ width: "50%" }}>Sedentario inicialmente nomadismo.</Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Alimentación:</Box>
            <Box sx={{ width: "50%" }}>
              Seje, cucurito, el moriche y frutas silvestres.
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Mapa:</Box>
            <Box sx={{ width: "50%" }}></Box>
          </Box>
          <Box
            sx={{
              marginTop: 2,
              borderBottom: "1px solid #7DDFCC",
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              textAlign: "center",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>Plan de vida:</Box>
            <Box sx={{ width: "50%" }}></Box>
          </Box>
        </Box>
        <Typography sx={{ fontWeight: "bold", mt: 2 }}>
          Fuente: Plan de Vida resguardo San Luis del Tomo.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "50px",
        }}
      />

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
          onClick={() => navigate("/conocimiento/reguardo/rios-tomo-y-beweri")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Resguado Ríos Tomo y Beweri
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
          onClick={() => navigate("/conocimiento/reguardo/la-esmeralda")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Resguardo La Esmeralda</Typography>
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

export default ResguardoSanLuis;
