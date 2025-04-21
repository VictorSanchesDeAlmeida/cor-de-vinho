import {
  Box,
  Stack,
  Link as ChakraLink,
  Flex,
  Text,
  Image,
  For,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { LogoutButton } from "../logout-button";
import { FaBusAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <Box h="full" width="350px" rounded="2xl" shadow="lg" bg="#851732" p={4}>
      <Stack h="full" justifyContent="space-between">
        <ChakraLink as={Link} href="/">
          <Image w={150} mx="auto" src="/logo.png" alt="Logo do site" />
        </ChakraLink>
        <Stack mb="auto">
          <For each={navLinksAdm}>
            {({ link, icon: Icon, label }) => (
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
            )}
          </For>
        </Stack>
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
    link: "/painelAdm/tour",
    icon: () => <FaBusAlt />,
  },
];

export default SideBar;
