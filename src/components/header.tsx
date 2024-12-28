import { VStack, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <VStack py={16} bg="#D9EAFD">
      <Heading size="3xl">旅の本棚</Heading>
      <Text>
        旅の本を紹介しながら、関連する旅の魅力を伝えるブログをnoteから選びました。
      </Text>
    </VStack>
  );
}
