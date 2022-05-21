import Box from "@mui/material/Box";

//@ts-ignore
export const Container = ({
  drawerWidth,
  page,
  Element,
}: {
  drawerWidth: number;
  page: string;
  Element: JSX.Element;
}) => {
  return (
    <>
      <Box
        component="main"
        sx={{
          display: { xs: "none", sm: "block" },
          width: "100%",
          flexGrow: 1,
          background:
            "linear-gradient(97.52deg, #002F46 12.98%, #106756 71.35%);",
          color: "#37C7AB",
          overflow: "hidden",
        }}
      ></Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          background:
            "linear-gradient(97.52deg, #002F46 12.98%, #106756 71.35%);",
          color: "#37C7AB",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            marginTop: { sm: 17 },
            paddingLeft: { sm: "78px" },
            p: 3,
            height: "100%",
            backgroundImage: "url(img/rios.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          component={"div"}
        >
          {Element}
        </Box>
      </Box>
    </>
  );
};
