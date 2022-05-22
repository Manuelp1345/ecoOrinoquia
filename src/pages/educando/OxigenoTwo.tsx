import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OxigenoTwo = () => {
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
        ¿Cómo se produce el oxígeno?
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
        Se Produce bajo muchos procesos a nivel mundial, pero para nuestro caso
        los mas fundamentales son los mecanismos bioquímicos que adelanta la
        naturaleza un grupo enorme de millones de seres trabajando en conjunto
        bajo procesos fundamentales, mecanismos biológicos que también algunas
        bacterias lo ejecutan con base energética las ondas electromagnéticas
        del sol y ayudan a romper las moléculas y liberar el preciado gas, la
        superficie de nuestro planeta con su cobertura verde y selvas tropicales
        producen un porcentaje muy alto de oxígeno, pero el impacto es mayor
        cuando volteamos la mirada y vemos cierto grupo de bacterias y
        acompañadas a ellas millones la microalgas llamadas fitoplancton en la
        tarea fundamental de la producción de oxígeno, la fotosíntesis proceso
        de absorber dióxido de carbono y reaccionar con la luz solar para
        producir azucares que los organismos necesitan y otros productos, pero
        otro porcentaje se libera cada vez que los glaciares se derriten y
        sueltan no solo oxigeno retenido sino un gran numero de gases que por
        mucho años esperan a ser liberados e ir a la atmosfera.
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
          onClick={() => navigate("/Educando/1")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              ¿Qué es el oxígeno?
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
          onClick={() => navigate("/Educando/3")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">
              ¿Cuánto oxígeno produce un árbol?
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

export default OxigenoTwo;
