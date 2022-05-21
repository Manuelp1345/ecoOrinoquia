import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowRightAlt } from "@mui/icons-material";

const Intro = () => {
  return (
    <>
      <Toolbar />
      <Typography marginTop={{ xs: 10, sm: 0 }} fontSize={"40px"}>
        Introducción
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "50px",
        }}
      />
      <Typography marginBottom={2} fontSize={"30px"}>
        Bienvenido!
      </Typography>

      <Typography color={"#7DDFCC"} paragraph>
        Sur América cuenta con regiones esenciales para la vida, la cuenca del
        Rio Orinoco naciente en la Cordillera de Parima, Cerro Delgado Chalbaud
        entre Venezuela y Brasil, recorriendo 2,250 kilómetros al cual le llegan
        más de 200 afluentes mayores y 600 menores bañando selvas, praderas,
        altillanuras, bosques inundados siendo así la segunda más biodiversa del
        planeta después de la amazonia.
      </Typography>
      <Typography color={"#7DDFCC"} paragraph>
        Con su gran riqueza hídrica, su diversidad en población y cultura, solo
        Colombia cuenta con más de 87 pueblos indígenas y de ellos 39 en la
        orinoquia, los U ‘Wa, Sáliva, Kurripaco, Piapoco, Piaroa, Sikuani,
        Puinawe entre otros y guardianes de los ecosistemas y biodiversidad de
        la región, su extenso territorio que presenta gran importancia como
        medio de comunicación y de difícil acceso en invierno pero con un gran
        potencial fluvial, desarrollo agroindustrial, sus inmensas sabanas de
        altillanura e inundables como futura despensa agrícola y pecuaria para
        el mundo, paisajes y ecosistemas acuáticos y terrestres no muy
        explorados, culturas indígenas en todos sus territorios y es así una de
        las regiones con menor ocupación, pero con altas perspectivas mineras,
        hidrocarburos, forestales, agrícolas, pecuarias, turísticas e
        industriales, es así la importancia de potencializar a quienes
        preservan, protegen y son guardianes del territorio.
      </Typography>
      <Typography color={"#7DDFCC"} paragraph>
        Las comunidades indígenas han estado olvidadas por mucho tiempo y más
        las de estos terrenos apartados del centralismo de los gobiernos. La
        tecnología va a una velocidad en desarrollo que muchos no la entendemos
        pero es esta el mejor vehículo para llegar a un mundo que puede ser
        parte del proyecto que entra a proteger el medio ambiente, restaurar lo
        que se ha dañado, reforestar y potencializar la conectividad biótica,
        brindar seguridad alimentaria, fortalecer cultura, arte y costumbres que
        el proyecto busca.
      </Typography>
      <Typography color={"#7DDFCC"} paragraph>
        Dispóngase a conocer EcoOrinoquia un ecosistema crypto basado en la
        región de la Orinoquia colombiana, y respaldado por las comunidades
        Indigenas de la región.
      </Typography>

      <Box
        className="btnContent"
        padding={3}
        component={"div"}
        sx={{
          background: "#0D5043",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textDecoration: "none",
          color: "#7DDFCC",
        }}
      >
        <Box>
          <Typography variant="subtitle2">
            Próximo - Creando conciencia
          </Typography>
          <Typography variant="subtitle1">Conociendo</Typography>
        </Box>
        <ArrowRightAlt sx={{ fontSize: "45px", color: "#37C7AB" }} />
      </Box>

      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "75px",
        }}
      />
    </>
  );
};

export default Intro;
