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
import { ExpandMore, ArrowForwardIos } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 260;
const listConocimientos = [
  "Ubicación",
  "Historia",
  "Flora",
  "Fauna",
  "Problemática actual",
  "Resguardos indígenas",
];
const listEducando = [
  "¿Qué es el oxígeno?",
  "¿Cómo se produce el oxígeno?",
  "¿Cuánto oxígeno produce un árbol?",
  "¿Cuánto cuesta plantar un árbol?",
  "¿Cuál es el tiempo de vida de un árbol?",
  "¿Cuánto oxígeno necesita un humano para vivir?",
];

const listGameMode = ["Farm", "PvP", "Dominio Resguardo"];
export const App = ({
  window: windowMovil,
  Element,
}: {
  window?: () => Window;
  Element: JSX.Element;
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openConocimiento, setOpenConocimiento] = React.useState(false);
  const [openDivision, setOpenDivision] = React.useState(false);
  const [openEducando, setOpenEducando] = React.useState(false);
  const [OpenGameMode, setOpenGameMode] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const drawer = (
    <List
      sx={{
        width: drawerWidth,
        backgroundColor: "#072E26",
        overflowX: "hidden",
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
            <ExpandMore sx={{ color: "white" }} />
          ) : (
            <ArrowForwardIos sx={{ color: "white", fontSize: 16 }} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openConocimiento} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listConocimientos.map((text, index) => (
            <ListItem
              key={text}
              onClick={() =>
                (index === 0 && navigate(`/conocimiento/ubicacion`)) ||
                (index === 1 && navigate(`/conocimiento/historia`)) ||
                (index === 2 && navigate(`/conocimiento/flora`)) ||
                (index === 3 && navigate(`/conocimiento/fauna`)) ||
                (index === 4 &&
                  navigate(`/conocimiento/problematica-actual`)) ||
                (index === 5 && navigate(`/conocimiento/resguardo-indigena`))
              }
              sx={{
                marginLeft: 1.5,
                borderLeft: "3px solid #0C453A",
                borderTop: index === 0 ? "3px solid #0C453A" : "none",
              }}
            >
              <ListItemButton>
                <ListItemText
                  primary={text}
                  sx={{
                    color: "white",
                    pr: 2,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem
            key={"division"}
            sx={{
              borderLeft: "3px solid #0C453A",
              marginLeft: 1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListItemButton
              onClick={() => {
                setOpenDivision((prevOpen) => !prevOpen);
                navigate(`/conocimiento/Division-politico-territorial`);
              }}
            >
              <ListItemText
                primary="División politico territorial de los resguardos firmantes del convenio"
                sx={{
                  color: "white",
                  pr: 2,
                }}
              />
              {openDivision ? (
                <ExpandMore sx={{ color: "white" }} />
              ) : (
                <ArrowForwardIos sx={{ color: "white", fontSize: 16 }} />
              )}
            </ListItemButton>
          </ListItem>
          <Collapse in={openDivision} timeout="auto" unmountOnExit>
            <List
              sx={{ marginLeft: 1.5, borderLeft: "3px solid #0C453A" }}
              component="div"
              disablePadding
            >
              <ListItem
                sx={{
                  marginLeft: 1,
                  borderLeft: "3px solid #0C453A",
                  borderTop: "3px solid #0C453A",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Resguado Ríos Tomo y Beweri"
                    sx={{
                      color: "white",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  marginLeft: 1,
                  borderLeft: "3px solid #0C453A",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Resguardo San Luis del Tomo"
                    sx={{
                      color: "white",
                      pr: 3,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  marginLeft: 1,
                  borderLeft: "3px solid #0C453A",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Resguardo La Esmeralda"
                    sx={{
                      color: "white",
                      pr: 3,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  marginLeft: 1,
                  borderLeft: "3px solid #0C453A",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Resguardo Valdivia"
                    sx={{
                      color: "white",
                      pr: 3,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  marginLeft: 1,
                  borderLeft: "3px solid #0C453A",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Resguardo Punta Bandera"
                    sx={{
                      color: "white",
                      pr: 3,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  marginLeft: 1,
                  borderLeft: "3px solid #0C453A",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Resguardo Kawaneruba"
                    sx={{
                      color: "white",
                      pr: 3,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  marginLeft: 1,
                  borderLeft: "3px solid #0C453A",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Resguardo Ríos Muco y Guarrojo"
                    sx={{
                      color: "white",
                      pr: 3,
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  marginLeft: 1,
                  borderLeft: "3px solid #0C453A",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Resguardo Ríos Muco y Guarrojo"
                    sx={{
                      color: "white",
                      pr: 3,
                    }}
                  />
                </ListItemButton>
              </ListItem>
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
            <ExpandMore sx={{ color: "white" }} />
          ) : (
            <ArrowForwardIos sx={{ color: "white", fontSize: 16 }} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openEducando} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listEducando.map((text, index) => (
            <ListItem
              key={text}
              sx={{
                marginLeft: 1.5,
                borderLeft: "3px solid #0C453A",
                borderTop: index === 0 ? "3px solid #0C453A" : "none",
              }}
            >
              <ListItemButton>
                <ListItemText
                  primary={text}
                  sx={{
                    color: "white",
                    pr: 2,
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
      ].map((text) =>
        text === "Modalidad de juego" ? (
          <>
            {" "}
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpenGameMode((prevOpen) => !prevOpen);
                  openConocimiento && setOpenConocimiento(false);
                  openDivision && setOpenDivision(false);
                  navigate("/Educando");
                }}
              >
                <ListItemText
                  id="gameMode"
                  primary={text}
                  sx={{ color: "white" }}
                />
                {OpenGameMode ? (
                  <ExpandMore sx={{ color: "white" }} />
                ) : (
                  <ArrowForwardIos sx={{ color: "white", fontSize: 16 }} />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={OpenGameMode} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {listGameMode.map((text, index) => (
                  <ListItem
                    key={text}
                    sx={{
                      marginLeft: 1.5,
                      borderLeft: "3px solid #0C453A",
                      borderTop: index === 0 ? "3px solid #0C453A" : "none",
                    }}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={text}
                        sx={{
                          color: "white",
                          pr: 2,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </>
        ) : (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        )
      )}
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
      <ListItem key={"Redes sociales"} sx={{ marginBottom: 5 }} disablePadding>
        <ListItemButton>
          <ListItemText primary="Redes sociales" sx={{ color: "white" }} />
        </ListItemButton>
      </ListItem>
    </List>
  );

  const container =
    windowMovil !== undefined ? () => windowMovil().document.body : undefined;
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
      window.scrollTo(0, 0);

      break;
    case "/conocimiento/ubicacion":
      window.scrollTo(0, 0);

      break;
    case "/conocimiento/historia":
      window.scrollTo(0, 0);

      break;
    case "/conocimiento/flora":
      window.scrollTo(0, 0);

      break;
    case "/conocimiento/fauna":
      window.scrollTo(0, 0);

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
              width: `100%`,
              height: "100%",
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
              marginLeft={{ sm: ["21%"], xs: ["0"] }}
              marginTop={{ xs: "0.7rem" }}
              fontFamily="Inika"
              fontWeight={700}
              fontSize={{ sm: "3.5rem", xs: "3rem" }}
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
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
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
