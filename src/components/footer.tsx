import { Text, VStack, HStack, Link, For, Icon } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export default function Header() {
  const socialLinks = [
    {
      href: "#",
      icon: <FaXTwitter />,
    },
    {
      href: "#",
      icon: <SiGithub />,
    },
  ];

  return (
    <VStack py="6">
      <HStack gap={3}>
        <For each={socialLinks}>
          {(socialLink, index) => (
            <Link key={index} href={socialLink.href}>
              <Icon>{socialLink.icon}</Icon>
            </Link>
          )}
        </For>
      </HStack>
      <Text>&copy; 2024 HrysDev</Text>
    </VStack>
  );
}
