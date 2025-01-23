import { Box } from "@mui/material";
import SideBar from "./components/sidebar";
import AppBar from "./components/appbar";
import Posts from "./components/posts";
import PostContent from "./components/post-content";

function App() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", mx: "auto" }}>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          width="40%"
          sx={{
            m: 5,
            display: "flex",
            flexDirection: "column",
            rowGap: 5,
          }}
        >
          <AppBar />
          <Box sx={{ overflowY: "auto", height: "90vh", px: 2 }}>
            <Posts />
          </Box>
        </Box>
      </Box>
      <PostContent />
    </Box>
  );
}

export default App;
