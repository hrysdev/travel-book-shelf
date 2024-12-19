import { Center, Text, Separator, Container } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container maxW="2xl">
      <Separator />
      <Center>
        <Text>&copy; 2024 HrysDev</Text>
      </Center>
    </Container>
  );
}
