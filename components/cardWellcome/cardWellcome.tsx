import { Box, Text } from "@chakra-ui/react";

const CardWellcome = ({userName}: {userName: string}) => {

  return (
    <Box w="full" minH={20} bg="white" rounded="xl" p={6} shadow="sm">
      <Text color="black" fontSize={20} fontWeight="medium">
        Seja bem vindo,
      </Text>
      <Text color="black" fontSize={26} fontWeight="semibold">
        {userName}
      </Text>
    </Box>
  );
};

export default CardWellcome;