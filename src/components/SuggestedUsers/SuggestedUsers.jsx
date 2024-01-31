import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested For You
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"white"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser name="Halil Acar" avatar="/other1.jpg" followers={233} />
      <SuggestedUser name="John Cena" avatar="/other2.jpg" followers={412} />
      <SuggestedUser
        name="Ali Yıldırım"
        avatar="/other3.jpg"
        followers={1332}
      />

      <Box fontSize={12} color={"gray.500"} mt={5}>
        @2024 Build by Oğuzhan Yıldırım
      </Box>
    </VStack>
  );
}
