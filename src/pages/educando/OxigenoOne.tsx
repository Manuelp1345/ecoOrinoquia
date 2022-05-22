import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OxigenoOne = () => {
  const navigate = useNavigate();

  return (
    <Box
      className="container"
      sx={{
        marginLeft: { sm: 26 },
        marginTop: { sm: 17 },
        paddingLeft: { sm: "78px" },
        p: 3,
        py: 10,
      }}
    >
      <Toolbar />
      <Typography marginTop={{ xs: 10, sm: 0 }} fontSize={"40px"}>
        ¿Qué es el oxígeno?
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
        Parte de la evolución y el desarrollo de la vida se la agradecemos a un
        grupo de elementos indispensables, entre ellos el numero 8 elemento
        Químico no metal representado por la letra (O) mayúscula, es un gas y
        excelente carburante presente frecuente como O2 presente en nuestra
        atmosfera y vital para los seres vivos, en la composición O3 es llamado
        Ozono reflejante de la radiación ultravioleta que emite el sol, pero
        siendo mas del 20% de nuestra atmosfera lo conocemos como parte
        indispensable del proceso de respiración humana y como compañero
        fundamental de la molécula del agua fundamental para la vida en el
        planeta.
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
          onClick={() => navigate("/Educando")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Educando
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
          onClick={() => navigate("/Educando/2")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">
              ¿Cómo se produce el oxígeno?
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

export default OxigenoOne;
