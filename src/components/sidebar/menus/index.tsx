import { Box, Button } from "@mui/material";

const menus = ["News Feed", "Message", "Forum", "Friends", "Media", "Setting"];
function SideBarMenus() {
  return (
    <Box>
      {menus.map((menu, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 2,
          }}
        >
          <Button
            variant={index === 0 ? "contained" : "text"}
            fullWidth
            disableElevation
            color={index === 0 ? "primary" : "info"}
          >
            {menu}
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default SideBarMenus;
