import Box from "@mui/material/Box";

//@ts-ignore
export const Container = ({
  drawerWidth,
  page,
  Element,
}: {
  drawerWidth: number;
  page: string;
  Element: () => JSX.Element;
}) => {
  return (
    <>
      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          flexGrow: 1,
          background:
            "linear-gradient(97.52deg, #002F46 12.98%, #106756 71.35%);",
          color: "#37C7AB",
          height: "80em",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            marginTop: { sm: 16 },
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
          {/*  {page === "introduccion" && <Intro />} */}
          {Element()}
        </Box>
      </Box>
    </>
  );
};
