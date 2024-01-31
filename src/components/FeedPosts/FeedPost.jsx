import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

export default function FeedPost({ username, img, avatar }) {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} borderRadius={3} overflow={"hidden"}>
        <Image src={img} alt="user profile pic" w={"full"} />
      </Box>
      <PostFooter username={username} />
    </>
  );
}
