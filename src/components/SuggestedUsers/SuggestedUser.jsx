import {
  Avatar,
  Flex,
  Text,
  Link,
  VStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
export default function SuggestedUser({ name, avatar, followers }) {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar size={"lg"} src={avatar} />
        <VStack spacing={2} alignItems={"flex-start"}>
          {" "}
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers} Followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        fontWeight={"medium"}
        bg={"transparent"}
        h={"max-content"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
}
