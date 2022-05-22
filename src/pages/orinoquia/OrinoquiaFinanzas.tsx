import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OrinoquiaFinanzas = () => {
  const navigate = useNavigate();

  return (
    <Box
      className="container"
      sx={{
        marginLeft: { sm: 26 },
        marginTop: { sm: 17 },
        paddingLeft: { sm: "78px" },
        p: 3,
        pb: 10,
      }}
    >
      <Toolbar />
      <Typography marginTop={{ xs: 10, sm: 0 }} fontSize={"40px"}>
        Sostenibilidad financiera
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
        Para que la rentabilidad pueda perdurar en el tiempo es necesario que
        sea ajustada a unos porcentajes que todo el ecosistema económico de
        EcoOrinoquia capte y administre del mundo real.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        Por esta razón que los porcentajes de ganancia o rentabilidad en el
        juego Orinoquia son bajos, porque su objetivo principal es crear
        conciencia medioambiental y dar a conocer el valor histórico y cultural
        de los resguardos indígenas de la Orinoquia.
      </Typography>
      <Typography marginBottom={2} color={"#7DDFCC"} paragraph>
        EL sistema económico del juego Orinoquia se basa en la tradición
        indígena Sikuani UNUMA que pone todo su esfuerzo en lo colaborativo. Es
        por eso que los recursos para el pago de recompensas se provienen de:
        <ul>
          <li>El 90 % por venta de NFT.</li>
          <li>
            El 2% de las comisiones de compra y venta de NFT en el mercado.
          </li>
          <li>El 5% de lo facturado en la tienda de productos y servicios.</li>
          <li>
            Parte del 3% de Marketing y campaña de concientización del token
            EcoOrinoquia.
          </li>
          <li>
            El 90% de lo captado a través de empresas y organizaciones
            patrocinantes, que se les permitirá mostrar sus marcas dentro del
            juego.
          </li>
        </ul>
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
          onClick={() => navigate("/play-to-earn/tienda")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Play to Earn - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Tienda
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
          onClick={() => navigate("/team")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Team</Typography>
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

export default OrinoquiaFinanzas;
