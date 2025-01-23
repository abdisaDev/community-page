import { Box } from "@mui/material";
import UserProfile from "./user-profile";
import SideBarMenus from "./menus";

function SideBar() {
  return (
    <Box
      sx={{
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <UserProfile />
      <SideBarMenus />
    </Box>
  );
}

export default SideBar;
