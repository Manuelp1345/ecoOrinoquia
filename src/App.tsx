import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./App.css";
import { Container } from "./utils/Container";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 260;
const listConocimientos = [
  "Ubicación",
  "Historia",
  "Flora",
  "Fauna",
  "Problemática actual",
  "Resguardos indígenas",
];

export const App = ({
  window,
  Element,
}: {
  window?: () => Window;
  Element: JSX.Element;
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openConocimiento, setOpenConocimiento] = React.useState(false);
  const [openDivision, setOpenDivision] = React.useState(false);
  const [openEducando, setOpenEducando] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile =
    window !== undefined ? () => window().document.body : undefined;
  console.log(isMobile);
  switch (location.pathname) {
    case "/Introduccion":
      document.getElementsByClassName("active") &&
        document
          .getElementsByClassName("active")[0]
          ?.classList.remove("active");
      document.querySelector("#intro")?.classList.add("active");
      break;
    case "/conocimiento":
      document.getElementsByClassName("active")[0] &&
        document
          .getElementsByClassName("active")[0]
          ?.classList.remove("active");
      document.querySelector("#conocimiento")?.classList.add("active");
      break;
    case "/Educando":
      document.getElementsByClassName("active")[0] &&
        document
          .getElementsByClassName("active")[0]
          ?.classList.remove("active");
      document.querySelector("#Educando")?.classList.add("active");
      break;

    default:
      break;
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#072E26",
          position: "relative",
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: "#072E26",
            backgroundImage: "url(img/leopardo.svg)",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "hard-light",
            backgroundSize: "100%",
            height: { sm: "200px" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: { sm: `100%` },
              height: { sm: "200px" },
              background:
                "linear-gradient(97.52deg, #002F46 12.98%, #106756 71.35%)",
              opacity: 0.5,
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              marginLeft={["21%"]}
              fontFamily="Inika"
              fontWeight={700}
              fontSize={[20, 25, 100, 128, 150]}
              textAlign="center"
              noWrap
              color={"#BBA247"}
            >
              EcoOrinoquia
            </Typography>
          </Box>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List
          sx={{
            width: drawerWidth,
            backgroundColor: "#072E26",
            height: "100vh",
            overflowY: "scroll",
            position: "fixed",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            marginRight={5}
            color={"#FEE487"}
            fontFamily="Inika"
            fontWeight={700}
            fontSize={23}
            marginTop={3}
            marginBottom={-7}
            marginLeft={5}
          >
            EcoOrinoquia
          </Typography>
          <Toolbar />
          <Divider />
          <Typography
            component="div"
            marginRight={5}
            color="#1A6B5C"
            fontFamily="Inter"
            fontWeight={700}
            fontSize={15.7}
            marginTop={3}
            marginLeft={1.5}
            noWrap
          >
            CREANDO CONCIENCIA
          </Typography>

          <ListItemButton onClick={() => navigate("/Introduccion")}>
            <ListItemText
              id="intro"
              primary={"Introducción"}
              sx={{ color: "white" }}
            />
          </ListItemButton>
          <ListItem key={"Conociendo"} disablePadding>
            <ListItemButton
              onClick={() => {
                setOpenConocimiento((prevOpen) => !prevOpen);
                openEducando && setOpenEducando(false);
                navigate("/conocimiento");
              }}
            >
              <ListItemText
                id="conocimiento"
                primary="Conociendo"
                sx={{ color: "white" }}
              />
              {openConocimiento ? (
                <ExpandLess sx={{ color: "white" }} />
              ) : (
                <ExpandMore sx={{ color: "white" }} />
              )}
            </ListItemButton>
          </ListItem>
          <Collapse in={openConocimiento} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {listConocimientos.map((text) => (
                <ListItem key={text}>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemText
                      primary={text}
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem key={"division"}>
                <ListItemButton
                  onClick={() => setOpenDivision((prevOpen) => !prevOpen)}
                >
                  <ListItemText
                    primary="División politico territorial de los resguardos firmantes del convenio"
                    sx={{
                      color: "white",
                      borderLeft: "3px solid #0C453A",
                      pl: 1,
                    }}
                  />
                  {openDivision ? (
                    <ExpandLess sx={{ color: "white" }} />
                  ) : (
                    <ExpandMore sx={{ color: "white" }} />
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse in={openDivision} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 5 }}>
                    <ListItemText
                      primary="Resguado Ríos Tomo y Beweri"
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 5 }}>
                    <ListItemText
                      primary="Resguardo San Luis del Tomo"
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 5 }}>
                    <ListItemText
                      primary="Resguardo La Esmeralda"
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 5 }}>
                    <ListItemText
                      primary="Resguardo Valdivia"
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 5 }}>
                    <ListItemText
                      primary="Resguardo Punta Bandera"
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 5 }}>
                    <ListItemText
                      primary="Resguardo Kawaneruba"
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 5 }}>
                    <ListItemText
                      primary="Resguardo Ríos Muco y Guarrojo"
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 5 }}>
                    <ListItemText
                      primary="Resguardo Ríos Muco y Guarrojo"
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Collapse>
          <ListItem key={"Educando"} disablePadding>
            <ListItemButton
              onClick={() => {
                setOpenEducando((prevOpen) => !prevOpen);
                openConocimiento && setOpenConocimiento(false);
                openDivision && setOpenDivision(false);
                navigate("/Educando");
              }}
            >
              <ListItemText
                id="Educando"
                primary="Educando"
                sx={{ color: "white" }}
              />
              {openEducando ? (
                <ExpandLess sx={{ color: "white" }} />
              ) : (
                <ExpandMore sx={{ color: "white" }} />
              )}
            </ListItemButton>
          </ListItem>
          <Collapse in={openEducando} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {listConocimientos.map((text) => (
                <ListItem key={text}>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemText
                      primary={text}
                      sx={{
                        color: "white",
                        borderLeft: "3px solid #0C453A",
                        pl: 1,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

          <Divider />
          <Typography
            component="div"
            marginRight={5}
            color="#1A6B5C"
            fontFamily="Inter"
            fontWeight={700}
            fontSize={15.7}
            marginTop={3}
            marginLeft={1.5}
            noWrap
          >
            ECOORINOQUIA
          </Typography>

          {[
            "¿Qué es EcoOrinoquia?",
            "EcoOrinoquia Token",
            "Tokenomics EcoOrinoquia",
            "Gobernanza",
            "Mapa Ruta",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/*               <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "white" }} />
                ) : (
                  <MailIcon sx={{ color: "white" }} />
                )}
              </ListItemIcon> */}
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider />
          <Typography
            component="div"
            marginRight={5}
            color="#1A6B5C"
            fontFamily="Inter"
            fontWeight={700}
            fontSize={15.7}
            marginTop={3}
            marginLeft={1.5}
            noWrap
          >
            PLAY TO EARN
          </Typography>
          {[
            "Orinoquia",
            "Items",
            "Recompensas",
            "Modalidad de juego",
            "Roi",
            "Mercado",
            "Tienda",
            "Sostenibilidad financiera",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/*               <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "white" }} />
                ) : (
                  <MailIcon sx={{ color: "white" }} />
                )}
              </ListItemIcon> */}
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
          <Typography
            component="div"
            marginRight={5}
            color="#1A6B5C"
            fontFamily="Inter"
            fontWeight={700}
            fontSize={15.7}
            marginTop={3}
            marginLeft={1.5}
            noWrap
          >
            QUIENES SOMOS
          </Typography>

          <ListItem key={"Team"} disablePadding>
            <ListItemButton>
              <ListItemText primary="Team" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"Redes sociales"}
            sx={{ marginBottom: 5 }}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="Redes sociales" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Container
          drawerWidth={drawerWidth}
          page="introduccion"
          Element={Element}
        />
      </Box>
    </>
  );
};

export default App;
