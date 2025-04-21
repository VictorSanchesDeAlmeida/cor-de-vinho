import { Box } from "@chakra-ui/react";
import { FormCreateTour } from "./formCreateTour";

export default function CreateTourPage() {
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
      <FormCreateTour />
    </Box>
  );
}
