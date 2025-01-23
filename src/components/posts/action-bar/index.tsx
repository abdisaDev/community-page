import { Box, Button, Typography } from "@mui/material";
import {
  Comment as CommentIcon,
  RemoveRedEye as RemoveRedEye,
  ThumbUp as ThumbUpIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import { PostActionParam } from "../../../utils/types";
import useStore from "../../../hooks/useStore";

function ActionBar(params: PostActionParam) {
  const { replies, setReplies } = useStore();

  console.log(replies);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Button>
          <ThumbUpIcon />
          <Typography>&ensp;{params.like}</Typography>
        </Button>
        <Button
          variant="text"
          onClick={() =>
            setReplies({ show: !replies.show, postId: params.postId })
          }
        >
          <CommentIcon />
          <Typography>&ensp;{params.comments}</Typography>
        </Button>
      </Box>
      <Box>
        <Button disabled>
          <RemoveRedEye />
          <Typography>&ensp;{params.view}</Typography>
        </Button>
        <Button variant="text">
          <ShareIcon />
          <Typography>&ensp;{params.share}</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default ActionBar;
