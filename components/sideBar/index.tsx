import { Box, Stack, Link, Flex, Icon, Text, HStack } from "@chakra-ui/react";
import { MdTour } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

const SideBar = () => {
  return (
    <Box h="full" width="350px" rounded="2xl" shadow="lg" bg="#851732" p={4}>
      <Stack>
        {navLinksAdm.map((item, i) => (
          <Link href={item.link} key={i} _hover={{textDecoration: "none"}}>
            <Box _hover={{backgroundColor: "#9f4057"}} w="full" p={2} rounded="lg">
              <Flex alignItems="center" gap={4}>
                <Icon>
                  <item.icon />
                </Icon>
                <Text fontSize="xl">{item.label}</Text>
              </Flex>
            </Box>
          </Link>
        ))}
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
