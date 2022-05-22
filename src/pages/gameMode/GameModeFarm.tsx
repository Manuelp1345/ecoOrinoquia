import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const GameModeFarm = () => {
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
        Farm
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
        El modo farm o agricultura consiste en plantar árboles de doble
        propósito tanto para la alimentación de los resguardos indígenas como
        para la preservación del medioambiente.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Una vez plantados los árboles NFT, tardarán un tiempo de 7 años (1 año
        representan un día en el calendario), en producir 7 fichas de oxígeno.
        Los árboles NFT tendrán una vida máxima de generación de oxígeno de 70
        años (70 días en el calendario o 10 semanas).
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Un árbol genera 7 fichas de oxígeno cada 7 días, siempre y cuando cumpla
        diariamente en aplicar agua, nutrientes o polvo mágico y no se vea
        afectado por los micos y el pájaro makoko.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        La hora de reinicio de un nuevo día es a las 00:00 UTC y cada jugador
        tendrá 24 horas para aplicar agua, nutrientes o polvo mágico y hasta las
        23:59 UTC para correr a los micos y el pájaro makoko, si sus árboles han
        sido afectado por este evento. Cada árbol NFT tiene la probabilidad
        diaria del 30% de verse afectado en los siguientes horarios 04:00, 08:00
        y 12:00 UTC. Una unidad de agua, nutrientes o polvo mágico es suficiente
        para un máximo de 3 árboles por día.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        En caso de no aplicar agua, nutrientes o polvo mágico o correr a los
        micos y el pájaro makoko si es el caso, no producirá fichas de Oxígeno.
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
          onClick={() => navigate("/play-to-earn/gamemode")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Play to Earn - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Modalidad de juego
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
          onClick={() => navigate("/play-to-earn/GameMode/PvP")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">PvP</Typography>
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

export default GameModeFarm;
