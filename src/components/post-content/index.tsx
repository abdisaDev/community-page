import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import ImageUploader from "react-images-upload";
import useStore from "../../hooks/useStore";
import CommentTextArea from "../comment/text-area";

function PostContent() {
  const [pictures, setPictures] = useState([]);

  const { displayPost, setDisplayPost } = useStore();

  return (
    <Box width="40%">
      <Dialog
        open={displayPost}
        onClose={() => {
          setDisplayPost(false);
        }}
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">New Post</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              onChange={(_, pictureDataURLs) => {
                setPictures(pictureDataURLs);
              }}
              imgExtension={[".jpg", ".gif", ".png"]}
              maxFileSize={5242880}
            />
            <CommentTextArea type="post" />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDisplayPost(false);
            }}
            variant="contained"
            disableElevation
            fullWidth
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PostContent;
