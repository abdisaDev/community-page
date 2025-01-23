import { Box, Typography } from "@mui/material";
import { PostAccountParam } from "../../../utils/types";

function Account(params: PostAccountParam) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: 2,
      }}
    >
      <Box sx={{ width: "50px", borderRadius: "50%" }}>
        <img
          src={params.image.path}
          alt={params.image.alt}
          width="100%"
          style={{ borderRadius: "inherit" }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
          {params.accountDetail.name}
        </Typography>
        <Typography variant="body2">{params.accountDetail.time}</Typography>
      </Box>
    </Box>
  );
}

export default Account;
