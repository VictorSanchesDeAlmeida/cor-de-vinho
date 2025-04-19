import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";

const CardHeader = () => {
  return (
    <Box backgroundColor="#eeeeee" rounded="4xl">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4FX_A2f4SvPjYjbjBolRiqe8lrmxWzav8g&s"
        w="100%"
        h="200px"
        objectFit="cover"
        roundedTop="4xl"
      />
      <Box
        maxW="80%"
        mx="auto"
        my={4}
        backgroundColor="#323232"
        rounded="full"
        p={2}
      >
        <Text fontSize={14} textAlign="center">
          EXCEED GAMES PARK - LIGHT
        </Text>
      </Box>
      <Grid templateRows="repeat(5, 1fr)" gap={4}>
        <Box px={10}>
          <Flex justifyContent="space-between" color="black">
            <Text>Adulto</Text>
            <Text>Adulto</Text>
            <Text>Adulto</Text>
          </Flex>
        </Box>
        <Box px={10}>
          <Flex justifyContent="space-between" color="black">
            <Text>Adulto</Text>
            <Text>Adulto</Text>
            <Text>Adulto</Text>
          </Flex>
        </Box>
        <Box px={10}>
          <Flex justifyContent="space-between" color="black">
            <Text>Adulto</Text>
            <Text>Adulto</Text>
            <Text>Adulto</Text>
          </Flex>
        </Box>
        <Box px={10}>
          <Flex justifyContent="space-between" color="black">
            <Text>Adulto</Text>
            <Text>Adulto</Text>
            <Text>Adulto</Text>
          </Flex>
        </Box>
        <Box px={10}>
          <Flex justifyContent="space-between" color="black">
            <Text>Adulto</Text>
            <Text>Adulto</Text>
            <Text>Adulto</Text>
          </Flex>
        </Box>
      </Grid>
      <Box my={4} textAlign="center">
        <Button
          rounded="2xl"
          backgroundColor="#ceff71"
          shadow="sm"
          _hover={{ backgroundColor: "#a0cd4b" }}
        >
          <Text>Escolha uma data</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default CardHeader;
