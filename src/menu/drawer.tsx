import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Collapse, ListItemIcon } from "@mui/material";
import { StarBorder, ExpandLess, ExpandMore } from "@mui/icons-material";
import * as React from "react";

const secOne = ["Introducción", "Conociendo", "Educando"];

let open = false;

const setOpen = (value: boolean) => {
  open = value;
};

const handleClick = () => {
  setOpen(!open);
};

const drawer = (
  <div
    style={{
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

    <List>
      <ListItem key={"Introducción"} disablePadding>
        {window.location.pathname.includes("/Introducc") ? (
          <ListItemButton sx={{ backgroundColor: "#0D5043" }}>
            <ListItemText primary={"Introducción"} sx={{ color: "white" }} />
          </ListItemButton>
        ) : (
          <ListItemButton>
            <ListItemText primary={"Introducción"} sx={{ color: "white" }} />
          </ListItemButton>
        )}
      </ListItem>
      <ListItem key={"Conociendo"} disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </ListItem>
    </List>

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
    <List>
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
    </List>
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
    <List>
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
    </List>
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
    <List>
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
  </div>
);

export default drawer;
