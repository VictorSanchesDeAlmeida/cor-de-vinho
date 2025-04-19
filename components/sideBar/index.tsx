import {
  Box,
  Stack,
  Link as ChakraLink,
  Flex,
  Text,
  Image,
  For,
  Separator,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdTour } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { LogoutButton } from "../logout-button";

const SideBar = () => {
  return (
    <Box h="full" width="350px" rounded="2xl" shadow="lg" bg="#851732" p={4}>
      <Stack>
        <ChakraLink asChild>
          <Link href="/">
            <Image w={150} mx="auto" src="/logo.png" />
          </Link>
        </ChakraLink>
        <For each={navLinksAdm}>
          {({ link, icon: Icon, label }) => (
            <ChakraLink asChild _hover={{ textDecoration: "none" }}>
              <Link href={link} key={link}>
                <Box
                  _hover={{ backgroundColor: "#9f4057" }}
                  w="full"
                  p={2}
                  rounded="lg"
                >
                  <Flex alignItems="center" gap={4}>
                    <Icon />
                    <Text fontSize="xl">{label}</Text>
                  </Flex>
                </Box>
              </Link>
            </ChakraLink>
          )}
        </For>
        <Separator />
        <LogoutButton />
      </Stack>
    </Box>
  );
};

const navLinksAdm = [
  {
    label: "Dashboar",
    link: "/painelAdm",
    icon: () => <MdDashboard />,
  },
  {
    label: "Passeios",
    link: "/painelAdm/passeios",
    icon: () => <MdTour />,
  },
];

export default SideBar;
