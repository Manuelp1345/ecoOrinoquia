import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const GameModeDominio = () => {
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
        Dominio Resguardo
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
        Para jugar ésta modalidad se deben seleccionar un resguardo y apostar 2
        fichas de oxígeno O2, donde al final del día los jugadores que hayan
        seleccionado el resguardo con la mayor cantidad de fichas apostadas
        recibirán de forma equitativa el 50% del pool de monedas de oxígeno
        apostadas, si existe un empate entre 2 o más resguardos se aplicará un
        algoritmo de aleatoriedad entre los resguardos que hayan empatado. El
        30% se destinarán a ayudar al resguardo ganador y el 20% se usará para
        mejoras del juego. Estos fondos serán liquidados cada 3 días.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Con la participación de esta modalidad se activarán de forma inmediata 2
        batallas adicionales en el modo pvp, las mismas deben ser jugadas antes
        de las 00:00 UTC del día de la apuesta debido a que no son acumulables.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Con ésta modalidad de juego permite contribuir con la economía del
        ecosistema y lo más importante ayudar el medioambiente y las comunidades
        indígenas de la Orinoquia colombiana.
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
          onClick={() => navigate("/play-to-earn/gamemode/PvP")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Play to Earn - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              PvP
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
          onClick={() => navigate("/play-to-earn/Roi")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Roi</Typography>
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

export default GameModeDominio;
