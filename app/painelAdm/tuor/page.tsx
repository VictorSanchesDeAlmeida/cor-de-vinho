import { Box, Flex, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import { TableTuor } from "./tableTuor";
import { SearchTuor } from "./searchTuor";

export default function TuorPage() {
  return (
    <Box w="full" h="full" p={4}>
      <Stack gap={8}>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Text color="black" fontSize={30} fontWeight="semibold">
              Passeios
            </Text>
            <Text color="black" fontSize={20}>
              Gerencie os passeios cadastrados na plataforma
            </Text>
          </Box>
          <Box>
            <Flex alignItems="center" gap={8}>
              <SearchTuor />
              <Link
                bg="#a6ce39"
                px={8}
                py={4}
                href="/painelAdm/tuor/createTuor"
              >
                <Text fontSize={18} fontWeight="bold" color="#f4f4f4">
                  Novo Passeio
                  <Icon ml={2}>
                    <FiPlusCircle />
                  </Icon>
                </Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
        <TableTuor />
      </Stack>
    </Box>
  );
}
