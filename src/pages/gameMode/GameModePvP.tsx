import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const GameModePvP = () => {
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
        PvP
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
        Para jugar ésta modalidad debe adquirir un indígena NFT donde cada uno
        tiene 4 cartas con poderes ancestrales basados en hechizo, rezos o
        elementos de la naturaleza (tierra, fuego, agua, aire), los poderes
        están basados en las habilidades dominantes de cada resguardo, así como
        en sus creencias.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Para iniciar la batalla, de las 4 cartas se le asignará 2 cartas de
        forma aleatoria por cada round y quien pierda el round se le restará un
        (1) punto de los 5 puntos de vida que tiene cada jugador. Si hay empate
        en el round se descontará un (1) punto de vida a ambos jugadores, al
        final de la batalla si hay un empate no genera recompensas.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        La cantidad de recompensas a recibir por partida ganada es una (1) ficha
        oxígeno O2.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Cada jugador tiene la oportunidad de participar en 3 batallas
        diariamente, teniendo un máximo de 2 batallas adicionales con la
        condición de participar en el modo de dominio de resguardo.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Se jugará por temporadas y cada victoria sumará 1 punto para la
        clasificación del ranking general. Luego de finalizada la temporada se
        inicializarán a cero (0) el ranking.
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
          onClick={() => navigate("/play-to-earn/gamemode/farm")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Play to Earn - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Farm
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
          onClick={() => navigate("/play-to-earn/GameMode/dominio-resguardo")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Dominio Resguardo</Typography>
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

export default GameModePvP;
