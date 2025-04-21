import { Box, Flex, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import { TableTour } from "./tableTour";
import { SearchTour } from "./searchTour";

export default async function TourPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const param = await searchParams;
  const page = (param.page ?? 1) as number;

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
              <SearchTour />
              <Link
                bg="#a6ce39"
                px={8}
                py={4}
                href="/painelAdm/Tour/createTour"
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
        <TableTour currentPage={page} />
      </Stack>
    </Box>
  );
}
