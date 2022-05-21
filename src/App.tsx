import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./App.css";
import drawer from "./menu/drawer";
import { Container } from "./utils/Container";
import Intro from "./pages/Introduccion";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { StarBorder, ExpandMore, ExpandLess } from "@mui/icons-material";
import { ListItemIcon, Collapse } from "@mui/material";

const drawerWidth = 260;

export const App = ({ window }: { window?: () => Window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#072E26" }}>
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
          component="nav"
          sx={{
            width: drawerWidth,
            backgroundColor: "#072E26",
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

          <ListItemButton sx={{ backgroundColor: "#0D5043" }}>
            <ListItemText primary={"Introducción"} sx={{ color: "white" }} />
          </ListItemButton>
          <ListItem key={"Conociendo"} disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Conociendo" sx={{ color: "white" }} />
              {open ? (
                <ExpandLess sx={{ color: "white" }} />
              ) : (
                <ExpandMore sx={{ color: "white" }} />
              )}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Ubicación" sx={{ color: "white" }} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Hsitoria" sx={{ color: "white" }} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="FLora" sx={{ color: "white" }} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Fauna" sx={{ color: "white" }} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary="Problemática actual"
                  sx={{ color: "white" }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  primary="Resguardos indígenas"
                  sx={{ color: "white" }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  sx={{ color: "white" }}
                  primary="División politico territorial de los resguardos firmantes del convenio"
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Ubicación" sx={{ color: "white" }} />
              </ListItemButton>
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
          {["Team", "Redes sociales"].map((text, index) => (
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
        </List>
        <Container
          drawerWidth={drawerWidth}
          page="introduccion"
          Element={Intro}
        />
      </Box>
    </>
  );
};

export default App;
