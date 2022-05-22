import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ResguardoRiosMuco = () => {
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
        Resguardo Ríos Muco y Guarrojo
        <br />
        <br />
      </Typography>
      <Box
        sx={{
          width: "100%",
          zIndex: 55,
        }}
        component={"img"}
        src={"/img/RESGUARDO KAWANERUBA.png"}
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
          src={"/img/LOGO KAWANERUBA.png"}
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
            <Box sx={{ width: "50%" }}>Ríos Muco y Guarrojo</Box>
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
              Margen izquierdo del rio Guarrojo, a 250 km de Puerto Gaitán
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
            <Box sx={{ width: "50%" }}>84.000 Ha.</Box>
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
            <Box sx={{ width: "50%" }}>Entre 24°C y 29°C.</Box>
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
            <Box sx={{ width: "50%" }}>Sikuani.</Box>
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
            <Box sx={{ width: "50%" }}>Sikuani. </Box>
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
            <Box sx={{ width: "50%" }}>99 pobladores y 17 familias.</Box>
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
              Plátano, caña, distintas variedades de yuca, maíz, ají, piña,
              kasave, mañoco, peces, micos, dantas, chigüiros, lapas y venados.
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
          Fuente: Plan de Vida resguardo Ríos Muco y Guarrojo.
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
          onClick={() => navigate("/conocimiento/reguardo/Kawaneruba")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Resguardo Kawaneruba
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
          onClick={() => navigate("/Educando")}
        >
          <Box>
            <Typography variant="subtitle2">
              Próximo - Creando Conciencia
            </Typography>
            <Typography variant="subtitle1">Educando</Typography>
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

export default ResguardoRiosMuco;
