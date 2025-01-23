import { Box, Typography } from "@mui/material";

function UserProfile() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        }}
      >
        <Box sx={{ width: "120px", borderRadius: "50%" }}>
          <img
            src="https://avatars.githubusercontent.com/u/139908919?v=4"
            alt="abdisa"
            width="100%"
            style={{ borderRadius: "inherit" }}
          />
        </Box>
        <Box textAlign="center">
          <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
            Abdisa Dev
          </Typography>
          <Typography>@abdisaDev</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UserProfile;
