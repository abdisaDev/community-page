import { Box, Divider } from "@mui/material";
import Account from "./account";
import Content from "./content";
import ActionBar from "./action-bar";
import posts from "../../../src/posts.json";
import Comment from "../comment";
import useStore from "../../hooks/useStore";

function Posts() {
  const { replies } = useStore();

  return (
    <>
      {posts.map((post, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 1,
          }}
        >
          <Account
            accountDetail={{ name: post.author.name, time: post.time }}
            image={{ path: post.author.image.path, alt: post.author.image.alt }}
          />
          <Content
            text={post.text}
            image={{ path: post.image.path, alt: post.image.alt }}
          />
          <ActionBar
            postId={index}
            like={post.actions.like}
            view={post.actions.view}
            share={post.actions.share}
            comments={post.comments.length}
          />
          {replies.show && post.id === replies.postId && (
            <Box>
              <Comment comments={post.comments} />
            </Box>
          )}
          <Box my={4}>
            <Divider />
          </Box>
        </Box>
      ))}
    </>
  );
}

export default Posts;
