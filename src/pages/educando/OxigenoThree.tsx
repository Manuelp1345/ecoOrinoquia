import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OxigenoThree = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        marginLeft: { sm: 26 },
        marginTop: { sm: 17 },
        paddingLeft: { sm: "78px" },
        p: 3,
        backgroundImage: "url(img/rios.png)",
        backgroundPosition: [[12, 12]],
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Toolbar />
      <Typography marginTop={{ xs: 10, sm: 0 }} fontSize={"40px"}>
        ¿Cuánto oxígeno produce un árbol?
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
        El bosque como ente primordial de producción de oxígeno depende de un
        gran número de variables, entre ellas sus especies, desarrollo de su
        diámetro y cantidad de biomasa, su edad, su entorno su salud, su habitad
        ya que un árbol produce diferentes cantidades si esta en un sector de
        estaciones o si esta en una zona tropical, sin tener valores
        consolidados, se ha podido calcular que un árbol de presentación
        frondosa y sano mantendría a 10 personas respirando al año más o menos
        pueden ser 260 libras de oxígeno y podría absorber 21 kilogramos de
        dióxido de carbono, teniendo en cuenta que un automóvil promedio
        produciría al recorrer 40.000 kilómetros lo equivalente a dos años de
        movimientos de un carro familiar, cabe anotar que cada vez necesitamos
        mayor numero de arboles para producir oxígeno, debido a la tala
        indiscriminada forestal la gran mayoría de árboles llegan difícilmente a
        su estado adulto y menos a su clímax de crecimiento esta consecuencia ha
        presentado mayor número de individuos jóvenes en un bosque.
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
          }}
          onClick={() => navigate("/Educando/1")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              ¿Cuánto oxígeno produce un árbol?
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
          onClick={() => navigate("/Educando/4")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">
              ¿Cuánto cuesta plantar un árbol?
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

export default OxigenoThree;
