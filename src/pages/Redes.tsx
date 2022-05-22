import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Redes = () => {
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
        Redes Sociales
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
        Nuestros enlace oficiales de página y redes sociales.
        <br />
        <br />
        Sólo use nuestros links de página y redes sociales oficiales.
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
            zIndex: 1,
          }}
          onClick={() => window.open("https://ecoorinoquia.org/", "_blank")}
        >
          <Box>
            <Typography variant="subtitle1">SolTech Group</Typography>
            <Typography variant="subtitle2">
              Página Oficial de la Fundación EcoOrinoquia
            </Typography>
          </Box>
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
          onClick={() => window.open("https://ecoorinoquia.io/", "_blank")}
        >
          <Box>
            <Typography variant="subtitle1">SolTech Group</Typography>
            <Typography variant="subtitle2">
              Página Oficial del Token EcoOrinoquia
            </Typography>
          </Box>
        </Box>
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
            zIndex: 1,
          }}
          onClick={() =>
            window.open(
              "https://discord.com/channels/@me/870697285569372160",
              "_blank"
            )
          }
        >
          <Box>
            <Typography variant="subtitle1">Discord</Typography>
          </Box>
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
          onClick={() =>
            window.open("https://telegram.org/ecoorinoquia", "_blank")
          }
        >
          <Box>
            <Typography variant="subtitle1">Telegram</Typography>
          </Box>
        </Box>
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
            zIndex: 1,
          }}
          onClick={() =>
            window.open("https://mobile.twitter.com/ecoorinoquia", "_blank")
          }
        >
          <Box>
            <Typography variant="subtitle1">Twitter</Typography>
          </Box>
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
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/ecoorinoquia",
              "_blank"
            )
          }
        >
          <Box>
            <Typography variant="subtitle1">Youtube</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", mb: 5 }}>
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
          onClick={() =>
            window.open("https://www.facebook.com/eco.orinoquia/", "_blank")
          }
        >
          <Box>
            <Typography variant="subtitle1">Facebook</Typography>
          </Box>
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
          onClick={() =>
            window.open("https://www.instagram.com/ecoorinoquia/", "_blank")
          }
        >
          <Box>
            <Typography variant="subtitle1">Instragram</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box
          className="btnContent"
          padding={3}
          component={"div"}
          sx={{
            background: "#0D5043",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: "#7DDFCC",
            flexDirection: "row-reverse",
            zIndex: 1,
          }}
          onClick={() => navigate("/team")}
        >
          <Box>
            <Typography textAlign={"right"} variant="subtitle2">
              Quienes Somos - Anterior
            </Typography>
            <Typography textAlign={"right"} variant="subtitle1">
              Team
            </Typography>
          </Box>
          <ArrowLeft sx={{ fontSize: "45px", color: "#37C7AB" }} />
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

export default Redes;
