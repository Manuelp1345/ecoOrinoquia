import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Team = () => {
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
        Team
      </Typography>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #37C7AB",
          marginTop: "34px",
          marginBottom: "50px",
        }}
      />
      
      <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", rowGap: "30px", maxWidth: "1200px", mb: 5, mr: "auto", ml: "auto" }}>
        
        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_rios_tomo_y_beweri_Jose_Emiro_Chipiaje.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            José Emiro Chipiaje Gaitán{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Ríos Tomo y Beweri
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_san_luis_del_tomo_Belisario_Itanare.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Beisario Itanare{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            San Luis del Tomo
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_la_esmeralda_Dilmer_Navarro.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Dilmer Navarro Díaz{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            La Esmeralda
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_valdivia_Jhon_Ospina.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Jhon Ospina Navarro{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Valdivia
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_punta_banderas_Pascual_Navarro.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Pascual Navarro{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Punta Bandera
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_kawaneruba_Pablo_Cristian_Sanchez_Rojas.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Pablo Cristian Sanchez Rojas{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Kawaneruba
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_rios_muco_y_guarrojo_Armando_Mancipe.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Armando Mancipe{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Ríos Muco y Guarrojo
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_unuma_Adolfo_ferrer.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Adolfo Ferrer{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Unuma
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_guaco_bajo_y_guaco_alto_Luis_Rodriguez.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Luis Rodriguez Cumanaica{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Guaco Bajo y Guaco Alto
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_merey_la_veraita_Arnoldo_Castañeda.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Arnoldo Catañeda Rodriguez{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Merey la Veraita
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_nueva_esperanza_del_tomo_José_Alexander_Gaitán_Chipiaje.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            José Alexander Gaitán Chipiaje{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Nueva Esperanza del Tomo
          </Typography>
        </Button>

        <Button
          // onClick={() => {
          //   setOpen(true);
          //   setImgUrl("img/m2.png");
          //   setText({
          //     nombre: "Eder Martello Mayorga",
          //     puesto:
          //       "Director of Environment, Sustainability and Development",
          //     descripcion:
          //       "Martello M",
          //   });
          // }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          <Box
            sx={{
              border: "5px solid #fff",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}
          >
            <Box component="img" src="img/g_santa_teresita_del_tuparro_Hernán Bonilla.jpeg" sx={{ maxHeight: 150 }} />
          </Box>
          <Typography sx={{ color: "white"}}>
            Hernán Bonilla{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Santa Teresita Del Tuparro
          </Typography>
        </Button>

      </Box>

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
          onClick={() => navigate("/play-to-earn/sostenibilidad-finaciera")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Quienes Somos - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Sostenibilidad financiera
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
          onClick={() => navigate("/redes-sociales")}
        >
          <Box>
            <Typography variant="subtitle2">Próximo</Typography>
            <Typography variant="subtitle1">Redes Sociales</Typography>
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

export default Team;
