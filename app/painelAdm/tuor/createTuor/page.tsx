import { Box } from "@chakra-ui/react";
import { FormCreateTuor } from "./formCreateTuor";

export default function CreateTuorPage() {
  return (
    <Box
      w="full"
      minH="full"
      p={4}
      bg="#fff"
      rounded="2xl"
      shadow="lg"
      overflowY="scroll"
    >
      <FormCreateTuor />
    </Box>
  );
}
