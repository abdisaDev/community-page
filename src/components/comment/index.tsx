import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CommentTextArea from "./text-area";
import CommentActionBar from "./action-bar";
import { Comment as CommentType } from "../../utils/types";
import Account from "../posts/account";
import { Reply } from "@mui/icons-material";

function Comment(props: { comments: CommentType[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 1,
      }}
    >
      {props.comments.map((comment, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 5,
              my: 2,
            }}
          >
            <Box>
              <Account
                accountDetail={{
                  name: comment.author.name,
                  time: comment.time,
                }}
                image={{
                  path: comment.author.image.path,
                  alt: comment.author.image.alt,
                }}
              />
              <Typography sx={{ my: 1, mx: 8 }}>{comment.text}</Typography>
            </Box>
            <Box>
              <Tooltip title="reply" arrow>
                <IconButton color="primary">
                  <Reply />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          {comment.replies.map((reply, index) => (
            <Box key={index} sx={{ pl: 15 }}>
              <Account
                accountDetail={{
                  name: reply.author.name,
                  time: reply.time,
                }}
                image={{
                  path: reply.author.image.path,
                  alt: reply.author.image.alt,
                }}
              />
              <Typography sx={{ my: 1, mx: 8 }}>{reply.text}</Typography>
            </Box>
          ))}
        </Box>
      ))}
      <CommentTextArea type="comment" />
      <Box sx={{ alignSelf: "end" }}>
        <CommentActionBar />
      </Box>
    </Box>
  );
}

export default Comment;
