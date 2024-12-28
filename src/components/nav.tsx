import { Flex, IconButton } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Nav() {
  return (
    <Flex
      as="header"
      position="fixed"
      w="100%"
      bg="blue.1/1"
      justify="flex-end"
      p="8px"
    >
      <ColorModeButton />
    </Flex>
  );
}
