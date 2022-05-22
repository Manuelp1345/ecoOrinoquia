import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ProblematicaActual = () => {
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
        Problemática actual
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
        Entre las problemáticas sikuani se identifica la progresiva
        sedentarización, la cual trajo consigo cambios culturales, que han
        generado problemas a diferentes niveles: por un lado, aún fundamentan su
        dieta en el modelo de economía tradicional, a pesar de que el espacio
        geográfico en el que se encuentran es reducido y la oferta animal ha
        decaído. De este modo, por estas razones no existe una soberanía
        alimentaria, debido a la ausencia de cultivos de pancoger, que han
        producido déficit nutricional, y han creado condiciones para la
        mendicidad de las familias en las calles del municipio, a lo cual se
        suma la falta de actividad ocupacional que mantenga cohesionada a cada
        familia en torno a un proyecto de vida (Suárez, 2008).
        <br />
        <br />
        Al respecto, un sabedor sikuani manifiesta que el sedentarismo exige
        tecnología, y a esta la comunidad no tiene acceso.
        <br />
        <br />
        La presencia de colonos que ejercen presión sobre el territorio y los
        recursos se configura como un factor que pone en riesgo la seguridad
        alimentaria del pueblo y el control territorial, y que a partir de las
        relaciones desiguales que se presentan entre estos y las comunidades
        sikuanis, se han generado impactos sobre la continuidad cultural del
        pueblo.
        <br />
        <br />
        La presencia de cultivos de uso ilícito y grupos armados al margen de la
        ley han sido factores de gran riesgo físico y cultural para el pueblo. A
        partir de la bonanza cocalera que se estableció en la región, muchos
        sikuanis abandonaron la producción y transformación tradicional de
        alimentos a cambio de trabajar en la recolección de la hoja de coca, ya
        que representaban mayores ganancias. Con el tiempo, el desuso del conuco
        significó la reducción de la variedad de plantas usadas para la
        alimentación, y ante el declive de la bonanza cocalera y la reducción de
        los ingresos, se intensificó la inseguridad alimentaria que sufre este
        pueblo.
        <br />
        <br />
        Las dinámicas sociales y culturales de los cultivos de uso ilícito
        también conllevaron a un cambio en los valores sikuanis, que está
        directamente relacionado con el aumento del alcoholismo y el uso de
        substancias psicoactivas, así como comportamientos de alejamiento y
        desinterés, especialmente de los jóvenes, de la tradición.
        <br />
        <br />
        En repetidas ocasiones el pueblo Sikuani ha hecho un llamado a las
        entidades estatales e internacionales a realizar una veeduría y control
        sobre las actividades de extracción petrolera en su territorio pues
        manifiestan que la consulta previa no se realiza de acuerdo con los
        estándares internacionales ni respetando los derechos que la
        Constitución de 1991 dispone para los pueblos indígenas, lo que actúa en
        detrimento de la cultura y la autonomía territorial.
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
            zIndex: 1,
          }}
          onClick={() => navigate("/conocimiento/flora")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Creando conciencia - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Fauna
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
          onClick={() => navigate("/conocimiento/resguardo-indigena")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Resguardos indígenas</Typography>
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

export default ProblematicaActual;
