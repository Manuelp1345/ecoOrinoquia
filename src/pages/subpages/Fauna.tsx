import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Fauna = () => {
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
        Fauna
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "50px",
        }}
      />
      <Typography marginBottom={1} color={"#7DDFCC"} paragraph>
        La fauna comprende todos los animales de la orinoquia, desde aves
        menores a mayores, de mamíferos menores a mayores e insectos anfibios y
        en las aguas quietas y corrientes todas las especies se consolidan en su
        territorio, según la época del año los grupos indígenas denominan el
        tiempo a la especie dominante o en reproducción de la siguiente manera,
        tiempo de tortuga terecay, tiempo de peces, tiempo de subienda de peces,
        tiempo de lapa, tiempo de tortuga mata mata, tiempo de cachicamo o
        armadillo, tiempo cachirre o babilla, tiempo de iguana, pero también
        interactúan con muchos grupos de animales como ; Caimán del Orinoco,
        Dantas, Venados, Garzas, Cerdos silvestres, Ranas, Boa constrictor, Oso
        hormiguero, Gallinetas, Chigüiro, Pavas, Cascabel, Tigre mariposo,
        Tucanes, Puma, Pez temblón, Cardenales, Payára
        <br />
        <br />
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
          onClick={() => navigate("/conocimiento/flora")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Flora
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
          }}
          onClick={() => navigate("/conocimiento/problematica-actual")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Problemática actual</Typography>
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

export default Fauna;
