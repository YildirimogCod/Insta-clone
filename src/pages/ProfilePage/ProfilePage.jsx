import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import { Container } from "@chakra-ui/react";
import ProfilePosts from "../../components/Profile/ProfilePosts";

export default function ProfilePage() {
  return (
    <Container maxW="container.lg" py={7}>
      <ProfileHeader />
      <ProfileTabs />
      <ProfilePosts />
    </Container>
  );
}
