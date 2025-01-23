import { Box, Button, Typography } from "@mui/material";
import useStore from "../../hooks/useStore";

function AppBar() {
  const { setDisplayPost } = useStore();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
            Feeds
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography>Recents</Typography>
          <Typography>Friends</Typography>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              setDisplayPost(true);
            }}
          >
            Post
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AppBar;
