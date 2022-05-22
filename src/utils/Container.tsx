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
    <Box
      id="container"
      component="main"
      sx={{
        width: "100%",
        flexGrow: 1,
        background:
          "linear-gradient(97.52deg, #002F46 12.98%, #106756 71.35%);",
        color: "#37C7AB",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative" }} component={"div"}>
        {Element}
      </Box>
    </Box>
  );
};
