import { Box, Text } from "@chakra-ui/react";


const AboutText = ({title, text}: {title: string, text: string}) => {
  return (
    <Box>
      <Text
        color="#821632"
        textAlign="center"
        fontSize={28}
        fontWeight="bold"
        mb={4}
      >
        {title}
      </Text>
      <Text color="black" textAlign="justify">
        {text}
      </Text>
    </Box>
  );
};

export default AboutText;
