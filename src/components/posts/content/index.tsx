import { Box, Typography } from "@mui/material";
import { PostContentParam } from "../../../utils/types";
function Content(params: PostContentParam) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
      <Box>
        <Typography sx={{ overflowWrap: "break-word" }}>
          {params.text}
        </Typography>
      </Box>
      <Box>
        <img
          src={params.image.path}
          alt={params.image.alt}
          width="100%"
          height="600px"
          style={{ borderRadius: "25px", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}

export default Content;
