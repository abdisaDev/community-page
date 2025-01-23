import { Box, TextField } from "@mui/material";

function CommentTextArea(params: { type: "comment" | "post" }) {
  return (
    <Box>
      <TextField
        placeholder={
          params.type === "comment"
            ? "Put Your Comment Here"
            : "Put Caption Here"
        }
        multiline
        rows={5}
        fullWidth
      />
    </Box>
  );
}

export default CommentTextArea;
